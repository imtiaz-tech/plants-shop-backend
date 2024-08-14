import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
  review: String,
  image: String,
  availability: Boolean,
});

const Product = mongoose.model("Product", schema);
export default Product;
