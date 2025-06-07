"use server";

import { cookies } from "next/headers";

export async function getCookies() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  return token;
}
