import { verifyToken } from "@/lib/jwt";
import { getCookies } from "@/service/actions/getCookies";
import { NextRequest, NextResponse } from "next/server";

interface JwtPayload {
  userId: string;
  email: string;
  username: string;
}

export default async function GET(req: NextRequest, res: NextResponse) {
  try {
    const token = await getCookies();
    console.log("Token:", token);

    if (!token) {
      return NextResponse.json(
        { user: null, error: "No token!" },
        { status: 401 }
      );
    }

    const result = verifyToken(token as string) as JwtPayload;

    return NextResponse.json(
      { user: result, error: "User Found!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Token verification failed:", err);
    return NextResponse.json(
      { user: null, error: "Invalid token!" },
      { status: 400 }
    );
  }
}
