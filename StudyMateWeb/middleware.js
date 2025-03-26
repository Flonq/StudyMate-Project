import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = request.cookies.get("token"); // JWT token kontrolü
  const isAuthPage =
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/register");

  if (!isLoggedIn && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isLoggedIn && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/register"],
};
