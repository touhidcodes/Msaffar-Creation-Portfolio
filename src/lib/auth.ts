"use server";

import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";

export const getAuthUser = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return null;

  const decoded = verifyToken(token);
  if (!decoded || typeof decoded !== "object") return null;

  const user = await prisma.user.findUnique({
    where: { username: decoded.username },
  });

  if (!user) return null;

  return {
    id: user.id,
    email: user.email,
    isAdmin: user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL,
  };
};
