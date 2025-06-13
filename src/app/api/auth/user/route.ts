import { authenticateRequest } from "@/service/authMiddleware";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const user = await authenticateRequest(req);

    return NextResponse.json(
      { user: user, massage: "User Found!" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { user: null, error: "Invalid token!" },
      { status: 400 }
    );
  }
}
