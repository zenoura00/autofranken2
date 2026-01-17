import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { Settings, Clock, Shield, Banknote, Wrench, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Auto mit Motorschaden verkaufen | Faire Preise | Auto Ankauf Franken',
  description: 'Auto mit Motorschaden verkaufen in Franken. Defekter Motor? Wir kaufen Ihr Fahrzeug trotzdem! Kostenlose Bewertung & Sofortankauf. Jetzt Angebot erhalten!',
}

export default function AutoVerkaufenMitMotorschadenPage() {
  const faqs = [
    {
      question: "Kaufen Sie wirklich Autos mit Motorschaden?",
      answer: "Ja, wir kaufen Fahrzeuge mit allen Arten von Motorschäden – ob Kolbenfresser, defekte Zylinderkopfdichtung, Turboschaden oder kompletter Motorausfall. Jedes Fahrzeug hat für uns einen Wert."
    },
    {
      question: "Wie wird der Preis bei Motorschaden berechnet?",
      answer: "Wir bewerten das gesamte Fahrzeug: Karosserie, Innenausstattung, Fahrwerk und alle funktionierenden Teile. Ein Motorschaden bedeutet nicht, dass das Auto wertlos ist. Viele Komponenten behalten ihren Wert."
    },
    {
      question: "Muss ich den Motor vorher reparieren lassen?",
      answer: "Nein, auf keinen Fall! Verkaufen Sie das Fahrzeug im aktuellen Zustand. Eine Motorreparatur oder ein Motorwechsel ist teuer und lohnt sich vor dem Verkauf meist nicht."
    },
    {
      question: "Können Sie mein Auto mit Motorschaden abholen?",
      answer: "Selbstverständlich! Wenn das Fahrzeug nicht mehr fahrbereit ist, holen wir es kostenlos bei Ihnen ab. Wir kommen mit einem Abschleppfahrzeug direkt zu Ihrem Standort."
    },
    {
      question: "Wie schnell kann der Ankauf erfolgen?",
      answer: "Wir können den Ankauf oft noch am selben Tag oder innerhalb von 24 Stunden durchführen. Nach Ihrer Anfrage melden wir uns umgehend bei Ihnen."
    }
  ]

  const features = [
    {
      icon: <Wrench className="w-12 h-12 text-orange-600" />,
      title: "Alle Motorschäden",
      description: "Egal welcher Defekt – Kolbenfresser, Turboschaden oder Kopfdichtung. Wir kaufen alle."
    },
    {
      icon: <Shield className="w-12 h-12 text-orange-600" />,
      title: "Faire Bewertung",
      description: "Wir bewerten das gesamte Fahrzeug, nicht nur den defekten Motor."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Sofort Bargeld",
      description: "Bei Einigung zahlen wir den vereinbarten Preis sofort in bar aus."
    }
  ]

  const benefits = [
    "Ankauf bei jedem Motorschaden",
    "Keine Reparatur vor Verkauf nötig",
    "Kostenlose Abholung auch nicht fahrbereiter Autos",
    "Faire Bewertung des Gesamtfahrzeugs",
    "Sofortige Barzahlung vor Ort",
    "Komplette Abwicklung durch uns",
    "Kostenlose Fahrzeugabmeldung",
    "Über 15 Jahre Erfahrung im Autoankauf"
  ]

  const relatedLinks = [
    { href: "/auto-verkaufen-defektes-auto", label: "Defektes Auto" },
    { href: "/auto-verkaufen-ohne-tuev", label: "Ohne TÜV" },
    { href: "/auto-verkaufen-bastlerfahrzeug", label: "Bastlerfahrzeug" },
    { href: "/autoankauf-nuernberg", label: "Ankauf Nürnberg" },
    { href: "/autoankauf-erlangen", label: "Ankauf Erlangen" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<Settings className="w-20 h-20 mx-auto" />}
      heroTitle="Auto mit Motorschaden verkaufen"
      heroSubtitle="Motorschaden? Kein Problem! Wir kaufen Ihr Fahrzeug auch mit defektem Motor zu fairen Konditionen."
      mainTitle="Motorschaden? Verkaufen Sie trotzdem zum besten Preis!"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Ein <strong>Motorschaden</strong> ist für viele Autobesitzer ein Schock. Die Reparaturkosten können schnell mehrere tausend Euro betragen – oft mehr als das Fahrzeug noch wert ist. Bei Auto Ankauf Franken bieten wir Ihnen eine schnelle und faire Lösung.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Wir sind auf den <strong>Ankauf von Fahrzeugen mit Motorschaden</strong> spezialisiert. Egal ob es sich um einen Kolbenfresser, eine defekte Zylinderkopfdichtung, einen Turboschaden oder einen kompletten Motorausfall handelt – wir kaufen Ihr Auto.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Welche Motorschäden kaufen wir an?</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Kolbenfresser und Pleuellagerschäden</li>
            <li>Defekte Zylinderkopfdichtung</li>
            <li>Turbo- und Kompressorschäden</li>
            <li>Nockenwellen- und Steuerkettenschäden</li>
            <li>Überhitzte oder festgefressene Motoren</li>
            <li>Wasserschäden am Motor</li>
            <li>Öl- und Kühlmittelverlust</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Warum bei uns verkaufen?</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Ein Fahrzeug ist mehr als nur sein Motor. Karosserie, Innenausstattung, Getriebe, Fahrwerk und viele weitere Teile behalten ihren Wert. Wir bewerten Ihr Fahrzeug ganzheitlich und machen Ihnen ein faires Angebot.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Sparen Sie sich den Ärger und die Kosten einer Motorreparatur! Verkaufen Sie Ihr Fahrzeug direkt an uns und erhalten Sie sofort Bargeld. Wir kommen zu Ihnen, bewerten das Auto vor Ort und holen es ab – auch wenn es nicht mehr fahrbereit ist.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Unser Service erstreckt sich über ganz Franken: Nürnberg, Fürth, Erlangen, Bamberg, Würzburg und alle umliegenden Gebiete. Rufen Sie uns an oder füllen Sie unser Formular aus – wir melden uns umgehend!
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Auto mit Motorschaden loswerden?"
      ctaSubtitle="Verkaufen Sie Ihr Fahrzeug jetzt stressfrei und erhalten Sie sofort Bargeld – ohne teure Reparaturen!"
      relatedLinks={relatedLinks}
    />
  )
}
