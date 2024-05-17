import { NextResponse } from "next/server";
import { generateShortLink } from "@/app/helpers/link.helper";
import { createLinkInDatabase } from "@/app/services/link.services";

export async function POST(request: Request) {
  const { originalUrl } = await request.json();
  const shortUrl = await generateShortLink();
  const createdLink = await createLinkInDatabase(originalUrl, shortUrl);
  return NextResponse.json(createdLink);
}
