import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// We intentionally "delete" legacy, dash-style pages that were previously rendered by a generic
// catch-all route (e.g. /auto-verkaufen-altes-auto). They caused thin/empty renders and SEO noise.
//
// IMPORTANT: We DO NOT block the official, slash-based routes like:
//   /auto-verkaufen/<case>
//   /auto-verkaufen/<case>/<city>
//   /autoankauf/<city>
//   /auto-verkaufen-sofort/<city>
//   /auto-verkaufen-heute/<city>

const ALLOWED_DASH_SEGMENTS = new Set([
  "auto-verkaufen-ohne-tuev",
  "auto-verkaufen-mit-motorschaden",
  "auto-verkaufen-unfallschaden",
  "auto-verkaufen-export",
  "auto-verkaufen-defektes-auto",
  "auto-verkaufen-bastlerfahrzeug",
  "auto-verkaufen-heute",
  "auto-verkaufen-sofort",
  "auto-verkaufen", // if someone uses /auto-verkaufen (not dash but keep safe)
]);

function isStaticAssetPath(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.includes(".")
  );
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (isStaticAssetPath(pathname)) return NextResponse.next();

  // Only target single-segment dash routes, e.g. /auto-verkaufen-altes-auto
  // Keep official nested routes intact.
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 1) {
    const seg = parts[0];

    // Delete unknown dash-style "auto-verkaufen-*" pages
    if (seg.startsWith("auto-verkaufen-") && !ALLOWED_DASH_SEGMENTS.has(seg)) {
      return new NextResponse("Gone", {
        status: 410,
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "no-store",
        },
      });
    }

    // Optional: If you later decide to delete dash-style /autoankauf-<stadt> duplicates,
    // enable the following block.
    // if (seg.startsWith('autoankauf-')) {
    //   return new NextResponse('Gone', { status: 410 });
    // }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
