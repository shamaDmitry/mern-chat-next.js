import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/src/auth";
import { sidebarMenuItems } from "./components/dashboard/dashboard-sidebar";

const authPages = ["/login", "/signup"];

export async function middleware(request: NextRequest) {
  const session = await auth();

  const isAuthPage = authPages.includes(request.nextUrl.pathname);
  const isProtectedPage =
    sidebarMenuItems.filter((item) => item.href === request.nextUrl.pathname)
      .length > 0;

  if (isAuthPage && session) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (isProtectedPage && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
