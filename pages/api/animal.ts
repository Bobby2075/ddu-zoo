import { NextApiRequest,NextApiResponse } from "next";
import { animals, prisma, PrismaClient } from "@prisma/client";

export default async function getanimalbyId(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient
    const animals: animals[] = await prisma.animals.findMany()

    res.json({animals})
}