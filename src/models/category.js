import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: String,
    status:Boolean,
  });
  
  const Category = mongoose.model("category", schema);
  export default Category;