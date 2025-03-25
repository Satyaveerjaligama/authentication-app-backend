import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbUri = process.env.DB_URI || "";

export const dbConnection = async () => {
  try {
    await mongoose.connect(dbUri);
    console.log("Established connected with DB");
  } catch (err) {
    console.error("Failed to connect with DB", err);
  }
};
