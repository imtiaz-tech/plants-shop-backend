import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
    index: true,
    unique: true,
  },
  status: Boolean,
});

const Category = mongoose.model("category", schema);
export default Category;
