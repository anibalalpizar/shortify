import { NextResponse } from "next/server";
import { findLinkInDatabase } from "@/app/services/link.services";
import { connectToDatabase } from "@/app/services/mongodb";

type Params = {
  id: string;
};

export async function GET(request: Request, { params }: { params: Params }) {
  await connectToDatabase();
  const shortUrl = `http://localhost:3000/api/some/${params.id}`;

  try {
    const link = await findLinkInDatabase(shortUrl);
    if (link) {
      return NextResponse.redirect(link.originalUrl);
    } else {
      return NextResponse.json(
        { message: "Enlace corto no encontrado" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error al redirigir enlace corto:", error);
    return NextResponse.json(
      { message: "Error del servidor al redirigir enlace corto" },
      { status: 500 }
    );
  }
}
