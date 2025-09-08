import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL)
    console.log("Connected to Mongo DB successfully");
  } catch (error) {
    console.log("Error while connecting to Mongo DB");
    process.exit(1)
  }
}
export default connectDB