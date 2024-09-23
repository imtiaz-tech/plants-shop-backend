import Order from "../../models/order";
import moment from "moment";
const getDashboardDetails = async (req, res) => {
  try {
    // const {  } = req.query;
    const { startTime, endTime } = req.body;
    let filter = {};
    if(startTime && endTime){
        console.log("🚀 ~ getDashboardDetails ~ endTime:", endTime)
        console.log("🚀 ~ getDashboardDetails ~ startTime:", startTime)
        filter.createdAt = {
            $gte: startTime,
            $lt: endTime
        }
    }
   
    const data = await Order.find(filter);
    console.log("🚀 ~ getDashboardDetails ~ data:", data)
    return res.status(200).json({
      data,
      success: true,
      message: "Get Dashboard details Succesfully",
    });
  } catch (error) {
    console.log("🚀 ~ getDashboardDetails ~ error:", error)
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getDashboardDetails;
