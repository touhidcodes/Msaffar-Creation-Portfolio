import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (typeof id !== "string") {
    return res.status(400).json({ message: "Invalid ID" });
  }

  if (req.method === "GET") {
    const blog = await prisma.blog.findUnique({ where: { id } });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    return res.status(200).json(blog);
  }

  if (req.method === "PUT") {
    const { title, description, image, isFeatured, content } = req.body;
    try {
      const updatedBlog = await prisma.blog.update({
        where: { id },
        data: { title, description, image, isFeatured, content },
      });
      return res.status(200).json(updatedBlog);
    } catch (error) {
      return res.status(500).json({ message: "Failed to update blog", error });
    }
  }

  if (req.method === "DELETE") {
    try {
      await prisma.blog.delete({ where: { id } });
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ message: "Failed to delete blog", error });
    }
  }

  res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
