import mongoose, { Schema } from "mongoose";


const schema = new Schema({
  user:String,
  product:String,
  quantity:Number,
  price:Number,
  address:String,
  status:String,
})
const Order = mongoose.model("Order",schema);
export default Order;