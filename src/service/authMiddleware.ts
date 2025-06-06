"use server";

import { verifyToken } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";

interface JwtPayload {
  [key: string]: any;
}

export async function authenticateRequest(req: NextRequest) {
  const token = req.headers.get("authorization");
  console.log(token);

  if (!token) {
    return NextResponse.json(
      { message: "No token provided!" },
      { status: 401 }
    );
  }

  const user = verifyToken(token) as JwtPayload;

  if (!user) {
    return NextResponse.json(
      { message: "Unauthorized access!" },
      { status: 401 }
    );
  }
  console.log(user);

  return NextResponse.json({ message: "Authenticated", user });
}
