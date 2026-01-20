import type { Metadata } from 'next'
import Link from "next/link"


import SEOPageTemplate from '@/components/SEOPageTemplate'
import { Banknote, Clock, Shield, Settings, Car } from 'lucide-react'

import { pseoCases, type PSEOCaseKey } from '@/lib/pseo/pseoCases'
import { pseoCities, type PSEOCityKey } from '@/lib/pseo/pseoCities'
import { generatePSEOPage, isPSEOCaseKey, isPSEOCityKey } from '@/lib/pseo/pseoGenerator'

type Params = { case: string; city: string }

// With ~11k (case, city) combinations, fully pre-rendering everything can exceed
// Vercel's deployment payload limits. We therefore pre-render only the most
// important combinations and let the rest generate on-demand (ISR).
export const revalidate = 1209600 // 14 days
export const dynamicParams = true

export async function generateStaticParams(): Promise<Params[]> {
  // Keep this list small (e.g. 25–200 pages) to avoid huge build outputs.
  const topCities: PSEOCityKey[] = [
    'nuernberg',
    'erlangen',
    'fuerth',
    'wuerzburg',
    'bamberg',
    'bayreuth',
    'ansbach',
    'regensburg',
    'ingolstadt',
    'schwabach'
  ]

  const topCases: PSEOCaseKey[] = [
    'motorschaden',
    'ohne-tuev',
    'unfallwagen',
    'unfallschaden',
    'altes-auto',
    'bastlerfahrzeug',
    'getriebeschaden',
    'turboschaden',
    'hohe-laufleistung',
    'exportfahrzeug'
  ]

  const out: Params[] = []
  for (const c of topCases) {
    if (!isPSEOCaseKey(c)) continue
    for (const city of topCities) {
      if (!isPSEOCityKey(city)) continue
      out.push({ case: c, city })
    }
  }
  return out
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  if (!isPSEOCaseKey(params.case) || !isPSEOCityKey(params.city)) {
    return {
      title: 'Seite nicht gefunden | Franken Auto Ankauf',
      robots: { index: false, follow: false }
    }
  }
  return generatePSEOPage(params.case, params.city).metadata
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
