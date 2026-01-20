import { NextResponse } from "next/server"

import { urlsetXml, type UrlEntry } from "@/lib/pseo/sitemapHelpers"
import { getBaseUrl, getNowIso, staticPagePaths } from "@/lib/pseo/sitemapData"

export const runtime = "nodejs"

export function GET() {
  const base = getBaseUrl()
  const lastmod = getNowIso()

  const weekly = new Set(["/", "/auto-verkaufen", "/auto-verkaufen-sofort"])
  const high = new Set(["/auto-verkaufen", "/auto-verkaufen-sofort"])

  const entries: UrlEntry[] = staticPagePaths().map((path): UrlEntry => ({
    const loc = path == "/" ? base : base + path
    const changefreq = weekly.has(path) ? "weekly" : "monthly"
    const priority = path == "/" ? 1 : high.has(path) ? 0.8 : 0.6
    return { loc, lastmod, changefreq, priority }
  })

  const xml = urlsetXml(entries)

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
