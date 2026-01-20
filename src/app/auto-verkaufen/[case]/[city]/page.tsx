import type { Metadata } from 'next'
import Link from "next/link"
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { Banknote, Clock, Shield, Settings, Car } from 'lucide-react'

import { caseKeys, cityKeysCore } from "@/lib/pseo/sitemapData"
import { pseoCases, type PSEOCaseKey } from '@/lib/pseo/pseoCases'
import { pseoCities, type PSEOCityKey } from '@/lib/pseo/pseoCities'
import { generatePSEOPage, isPSEOCaseKey, isPSEOCityKey } from '@/lib/pseo/pseoGenerator'

export const revalidate = 60 * 60 * 24 * 14 // 14 يوم

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

type Params = { case: string; city: string }

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
  if (name === 'clock') return <Clock className="w-6 h-6" />
  if (name === 'banknote') return <Banknote className="w-6 h-6" />
  return <Shield className="w-6 h-6" />
}


export default function Page({ params }: { params: Params }) {
  const { case: caseKey, city: cityKey } = params
  return (
    <SEOPageTemplate
      caseKey={caseKey as PSEOCaseKey}
      cityKey={cityKey as PSEOCityKey}
    />
  )
}
