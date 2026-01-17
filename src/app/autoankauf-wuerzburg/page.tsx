import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { MapPin, Clock, Shield, Banknote, Wine, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Autoankauf Würzburg | Auto verkaufen Main-Metropole | Auto Ankauf Franken',
  description: 'Autoankauf Würzburg – Verkaufen Sie Ihr Auto in der Universitätsstadt am Main. Schnell, fair & Barzahlung. Jetzt kostenloses Angebot erhalten!',
}

export default function AutoankaufWuerzburgPage() {
  const faqs = [
    {
      question: "Ist Würzburg nicht zu weit für Ihren Service?",
      answer: "Nein! Würzburg liegt etwa 100 km von Nürnberg entfernt, aber wir fahren regelmäßig nach Unterfranken. Die Anfahrt ist für Sie kostenlos."
    },
    {
      question: "Kaufen Sie in ganz Würzburg?",
      answer: "Ja, im gesamten Stadtgebiet: Altstadt, Zellerau, Grombühl, Sanderau, Frauenland, Heuchelhof und alle weiteren Stadtteile."
    },
    {
      question: "Wie läuft der Ankauf in Würzburg ab?",
      answer: "Identisch wie überall: Anfrage, Terminvereinbarung, Bewertung vor Ort, faires Angebot und bei Einigung sofortige Barzahlung."
    },
    {
      question: "Kaufen Sie auch im Landkreis Würzburg?",
      answer: "Ja, der gesamte Landkreis gehört zu unserem Gebiet: Ochsenfurt, Randersacker, Veitshöchheim und alle weiteren Orte."
    },
    {
      question: "Übernehmen Sie die Abmeldung in Würzburg?",
      answer: "Ja, die Abmeldung bei der Würzburger Zulassungsstelle übernehmen wir kostenlos."
    }
  ]

  const features = [
    {
      icon: <Wine className="w-12 h-12 text-orange-600" />,
      title: "Main-Metropole",
      description: "Autoankauf in der Weinstadt und Universitätsstadt."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Regelmäßig vor Ort",
      description: "Wir sind häufig in Unterfranken unterwegs."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Faire Preise",
      description: "Marktgerechte Bewertung und Barzahlung."
    }
  ]

  const benefits = [
    "Ankauf in ganz Würzburg",
    "Alle Stadtteile abgedeckt",
    "Landkreis Würzburg inklusive",
    "Kostenlose Anfahrt nach Unterfranken",
    "Kostenlose Fahrzeugbewertung vor Ort",
    "Sofortige Barzahlung garantiert",
    "Kostenlose Abmeldung",
    "Ankauf aller Marken und Modelle"
  ]

  const relatedLinks = [
    { href: "/autoankauf-nuernberg", label: "Ankauf Nürnberg" },
    { href: "/autoankauf-ansbach", label: "Ankauf Ansbach" },
    { href: "/autoankauf-kitzingen", label: "Ankauf Kitzingen" },
    { href: "/auto-verkaufen-sofort", label: "Sofort verkaufen" },
    { href: "/auto-verkaufen-export", label: "Export Ankauf" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<MapPin className="w-20 h-20 mx-auto" />}
      heroTitle="Autoankauf Würzburg"
      heroSubtitle="Auto verkaufen in der Main-Metropole – schnell, fair und mit Barzahlung vor Ort!"
      mainTitle="Auto verkaufen in Würzburg – Ihr Partner in Unterfranken"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <strong>Autoankauf in Würzburg</strong> – Die Universitätsstadt am Main ist ein wichtiger Teil unseres fränkischen Einzugsgebiets. Wir kaufen Ihr Auto schnell, fair und unkompliziert.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Würzburg liegt in Unterfranken, aber das bedeutet nicht, dass wir weiter weg sind. Wir sind regelmäßig in der Region und können schnell bei Ihnen sein. Der <strong>Autoankauf in Würzburg</strong> läuft genauso reibungslos wie in Nürnberg.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Autoankauf in Würzburg und Umgebung</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Würzburger Altstadt und Innenstadt</li>
            <li>Zellerau, Grombühl, Sanderau</li>
            <li>Frauenland, Heuchelhof, Lengfeld</li>
            <li>Versbach, Rottenbauer, Heidingsfeld</li>
            <li>Landkreis: Ochsenfurt, Veitshöchheim</li>
            <li>Randersacker, Höchberg, Gerbrunn</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Würzburg – Wein, Kultur und Universität</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Würzburg ist bekannt für seinen Wein, die prächtige Residenz (UNESCO-Welterbe) und seine traditionsreiche Universität. Als Oberzentrum Unterfrankens ist die Stadt wirtschaftlich bedeutend.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Ob Sie als Student Ihr erstes Auto verkaufen, als Winzer einen Transporter loswerden oder Ihr Familienauto abgeben möchten – wir sind Ihr Partner für den Autoankauf in Würzburg.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Kontaktieren Sie uns jetzt für Ihre kostenlose Fahrzeugbewertung. Wir freuen uns auf Ihre Anfrage aus der Main-Metropole!
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Auto in Würzburg verkaufen?"
      ctaSubtitle="Auch Unterfranken gehört zu unserem Gebiet. Jetzt Angebot erhalten!"
      relatedLinks={relatedLinks}
    />
  )
}
