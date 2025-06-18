"use server";

import { cookies } from "next/headers";

export async function deleteCookies() {
  const cookieStore = await cookies();

  // Remove the cookie named token
  cookieStore.delete("token");
}
