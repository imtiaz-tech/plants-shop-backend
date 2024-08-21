import mongoose, { Schema } from "mongoose";
import Category from "./category";

const schema = new Schema({
  name: String,
  status: Boolean,
  price: Number,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  textEditor: String,
  sku: {
    type: String,
    index: true,
    unique: true,
  },
  quantity: Number,
  image: String,
});

const Product = mongoose.model("Product", schema);
export default Product;
