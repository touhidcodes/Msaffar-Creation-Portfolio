import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const blogs = await prisma.blog.findMany();
    return res.status(200).json(blogs);
  }

  if (req.method === "POST") {
    const { title, description, image, isFeatured, content } = req.body;
    try {
      const blog = await prisma.blog.create({
        data: { title, description, image, isFeatured, content },
      });
      return res.status(201).json(blog);
    } catch (error) {
      return res.status(500).json({ message: "Failed to create blog", error });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
