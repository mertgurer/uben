import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(request);

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin/dashboard")) {
    const sessionCookie = request.cookies.get("session")?.value;

    if (!sessionCookie) {
      console.error("No session cookie found");
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    const verifyRes = await fetch(
      `${request.nextUrl.origin}/api/verify-session`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionCookie }),
      }
    );

    if (!verifyRes.ok) {
      console.error("Session verification failed");
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
