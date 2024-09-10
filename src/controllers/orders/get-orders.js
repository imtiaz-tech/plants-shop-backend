import Order from "../../models/order";


const getOrders = async (req, res) => {
    try {
      const data = await Order.find();
      return res.status(200).json({
        data,
        success: true,
        message: "Get Orders Succesfully",
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  };
  
  export default getOrders;
  