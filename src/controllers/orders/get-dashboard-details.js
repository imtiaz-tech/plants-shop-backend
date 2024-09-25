import Order from "../../models/order";
import moment from "moment";
import Product from "../../models/product";
import Users from "../../models/users";

const getDashboardDetails = async (req, res) => {
  try {
    const { startTime, endTime } = req.body;
    let filter = {};
    if (startTime && endTime) {
      filter.createdAt = {
        $gte: startTime,
        $lt: endTime,
      };
    }
    const orderCount = await Order.countDocuments({
      createdAt: {
        $gte: moment(startTime),
        $lte: moment(endTime),
      },
    });
    const productCount = await Product.countDocuments({
        createdAt: {
          $gte: moment(startTime),
          $lte: moment(endTime),
        },
      });
      const customerCount = await Users.countDocuments({
        createdAt: {
          $gte: moment(startTime),
          $lte: moment(endTime),
        },
      });
    const orderSalesCount = await Order.aggregate([
      { $match: { createdAt: { $gte: new Date(startTime), $lt: new Date(endTime) } } },
      { $unwind: "$cart" },
      {
        $project: {
          totalSaleAmount: { $multiply: ["$cart.unitPrice", "$cart.quantity"] },
        },
      },
      {
        $group: {
          _id: null,
          totalSales: { $sum: "$totalSaleAmount" },
        },
      },
    ]);
    const orderProductCount = await Order.aggregate([
        { $match: { createdAt: { $gte: new Date(startTime), $lt: new Date(endTime) } } },
        { $unwind: "$cart" },
        {
          $project: {
            totalProduct: { $sum: [ "$cart.quantity"] },
          },
        },
        {
          $group: {
            _id: null,
            totalProduct: { $sum: "$totalProduct" },
          },
        },
      ]);
    const average = orderSalesCount[0]?.totalSales/orderCount;
    const averageItemSale = orderSalesCount[0]?.totalSales/orderProductCount[0]?.totalProduct;
    
    return res.status(200).json({
      averageItemSale,
      customerCount,
      productCount,
      average,
      orderCount,
      orderSalesCount,
      success: true,
      message: "Get Dashboard details Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getDashboardDetails;
