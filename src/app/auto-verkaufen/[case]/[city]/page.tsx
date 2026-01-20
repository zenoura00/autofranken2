import type { Metadata } from "next"
import { notFound } from "next/navigation"

import SEOPageTemplate from "@/components/SEOPageTemplate"
import { Banknote, Clock, Shield, Settings, Car } from "lucide-react"

import { caseKeys, cityKeysCore } from "@/lib/pseo/sitemapData"
import { type PSEOCaseKey } from "@/lib/pseo/pseoCases"
import { type PSEOCityKey } from "@/lib/pseo/pseoCities"
import { generatePSEOPage, isPSEOCaseKey, isPSEOCityKey } from "@/lib/pseo/pseoGenerator"

export const revalidate = 60 * 60 * 24 * 14 // 14 Tage

export async function generateStaticParams() {
  const cases = caseKeys()
  const cities = cityKeysCore()

  const paths: Array<{ case: string; city: string }> = []
  for (const ca of cases) {
    for (const ci of cities) {
      paths.push({ case: ca, city: ci })
    }
  }
  return paths
}

type Params = { case: string; city: string }

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  if (!isPSEOCaseKey(params.case) || !isPSEOCityKey(params.city)) {
    return {
      title: "Seite nicht gefunden | Franken Auto Ankauf",
      robots: { index: false, follow: false },
    }
  }

  const seo = generatePSEOPage(params.case, params.city)
  const canonicalUrl = `https://frankenautoankauf.de/auto-verkaufen/${params.case}/${params.city}`
  const ogTitle = seo.metadata.title ?? undefined
  const ogDescription = seo.metadata.description ?? undefined

  return {
    ...seo.metadata,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonicalUrl,
      siteName: "Franken Auto Ankauf",
      locale: "de_DE",
      type: "article",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Franken Auto Ankauf",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: ["/og-image.png"],
    },
  }
}

function iconForCase(caseKey: PSEOCaseKey) {
  if (caseKey === "motorschaden") return <Settings className="w-20 h-20 mx-auto" />
  if (caseKey === "unfallwagen") return <Car className="w-20 h-20 mx-auto" />
  return <Shield className="w-20 h-20 mx-auto" />
}

function featureIcon(name: "shield" | "clock" | "banknote") {
  if (name === "clock") return <Clock className="w-6 h-6" />
  if (name === "banknote") return <Banknote className="w-6 h-6" />
  return <Shield className="w-6 h-6" />
}

export default function Page({ params }: { params: Params }) {
  if (!isPSEOCaseKey(params.case) || !isPSEOCityKey(params.city)) {
    notFound()
  }

  const caseKey = params.case as PSEOCaseKey
  const cityKey = params.city as PSEOCityKey

  const seo = generatePSEOPage(caseKey, cityKey)

  const features = seo.features.map((f) => ({
    icon: featureIcon(f.icon),
    title: f.title,
    description: f.description,
  }))

  const mainContent = (
    <>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{seo.intro}</p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{seo.problem}</p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">{seo.cityWhy}</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">{seo.stepsTitle}</h2>
      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
        {seo.stepsBullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span>•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </>
  )

  return (
    <SEOPageTemplate
      heroIcon={iconForCase(caseKey)}
      heroTitle={seo.heroTitle}
      heroSubtitle={seo.heroSubtitle}
      mainTitle={seo.mainTitle}
      mainContent={mainContent}
      benefits={seo.benefits}
      features={features}
      faqs={seo.faqs}
      ctaTitle={seo.ctaTitle}
      ctaSubtitle={seo.ctaSubtitle}
      relatedLinks={seo.relatedLinks}
    />
  )
}
