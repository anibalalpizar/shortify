import { client } from "./axios";

export const shortenLinkRequest = async (originalUrl: string) =>
  await client.post("/api", { originalUrl });