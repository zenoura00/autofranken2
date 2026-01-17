import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { MapPin, Clock, Shield, Banknote, Castle, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Autoankauf Coburg | Auto verkaufen Veste-Stadt | Auto Ankauf Franken',
  description: 'Autoankauf Coburg – Verkaufen Sie Ihr Auto in der Veste-Stadt. Schnell, fair & Barzahlung. Kostenlose Bewertung. Jetzt Angebot erhalten!',
}

export default function AutoankaufCoburgPage() {
  const faqs = [
    {
      question: "Wie weit ist Coburg von Ihrem Standort?",
      answer: "Coburg liegt etwa 90 km von Nürnberg entfernt. Wir sind regelmäßig in Oberfranken und können schnell bei Ihnen sein."
    },
    {
      question: "Kaufen Sie auch im Coburger Umland?",
      answer: "Ja, der gesamte Landkreis Coburg gehört dazu: Neustadt, Rödental, Bad Rodach, Seßlach und alle weiteren Orte."
    },
    {
      question: "Gibt es Kosten für die Anfahrt?",
      answer: "Nein, die Anfahrt nach Coburg ist komplett kostenlos – wie überall in Franken."
    },
    {
      question: "Wann können Sie in Coburg sein?",
      answer: "In der Regel innerhalb von 24 Stunden. Kontaktieren Sie uns für einen schnellen Termin."
    },
    {
      question: "Übernehmen Sie die Abmeldung in Coburg?",
      answer: "Ja, die Abmeldung bei der Coburger Zulassungsstelle ist kostenlos inklusive."
    }
  ]

  const features = [
    {
      icon: <Castle className="w-12 h-12 text-orange-600" />,
      title: "Veste-Stadt",
      description: "Autoankauf im Schatten der berühmten Veste Coburg."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Zuverlässig",
      description: "Regelmäßig in Oberfranken unterwegs."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Barzahlung",
      description: "Sofortige Barzahlung bei Übergabe."
    }
  ]

  const benefits = [
    "Ankauf in ganz Coburg",
    "Alle Stadtteile abgedeckt",
    "Landkreis Coburg inklusive",
    "Kostenlose Anfahrt",
    "Kostenlose Fahrzeugbewertung",
    "Sofortige Barzahlung",
    "Kostenlose Abmeldung",
    "Ankauf aller Fahrzeugzustände"
  ]

  const relatedLinks = [
    { href: "/autoankauf-bamberg", label: "Ankauf Bamberg" },
    { href: "/autoankauf-bayreuth", label: "Ankauf Bayreuth" },
    { href: "/autoankauf-hof", label: "Ankauf Hof" },
    { href: "/auto-verkaufen-sofort", label: "Sofort verkaufen" },
    { href: "/auto-verkaufen-ohne-tuev", label: "Ohne TÜV" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<MapPin className="w-20 h-20 mx-auto" />}
      heroTitle="Autoankauf Coburg"
      heroSubtitle="Auto verkaufen in der Veste-Stadt – schnell, fair und unkompliziert!"
      mainTitle="Auto verkaufen in Coburg – Wir sind für Sie da"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <strong>Autoankauf in Coburg</strong> – Die Stadt mit der berühmten Veste gehört zu unserem oberfränkischen Einzugsgebiet. Wir kaufen Ihr Auto schnell, fair und unkompliziert.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Coburg liegt im nördlichen Oberfranken, und wir sind regelmäßig in der Region unterwegs. Der <strong>Autoankauf in Coburg</strong> funktioniert genauso reibungslos wie in Nürnberg.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Autoankauf in Coburg und Umgebung</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Coburger Innenstadt und Altstadt</li>
            <li>Cortendorf, Ketschendorf, Creidlitz</li>
            <li>Landkreis: Neustadt, Rödental</li>
            <li>Bad Rodach, Seßlach, Sonnefeld</li>
            <li>Grenzregion zu Thüringen</li>
            <li>Itzgrund und Umgebung</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Coburg – Residenzstadt mit Geschichte</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Coburg ist bekannt für seine imposante Veste, die historische Verbindung zu den europäischen Königshäusern und seine lebendige Kulturszene. Die Stadt ist ein wichtiges Oberzentrum in Oberfranken.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Für die Coburger bieten wir einen zuverlässigen Autoankauf: Anfrage, Termin, Bewertung vor Ort, faires Angebot und sofortige Barzahlung. Alles aus einer Hand.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Fordern Sie jetzt Ihr kostenloses Angebot an. Wir freuen uns auf Ihre Anfrage aus der Veste-Stadt!
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Auto in Coburg verkaufen?"
      ctaSubtitle="Die Veste-Stadt gehört zu unserem Gebiet. Jetzt Angebot erhalten!"
      relatedLinks={relatedLinks}
    />
  )
}
