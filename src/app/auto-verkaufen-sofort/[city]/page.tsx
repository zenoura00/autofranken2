import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import SEOPageTemplate from "@/components/SEOPageTemplate"
import { Shield, Clock, Banknote } from "lucide-react"

import { pseoCities, type PSEOCityKey } from "@/lib/pseo/pseoCities"
import { isPSEOCityKey } from "@/lib/pseo/pseoGenerator"

type Params = { city: string }

export async function generateStaticParams(): Promise<Params[]> {
  // مهم: نبني صفحات المدن من نفس مصدر pseoCities
  return (Object.keys(pseoCities) as PSEOCityKey[]).map((city) => ({ city }))
}

export async function generateMetadata(
  props: { params: Promise<Params> | Params }
): Promise<Metadata> {
  const params = await Promise.resolve(props.params)
  const citySlug = (params.city ?? "").toLowerCase()

  if (!isPSEOCityKey(citySlug)) {
    return { title: "Seite nicht gefunden | Franken Auto Ankauf", robots: { index: false, follow: false } }
  }

  const city = pseoCities[citySlug]

  return {
    title: `Auto sofort verkaufen in ${city.name} | Franken Auto Ankauf`,
    description: `Auto sofort verkaufen in ${city.name}: kostenloses Angebot, schnelle Abwicklung und Abholung möglich. Jetzt anfragen.`,
  }
}

function featureIcon(name: "shield" | "clock" | "banknote") {
  if (name === "clock") return <Clock className="w-12 h-12 text-orange-600" />
  if (name === "banknote") return <Banknote className="w-12 h-12 text-orange-600" />
  return <Shield className="w-12 h-12 text-orange-600" />
}

export default async function Page(props: { params: Promise<Params> | Params }) {
  const params = await Promise.resolve(props.params)
  const citySlug = (params.city ?? "").toLowerCase()

  if (!isPSEOCityKey(citySlug)) {
    notFound()
  }

  const city = pseoCities[citySlug]

  const benefits = [
    `Sofort-Ankauf in ${city.name} – Anfrage in 1 Minute`,
    "Kein Inserat, keine Probefahrten, kein „letzter Preis“",
    "Transparente Bewertung und klare Kommunikation",
    "Abholung möglich (je nach Standort/Zustand)",
    "Zahlung bei Übergabe (Bar oder Überweisung)",
  ]

  const features = [
    { icon: "shield" as const, title: "Seriös & klar", description: `Direkter Ankauf in ${city.name} – ohne Stress.` },
    { icon: "clock" as const, title: "Schnell organisiert", description: `Kurze Wege rund um ${city.name} – Termin flexibel.` },
    { icon: "banknote" as const, title: "Zahlung bei Übergabe", description: "Bar oder Überweisung – Sie entscheiden." },
  ].map((f) => ({ ...f, iconEl: featureIcon(f.icon) }))

  const faqs = [
    {
      question: `Wie schnell kann ich in ${city.name} verkaufen?`,
      answer:
        "Oft sehr schnell: Anfrage → Angebot → Termin. Je genauer Ihre Angaben, desto schneller geht es.",
    },
    {
      question: "Brauche ich Unterlagen?",
      answer:
        "Ideal: Zulassungsbescheinigung Teil I/II + Ausweis. Falls etwas fehlt: kurz im Formular erwähnen.",
    },
    {
      question: "Ist Abholung möglich?",
      answer:
        `Je nach Lage und Zustand ja – besonders in und um ${city.name}.`,
    },
  ]

  const relatedLinks = [
    { href: "/auto-verkaufen-heute", label: "Auto heute verkaufen" },
    { href: `/autoankauf/${citySlug}`, label: `Autoankauf in ${city.name}` },
    { href: "/faelle", label: "Alle Verkaufsfälle" },
    { href: "/#form", label: "Zum Formular (kostenloses Angebot)" },
  ]

  return (
    <SEOPageTemplate
      heroIcon={<Clock className="w-20 h-20 mx-auto" />}
      heroTitle={`Auto sofort verkaufen in ${city.name}`}
      heroSubtitle={`Schnell, fair, ohne Privatverkauf – direkt in ${city.name}.`}
      mainTitle={`Sofort-Ankauf in ${city.name}: so klappt’s in wenigen Schritten`}
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Wenn es schnell gehen muss, ist Privatverkauf oft zu langsam.
            Wir machen es planbar: Anfrage senden, Angebot erhalten, Übergabe organisieren.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            In <strong>{city.name}</strong> profitieren Sie von kurzen Wegen – je nach Standort und Zustand ist auch Abholung möglich.
          </p>
          <p className="mt-4">
            <Link className="text-orange-600 underline" href="/#form">Jetzt Anfrage senden</Link>
          </p>
        </>
      }
      benefits={benefits}
      features={features.map((f) => ({ icon: f.iconEl, title: f.title, description: f.description }))}
      faqs={faqs}
      ctaTitle="Jetzt sofort verkaufen – kostenlos anfragen"
      ctaSubtitle={`Fahrzeugdaten senden – wir melden uns schnell. Region: ${city.name} & Umgebung.`}
      relatedLinks={relatedLinks}
    />
  )
}
