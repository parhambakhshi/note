import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
 console.log("MongoDB URI:", process.env.MONGODBURL);
const connectDB = async () => {
  try {
   

    await mongoose.connect(process.env.MONGODBURL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1); // Exit with failure
  }
};

export default connectDB;
