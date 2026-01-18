import { NextResponse } from "next/server"

import { urlsetXml } from "@/lib/pseo/sitemapHelpers"
import { caseOnlyPaths, getBaseUrl, getNowIso } from "@/lib/pseo/sitemapData"

export const runtime = "nodejs"

export function GET() {
  const base = getBaseUrl()
  const lastmod = getNowIso()

  const entries = caseOnlyPaths().map((p) => ({
    loc: base + p,
    lastmod,
    changefreq: "monthly",
    priority: 0.7,
  }))

  const xml = urlsetXml(entries)

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
