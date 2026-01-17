import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { MapPin, Clock, Shield, Banknote, Music, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Autoankauf Bayreuth | Auto verkaufen Festspielstadt | Auto Ankauf Franken',
  description: 'Autoankauf Bayreuth – Verkaufen Sie Ihr Auto in der Festspielstadt. Schnell, fair & Barzahlung. Kostenlose Bewertung. Jetzt Angebot erhalten!',
}

export default function AutoankaufBayreuthPage() {
  const faqs = [
    {
      question: "Wie weit fahren Sie nach Bayreuth?",
      answer: "Bayreuth liegt etwa 80 km von Nürnberg entfernt. Wir fahren regelmäßig nach Bayreuth und den Landkreis – die Entfernung ist kein Problem."
    },
    {
      question: "Kaufen Sie auch im Bayreuther Umland?",
      answer: "Ja, der gesamte Landkreis Bayreuth gehört zu unserem Gebiet: Pegnitz, Creußen, Weidenberg, Eckersdorf und alle anderen Orte."
    },
    {
      question: "Gibt es Extrakosten für die Anfahrt nach Bayreuth?",
      answer: "Nein, die Anfahrt ist kostenlos. Sie zahlen nichts für unseren Besuch vor Ort."
    },
    {
      question: "Wann können Sie in Bayreuth sein?",
      answer: "In der Regel können wir innerhalb von 24 Stunden in Bayreuth sein. Vereinbaren Sie einfach einen Termin."
    },
    {
      question: "Melden Sie mein Auto bei der Bayreuther Zulassungsstelle ab?",
      answer: "Ja, die Abmeldung bei der Zulassungsstelle Bayreuth übernehmen wir komplett kostenlos."
    }
  ]

  const features = [
    {
      icon: <Music className="w-12 h-12 text-orange-600" />,
      title: "Festspielstadt",
      description: "Autoankauf in der weltberühmten Wagner-Stadt Bayreuth."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Zuverlässig",
      description: "Termintreue und schnelle Abwicklung."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Barzahlung",
      description: "Sofortige Barzahlung bei Übergabe."
    }
  ]

  const benefits = [
    "Ankauf in ganz Bayreuth",
    "Alle Stadtteile abgedeckt",
    "Landkreis Bayreuth inklusive",
    "Kostenlose Anfahrt – auch 80 km",
    "Kostenlose Fahrzeugbewertung",
    "Sofortige Barzahlung vor Ort",
    "Kostenlose Abmeldung",
    "Ankauf aller Fahrzeugzustände"
  ]

  const relatedLinks = [
    { href: "/autoankauf-nuernberg", label: "Ankauf Nürnberg" },
    { href: "/autoankauf-bamberg", label: "Ankauf Bamberg" },
    { href: "/autoankauf-hof", label: "Ankauf Hof" },
    { href: "/autoankauf-kulmbach", label: "Ankauf Kulmbach" },
    { href: "/auto-verkaufen-sofort", label: "Sofort verkaufen" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<MapPin className="w-20 h-20 mx-auto" />}
      heroTitle="Autoankauf Bayreuth"
      heroSubtitle="Auto verkaufen in der Festspielstadt – schnell, fair und mit Barzahlung vor Ort!"
      mainTitle="Auto verkaufen in Bayreuth – Wir kommen zu Ihnen"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <strong>Autoankauf in Bayreuth</strong> – Die weltbekannte Festspielstadt in Oberfranken gehört zu unserem Einzugsgebiet. Wenn Sie Ihr Auto in Bayreuth verkaufen möchten, sind wir schnell bei Ihnen.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Auch wenn Bayreuth etwas weiter von Nürnberg entfernt liegt, sind wir regelmäßig in der Region unterwegs. Unser <strong>Autoankauf-Service</strong> deckt das gesamte Stadtgebiet und den Landkreis ab.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Autoankauf in Bayreuth und Umgebung</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Bayreuther Innenstadt und Altstadt</li>
            <li>Festspielhügel und Universitätsviertel</li>
            <li>St. Georgen, St. Johannis, Hammerstatt</li>
            <li>Landkreis: Pegnitz, Creußen</li>
            <li>Weidenberg, Eckersdorf, Bindlach</li>
            <li>Fichtelgebirge und Umgebung</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Bayreuth – Kultur und Wirtschaft</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Bayreuth ist weltweit bekannt für die Richard-Wagner-Festspiele und seine barocke Architektur. Aber die Stadt ist auch ein wichtiger Universitäts- und Wirtschaftsstandort in Oberfranken.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Wir bieten den Bayreuthern einen unkomplizierten Autoverkauf: Sie kontaktieren uns, wir kommen zu Ihnen, bewerten Ihr Fahrzeug und zahlen sofort bar. Die Abmeldung erledigen wir ebenfalls.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Fordern Sie jetzt Ihr kostenloses Angebot an. Wir freuen uns auf Ihre Anfrage aus der Festspielstadt!
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Auto in Bayreuth verkaufen?"
      ctaSubtitle="Auch die Festspielstadt gehört zu unserem Gebiet. Jetzt Angebot erhalten!"
      relatedLinks={relatedLinks}
    />
  )
}
