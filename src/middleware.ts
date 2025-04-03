import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { sidebarMenuItems } from "./components/dashboard/dashboard-sidebar";
import { getToken } from "next-auth/jwt";

const authPages = ["/login", "/signup"];

export async function middleware(request: NextRequest) {
  const currentUser = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
  });

  const isAuthenticated = !!currentUser;

  const isAuthPage = authPages.includes(request.nextUrl.pathname);
  const isProtectedPage =
    sidebarMenuItems.filter((item) => item.href === request.nextUrl.pathname)
      .length > 0;

  if (isAuthPage && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (isProtectedPage && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
