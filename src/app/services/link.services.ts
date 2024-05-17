import { prisma } from "@/lib/prisma";

export const createLinkInDatabase = async (
  originalUrl: string,
  shortUrl: string
) => {
  try {
    const createdLink = await prisma.link.create({
      data: {
        originalUrl,
        shortUrl,
      },
    });
    return createdLink;
  } catch (error) {
    throw new Error("Errror while creating link in database");
  }
};

export const findLinkInDatabase = async (shortUrl: string) => {
  try {
    const link = await prisma.link.findUnique({
      where: {
        shortUrl,
      },
    });
    return link;
  } catch (error) {
    throw new Error("Error while finding link in database");
  }
};
