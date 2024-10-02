import mongoose from "mongoose";
import fixture from "./fixture";
const { MONGO_URL, JWT_SECRET } = process.env;

console.log("🚀 ~ MONGO_URL 1:", MONGO_URL)
console.log("🚀 ~ JWT_SECRET 2:", JWT_SECRET)

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const setupDatabase = () => {
  if (
    mongoose.connection.readyState !== 1 ||
    mongoose.connection.readyState !== 2
  ) {
    mongoose
      .connect(MONGO_URL, options)
      .then(async () => {
        console.info("INFO - MongoDB Database connected.");
        await fixture();
      })
      .catch((err) =>
        console.log("ERROR - Unable to connect to the database:", err)
      );
  }
};

export default setupDatabase;
