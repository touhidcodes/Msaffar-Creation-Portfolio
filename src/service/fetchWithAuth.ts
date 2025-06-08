"use client";

import { getCookies } from "./actions/getCookies";

export async function fetchWithAuth(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  const token = await getCookies();

  if (!token) {
    throw new Error("Unauthorize access!");
  }

  options.headers = {
    ...options.headers,
    Authorization: token,
    "Content-Type": "application/json",
  };

  const response = await fetch(url, {
    ...options,
    credentials: "include",
  });

  return response;
}
