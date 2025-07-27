import mongoose from "mongoose";
import { NODE_ENV, DB_URI } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "Database URI is not defined in the environment variables inside .env<development/production>.local file."
  );
}

const connectToDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Connect to DB in ${NODE_ENV} mode`);
  } catch (error) {
    console.log("Error connecting to database:", error);
    process.exit(1);
  }
};

export default connectToDB;
