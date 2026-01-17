import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { MapPin, Clock, Shield, Banknote, Castle, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Autoankauf Ansbach | Auto verkaufen in Mittelfranken | Auto Ankauf Franken',
  description: 'Autoankauf Ansbach – Verkaufen Sie Ihr Auto schnell und fair in der Residenzstadt. Kostenlose Bewertung & Barzahlung. Jetzt Angebot erhalten!',
}

export default function AutoankaufAnsbachPage() {
  const faqs = [
    {
      question: "Wie weit ist Ansbach von Ihrem Standort entfernt?",
      answer: "Ansbach liegt nur etwa 40 km von Nürnberg entfernt. Wir sind regelmäßig in Ansbach und der Region unterwegs und können schnell bei Ihnen sein."
    },
    {
      question: "Kaufen Sie auch in den Ortsteilen von Ansbach?",
      answer: "Ja, wir kaufen im gesamten Stadtgebiet Ansbach und allen Ortsteilen: Eyb, Hennenbach, Schalkhausen, Brodswinden und alle weiteren."
    },
    {
      question: "Gibt es Zusatzkosten für die Anfahrt nach Ansbach?",
      answer: "Nein, die Anfahrt ist komplett kostenlos. Egal ob Nürnberg oder Ansbach – Sie zahlen keine Anfahrtskosten."
    },
    {
      question: "Wie schnell können Sie in Ansbach sein?",
      answer: "Wir können in der Regel innerhalb eines Tages in Ansbach sein. Bei Anfragen am Vormittag oft noch am selben Tag."
    },
    {
      question: "Übernehmen Sie die Abmeldung in Ansbach?",
      answer: "Ja, die Abmeldung bei der Zulassungsstelle Ansbach übernehmen wir kostenlos und vollständig für Sie."
    }
  ]

  const features = [
    {
      icon: <MapPin className="w-12 h-12 text-orange-600" />,
      title: "Ganz Ansbach",
      description: "Innenstadt und alle Ortsteile der Residenzstadt."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Schnell vor Ort",
      description: "Nur 40 km von Nürnberg – wir sind schnell bei Ihnen."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Barzahlung",
      description: "Sofortige Barzahlung bei Fahrzeugübergabe."
    }
  ]

  const benefits = [
    "Ankauf in ganz Ansbach und Umgebung",
    "Alle Ortsteile der Residenzstadt",
    "Keine Anfahrtskosten",
    "Kostenlose Fahrzeugbewertung vor Ort",
    "Sofortige Barzahlung garantiert",
    "Kostenlose Abmeldung inklusive",
    "Auch Ankauf im Landkreis Ansbach",
    "Flexible Terminvereinbarung"
  ]

  const relatedLinks = [
    { href: "/autoankauf-nuernberg", label: "Ankauf Nürnberg" },
    { href: "/autoankauf-wuerzburg", label: "Ankauf Würzburg" },
    { href: "/autoankauf-fuerth", label: "Ankauf Fürth" },
    { href: "/auto-verkaufen-sofort", label: "Sofort verkaufen" },
    { href: "/auto-verkaufen-ohne-tuev", label: "Ohne TÜV verkaufen" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<MapPin className="w-20 h-20 mx-auto" />}
      heroTitle="Autoankauf Ansbach"
      heroSubtitle="Auto verkaufen in der Residenzstadt Ansbach – schnell, fair und mit Barzahlung vor Ort!"
      mainTitle="Auto verkaufen in Ansbach – Ihr regionaler Partner"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <strong>Autoankauf in Ansbach</strong> – Die Residenzstadt in Mittelfranken gehört fest zu unserem Einzugsgebiet. Wenn Sie Ihr Auto in Ansbach verkaufen möchten, sind wir schnell bei Ihnen.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Mit nur etwa 40 Kilometern Entfernung zu Nürnberg sind wir in kürzester Zeit in Ansbach. Unser <strong>Autoankauf-Service</strong> deckt das gesamte Stadtgebiet und den Landkreis Ansbach ab.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Autoankauf in Ansbach und Umgebung</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Ansbacher Innenstadt und Altstadt</li>
            <li>Eyb, Hennenbach und Schalkhausen</li>
            <li>Brodswinden und Elpersdorf</li>
            <li>Landkreis Ansbach: Feuchtwangen, Dinkelsbühl</li>
            <li>Rothenburg ob der Tauber</li>
            <li>Herrieden, Heilsbronn und Umgebung</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Die Residenzstadt Ansbach</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Ansbach, die ehemalige Residenzstadt der Markgrafen, verbindet historischen Charme mit moderner Lebensqualität. Als Regierungssitz von Mittelfranken ist die Stadt ein wichtiges Zentrum der Region.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Wir kennen die Bedürfnisse der Ansbacher Bürger: Zuverlässigkeit, Fairness und unkomplizierte Abwicklung. Genau das bieten wir Ihnen beim Autoankauf.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Kontaktieren Sie uns telefonisch oder über unser Formular. Wir vereinbaren schnell einen Termin und kommen zu Ihnen nach Ansbach!
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Auto in Ansbach verkaufen?"
      ctaSubtitle="Die Residenzstadt Ansbach gehört zu unserem Kerngebiet. Jetzt Angebot erhalten!"
      relatedLinks={relatedLinks}
    />
  )
}
