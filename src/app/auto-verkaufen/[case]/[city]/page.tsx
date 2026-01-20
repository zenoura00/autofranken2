import { caseKeys, cityKeysCore } from "@/lib/pseo/sitemapData"

export async function generateStaticParams() {
  const cases = caseKeys()
  const cities = cityKeysCore()

  const paths = []

  for (const ca of cases) {
    for (const ci of cities) {
      paths.push({ case: ca, city: ci })
    }
  }

  return paths
}

export const revalidate = 60 * 60 * 24 * 14 // 14 يوم

import type { Metadata } from 'next'
import Link from "next/link"


import SEOPageTemplate from '@/components/SEOPageTemplate'
import { Banknote, Clock, Shield, Settings, Car } from 'lucide-react'

import { pseoCases, type PSEOCaseKey } from '@/lib/pseo/pseoCases'
import { pseoCities, type PSEOCityKey } from '@/lib/pseo/pseoCities'
import { generatePSEOPage, isPSEOCaseKey, isPSEOCityKey } from '@/lib/pseo/pseoGenerator'

type Params = { case: string; city: string }

// IMPORTANT:
// This route has a very large number of combinations (case × city).
// Building all of them statically can exceed Vercel's deployment output limits.
// We therefore do NOT pre-render any params at build time.
// Instead, pages are generated on first request and then cached via ISR.
export const dynamicParams = true
export const revalidate = 60 * 60 * 24 * 14 // 14 days

// Do not prebuild any case×city pages during the build.
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  if (!isPSEOCaseKey(params.case) || !isPSEOCityKey(params.city)) {
    return {
      title: 'Seite nicht gefunden | Franken Auto Ankauf',
      robots: { index: false, follow: false }
    }
  }

  const seo = generatePSEOPage(params.case, params.city)
  const canonicalUrl = `https://frankenautoankauf.de/auto-verkaufen/${params.case}/${params.city}`
  return {
    ...seo.metadata,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: seo.metadata.title,
      description: seo.metadata.description,
      url: canonicalUrl,
      siteName: "Franken Auto Ankauf",
      locale: "de_DE",
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: seo.metadata.title,
      description: seo.metadata.description
    }
  }
}

function iconForCase(caseKey: PSEOCaseKey) {
  if (caseKey === 'motorschaden') return <Settings className="w-20 h-20 mx-auto" />
  if (caseKey === 'unfallwagen') return <Car className="w-20 h-20 mx-auto" />
  return <Shield className="w-20 h-20 mx-auto" />
}

function featureIcon(name: 'shield' | 'clock' | 'banknote') {
  if (name === 'clock') return <Clock className="w-12 h-12 text-orange-600" />
  if (name === 'banknote') return <Banknote className="w-12 h-12 text-orange-600" />
  return <Shield className="w-12 h-12 text-orange-600" />
}

export default function CaseCityPage({ params }: { params: Params }) {
  if (!isPSEOCaseKey(params.case) || !isPSEOCityKey(params.city)) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl font-bold mb-3">Seite nicht gefunden</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Bitte prüfen Sie die URL. Diese Seite wurde nicht erzeugt.
          </p>
          <p className="mt-4">
            <Link className="text-orange-600 underline" href="/">Zur Startseite</Link>
          </p>
        </div>
      </div>
    )
  }

  const caseKey = params.case
  const cityKey = params.city
  const g = generatePSEOPage(caseKey, cityKey)
  const cityName = pseoCities[cityKey].name
  const caseTitle = pseoCases[caseKey].title

  const features = g.features.map(f => ({
    icon: featureIcon(f.icon),
    title: f.title,
    description: f.description
  }))

  return (
    <SEOPageTemplate
      heroIcon={iconForCase(caseKey)}
      heroTitle={g.heroTitle}
      heroSubtitle={g.heroSubtitle}
      mainTitle={g.mainTitle}
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{g.intro}</p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Das Problem: {caseTitle}</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{g.problem}</p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Warum {cityName} für den schnellen Verkauf ideal ist</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{g.cityWhy}</p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">{g.stepsTitle}</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            {g.stepsBullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <strong>Hinweis:</strong> Wenn Sie es besonders eilig haben, können Sie auch direkt über unser Formular anfragen.
            Wir melden uns schnell zurück und koordinieren den Rest.
          </p>
        </>
      }
      benefits={g.benefits}
      features={features}
      faqs={g.faqs}
      ctaTitle={g.ctaTitle}
      ctaSubtitle={g.ctaSubtitle}
      relatedLinks={g.relatedLinks}
    />
  )
}
