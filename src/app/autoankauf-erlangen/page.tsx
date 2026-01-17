import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { MapPin, Clock, Shield, Banknote, GraduationCap, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Autoankauf Erlangen | Auto fair verkaufen | Auto Ankauf Franken',
  description: 'Autoankauf Erlangen – Verkaufen Sie Ihr Auto schnell und fair in der Universitätsstadt. Kostenlose Bewertung & Barzahlung. Jetzt Angebot erhalten!',
}

export default function AutoankaufErlangenPage() {
  const faqs = [
    {
      question: "Kaufen Sie auch Autos von Studenten in Erlangen?",
      answer: "Ja, natürlich! Wir kaufen Autos von jedem – ob Student, Angestellter bei Siemens oder Rentner. Der unkomplizierte Ablauf ist besonders bei Studenten beliebt, die schnell und ohne Aufwand verkaufen möchten."
    },
    {
      question: "Wo genau in Erlangen holen Sie Fahrzeuge ab?",
      answer: "Im gesamten Stadtgebiet: Innenstadt, Bruck, Büchenbach, Alterlangen, Röthelheimpark, Tennenlohe und alle anderen Stadtteile. Auch am Siemens-Campus oder in der Nähe der Universität."
    },
    {
      question: "Wie lange dauert der Autoankauf in Erlangen?",
      answer: "Von der Anfrage bis zur Barzahlung oft nur wenige Stunden. Wir sind schnell in Erlangen und können den Ankauf meist noch am selben Tag abwickeln."
    },
    {
      question: "Übernehmen Sie die Abmeldung bei der Zulassungsstelle Erlangen?",
      answer: "Ja, selbstverständlich! Die Abmeldung bei der Zulassungsstelle Erlangen-Höchstadt übernehmen wir komplett kostenlos für Sie."
    },
    {
      question: "Kaufen Sie auch Firmenwagen aus Erlangen an?",
      answer: "Ja, wir kaufen auch Firmenwagen und Flottenfahrzeuge. Erlanger Unternehmen profitieren von unserer schnellen Abwicklung bei mehreren Fahrzeugen."
    }
  ]

  const features = [
    {
      icon: <MapPin className="w-12 h-12 text-orange-600" />,
      title: "Ganz Erlangen",
      description: "Von der Uni bis Tennenlohe – wir kommen zu Ihnen."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Schneller Service",
      description: "Kurze Wege aus Nürnberg – oft am selben Tag vor Ort."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Sofort Bargeld",
      description: "Barzahlung direkt bei der Fahrzeugübergabe."
    }
  ]

  const benefits = [
    "Ankauf im gesamten Stadtgebiet Erlangen",
    "Schnelle Erreichbarkeit aus der Region",
    "Auch Fahrzeuge am Siemens-Campus",
    "Unkompliziert – ideal auch für Studenten",
    "Kostenlose Fahrzeugbewertung vor Ort",
    "Sofortige Barzahlung garantiert",
    "Kostenlose Abmeldung bei der Zulassungsstelle",
    "Firmenwagen und Flottenankauf möglich"
  ]

  const relatedLinks = [
    { href: "/autoankauf-nuernberg", label: "Ankauf Nürnberg" },
    { href: "/autoankauf-fuerth", label: "Ankauf Fürth" },
    { href: "/autoankauf-bamberg", label: "Ankauf Bamberg" },
    { href: "/auto-verkaufen-sofort", label: "Sofort verkaufen" },
    { href: "/auto-verkaufen-export", label: "Export Ankauf" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<MapPin className="w-20 h-20 mx-auto" />}
      heroTitle="Autoankauf Erlangen"
      heroSubtitle="Auto verkaufen in der Universitätsstadt – schnell, fair und unkompliziert. Wir kommen zu Ihnen!"
      mainTitle="Auto verkaufen in Erlangen – Ihr Partner vor Ort"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <strong>Autoankauf in Erlangen</strong> – bei Auto Ankauf Franken bekommen Sie einen schnellen und fairen Service. Die Hugenottenstadt ist ein wichtiger Teil unseres Einzugsgebiets, und wir sind regelmäßig vor Ort.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Ob Sie als Student ein altes Auto loswerden möchten, als Siemens-Mitarbeiter einen Firmenwagen verkaufen oder einfach Ihr Privatfahrzeug abgeben wollen – unser <strong>Autoankauf-Service in Erlangen</strong> ist für jeden die richtige Wahl.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Autoankauf in allen Erlanger Stadtteilen</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Innenstadt und Altstadt</li>
            <li>Bruck und Büchenbach</li>
            <li>Alterlangen und Röthelheimpark</li>
            <li>Tennenlohe und Frauenaurach</li>
            <li>Eltersdorf und Kriegenbrunn</li>
            <li>Siemens-Campus und Universitätsgelände</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Erlangen – Wirtschaft und Wissenschaft</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Erlangen ist als Universitäts- und Siemens-Stadt bekannt. Das bedeutet eine hohe Fluktuation an Fahrzeugen: Studenten, die nach dem Studium wegziehen, Mitarbeiter, die versetzt werden, oder Unternehmen, die ihre Flotte erneuern. Wir sind der ideale Partner für all diese Situationen.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Unser unkomplizierter Service ist besonders bei Menschen beliebt, die wenig Zeit haben. Keine langen Wartezeiten, keine komplizierten Prozesse – einfach anrufen, Termin machen und Bargeld erhalten.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Auch das Umland von Erlangen bedienen wir: Herzogenaurach, Höchstadt, Baiersdorf und alle umliegenden Gemeinden. Kontaktieren Sie uns für Ihre persönliche Fahrzeugbewertung!
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Auto in Erlangen verkaufen?"
      ctaSubtitle="Schnell, fair und unkompliziert – jetzt Angebot für Ihr Fahrzeug erhalten!"
      relatedLinks={relatedLinks}
    />
  )
}
