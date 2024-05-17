import { createLinkInDatabase } from "@/app/services/link.services";
import { NextResponse } from "next/server";
import { generateShortLink } from "../helpers/link.helper";
import { connectToDatabase } from "@/app/services/mongodb";

export async function POST(request: Request) {
  await connectToDatabase();
  const { originalUrl } = await request.json();
  const shortUrl = await generateShortLink();
  const createdLink = await createLinkInDatabase(originalUrl, shortUrl);
  return NextResponse.json(createdLink);
}
