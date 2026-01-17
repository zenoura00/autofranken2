import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { MapPin, Clock, Shield, Banknote, Landmark, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Autoankauf Regensburg | Auto verkaufen Oberpfalz | Auto Ankauf Franken',
  description: 'Autoankauf Regensburg – Verkaufen Sie Ihr Auto in der Donaustadt. Schnell, fair & Barzahlung. Kostenlose Bewertung. Jetzt Angebot erhalten!',
}

export default function AutoankaufRegensburgPage() {
  const faqs = [
    {
      question: "Fahren Sie bis nach Regensburg?",
      answer: "Ja! Regensburg liegt etwa 100 km von Nürnberg entfernt, aber wir sind regelmäßig in der Oberpfalz unterwegs. Die Anfahrt ist kostenlos."
    },
    {
      question: "In welchen Stadtteilen kaufen Sie?",
      answer: "Im gesamten Stadtgebiet: Altstadt, Stadtamhof, Kumpfmühl, Westenviertel, Kasernenviertel, Burgweinting und allen weiteren."
    },
    {
      question: "Kaufen Sie auch im Landkreis Regensburg?",
      answer: "Ja, der Landkreis gehört zu unserem Gebiet: Neutraubling, Pentling, Regenstauf, Lappersdorf und alle anderen Orte."
    },
    {
      question: "Wie schnell können Sie in Regensburg sein?",
      answer: "In der Regel innerhalb von 24 Stunden. Kontaktieren Sie uns für einen schnellen Termin."
    },
    {
      question: "Übernehmen Sie die Abmeldung in Regensburg?",
      answer: "Ja, die Abmeldung bei der Regensburger Zulassungsstelle ist kostenlos inklusive."
    }
  ]

  const features = [
    {
      icon: <Landmark className="w-12 h-12 text-orange-600" />,
      title: "Donaustadt",
      description: "Autoankauf in der historischen UNESCO-Welterbestadt."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Zuverlässig",
      description: "Regelmäßig in der Oberpfalz unterwegs."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Barzahlung",
      description: "Sofortige Barzahlung bei Fahrzeugübergabe."
    }
  ]

  const benefits = [
    "Ankauf in ganz Regensburg",
    "UNESCO-Altstadt und alle Stadtteile",
    "Landkreis Regensburg inklusive",
    "Kostenlose Anfahrt in die Oberpfalz",
    "Kostenlose Fahrzeugbewertung vor Ort",
    "Sofortige Barzahlung garantiert",
    "Kostenlose Abmeldung",
    "Ankauf aller Marken und Modelle"
  ]

  const relatedLinks = [
    { href: "/autoankauf-nuernberg", label: "Ankauf Nürnberg" },
    { href: "/autoankauf-ingolstadt", label: "Ankauf Ingolstadt" },
    { href: "/autoankauf-amberg", label: "Ankauf Amberg" },
    { href: "/auto-verkaufen-sofort", label: "Sofort verkaufen" },
    { href: "/auto-verkaufen-export", label: "Export Ankauf" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<MapPin className="w-20 h-20 mx-auto" />}
      heroTitle="Autoankauf Regensburg"
      heroSubtitle="Auto verkaufen in der Donaustadt – schnell, fair und mit Barzahlung vor Ort!"
      mainTitle="Auto verkaufen in Regensburg – Ihr Partner in der Oberpfalz"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <strong>Autoankauf in Regensburg</strong> – Die historische Donaustadt mit ihrer mittelalterlichen Altstadt ist ein wichtiger Teil unseres Einzugsgebiets. Wir kaufen Ihr Auto schnell, fair und unkompliziert.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Regensburg liegt in der Oberpfalz, und wir sind regelmäßig in der Region unterwegs. Der <strong>Autoankauf in Regensburg</strong> funktioniert genauso reibungslos wie in unserem Kerngebiet Nürnberg.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Autoankauf in Regensburg und Umgebung</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Regensburger Altstadt (UNESCO-Welterbe)</li>
            <li>Stadtamhof, Kumpfmühl, Westenviertel</li>
            <li>Kasernenviertel, Galgenberg, Königswiesen</li>
            <li>Burgweinting, Oberisling, Harting</li>
            <li>Landkreis: Neutraubling, Regenstauf</li>
            <li>Lappersdorf, Pentling, Sinzing</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Regensburg – Geschichte und Moderne</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Regensburg ist eine der ältesten Städte Deutschlands mit einer beeindruckenden mittelalterlichen Altstadt, die zum UNESCO-Welterbe gehört. Gleichzeitig ist die Stadt ein moderner Wirtschaftsstandort mit Universität und Technologieunternehmen.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Für die Regensburger bieten wir einen unkomplizierten Autoverkauf: Sie rufen an, wir kommen, bewerten Ihr Fahrzeug vor Ort und zahlen sofort bar. Die Abmeldung erledigen wir selbstverständlich auch.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Fordern Sie jetzt Ihr kostenloses Angebot an. Wir freuen uns auf Ihre Anfrage aus der Donaustadt!
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Auto in Regensburg verkaufen?"
      ctaSubtitle="Auch die Oberpfalz gehört zu unserem Gebiet. Jetzt Angebot erhalten!"
      relatedLinks={relatedLinks}
    />
  )
}
