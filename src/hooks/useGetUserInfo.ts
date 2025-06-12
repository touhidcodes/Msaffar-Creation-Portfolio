import { verifyToken } from "../lib/jwt";
import { getCookie } from "cookies-next/client";

interface JwtPayload {
  userId: string;
  email: string;
  username: string;
}

export const getUserInfo = (): JwtPayload | null => {
  const token = getCookie("token");
  console.log(token);

  if (!token) return null;

  try {
    const result = verifyToken(token);

    return result as JwtPayload;
  } catch (err) {
    console.error("Invalid token:", err);
    return null;
  }
};
