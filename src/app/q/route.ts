import { NextApiResponse, NextApiRequest } from 'next';

export default async function GET(request: NextApiRequest, response: NextApiResponse) {
    return response.status(404).json({ message: "Enlace corto no encontrado" });
}