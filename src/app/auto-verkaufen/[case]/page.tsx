import type { Metadata } from 'next'
import Link from "next/link"


import SEOPageTemplate from '@/components/SEOPageTemplate'
import { Shield, Settings, Car, Clock, Banknote } from 'lucide-react'

import { pseoCases, type PSEOCaseKey } from '@/lib/pseo/pseoCases'
import { pseoCities, coreCityKeys } from '@/lib/pseo/pseoCities'
import { isPSEOCaseKey, normalizeSlug } from '@/lib/pseo/pseoGenerator'

type Params = { case: string }

export async function generateStaticParams(): Promise<Params[]> {
  return (Object.keys(pseoCases) as PSEOCaseKey[]).map(c => ({ case: c }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const caseSlug = normalizeSlug(params.case)
  if (!isPSEOCaseKey(caseSlug)) {
    return { title: 'Seite nicht gefunden | Franken Auto Ankauf', robots: { index: false, follow: false } }
  }
  const c = pseoCases[caseSlug as PSEOCaseKey]
  return {
    title: `${c.title} | Franken Auto Ankauf`,
    description: `${c.title}: kostenloses Angebot, transparente Bewertung, schnelle Abwicklung in Franken. Jetzt anfragen.`
  }
}

function heroIcon(caseKey: PSEOCaseKey) {
  if (caseKey === 'motorschaden') return <Settings className="w-20 h-20 mx-auto" />
  if (caseKey === 'unfallwagen') return <Car className="w-20 h-20 mx-auto" />
  return <Shield className="w-20 h-20 mx-auto" />
}

function featureIcon(name: 'shield' | 'clock' | 'banknote') {
  if (name === 'clock') return <Clock className="w-12 h-12 text-orange-600" />
  if (name === 'banknote') return <Banknote className="w-12 h-12 text-orange-600" />
  return <Shield className="w-12 h-12 text-orange-600" />
}

export default function CaseGeneralPage({ params }: { params: Params }) {
  const caseSlug = normalizeSlug(params.case)
  if (!isPSEOCaseKey(caseSlug)) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl font-bold mb-3">Seite nicht gefunden</h1>
          <p className="text-gray-600 dark:text-gray-300">Bitte prüfen Sie die URL.</p>
          <p className="mt-4"><Link className="text-orange-600 underline" href="/">Zur Startseite</Link></p>
        </div>
      </div>
    )
  }

  const caseKey = caseSlug as PSEOCaseKey
  const c = pseoCases[caseKey]

  // Link targets: use core cities to keep pages stable
  const nbgKey = (coreCityKeys[0] || 'nuernberg')
  const otherCityKey = (coreCityKeys[1] || 'fuerth')
  const nbg = pseoCities[nbgKey]
  const oth = pseoCities[otherCityKey]

  const benefits = [
    `Kostenloses, unverbindliches Angebot für ${c.shortLabel}`,
    'Transparente Bewertung – nachvollziehbar statt pauschal',
    'Schnelle Abwicklung in Franken',
    'Bezahlung bei Übergabe (Bar oder Überweisung)',
    'Unterstützung bei Unterlagen/Abmeldung'
  ]

  const features = [
    { icon: 'shield' as const, title: 'Seriös & klar', description: `Auch bei ${c.shortLabel}: klare Kommunikation und faire Einschätzung.` },
    { icon: 'clock' as const, title: 'Schnell organisiert', description: 'Kurze Wege in der Region – Termin und Übergabe strukturiert.' },
    { icon: 'banknote' as const, title: 'Zahlung bei Übergabe', description: 'Sie wählen Barzahlung oder Überweisung.' }
  ].map(f => ({ ...f, iconEl: featureIcon(f.icon) }))

  const faqs = [
    {
      question: `Wie wirkt sich ${c.shortLabel} auf den Preis aus?`,
      answer: `Der Zustand (inkl. ${c.keyword}) beeinflusst den Marktwert. Entscheidend ist eine realistische Bewertung – wir erklären nachvollziehbar, wie sich ${c.shortLabel} auswirkt.`
    },
    {
      question: `Muss ich ${c.shortLabel} vorher reparieren?`,
      answer: `Meist nicht. Eine Reparatur lohnt sich nicht immer – wir machen Ihnen ein Angebot auf Basis des aktuellen Zustands.`
    },
    {
      question: 'Wie starte ich am schnellsten?',
      answer: 'Am einfachsten: Formular ausfüllen. Je genauer die Daten, desto schneller erhalten Sie ein Angebot.'
    }
  ]

  const relatedLinks = [
    { href: `/auto-verkaufen/${caseKey}/${nbgKey}`, label: `${c.title} in ${nbg?.name ?? 'Nürnberg'}` },
    { href: `/auto-verkaufen/${caseKey}/${otherCityKey}`, label: `${c.title} in ${oth?.name ?? 'Fürth'}` },
    { href: `/auto-verkaufen-sofort`, label: 'Auto sofort verkaufen (heute/sofort)' },
    { href: '/#form', label: 'Zum Formular (kostenloses Angebot)' }
  ]

  return (
    <SEOPageTemplate
      heroIcon={heroIcon(caseKey)}
      heroTitle={c.title}
      heroSubtitle="Direkter Autoankauf in Franken: fair, transparent und ohne Privatverkauf-Stress."
      mainTitle={`So verkaufen Sie ein Auto ${c.shortLabel} – ohne Diskussionen`}
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Ein Auto <strong>{c.shortLabel}</strong> privat zu verkaufen ist oft mühsam: viele Rückfragen, Misstrauen, harte Verhandlungen.
            Wir bieten eine klare Alternative: Anfrage senden, Angebot erhalten, Übergabe planen.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Besonders bei <strong>{c.shortLabel}</strong> ist eine transparente Bewertung wichtig. Wir berücksichtigen den Zustand realistisch,
            erklären unsere Einschätzung und sorgen für eine saubere Abwicklung.
          </p>
        </>
      }
      benefits={benefits}
      features={features.map(f => ({ icon: f.iconEl, title: f.title, description: f.description }))}
      faqs={faqs}
      ctaTitle="Jetzt kostenloses Angebot anfordern"
      ctaSubtitle="Fahrzeugdaten senden – wir melden uns schnell mit einer realistischen Einschätzung."
      relatedLinks={relatedLinks}
    />
  )
}
