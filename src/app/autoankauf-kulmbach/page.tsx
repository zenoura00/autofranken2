import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { MapPin, Clock, Shield, Banknote, Beer, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Autoankauf Kulmbach | Auto verkaufen Bierstadt | Auto Ankauf Franken',
  description: 'Autoankauf Kulmbach – Verkaufen Sie Ihr Auto in der heimlichen Hauptstadt des Bieres. Schnell, fair & Barzahlung. Jetzt Angebot erhalten!',
}

export default function AutoankaufKulmbachPage() {
  const faqs = [
    {
      question: "Wie weit ist Kulmbach von Nürnberg?",
      answer: "Kulmbach liegt etwa 80 km von Nürnberg entfernt. Wir sind regelmäßig in Oberfranken unterwegs."
    },
    {
      question: "Kaufen Sie auch im Landkreis Kulmbach?",
      answer: "Ja, der gesamte Landkreis gehört dazu: Mainleus, Thurnau, Stadtsteinach, Neuenmarkt und alle weiteren Orte."
    },
    {
      question: "Wann können Sie in Kulmbach sein?",
      answer: "In der Regel innerhalb von 24 Stunden. Kontaktieren Sie uns für einen schnellen Termin."
    },
    {
      question: "Gibt es Kosten für die Anfahrt?",
      answer: "Nein, die Anfahrt nach Kulmbach ist komplett kostenlos."
    },
    {
      question: "Übernehmen Sie die Abmeldung in Kulmbach?",
      answer: "Ja, die Abmeldung bei der Kulmbacher Zulassungsstelle übernehmen wir kostenlos."
    }
  ]

  const features = [
    {
      icon: <Beer className="w-12 h-12 text-orange-600" />,
      title: "Bierstadt",
      description: "Autoankauf in der heimlichen Hauptstadt des Bieres."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Regelmäßig vor Ort",
      description: "Häufig in Oberfranken unterwegs."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Barzahlung",
      description: "Sofortige Barzahlung bei Übergabe."
    }
  ]

  const benefits = [
    "Ankauf in ganz Kulmbach",
    "Alle Stadtteile abgedeckt",
    "Landkreis Kulmbach inklusive",
    "Kostenlose Anfahrt",
    "Kostenlose Fahrzeugbewertung",
    "Sofortige Barzahlung",
    "Kostenlose Abmeldung",
    "Ankauf aller Fahrzeugzustände"
  ]

  const relatedLinks = [
    { href: "/autoankauf-bayreuth", label: "Ankauf Bayreuth" },
    { href: "/autoankauf-bamberg", label: "Ankauf Bamberg" },
    { href: "/autoankauf-hof", label: "Ankauf Hof" },
    { href: "/auto-verkaufen-sofort", label: "Sofort verkaufen" },
    { href: "/auto-verkaufen-export", label: "Export Ankauf" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<MapPin className="w-20 h-20 mx-auto" />}
      heroTitle="Autoankauf Kulmbach"
      heroSubtitle="Auto verkaufen in der Bierstadt – schnell, fair und unkompliziert!"
      mainTitle="Auto verkaufen in Kulmbach – Ihr Partner in Oberfranken"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <strong>Autoankauf in Kulmbach</strong> – Die heimliche Hauptstadt des Bieres mit der berühmten Plassenburg gehört zu unserem oberfränkischen Einzugsgebiet.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Kulmbach liegt zwischen Bayreuth und Bamberg, und wir sind regelmäßig in der Region unterwegs. Unser <strong>Autoankauf-Service</strong> deckt das gesamte Stadtgebiet und den Landkreis ab.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Autoankauf in Kulmbach und Umgebung</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Kulmbacher Innenstadt und Altstadt</li>
            <li>Plassenburg und Umgebung</li>
            <li>Landkreis: Mainleus, Thurnau</li>
            <li>Stadtsteinach, Neuenmarkt</li>
            <li>Untersteinach, Himmelkron</li>
            <li>Trebgast, Wirsberg, Marktleugast</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Kulmbach – Bier und Tradition</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Kulmbach ist weltweit bekannt für seine Brautradition und die jährlichen Bierfeste. Die imposante Plassenburg thront über der Stadt und beherbergt das Deutsche Zinnfigurenmuseum.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Für die Kulmbacher bieten wir einen zuverlässigen Autoankauf: Anfrage, Termin, Bewertung vor Ort, faires Angebot und sofortige Barzahlung. Alles aus einer Hand.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Kontaktieren Sie uns jetzt für Ihr kostenloses Angebot aus der Bierstadt!
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Auto in Kulmbach verkaufen?"
      ctaSubtitle="Die Bierstadt gehört zu unserem Gebiet. Jetzt Angebot erhalten!"
      relatedLinks={relatedLinks}
    />
  )
}
