import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { pseoCases } from "./src/lib/pseo/pseoCases";
import { pseoCities } from "./src/lib/pseo/pseoCities";

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

const CASE_KEYS = new Set(Object.keys(pseoCases));
const CITY_KEYS = new Set(Object.keys(pseoCities));

// These sets let us decide whether a legacy dash URL can be safely redirected
// to its official slash-based route.
const CASE_KEYS = new Set(Object.keys(pseoCases));
const CITY_KEYS = new Set(Object.keys(pseoCities));

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

    // --- Redirect legacy city dash pages to the official slash route ---
    // Example: /autoankauf-aalen -> /autoankauf/aalen
    if (seg.startsWith("autoankauf-")) {
      const city = seg.replace(/^autoankauf-/, "");
      if (CITY_KEYS.has(city)) {
        const url = req.nextUrl.clone();
        url.pathname = `/autoankauf/${city}`;
        url.search = "";
        return NextResponse.redirect(url, 308);
      }

      // Unknown city dash page: return Gone to avoid thin/empty pages.
      return new NextResponse("Gone", {
        status: 410,
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "no-store",
        },
      });
    }

    // --- Redirect legacy case dash pages to the official slash route ---
    // Example: /auto-verkaufen-altes-auto -> /auto-verkaufen/altes-auto
    if (seg.startsWith("auto-verkaufen-") && !ALLOWED_DASH_SEGMENTS.has(seg)) {
      const c = seg.replace(/^auto-verkaufen-/, "");
      if (CASE_KEYS.has(c)) {
        const url = req.nextUrl.clone();
        url.pathname = `/auto-verkaufen/${c}`;
        url.search = "";
        return NextResponse.redirect(url, 308);
      }

      // Unknown dash-style "auto-verkaufen-*" pages: Gone.
      return new NextResponse("Gone", {
        status: 410,
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "no-store",
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
