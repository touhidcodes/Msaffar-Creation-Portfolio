"use server";

import { cookies } from "next/headers";

export async function fetchWithAuth(
  url: string,
  options: RequestInit = {}
): Promise<any> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("No token found in cookies");
  }

  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
  };

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) throw new Error("Missing NEXT_PUBLIC_BASE_URL in env");

  const absoluteUrl = `${baseUrl}${url}`;

  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const response = await fetch(absoluteUrl, {
    ...options,
    credentials: "include",
  });
  console.log(response);
  const data = await response.json();
  console.log(data);

  return data;
}
