import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { MapPin, Clock, Shield, Banknote, Mountain, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Autoankauf Hof | Auto verkaufen Oberfranken | Auto Ankauf Franken',
  description: 'Autoankauf Hof – Verkaufen Sie Ihr Auto im Hofer Land. Schnell, fair & Barzahlung. Kostenlose Bewertung. Jetzt Angebot erhalten!',
}

export default function AutoankaufHofPage() {
  const faqs = [
    {
      question: "Fahren Sie wirklich bis nach Hof?",
      answer: "Ja! Hof liegt etwa 130 km von Nürnberg, aber wir sind regelmäßig in Oberfranken unterwegs. Die Anfahrt ist für Sie kostenlos."
    },
    {
      question: "Kaufen Sie auch im Hofer Umland?",
      answer: "Ja, der gesamte Landkreis Hof gehört dazu: Münchberg, Naila, Rehau, Schwarzenbach und alle weiteren Orte."
    },
    {
      question: "Wie schnell können Sie in Hof sein?",
      answer: "In der Regel innerhalb von 24-48 Stunden. Wir planen unsere Touren effizient."
    },
    {
      question: "Gibt es Aufpreise für die weite Anfahrt?",
      answer: "Nein, die Anfahrt ist kostenlos – egal ob Nürnberg oder Hof."
    },
    {
      question: "Übernehmen Sie die Abmeldung in Hof?",
      answer: "Ja, die Abmeldung bei der Hofer Zulassungsstelle übernehmen wir kostenlos."
    }
  ]

  const features = [
    {
      icon: <Mountain className="w-12 h-12 text-orange-600" />,
      title: "Hofer Land",
      description: "Autoankauf im nördlichen Oberfranken."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Regelmäßig vor Ort",
      description: "Wir sind häufig in der Region unterwegs."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Faire Preise",
      description: "Marktgerechte Bewertung und Barzahlung."
    }
  ]

  const benefits = [
    "Ankauf in ganz Hof und Umgebung",
    "Landkreis Hof komplett abgedeckt",
    "Fichtelgebirge und Frankenwald",
    "Kostenlose Anfahrt",
    "Kostenlose Fahrzeugbewertung",
    "Sofortige Barzahlung",
    "Kostenlose Abmeldung",
    "Ankauf aller Fahrzeugzustände"
  ]

  const relatedLinks = [
    { href: "/autoankauf-bayreuth", label: "Ankauf Bayreuth" },
    { href: "/autoankauf-coburg", label: "Ankauf Coburg" },
    { href: "/autoankauf-kulmbach", label: "Ankauf Kulmbach" },
    { href: "/auto-verkaufen-sofort", label: "Sofort verkaufen" },
    { href: "/auto-verkaufen-export", label: "Export Ankauf" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<MapPin className="w-20 h-20 mx-auto" />}
      heroTitle="Autoankauf Hof"
      heroSubtitle="Auto verkaufen im Hofer Land – auch im nördlichsten Franken sind wir für Sie da!"
      mainTitle="Auto verkaufen in Hof – Wir kommen zu Ihnen"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <strong>Autoankauf in Hof</strong> – Die Stadt an der Saale im nördlichen Oberfranken gehört zu unserem erweiterten Einzugsgebiet. Wir kaufen Ihr Auto schnell und zu fairen Preisen.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Hof liegt etwas weiter von Nürnberg entfernt, aber das ist kein Hindernis. Wir sind regelmäßig in Oberfranken unterwegs und planen unsere Touren effizient. Der <strong>Autoankauf in Hof</strong> funktioniert genauso reibungslos wie in Nürnberg.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Autoankauf in Hof und Umgebung</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Hofer Innenstadt und Altstadt</li>
            <li>Hofeck, Moschendorf, Krötenbruck</li>
            <li>Landkreis: Münchberg, Naila</li>
            <li>Rehau, Schwarzenbach, Helmbrechts</li>
            <li>Fichtelgebirge und Frankenwald</li>
            <li>Grenzregion zu Sachsen und Thüringen</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Hof – Tor zu Bayern</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Hof ist bekannt für seine Lage am ehemaligen "Eisernen Vorhang" und seine Textilindustrie-Geschichte. Heute ist die Stadt ein wichtiger Verkehrsknotenpunkt und Oberzentrum in Oberfranken.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Für die Hofer bieten wir denselben zuverlässigen Service wie im gesamten Franken: Anfrage, Termin, Bewertung vor Ort, faires Angebot und sofortige Barzahlung.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Kontaktieren Sie uns für Ihr kostenloses Angebot aus dem Hofer Land!
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Auto in Hof verkaufen?"
      ctaSubtitle="Auch das Hofer Land ist unser Franken. Jetzt Angebot erhalten!"
      relatedLinks={relatedLinks}
    />
  )
}
