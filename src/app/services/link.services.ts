import Link from "@/models/link";

export const createLinkInDatabase = async (
  originalUrl: string,
  shortUrl: string
) => {
  try {
    const createdLink = new Link({
      originalUrl,
      shortUrl,
    });
    await createdLink.save();
    return createdLink;
  } catch (error) {
    throw new Error("Error while creating link in database");
  }
};

export const findLinkInDatabase = async (shortUrl: string) => {
  try {
    const link = await Link.findOne({ shortUrl });
    return link;
  } catch (error) {
    throw new Error("Error while finding link in database");
  }
};
