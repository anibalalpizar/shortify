import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);

    mongoose.connection.on("connected", () => {
      console.log("Connected to database");
    });

    mongoose.connection.on("error", (error) => {
      console.error("Error while connecting to database:", error);
    });
  } catch (error) {
    console.error("Error while connecting to database:", error);
  }
};
