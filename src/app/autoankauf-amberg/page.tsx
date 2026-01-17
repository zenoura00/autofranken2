import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { MapPin, Clock, Shield, Banknote, Building, Mountain } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Autoankauf Amberg | Auto verkaufen Oberpfalz | Auto Ankauf Franken',
  description: 'Autoankauf Amberg – Verkaufen Sie Ihr Auto in der Oberpfalz. Schnell, fair & Barzahlung. Kostenlose Bewertung. Jetzt Angebot erhalten!',
}

export default function AutoankaufAmbergPage() {
  const faqs = [
    {
      question: "Wie weit ist Amberg von Nürnberg?",
      answer: "Amberg liegt nur etwa 60 km von Nürnberg entfernt. Wir sind schnell bei Ihnen."
    },
    {
      question: "Kaufen Sie auch im Landkreis Amberg-Sulzbach?",
      answer: "Ja, der gesamte Landkreis gehört dazu: Sulzbach-Rosenberg, Hirschau, Auerbach und alle weiteren Orte."
    },
    {
      question: "Wann können Sie in Amberg sein?",
      answer: "Oft noch am selben Tag oder innerhalb von 24 Stunden. Die kurze Entfernung macht es möglich."
    },
    {
      question: "Gibt es Kosten für die Anfahrt?",
      answer: "Nein, die Anfahrt nach Amberg ist komplett kostenlos."
    },
    {
      question: "Übernehmen Sie die Abmeldung in Amberg?",
      answer: "Ja, die Abmeldung bei der Amberger Zulassungsstelle übernehmen wir kostenlos."
    }
  ]

  const features = [
    {
      icon: <Mountain className="w-12 h-12 text-orange-600" />,
      title: "Oberpfalz",
      description: "Autoankauf in der historischen Oberpfalz-Metropole."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Kurze Wege",
      description: "Nur 60 km von Nürnberg – schnell vor Ort."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Barzahlung",
      description: "Sofortige Barzahlung bei Übergabe."
    }
  ]

  const benefits = [
    "Ankauf in ganz Amberg",
    "Alle Stadtteile abgedeckt",
    "Landkreis Amberg-Sulzbach inklusive",
    "Nur 60 km von Nürnberg",
    "Kostenlose Fahrzeugbewertung",
    "Sofortige Barzahlung",
    "Kostenlose Abmeldung",
    "Ankauf aller Fahrzeugzustände"
  ]

  const relatedLinks = [
    { href: "/autoankauf-nuernberg", label: "Ankauf Nürnberg" },
    { href: "/autoankauf-regensburg", label: "Ankauf Regensburg" },
    { href: "/autoankauf-neumarkt", label: "Ankauf Neumarkt" },
    { href: "/auto-verkaufen-sofort", label: "Sofort verkaufen" },
    { href: "/auto-verkaufen-mit-motorschaden", label: "Mit Motorschaden" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<MapPin className="w-20 h-20 mx-auto" />}
      heroTitle="Autoankauf Amberg"
      heroSubtitle="Auto verkaufen in der Oberpfalz-Metropole – schnell, fair und unkompliziert!"
      mainTitle="Auto verkaufen in Amberg – Ihr Partner in der Oberpfalz"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <strong>Autoankauf in Amberg</strong> – Die kreisfreie Stadt in der Oberpfalz liegt nur 60 km von Nürnberg entfernt und gehört zu unserem Kerngebiet. Wir kaufen Ihr Auto schnell und fair.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Durch die Nähe zu Nürnberg können wir oft noch am selben Tag in Amberg sein. Unser <strong>Autoankauf-Service</strong> deckt das gesamte Stadtgebiet und den Landkreis Amberg-Sulzbach ab.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Autoankauf in Amberg und Umgebung</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Amberger Altstadt und Innenstadt</li>
            <li>Ammersricht, Gailoh, Raigering</li>
            <li>Landkreis: Sulzbach-Rosenberg</li>
            <li>Hirschau, Auerbach, Vilseck</li>
            <li>Schnaittenbach, Freihung</li>
            <li>Oberpfälzer Wald und Umgebung</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Amberg – Historische Oberpfalz</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Amberg ist eine der schönsten mittelalterlichen Städte Bayerns mit einer vollständig erhaltenen Stadtmauer. Die Stadt war einst Hauptstadt der Oberpfalz und ist heute ein wichtiges Oberzentrum.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Wir bieten den Ambergern einen unkomplizierten Autoverkauf: Anfrage, Termin, Bewertung vor Ort, faires Angebot und sofortige Barzahlung. Alles schnell und zuverlässig.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Kontaktieren Sie uns jetzt für Ihr kostenloses Angebot aus Amberg!
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Auto in Amberg verkaufen?"
      ctaSubtitle="Die Oberpfalz-Metropole gehört zu unserem Kerngebiet. Jetzt Angebot erhalten!"
      relatedLinks={relatedLinks}
    />
  )
}
