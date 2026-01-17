import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { MapPin, Clock, Shield, Banknote, Landmark, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Autoankauf Bamberg | Auto verkaufen UNESCO-Stadt | Auto Ankauf Franken',
  description: 'Autoankauf Bamberg – Verkaufen Sie Ihr Auto in der UNESCO-Welterbestadt. Schnell, fair & mit Barzahlung. Jetzt kostenloses Angebot erhalten!',
}

export default function AutoankaufBambergPage() {
  const faqs = [
    {
      question: "Kaufen Sie Autos in der Bamberger Altstadt?",
      answer: "Ja, wir kaufen Autos im gesamten Stadtgebiet Bamberg – auch in der historischen Altstadt. Die Abholung ist kein Problem, wir organisieren alles."
    },
    {
      question: "Wie weit ist Bamberg von Ihrem Standort?",
      answer: "Bamberg liegt etwa 60 km von Nürnberg entfernt. Wir sind regelmäßig in Bamberg und können schnell bei Ihnen sein."
    },
    {
      question: "Kaufen Sie auch im Landkreis Bamberg?",
      answer: "Ja, unser Service umfasst den gesamten Landkreis: Hallstadt, Hirschaid, Strullendorf, Scheßlitz und alle weiteren Orte."
    },
    {
      question: "Gibt es Besonderheiten beim Ankauf in Bamberg?",
      answer: "Nein, der Ablauf ist identisch: Bewertung vor Ort, faires Angebot, sofortige Barzahlung und kostenlose Abmeldung."
    },
    {
      question: "Wann können Sie nach Bamberg kommen?",
      answer: "Wir können meist innerhalb von 24 Stunden in Bamberg sein. Kontaktieren Sie uns für einen schnellen Termin."
    }
  ]

  const features = [
    {
      icon: <Landmark className="w-12 h-12 text-orange-600" />,
      title: "UNESCO-Stadt",
      description: "Autoankauf in der historischen Welterbestadt Bamberg."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Schneller Service",
      description: "Oft innerhalb von 24 Stunden bei Ihnen in Bamberg."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Faire Preise",
      description: "Marktgerechte Bewertung und sofortige Barzahlung."
    }
  ]

  const benefits = [
    "Ankauf in ganz Bamberg und Umgebung",
    "Altstadt, Berggebiet und alle Stadtteile",
    "Landkreis Bamberg komplett abgedeckt",
    "Kostenlose Anfahrt und Bewertung",
    "Sofortige Barzahlung vor Ort",
    "Kostenlose Fahrzeugabmeldung",
    "Ankauf aller Marken und Modelle",
    "Flexible Termine nach Ihrem Zeitplan"
  ]

  const relatedLinks = [
    { href: "/autoankauf-nuernberg", label: "Ankauf Nürnberg" },
    { href: "/autoankauf-erlangen", label: "Ankauf Erlangen" },
    { href: "/autoankauf-bayreuth", label: "Ankauf Bayreuth" },
    { href: "/autoankauf-coburg", label: "Ankauf Coburg" },
    { href: "/auto-verkaufen-sofort", label: "Sofort verkaufen" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<MapPin className="w-20 h-20 mx-auto" />}
      heroTitle="Autoankauf Bamberg"
      heroSubtitle="Auto verkaufen in der UNESCO-Welterbestadt – schnell, fair und unkompliziert!"
      mainTitle="Auto verkaufen in Bamberg – Zuverlässig und fair"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <strong>Autoankauf in Bamberg</strong> – Die UNESCO-Welterbestadt mit ihrer einzigartigen Altstadt gehört zu unserem Einzugsgebiet in Oberfranken. Wir kaufen Ihr Auto schnell und zu fairen Preisen.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Ob Sie in der historischen Altstadt, im Berggebiet, der Gartenstadt oder einem anderen Stadtteil wohnen – unser <strong>Autoankauf-Service</strong> kommt zu Ihnen nach Bamberg.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Autoankauf in Bamberg und Umgebung</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Bamberger Altstadt und Inselstadt</li>
            <li>Berggebiet und Gartenstadt</li>
            <li>Gaustadt, Wunderburg, Kramersfeld</li>
            <li>Landkreis: Hallstadt, Hirschaid</li>
            <li>Strullendorf, Scheßlitz, Burgebrach</li>
            <li>Zapfendorf, Baunach und Umgebung</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Bamberg – Kultur und Lebensqualität</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Bamberg ist bekannt für seinen historischen Charme, die Universität und natürlich das berühmte Rauchbier. Als Oberzentrum in Oberfranken ist die Stadt ein wichtiger Wirtschaftsstandort.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Wir schätzen die Bamberger für ihre Bodenständigkeit und Zuverlässigkeit. Genau diese Werte leben wir beim Autoankauf: ehrliche Bewertung, faire Preise und ein unkomplizierter Ablauf.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Kontaktieren Sie uns für Ihr kostenloses Angebot. Wir freuen uns auf Ihre Anfrage aus Bamberg!
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Auto in Bamberg verkaufen?"
      ctaSubtitle="Die Welterbestadt Bamberg ist Teil unseres oberfränkischen Einzugsgebiets. Jetzt Angebot erhalten!"
      relatedLinks={relatedLinks}
    />
  )
}
