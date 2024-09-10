import Order from "../../models/order";

const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, status } = req.body;
    const data = await Order.updateOne(
      { _id: id },
      {
        name,
        status,
      }
    );
    return res.status(200).json({
        data,
        message: "Update Order Status Succesfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default updateOrderStatus;
