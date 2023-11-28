import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URL =process.env.DATABASE_URL;

export const dbConnect = async () => {
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("database connected Successfully");
  } catch (error) {
    console.log(error.message);
  }
};
