import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { MapPin, Clock, Shield, Banknote, Wine, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Autoankauf Kitzingen | Auto verkaufen Weinland | Auto Ankauf Franken',
  description: 'Autoankauf Kitzingen – Verkaufen Sie Ihr Auto im fränkischen Weinland. Schnell, fair & Barzahlung. Jetzt kostenloses Angebot erhalten!',
}

export default function AutoankaufKitzingenPage() {
  const faqs = [
    {
      question: "Liegt Kitzingen in Ihrem Einzugsgebiet?",
      answer: "Ja, Kitzingen liegt etwa 80 km von Nürnberg in Unterfranken. Wir sind regelmäßig in der Weinregion unterwegs."
    },
    {
      question: "Kaufen Sie auch im Landkreis Kitzingen?",
      answer: "Ja, der gesamte Landkreis gehört dazu: Volkach, Dettelbach, Iphofen, Marktbreit und alle weiteren Weinorte."
    },
    {
      question: "Wann können Sie in Kitzingen sein?",
      answer: "In der Regel innerhalb von 24 Stunden. Kontaktieren Sie uns für einen Termin."
    },
    {
      question: "Gibt es Kosten für die Anfahrt nach Unterfranken?",
      answer: "Nein, die Anfahrt ist überall in Franken kostenlos – auch nach Kitzingen."
    },
    {
      question: "Übernehmen Sie die Abmeldung in Kitzingen?",
      answer: "Ja, die Abmeldung bei der Kitzinger Zulassungsstelle übernehmen wir kostenlos."
    }
  ]

  const features = [
    {
      icon: <Wine className="w-12 h-12 text-orange-600" />,
      title: "Weinland",
      description: "Autoankauf im Herzen des fränkischen Weinlands."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Regelmäßig vor Ort",
      description: "Häufig in Unterfranken unterwegs."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Barzahlung",
      description: "Sofortige Barzahlung bei Übergabe."
    }
  ]

  const benefits = [
    "Ankauf in ganz Kitzingen",
    "Fränkisches Weinland abgedeckt",
    "Landkreis Kitzingen inklusive",
    "Kostenlose Anfahrt",
    "Kostenlose Fahrzeugbewertung",
    "Sofortige Barzahlung",
    "Kostenlose Abmeldung",
    "Ankauf aller Fahrzeugzustände"
  ]

  const relatedLinks = [
    { href: "/autoankauf-wuerzburg", label: "Ankauf Würzburg" },
    { href: "/autoankauf-nuernberg", label: "Ankauf Nürnberg" },
    { href: "/autoankauf-ansbach", label: "Ankauf Ansbach" },
    { href: "/auto-verkaufen-sofort", label: "Sofort verkaufen" },
    { href: "/auto-verkaufen-export", label: "Export Ankauf" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<MapPin className="w-20 h-20 mx-auto" />}
      heroTitle="Autoankauf Kitzingen"
      heroSubtitle="Auto verkaufen im fränkischen Weinland – schnell, fair und unkompliziert!"
      mainTitle="Auto verkaufen in Kitzingen – Ihr Partner im Weinland"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <strong>Autoankauf in Kitzingen</strong> – Die Weinstadt am Main gehört zu unserem unterfränkischen Einzugsgebiet. Wir kaufen Ihr Auto schnell und zu fairen Preisen.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Kitzingen liegt im Herzen des fränkischen Weinlands, und wir sind regelmäßig in der Region unterwegs. Unser <strong>Autoankauf-Service</strong> deckt das gesamte Stadtgebiet und den Landkreis ab.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Autoankauf in Kitzingen und Umgebung</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Kitzinger Innenstadt und Altstadt</li>
            <li>Etwashausen, Sickershausen</li>
            <li>Landkreis: Volkach, Dettelbach</li>
            <li>Iphofen, Mainbernheim, Marktbreit</li>
            <li>Wiesentheid, Schwarzach, Sommerach</li>
            <li>Mainschleife und Weinberge</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Kitzingen – Wein und Lebensfreude</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Kitzingen ist das Zentrum des fränkischen Weinbaus. Die Stadt am Main ist bekannt für ihre Weinkultur, die historische Altstadt und die Lage an der berühmten Mainschleife.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Ob Winzer, der einen Transporter abgeben möchte, oder Privatperson mit Familienauto – wir kaufen alle Fahrzeuge. Die unkomplizierte Abwicklung lässt Ihnen mehr Zeit für die schönen Dinge des Lebens.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Kontaktieren Sie uns jetzt für Ihr kostenloses Angebot aus dem fränkischen Weinland!
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Auto in Kitzingen verkaufen?"
      ctaSubtitle="Das Weinland ist unser Franken. Jetzt Angebot erhalten!"
      relatedLinks={relatedLinks}
    />
  )
}
