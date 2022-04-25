import { Prisma, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const contacts: Prisma.contactsCreateInput = JSON.parse(req.body);
    const savedContacts = await prisma.contacts.create({ data: contacts });
    res.status(200).json(savedContacts);
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};
