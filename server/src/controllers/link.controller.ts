import { Request, Response } from "express";
import { generateShortLink } from "../helpers/link.helper";
import {
  createLinkInDatabase,
  findLinkInDatabase,
} from "../services/link.services";

export const createLink = async (req: Request, res: Response) => {
  try {
    const { originalUrl } = req.body;
    const shortUrl = await generateShortLink();
    const createdLink = await createLinkInDatabase(originalUrl, shortUrl);
    res.json(createdLink);
  } catch (error) {
    console.error("Error al crear el enlace:", error);
    res.status(500).json({ error: "Error al crear el enlace" });
  }
};

export const redirectShortLink = async (req: Request, res: Response) => {
  const shortUrl = `http://localhost:3000/${req.params.shortUrl}`;

  try {
    const link = await findLinkInDatabase(shortUrl);

    if (link) {
      res.redirect(link.originalUrl);
    } else {
      res.status(404).json({ message: "Enlace corto no encontrado" });
    }
  } catch (error) {
    console.error("Error al redirigir enlace corto:", error);
    res
      .status(500)
      .json({ message: "Error del servidor al redirigir enlace corto" });
  }
};
