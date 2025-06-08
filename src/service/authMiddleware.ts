"use server";

import { verifyToken } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";

interface JwtPayload {
  [key: string]: any;
}

export async function authenticateRequest(
  req: NextRequest
): Promise<JwtPayload | NextResponse> {
  const token = req.headers.get("Authorization");

  if (!token) {
    throw new Error("Unauthorized: No Authorization header found");
  }

  const user = verifyToken(token) as JwtPayload | null;

  if (!user) {
    throw new Error("Unauthorized: Invalid token");
  }

  return user;
}
