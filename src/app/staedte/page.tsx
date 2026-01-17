import Link from "next/link"

import { CITIES } from "@/lib/seo/cities"

export const metadata = {
  title: "Städte & Regionen | Franken Auto Ankauf",
  description:
    "Alle Städte und Regionen in Franken und Umgebung: finden Sie Ihren lokalen Autoankauf und starten Sie die Anfrage in 2 Minuten.",
}

export default function StaedtePage() {
  const cities = [...CITIES].sort((a, b) => a.name.localeCompare(b.name, "de"))

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cities.map(city => (
            <div key={city.slug} className="border rounded-lg p-4 hover:shadow-sm transition">
              <div className="font-semibold text-lg mb-2">{city.name}</div>
              <div className="flex flex-wrap gap-3 text-sm">
                <Link className="text-orange-600 underline" href={`/autoankauf-${city.slug}`}>
                  Stadtseite
                </Link>
                <Link className="text-orange-600 underline" href={`/auto-verkaufen-sofort-${city.slug}`}>
                  Heute / sofort
                </Link>
              </div>
            </div>
          ))}
        </div>

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
