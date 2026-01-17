import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { MapPin, Clock, Shield, Banknote, Sparkles, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Autoankauf Schwabach | Auto verkaufen Goldschlägerstadt | Auto Ankauf Franken',
  description: 'Autoankauf Schwabach – Verkaufen Sie Ihr Auto in der Goldschlägerstadt. Schnell, fair & Barzahlung. Jetzt kostenloses Angebot erhalten!',
}

export default function AutoankaufSchwabachPage() {
  const faqs = [
    {
      question: "Wie schnell können Sie nach Schwabach kommen?",
      answer: "Sehr schnell! Schwabach liegt direkt südlich von Nürnberg, nur etwa 15 km entfernt. Wir sind oft noch am selben Tag bei Ihnen."
    },
    {
      question: "Kaufen Sie in ganz Schwabach?",
      answer: "Ja, im gesamten Stadtgebiet: Altstadt, Eichwasen, Limbach, Wolkersdorf und allen anderen Stadtteilen."
    },
    {
      question: "Ist Schwabach Ihr Kerngebiet?",
      answer: "Ja, Schwabach gehört mit Nürnberg, Fürth und Erlangen zu unserem absoluten Kerngebiet. Wir sind sehr häufig vor Ort."
    },
    {
      question: "Übernehmen Sie die Abmeldung für Schwabacher Fahrzeuge?",
      answer: "Ja, die Abmeldung übernehmen wir komplett kostenlos – ob bei der Zulassungsstelle Schwabach oder Nürnberg."
    },
    {
      question: "Gibt es Besonderheiten beim Ankauf in Schwabach?",
      answer: "Nein, der Ablauf ist identisch: kostenlose Bewertung, faires Angebot, sofortige Barzahlung."
    }
  ]

  const features = [
    {
      icon: <Sparkles className="w-12 h-12 text-orange-600" />,
      title: "Goldschlägerstadt",
      description: "Autoankauf in der traditionsreichen Stadt Schwabach."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Blitzschnell",
      description: "Nur 15 km von Nürnberg – wir sind sofort da."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Barzahlung",
      description: "Sofortige Barzahlung bei Übergabe."
    }
  ]

  const benefits = [
    "Schwabach ist unser Kerngebiet",
    "Nur 15 km von Nürnberg",
    "Oft noch am selben Tag vor Ort",
    "Alle Stadtteile abgedeckt",
    "Kostenlose Fahrzeugbewertung",
    "Sofortige Barzahlung garantiert",
    "Kostenlose Abmeldung",
    "Ankauf aller Fahrzeugzustände"
  ]

  const relatedLinks = [
    { href: "/autoankauf-nuernberg", label: "Ankauf Nürnberg" },
    { href: "/autoankauf-fuerth", label: "Ankauf Fürth" },
    { href: "/autoankauf-neumarkt", label: "Ankauf Neumarkt" },
    { href: "/auto-verkaufen-sofort", label: "Sofort verkaufen" },
    { href: "/auto-verkaufen-ohne-tuev", label: "Ohne TÜV" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<MapPin className="w-20 h-20 mx-auto" />}
      heroTitle="Autoankauf Schwabach"
      heroSubtitle="Auto verkaufen in der Goldschlägerstadt – direkt vor Ihrer Haustür!"
      mainTitle="Auto verkaufen in Schwabach – Schneller geht's nicht"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <strong>Autoankauf in Schwabach</strong> – Die Goldschlägerstadt gehört zu unserem absoluten Kerngebiet. Mit nur 15 km Entfernung zu Nürnberg sind wir blitzschnell bei Ihnen.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Schwabach ist die kleinste kreisfreie Stadt Bayerns, aber für uns genauso wichtig wie die großen Nachbarstädte. Unser <strong>Autoankauf-Service in Schwabach</strong> ist schnell, fair und unkompliziert.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Autoankauf in Schwabach</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Schwabacher Altstadt und Innenstadt</li>
            <li>Eichwasen und Limbach</li>
            <li>Wolkersdorf und Forsthof</li>
            <li>Penzendorf und Nasbach</li>
            <li>Alle Stadtteile und Siedlungen</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Schwabach – Tradition und Nähe</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Schwabach ist bekannt für seine Goldschlägertradition und die gut erhaltene Altstadt. Die Stadt liegt ideal zwischen Nürnberg und dem Fränkischen Seenland.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Für die Schwabacher bedeutet das: Wir sind schnell vor Ort. Oft können wir noch am selben Tag der Anfrage vorbeikommen, Ihr Fahrzeug bewerten und bei Einigung sofort bar bezahlen.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Rufen Sie jetzt an oder füllen Sie das Formular aus. Wir freuen uns auf Ihre Anfrage aus der Goldschlägerstadt!
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Auto in Schwabach verkaufen?"
      ctaSubtitle="Wir sind Ihr Nachbar – schnell, fair und unkompliziert!"
      relatedLinks={relatedLinks}
    />
  )
}
