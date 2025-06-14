import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

const AuthRoutes = ["/login", "/register"];

type JwtPayload = {
  userId: string;
  email: string;
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("token")?.value;
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  if (AuthRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const user = jwtDecode<JwtPayload>(token);
    const userEmail = user?.email;

    if (pathname.startsWith("/dashboard")) {
      if (userEmail === adminEmail) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"],
};
