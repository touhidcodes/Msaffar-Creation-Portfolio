import type { NextApiRequest, NextApiResponse } from "next";
import { getCookie } from "cookies-next";
import { verifyToken } from "@/lib/jwt";
import { getCookies } from "@/service/actions/getCookies";

interface JwtPayload {
  userId: string;
  email: string;
  username: string;
}

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const token = await getCookies();
  console.log(token);

  if (!token) return res.status(401).json({ user: null });

  try {
    const result = verifyToken(token as string) as JwtPayload;
    return res.status(200).json({ user: result });
  } catch (err) {
    return res.status(400).json({ user: null });
  }
}
