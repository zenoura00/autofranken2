import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { MapPin, Clock, Shield, Banknote, Car, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Autoankauf Ingolstadt | Auto verkaufen Audi-Stadt | Auto Ankauf Franken',
  description: 'Autoankauf Ingolstadt – Verkaufen Sie Ihr Auto in der Audi-Stadt. Schnell, fair & Barzahlung. Kostenlose Bewertung. Jetzt Angebot erhalten!',
}

export default function AutoankaufIngolstadtPage() {
  const faqs = [
    {
      question: "Kaufen Sie auch Audi-Fahrzeuge in Ingolstadt?",
      answer: "Natürlich! In der Audi-Stadt kaufen wir besonders viele Fahrzeuge der Marke, aber auch alle anderen Marken sind willkommen."
    },
    {
      question: "Wie weit ist Ingolstadt von Ihrem Standort?",
      answer: "Ingolstadt liegt etwa 90 km von Nürnberg entfernt. Wir sind regelmäßig vor Ort und können schnell bei Ihnen sein."
    },
    {
      question: "Kaufen Sie auch Firmenwagen aus dem Audi-Umfeld?",
      answer: "Ja, wir kaufen auch Firmenwagen, Dienstwagen und Flottenfahrzeuge. Für Unternehmen bieten wir eine schnelle Abwicklung."
    },
    {
      question: "In welchen Stadtteilen sind Sie aktiv?",
      answer: "Im gesamten Stadtgebiet: Innenstadt, Nord, Süd, West, Etting, Haunwöhr und allen anderen Stadtteilen."
    },
    {
      question: "Übernehmen Sie die Abmeldung in Ingolstadt?",
      answer: "Ja, die Abmeldung bei der Ingolstädter Zulassungsstelle ist kostenlos inklusive."
    }
  ]

  const features = [
    {
      icon: <Car className="w-12 h-12 text-orange-600" />,
      title: "Audi-Stadt",
      description: "Autoankauf in der Heimat der vier Ringe."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Regelmäßig vor Ort",
      description: "Wir sind häufig in Ingolstadt und Umgebung."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Faire Preise",
      description: "Besonders faire Preise für gepflegte Audis."
    }
  ]

  const benefits = [
    "Ankauf in ganz Ingolstadt",
    "Spezialist auch für Audi-Fahrzeuge",
    "Alle Stadtteile und Umgebung",
    "Kostenlose Anfahrt",
    "Kostenlose Fahrzeugbewertung vor Ort",
    "Sofortige Barzahlung garantiert",
    "Kostenlose Abmeldung",
    "Firmenwagen und Flottenankauf"
  ]

  const relatedLinks = [
    { href: "/autoankauf-nuernberg", label: "Ankauf Nürnberg" },
    { href: "/autoankauf-regensburg", label: "Ankauf Regensburg" },
    { href: "/autoankauf-neumarkt", label: "Ankauf Neumarkt" },
    { href: "/auto-verkaufen-sofort", label: "Sofort verkaufen" },
    { href: "/auto-verkaufen-export", label: "Export Ankauf" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<MapPin className="w-20 h-20 mx-auto" />}
      heroTitle="Autoankauf Ingolstadt"
      heroSubtitle="Auto verkaufen in der Audi-Stadt – schnell, fair und mit Barzahlung vor Ort!"
      mainTitle="Auto verkaufen in Ingolstadt – Ihr Partner an der Donau"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <strong>Autoankauf in Ingolstadt</strong> – Die Heimat von Audi ist auch ein wichtiger Teil unseres Einzugsgebiets. Wir kaufen alle Marken, sind aber natürlich besonders erfahren mit den Fahrzeugen der vier Ringe.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Ingolstadt liegt an der Donau, etwa 90 km von Nürnberg entfernt. Wir sind regelmäßig in der Region und bieten den Ingolstädtern einen schnellen und unkomplizierten <strong>Autoankauf-Service</strong>.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Autoankauf in Ingolstadt und Umgebung</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Ingolstädter Innenstadt und Altstadt</li>
            <li>Ingolstadt Nord, Süd, West</li>
            <li>Etting, Haunwöhr, Oberhaunstadt</li>
            <li>Friedrichshofen, Hollerstauden</li>
            <li>Umland: Gaimersheim, Wettstetten</li>
            <li>Kösching, Großmehring, Manching</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Ingolstadt – Die Audi-Stadt</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Ingolstadt ist untrennbar mit Audi verbunden. Viele Mitarbeiter des Autobauers und der zahlreichen Zulieferer leben hier. Das bedeutet: Viele gut gepflegte Fahrzeuge, oft mit attraktiver Ausstattung.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Wir kaufen nicht nur Audi, sondern alle Marken. Aber gerade bei Audi-Fahrzeugen können wir durch unsere Marktkenntnisse besonders faire Preise anbieten. Auch Firmenwagen und Dienstfahrzeuge sind bei uns willkommen.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Kontaktieren Sie uns für Ihr kostenloses Angebot. Wir freuen uns auf Ihre Anfrage aus der Audi-Stadt!
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Auto in Ingolstadt verkaufen?"
      ctaSubtitle="Von der Audi-Stadt in die Hand – jetzt Angebot erhalten!"
      relatedLinks={relatedLinks}
    />
  )
}
