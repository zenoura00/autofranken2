import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { MapPin, Clock, Shield, Banknote, Car, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Autoankauf Nürnberg | Ihr Auto schnell verkaufen | Auto Ankauf Franken',
  description: 'Autoankauf Nürnberg – Ihr Auto schnell & fair verkaufen. Kostenlose Bewertung, Sofortankauf & Barzahlung. Wir kommen zu Ihnen! Jetzt Angebot erhalten.',
}

export default function AutoankaufNuernbergPage() {
  const faqs = [
    {
      question: "Wo genau in Nürnberg kaufen Sie Autos an?",
      answer: "Wir kommen zu Ihnen – egal ob Sie in der Altstadt, Langwasser, Mögeldorf, Zerzabelshof, Röthenbach oder einem anderen Stadtteil wohnen. Ganz Nürnberg ist unser Einsatzgebiet."
    },
    {
      question: "Wie läuft der Autoankauf in Nürnberg ab?",
      answer: "Einfach und schnell: Sie kontaktieren uns, wir kommen zu Ihnen nach Nürnberg, bewerten Ihr Fahrzeug vor Ort kostenlos und machen ein Angebot. Bei Einigung zahlen wir sofort bar."
    },
    {
      question: "Wann können Sie nach Nürnberg kommen?",
      answer: "Wir sind flexibel! Oft können wir noch am selben Tag vorbeikommen. Vereinbaren Sie einfach einen Termin, der für Sie passt – auch abends oder am Wochenende."
    },
    {
      question: "Kaufen Sie auch gewerbliche Fahrzeuge in Nürnberg?",
      answer: "Ja, wir kaufen auch Firmenfahrzeuge, Transporter und Nutzfahrzeuge. Nürnberger Unternehmen schätzen unsere schnelle und unkomplizierte Abwicklung."
    },
    {
      question: "Übernehmen Sie die Abmeldung in Nürnberg?",
      answer: "Ja, die Abmeldung bei der Zulassungsstelle Nürnberg übernehmen wir komplett kostenlos für Sie. Sie müssen sich um nichts kümmern."
    }
  ]

  const features = [
    {
      icon: <MapPin className="w-12 h-12 text-orange-600" />,
      title: "Vor Ort in Nürnberg",
      description: "Wir kommen zu Ihnen – egal in welchem Stadtteil Sie wohnen."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Schnelle Abwicklung",
      description: "Oft noch am selben Tag – Termin nach Ihrem Zeitplan."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Barzahlung",
      description: "Sie erhalten Ihr Geld sofort bei Fahrzeugübergabe."
    }
  ]

  const benefits = [
    "Hausbesuch in ganz Nürnberg",
    "Alle Stadtteile: Altstadt bis Zerzabelshof",
    "Kostenlose Fahrzeugbewertung vor Ort",
    "Sofortige Barzahlung garantiert",
    "Kostenlose Abmeldung bei der Zulassungsstelle",
    "Flexible Termine – auch abends & am Wochenende",
    "Ankauf aller Marken und Modelle",
    "Über 15 Jahre Erfahrung in Nürnberg"
  ]

  const relatedLinks = [
    { href: "/autoankauf-fuerth", label: "Ankauf Fürth" },
    { href: "/autoankauf-erlangen", label: "Ankauf Erlangen" },
    { href: "/autoankauf-schwabach", label: "Ankauf Schwabach" },
    { href: "/auto-verkaufen-sofort", label: "Sofort verkaufen" },
    { href: "/auto-verkaufen-ohne-tuev", label: "Ohne TÜV verkaufen" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<MapPin className="w-20 h-20 mx-auto" />}
      heroTitle="Autoankauf Nürnberg"
      heroSubtitle="Ihr zuverlässiger Partner für den Autoverkauf in Nürnberg und Umgebung. Schnell, fair und unkompliziert!"
      mainTitle="Auto verkaufen in Nürnberg – Der schnelle Weg zum Bargeld"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Sie möchten Ihr <strong>Auto in Nürnberg verkaufen</strong>? Auto Ankauf Franken ist Ihr lokaler Partner für den schnellen und fairen Autoankauf. Als Nürnberger Unternehmen kennen wir die Stadt und sind schnell bei Ihnen – egal in welchem Stadtteil.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Von der Altstadt über Langwasser, Mögeldorf und Röthenbach bis nach Zerzabelshof – unser <strong>Autoankauf-Service in Nürnberg</strong> deckt das gesamte Stadtgebiet ab. Wir kommen zu Ihnen und bewerten Ihr Fahrzeug direkt vor Ort.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Warum Auto Ankauf Franken in Nürnberg?</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Nürnberg ist nicht nur die zweitgrößte Stadt Bayerns, sondern auch unser Heimatmarkt. Wir kennen den lokalen Automarkt und bieten Ihnen faire, marktgerechte Preise. Unsere langjährige Erfahrung in der Metropolregion Nürnberg macht uns zum idealen Partner für Ihren Autoverkauf.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Wir kaufen in allen Nürnberger Stadtteilen:</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Altstadt und St. Lorenz, St. Sebald</li>
            <li>Langwasser, Hasenbuck, Gleißhammer</li>
            <li>Mögeldorf, Laufamholz, Zerzabelshof</li>
            <li>Röthenbach, Eibach, Reichelsdorf</li>
            <li>Schweinau, Gostenhof, Johannis</li>
            <li>Maxfeld, Nordstadt, Schoppershof</li>
            <li>Und alle weiteren Stadtteile!</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Auch im Nürnberger Umland</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Neben dem Stadtgebiet sind wir auch im gesamten Umland tätig. Fürth, Erlangen, Schwabach, Lauf an der Pegnitz, Heroldsberg und alle Orte im Nürnberger Land gehören zu unserem Einzugsgebiet.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Kontaktieren Sie uns jetzt für eine kostenlose Fahrzeugbewertung. Wir sind telefonisch, per WhatsApp oder über unser Online-Formular erreichbar – und oft schon innerhalb weniger Stunden bei Ihnen in Nürnberg!
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Auto in Nürnberg verkaufen?"
      ctaSubtitle="Ihr lokaler Partner für den schnellen Autoankauf. Rufen Sie jetzt an oder füllen Sie das Formular aus!"
      relatedLinks={relatedLinks}
    />
  )
}
