import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This middleware runs before every request
export function middleware(request: NextRequest) {
  // Add custom headers or perform checks here
  const response = NextResponse.next();

  // Example: Add custom header
  response.headers.set("x-custom-header", "valentiny4u-lovememo");

  return response;
}

// Configure which paths the middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
