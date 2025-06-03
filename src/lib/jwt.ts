import jwt from "jsonwebtoken";

const NEXT_PUBLIC_JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET!;

export function generateToken(payload: object) {
  return jwt.sign(payload, NEXT_PUBLIC_JWT_SECRET, { expiresIn: "1d" });
}

export function verifyToken(token: string) {
  return jwt.verify(token, NEXT_PUBLIC_JWT_SECRET);
}

export function signJwtToken(payload: object) {
  return jwt.sign(payload, NEXT_PUBLIC_JWT_SECRET, { expiresIn: "7d" });
}
