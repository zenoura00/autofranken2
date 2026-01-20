import Link from "next/link"

import { AlphabetFilter } from "@/components/alphabet-filter"
import { pseoCities, type PSEOCityKey } from "@/lib/pseo/pseoCities"

export const metadata = {
  title: "Städte & Regionen | Franken Auto Ankauf",
  description:
    "Alle Städte und Regionen in Franken und Umgebung: finden Sie Ihren lokalen Autoankauf und starten Sie die Anfrage in 2 Minuten.",
}

export default function StaedtePage() {
  const cities = (Object.keys(pseoCities) as PSEOCityKey[])
    .map(k => ({ key: k, ...pseoCities[k] }))
    .sort((a, b) => a.name.localeCompare(b.name, "de"))
    .map(c => ({
      id: c.key,
      label: c.name,
      subLabel: c.regionLabel,
      links: [
        { href: `/autoankauf/${c.key}`, label: "Stadtseite" },
        { href: `/auto-verkaufen-sofort/${c.key}`, label: "Heute / sofort" },
        { href: `/auto-verkaufen/ohne-tuev/${c.key}`, label: "Ohne TÜV" },
      ],
    }))

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-4xl font-bold mb-4">Städte & Regionen</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Wählen Sie Ihre Stadt, um lokale Informationen zum Autoankauf zu sehen — oder springen Sie direkt zum Formular.
          <span className="ml-2">
            <Link href="/#form" className="text-orange-600 underline">
              Zum Formular
            </Link>
          </span>
        </p>

        <AlphabetFilter items={cities} />

        <div className="mt-10 p-6 bg-orange-50 border border-orange-100 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Noch unsicher?</h2>
          <p className="text-muted-foreground mb-4">
            Egal ob Motorschaden, ohne TÜV, Unfall oder Export — senden Sie kurz die wichtigsten Daten.
            Wir melden uns mit einer realistischen Einschätzung.
          </p>
          <Link
            href="/#form"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition"
          >
            Kostenlose Bewertung starten
          </Link>
        </div>
      </div>
    </div>
  )
}
