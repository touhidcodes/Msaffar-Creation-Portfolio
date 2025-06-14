import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/jwt";

const AuthRoutes = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  console.log(request.cookies.get("token")?.value);

  const { pathname } = request.nextUrl;

  const token = request.cookies.get("token")?.value;
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  // ✅ Allow public access to login/register
  if (AuthRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // ❌ If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const user: any = verifyToken(token);
    const userEmail = user?.email;
    console.log(user);

    // ✅ Allow dashboard only for admin
    if (pathname.startsWith("/dashboard")) {
      if (userEmail === adminEmail) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL("/", request.url)); // Forbidden users go to home
      }
    }

    // ✅ Allow other authenticated routes
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"],
};
