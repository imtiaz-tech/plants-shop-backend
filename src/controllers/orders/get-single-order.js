import Order from "../../models/order";

const getSingleOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Order.findOne({ _id: id })
    .populate("cart.productId")
    .populate("userId");
    return res.status(200).json({
      data,
      success: true,
      message: "Get Order Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getSingleOrder;
