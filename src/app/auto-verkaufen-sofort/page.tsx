import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Auto sofort verkaufen | Franken Auto Ankauf",
  description: "Auto sofort verkaufen: kostenloses Angebot, schnelle Abwicklung in Franken. Jetzt anfragen.",
}

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold">Auto sofort verkaufen</h1>
      <p className="text-gray-700 dark:text-gray-300">
        Wenn es schnell gehen muss: Anfrage senden → Angebot erhalten → Übergabe planen.
      </p>

      <div className="mt-6 flex gap-3">
        <Link className="rounded-md bg-orange-600 px-4 py-2 text-white" href="/#form">
          Zum Formular
        </Link>
        <Link className="rounded-md border px-4 py-2" href="/staedte">
          Stadt wählen
        </Link>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Tipp: Wenn du eine Stadtseite willst, nutze: <code>/auto-verkaufen-sofort/nuernberg</code>
      </p>
    </main>
  )
}
