import dotenv from "dotenv";

dotenv.config();

export const DATABASE_CONFIG = {
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
};

export const DATABASE_URI = process.env.DATABASE_URI;

export const PORT = process.env.SERVER_PORT || 3000;
