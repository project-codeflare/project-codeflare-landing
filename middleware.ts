import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const access_token = request.cookies.get(`sb-access-token`);
  console.log(access_token);
  //   return NextResponse.redirect(new URL("/about-2", request.url));
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/home"],
};
