import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  billingDetails: {
    firstName: String,
    lastName: String,
    address: String,
    apartmentAddress: String,
    city: String,
    state: String,
    postCode: Number,
    phoneNumber: Number,
    email: String,
    notes: String,
  },
  status: {
    type: String,
    default: "Pending",
  },
  comments: String,
  cart: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
      quantity: Number,
      unitPrice: Number,
    },
  ],
});
const Order = mongoose.model("Order", schema);
export default Order;
