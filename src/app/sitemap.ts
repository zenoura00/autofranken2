import type { MetadataRoute } from "next"

import { CASES } from "@/lib/seo/cases"
import { CITIES } from "@/lib/seo/cities"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://frankenautoankauf.de"
  const now = new Date()

  const staticRoutes = [
    "",
    "/impressum",
    "/datenschutz",
    "/staedte",
    "/faelle",
  ]

  const urls: MetadataRoute.Sitemap = []

  // Core/static pages
  for (const path of staticRoutes) {
    urls.push({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.6,
    })
  }

  // City hub pages (e.g. /autoankauf-nuernberg)
  for (const city of CITIES) {
    urls.push({
      url: `${baseUrl}/autoankauf-${city.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: (city.tier ?? 3) <= 2 ? 0.7 : 0.5,
    })
  }

  // Case-only pages
  for (const c of CASES) {
    urls.push({
      url: `${baseUrl}/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  }

  // Case + City pages (long-tail)
  for (const c of CASES) {
    for (const city of CITIES) {
      urls.push({
        url: `${baseUrl}/${c.slug}-${city.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: (city.tier ?? 3) <= 2 ? 0.65 : 0.45,
      })
    }
  }

  return urls
}
