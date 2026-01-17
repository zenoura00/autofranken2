import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { MapPin, Clock, Shield, Banknote, Car, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Autoankauf Fürth | Auto schnell & fair verkaufen | Auto Ankauf Franken',
  description: 'Autoankauf Fürth – Verkaufen Sie Ihr Auto schnell und fair. Kostenlose Bewertung, Sofortankauf & Barzahlung in Fürth. Jetzt Angebot erhalten!',
}

export default function AutoankaufFuerthPage() {
  const faqs = [
    {
      question: "Kommen Sie auch nach Fürth?",
      answer: "Ja, selbstverständlich! Fürth gehört zu unserem Kerngebiet. Wir sind in kürzester Zeit bei Ihnen – egal ob in der Innenstadt, Stadeln, Dambach oder einem anderen Fürther Stadtteil."
    },
    {
      question: "Wie unterscheidet sich der Service in Fürth von Nürnberg?",
      answer: "Der Service ist identisch! Fürth und Nürnberg liegen so nah beieinander, dass wir beide Städte als ein gemeinsames Gebiet betrachten. Sie erhalten den gleichen schnellen und fairen Service."
    },
    {
      question: "Können Sie mein Auto in der Fürther Südstadt abholen?",
      answer: "Ja, wir holen Ihr Fahrzeug in allen Fürther Stadtteilen ab: Südstadt, Hardhöhe, Ronhof, Poppenreuth, Burgfarrnbach und überall sonst."
    },
    {
      question: "Übernehmen Sie die Abmeldung bei der Zulassungsstelle Fürth?",
      answer: "Ja, die komplette Abmeldung übernehmen wir kostenlos. Sie müssen nicht zur Zulassungsstelle – wir erledigen alle Formalitäten für Sie."
    },
    {
      question: "Wie schnell können Sie in Fürth sein?",
      answer: "Da wir in der Region ansässig sind, können wir oft noch am selben Tag bei Ihnen in Fürth sein. Rufen Sie einfach an und wir vereinbaren einen schnellen Termin."
    }
  ]

  const features = [
    {
      icon: <MapPin className="w-12 h-12 text-orange-600" />,
      title: "Ganz Fürth",
      description: "Von der Innenstadt bis Burgfarrnbach – wir sind überall in Fürth."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Schnell vor Ort",
      description: "Oft noch am selben Tag bei Ihnen in Fürth."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Faire Preise",
      description: "Marktgerechte Bewertung und sofortige Barzahlung."
    }
  ]

  const benefits = [
    "Hausbesuch in ganz Fürth",
    "Alle Stadtteile abgedeckt",
    "Kurze Anfahrtswege aus der Region",
    "Kostenlose Bewertung vor Ort",
    "Sofortige Barzahlung",
    "Kostenlose Abmeldung inklusive",
    "Flexible Terminvereinbarung",
    "Auch Abholung von nicht fahrbaren Autos"
  ]

  const relatedLinks = [
    { href: "/autoankauf-nuernberg", label: "Ankauf Nürnberg" },
    { href: "/autoankauf-erlangen", label: "Ankauf Erlangen" },
    { href: "/autoankauf-schwabach", label: "Ankauf Schwabach" },
    { href: "/auto-verkaufen-sofort", label: "Sofort verkaufen" },
    { href: "/auto-verkaufen-mit-motorschaden", label: "Mit Motorschaden" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<MapPin className="w-20 h-20 mx-auto" />}
      heroTitle="Autoankauf Fürth"
      heroSubtitle="Ihr Auto in Fürth verkaufen? Schnell, fair und unkompliziert – wir sind Ihr Partner vor Ort!"
      mainTitle="Auto verkaufen in Fürth – Einfach und schnell"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <strong>Autoankauf in Fürth</strong> – bei Auto Ankauf Franken sind Sie richtig! Die Kleeblattstadt ist Teil unseres Kerngebiets. Wir kaufen Ihr Auto schnell und zu fairen Konditionen, egal in welchem Fürther Stadtteil Sie wohnen.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Als regionales Unternehmen sind wir in kürzester Zeit bei Ihnen in Fürth. Vom ersten Anruf bis zur Barzahlung vergehen oft nur wenige Stunden. Unser <strong>Autoankauf-Service in Fürth</strong> ist unkompliziert und transparent.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Autoankauf in allen Fürther Stadtteilen</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Egal wo in Fürth Sie wohnen – wir kommen zu Ihnen. Unsere Ankäufer kennen die Stadt und sind schnell vor Ort, um Ihr Fahrzeug zu bewerten.
          </p>

          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Innenstadt und Altstadt</li>
            <li>Südstadt und Hardhöhe</li>
            <li>Ronhof und Stadeln</li>
            <li>Poppenreuth und Dambach</li>
            <li>Burgfarrnbach und Vach</li>
            <li>Unterfarrnbach und alle weiteren Ortsteile</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Fürth und die Metropolregion</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Fürth liegt im Herzen der Metropolregion Nürnberg. Das bedeutet für Sie: Kurze Wege und schnelle Verfügbarkeit. Ob Sie zur Arbeit nach Nürnberg pendeln oder in Fürth leben und arbeiten – wir passen uns Ihrem Zeitplan an.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Auch im Fürther Umland sind wir aktiv: Zirndorf, Oberasbach, Stein und alle angrenzenden Gemeinden gehören zu unserem Einzugsgebiet. Kontaktieren Sie uns für Ihren persönlichen Termin!
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Auto in Fürth verkaufen?"
      ctaSubtitle="Wir sind Ihr lokaler Ansprechpartner in der Kleeblattstadt. Jetzt Angebot einholen!"
      relatedLinks={relatedLinks}
    />
  )
}
