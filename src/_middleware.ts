import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("jwt");

  // Define public routes to exclude from middleware checks
  const publicPaths = ["/login", "/signup", "/about"];

  // Exclude public routes from middleware checks
  if (publicPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
