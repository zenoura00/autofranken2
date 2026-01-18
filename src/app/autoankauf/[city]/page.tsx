import type { Metadata } from 'next'

import SEOPageTemplate from '@/components/SEOPageTemplate'
import { MapPin, Shield, Clock, Banknote } from 'lucide-react'
import Link from 'next/link'

import { pseoCities, coreCityKeys, type PSEOCityKey } from '@/lib/pseo/pseoCities'
import { isPSEOCityKey } from '@/lib/pseo/pseoGenerator'

type Params = { city: string }

export async function generateStaticParams(): Promise<Params[]> {
  return (coreCityKeys as PSEOCityKey[]).map(city => ({ city }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  if (!isPSEOCityKey(params.city)) {
    return { title: 'Seite nicht gefunden | Franken Auto Ankauf', robots: { index: false, follow: false } }
  }
  const city = pseoCities[params.city]
  return {
    title: `Autoankauf ${city.name} | Franken Auto Ankauf`,
    description: `Autoankauf in ${city.name} (${city.regionLabel}): kostenloses Angebot, transparente Bewertung, schnelle Abwicklung. Jetzt anfragen.`
  }
}

function icon(kind: 'shield' | 'clock' | 'banknote') {
  if (kind === 'clock') return <Clock className="w-12 h-12 text-orange-600" />
  if (kind === 'banknote') return <Banknote className="w-12 h-12 text-orange-600" />
  return <Shield className="w-12 h-12 text-orange-600" />
}

export default function AutoankaufCityPage({ params }: { params: Params }) {
  if (!isPSEOCityKey(params.city)) {
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

  const cityKey = params.city as PSEOCityKey
  const city = pseoCities[cityKey]

  const benefits = [
    `Kostenloses Angebot für ${city.name}`,
    `Abholung in ${city.name} und Umgebung möglich`,
    'Transparente Bewertung statt pauschaler Abschläge',
    'Zahlung bei Übergabe (Bar/Überweisung)',
    'Unterstützung bei Unterlagen/Abmeldung'
  ]

  const features = [
    { icon: icon('shield'), title: 'Seriös & transparent', description: `Klare Kommunikation – in ${city.name} strukturiert und nachvollziehbar.` },
    { icon: icon('clock'), title: 'Schnell in der Region', description: `Kurze Wege in ${city.name} (${city.regionLabel}) – Termin flexibel.` },
    { icon: icon('banknote'), title: 'Zahlung bei Übergabe', description: 'Bar oder Überweisung – Sie entscheiden.' }
  ]

  const faqs = [
    {
      question: `Kauft ihr auch defekte Fahrzeuge in ${city.name}?`,
      answer: `Ja. Ob ohne TÜV, Motorschaden oder Unfall – wir prüfen den Zustand und machen ein realistisches Angebot für ${city.name}.`
    },
    {
      question: `Wie schnell kann ein Termin in ${city.name} stattfinden?`,
      answer: `Oft kurzfristig. Senden Sie die Daten, und wir stimmen die nächsten Schritte für ${city.name} direkt ab.`
    },
    {
      question: `Muss ich mein Auto nach ${city.name} bringen?`,
      answer: `Nicht unbedingt. Je nach Zustand ist Abholung in ${city.name} und Umgebung möglich.`
    }
  ]

  // Internal links: two cases in this city + another city page + intent
  const otherCityKey = (coreCityKeys[coreCityKeys.indexOf(cityKey) === 0 ? 1 : 0] || 'nuernberg') as PSEOCityKey
  const otherCity = pseoCities[otherCityKey]
  const relatedLinks = [
    { href: `/auto-verkaufen/ohne-tuev/${cityKey}`, label: `Ohne TÜV verkaufen in ${city.name}` },
    { href: `/auto-verkaufen/motorschaden/${cityKey}`, label: `Motorschaden verkaufen in ${city.name}` },
    { href: `/autoankauf/${otherCityKey}`, label: `Autoankauf ${otherCity?.name ?? 'in der Region'}` },
    { href: `/auto-verkaufen-sofort/${cityKey}`, label: `Auto sofort verkaufen in ${city.name}` },
    { href: '/#form', label: 'Zum Formular' }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<MapPin className="w-20 h-20 mx-auto" />}
      heroTitle={`Autoankauf in ${city.name}`}
      heroSubtitle={`Direkter Autoankauf in ${city.name} (${city.regionLabel}) – schnell, fair, unkompliziert.`}
      mainTitle={`Auto verkaufen in ${city.name}: einfach & transparent`}
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Sie möchten Ihr Auto in <strong>{city.name}</strong> verkaufen? Wir bieten Ihnen einen direkten Autoankauf ohne Inserate,
            ohne Probefahrten und ohne endlose Preisverhandlungen. Senden Sie die Fahrzeugdaten – wir melden uns schnell mit einem Angebot.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Ob Stadtgebiet oder Umland: In {city.name} sind kurze Wege möglich. Damit wird der Verkauf planbar – auch wenn es eilig ist.
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle={`Jetzt Angebot für ${city.name} anfordern`}
      ctaSubtitle={`Formular ausfüllen – wir melden uns schnell und koordinieren die nächsten Schritte in ${city.name}.`}
      relatedLinks={relatedLinks}
    />
  )
}
