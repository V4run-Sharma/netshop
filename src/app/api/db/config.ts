import mongoose from "mongoose";

const mongodbUri = process.env.MONGO_URI || "";

export const connectDB = async () => {
  try {
    await mongoose.connect(mongodbUri, {
      dbName: "Netshop",
    });
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database", error);
    process.exit(1);
  }
};
