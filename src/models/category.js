import mongoose, { Schema } from "mongoose";
//table schema for category in database
//it has two fields name,status
const schema = new Schema(
  {
    name: {
      type: String,
      index: true,
      unique: true,
    },
    status: Boolean,
  },
  { timestamps: true }
);

const Category = mongoose.model("category", schema);
export default Category;
