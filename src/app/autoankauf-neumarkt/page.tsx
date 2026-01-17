import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { MapPin, Clock, Shield, Banknote, Mountain, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Autoankauf Neumarkt i.d.OPf. | Auto verkaufen | Auto Ankauf Franken',
  description: 'Autoankauf Neumarkt in der Oberpfalz – Verkaufen Sie Ihr Auto schnell und fair. Kostenlose Bewertung & Barzahlung. Jetzt Angebot erhalten!',
}

export default function AutoankaufNeumarktPage() {
  const faqs = [
    {
      question: "Liegt Neumarkt in Ihrem Einzugsgebiet?",
      answer: "Ja, Neumarkt in der Oberpfalz liegt nur etwa 40 km von Nürnberg entfernt und gehört zu unserem Kerngebiet."
    },
    {
      question: "Kaufen Sie auch im Landkreis Neumarkt?",
      answer: "Ja, der gesamte Landkreis gehört dazu: Parsberg, Velburg, Berching, Dietfurt und alle weiteren Orte."
    },
    {
      question: "Wie schnell können Sie in Neumarkt sein?",
      answer: "Durch die Nähe zu Nürnberg können wir oft noch am selben Tag bei Ihnen in Neumarkt sein."
    },
    {
      question: "Gibt es Kosten für die Anfahrt?",
      answer: "Nein, die Anfahrt nach Neumarkt ist komplett kostenlos – genau wie die Fahrzeugbewertung."
    },
    {
      question: "Übernehmen Sie die Abmeldung in Neumarkt?",
      answer: "Ja, die Abmeldung bei der Zulassungsstelle Neumarkt übernehmen wir kostenlos."
    }
  ]

  const features = [
    {
      icon: <Mountain className="w-12 h-12 text-orange-600" />,
      title: "Oberpfalz",
      description: "Autoankauf im Herzen der Oberpfalz."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Kurze Wege",
      description: "Nur 40 km von Nürnberg – schnell vor Ort."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Barzahlung",
      description: "Sofortige Barzahlung bei Übergabe."
    }
  ]

  const benefits = [
    "Neumarkt ist unser Kerngebiet",
    "Nur 40 km von Nürnberg",
    "Gesamter Landkreis abgedeckt",
    "Kostenlose Anfahrt",
    "Kostenlose Fahrzeugbewertung",
    "Sofortige Barzahlung",
    "Kostenlose Abmeldung",
    "Ankauf aller Fahrzeugzustände"
  ]

  const relatedLinks = [
    { href: "/autoankauf-nuernberg", label: "Ankauf Nürnberg" },
    { href: "/autoankauf-regensburg", label: "Ankauf Regensburg" },
    { href: "/autoankauf-amberg", label: "Ankauf Amberg" },
    { href: "/auto-verkaufen-sofort", label: "Sofort verkaufen" },
    { href: "/auto-verkaufen-defektes-auto", label: "Defektes Auto" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<MapPin className="w-20 h-20 mx-auto" />}
      heroTitle="Autoankauf Neumarkt i.d.OPf."
      heroSubtitle="Auto verkaufen in Neumarkt in der Oberpfalz – schnell, fair und unkompliziert!"
      mainTitle="Auto verkaufen in Neumarkt – Ihr Partner vor Ort"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <strong>Autoankauf in Neumarkt in der Oberpfalz</strong> – Die Große Kreisstadt liegt ideal zwischen Nürnberg und Regensburg und gehört fest zu unserem Einzugsgebiet.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Mit nur etwa 40 km Entfernung zu Nürnberg sind wir schnell in Neumarkt. Unser <strong>Autoankauf-Service</strong> deckt das gesamte Stadtgebiet und den Landkreis ab.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Autoankauf in Neumarkt und Umgebung</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Neumarkter Innenstadt und Altstadt</li>
            <li>Pölling, Woffenbach, Helena</li>
            <li>Holzheim, Stauf, Hasenheide</li>
            <li>Landkreis: Parsberg, Velburg</li>
            <li>Berching, Dietfurt, Freystadt</li>
            <li>Postbauer-Heng, Pyrbaum</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Neumarkt – Zentrum der Oberpfalz</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Neumarkt ist eine lebendige Stadt mit historischem Kern und moderner Wirtschaft. Die Lage an der A3 macht sie zu einem wichtigen Verkehrsknotenpunkt.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Wir bieten den Neumarktern einen unkomplizierten Autoverkauf: Anfrage, Bewertung vor Ort, faires Angebot und sofortige Barzahlung. Die Abmeldung erledigen wir selbstverständlich auch.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Kontaktieren Sie uns jetzt für Ihr kostenloses Angebot aus Neumarkt und Umgebung!
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Auto in Neumarkt verkaufen?"
      ctaSubtitle="Die Oberpfalz ist unser Gebiet. Jetzt Angebot erhalten!"
      relatedLinks={relatedLinks}
    />
  )
}
