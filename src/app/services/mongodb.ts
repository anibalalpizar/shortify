import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
      throw new Error("DATABASE_URL is not defined");
    }

    await mongoose.connect(dbUrl);

    mongoose.connection.on("connected", () => {
      console.log("Connected to database");
    });

    mongoose.connection.on("error", (error) => {
      console.error("Error while connecting to database:", error);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Disconnected from database");
    });
  } catch (error) {
    console.error("Error while connecting to database:", error);
  }
};
