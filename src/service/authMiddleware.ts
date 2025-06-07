"use server";

import { verifyToken } from "@/lib/jwt";
import { NextRequest } from "next/server";

interface JwtPayload {
  [key: string]: any;
}

export async function authenticateRequest(
  req: NextRequest
): Promise<JwtPayload | null> {
  const token = req.headers.get("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return null;
  }

  const user = verifyToken(token) as JwtPayload;

  if (!user) {
    return null;
  }

  return user;
}
