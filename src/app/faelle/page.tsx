import Link from "next/link"

import { CASES } from "@/lib/seo/cases"

export const metadata = {
  title: "Alle Verkaufsfälle | Franken Auto Ankauf",
  description:
    "Alle Ankauf-Situationen im Überblick: Motorschaden, ohne TÜV, Unfall, Export, Leasing und viele weitere Fälle — mit lokalen Seiten pro Stadt.",
}

export default function FaellePage() {
  const cases = [...CASES].sort((a, b) => a.title.localeCompare(b.title, "de"))

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-4xl font-bold mb-4">Alle Verkaufsfälle</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Hier finden Sie alle Situationen, für die wir Anfragen annehmen. Jede Situation hat zusätzlich lokale Seiten pro Stadt.
          <span className="ml-2">
            <Link href="/#form" className="text-orange-600 underline">
              Zum Formular
            </Link>
          </span>
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map(c => (
            <div key={c.slug} className="border rounded-lg p-4 hover:shadow-sm transition">
              <div className="font-semibold text-lg mb-2">{c.title}</div>
              <p className="text-sm text-muted-foreground mb-3">{c.pain}</p>
              <div className="flex flex-wrap gap-3 text-sm">
                <Link className="text-orange-600 underline" href={`/${c.slug}`}>
                  Übersicht
                </Link>
                <Link className="text-orange-600 underline" href="/staedte">
                  Stadt wählen
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-orange-50 border border-orange-100 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Schnell starten (2 Minuten)</h2>
          <p className="text-muted-foreground mb-4">
            Kurze Daten senden — wir prüfen Zustand & Markt und machen Ihnen ein klares Angebot. Keine Verpflichtung.
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
