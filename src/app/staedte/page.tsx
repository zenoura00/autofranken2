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
    .map(c => ({ id: c.key, label: c.name, cityKey: c.key, name: c.name, region: c.regionLabel }))

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

        <AlphabetFilter
          items={cities}
          renderItem={city => (
            <div key={city.id} className="border rounded-lg p-4 hover:shadow-sm transition">
              <div className="font-semibold text-lg mb-1">{city.name as string}</div>
              <div className="text-sm text-muted-foreground mb-3">{city.region as string}</div>
              <div className="flex flex-wrap gap-3 text-sm">
                <Link className="text-orange-600 underline" href={`/autoankauf/${city.cityKey as string}`}>
                  Stadtseite
                </Link>
                <Link className="text-orange-600 underline" href={`/auto-verkaufen-sofort/${city.cityKey as string}`}>
                  Heute / sofort
                </Link>
                <Link className="text-orange-600 underline" href={`/auto-verkaufen/ohne-tuev/${city.cityKey as string}`}>
                  Ohne TÜV
                </Link>
              </div>
            </div>
          )}
        />

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
