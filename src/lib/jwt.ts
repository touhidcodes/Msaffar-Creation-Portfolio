import jwt from "jsonwebtoken";

const NEXT_PUBLIC_JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET!;

export function generateToken(payload: object) {
  return jwt.sign(payload, NEXT_PUBLIC_JWT_SECRET, { expiresIn: "1d" });
}

export function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET!);
    return decoded;
  } catch (error) {
    return { error: "Invalid or expired token" };
  }
}

export function signJwtToken(payload: object) {
  return jwt.sign(payload, NEXT_PUBLIC_JWT_SECRET, { expiresIn: "7d" });
}
