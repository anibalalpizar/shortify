import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function connect(): Promise<void> {
  try {
    await prisma.$connect();
    console.log("Connected to the database.");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
}

async function disconnect(): Promise<void> {
  await prisma.$disconnect();
  console.log("Disconnected from the database.");
}

export { prisma, connect, disconnect };
