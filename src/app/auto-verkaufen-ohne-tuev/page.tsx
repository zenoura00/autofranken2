import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { FileX, Clock, Shield, Banknote, Car, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Auto verkaufen ohne TÜV | Höchstpreis garantiert | Auto Ankauf Franken',
  description: 'Auto ohne TÜV verkaufen in Franken. Wir kaufen Ihr Fahrzeug auch ohne gültige HU. Kostenlose Bewertung, Sofortankauf & Barzahlung. Jetzt Angebot erhalten!',
}

export default function AutoVerkaufenOhneTuevPage() {
  const faqs = [
    {
      question: "Kann ich mein Auto ohne TÜV wirklich verkaufen?",
      answer: "Ja, absolut! Wir kaufen Fahrzeuge unabhängig vom TÜV-Status. Egal ob die HU abgelaufen ist oder das Fahrzeug den TÜV nicht bestehen würde – wir machen Ihnen ein faires Angebot."
    },
    {
      question: "Muss ich für den Verkauf etwas reparieren lassen?",
      answer: "Nein, Sie müssen keinerlei Reparaturen durchführen. Wir kaufen Ihr Auto im aktuellen Zustand. Sparen Sie sich die Kosten für TÜV-Reparaturen und verkaufen Sie direkt an uns."
    },
    {
      question: "Wie läuft der Verkauf ohne TÜV ab?",
      answer: "Der Ablauf ist einfach: Sie füllen unser Formular aus, wir bewerten Ihr Fahrzeug kostenlos, kommen zu Ihnen und zahlen sofort bar. Die Abmeldung übernehmen wir ebenfalls kostenlos."
    },
    {
      question: "Bekomme ich trotzdem einen fairen Preis ohne TÜV?",
      answer: "Ja! Wir bewerten jedes Fahrzeug individuell. Der fehlende TÜV bedeutet nicht automatisch einen niedrigen Preis. Wir berücksichtigen den Gesamtzustand, Marke, Modell und Kilometerstand."
    },
    {
      question: "Wie lange dauert der Ankauf?",
      answer: "In der Regel können wir den Ankauf innerhalb von 24 Stunden abwickeln. Nach der Bewertung kommen wir zu Ihnen, zahlen bar und nehmen das Fahrzeug mit. Schnell und unkompliziert."
    }
  ]

  const features = [
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Schnelle Abwicklung",
      description: "Innerhalb von 24 Stunden wird Ihr Auto abgeholt und Sie erhalten Ihr Geld."
    },
    {
      icon: <Shield className="w-12 h-12 text-orange-600" />,
      title: "Keine Reparaturen nötig",
      description: "Sparen Sie sich teure TÜV-Reparaturen. Wir kaufen Ihr Auto so wie es ist."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Sofortige Barzahlung",
      description: "Sie erhalten den vereinbarten Betrag sofort in bar bei Fahrzeugübergabe."
    }
  ]

  const benefits = [
    "Ankauf auch mit abgelaufenem TÜV",
    "Keine HU-Reparaturen erforderlich",
    "Kostenlose Fahrzeugbewertung vor Ort",
    "Sofortige Barzahlung bei Übergabe",
    "Kostenlose Abholung in ganz Franken",
    "Kostenlose Fahrzeugabmeldung inklusive",
    "Faire und transparente Preise",
    "Schnelle Abwicklung in 24 Stunden"
  ]

  const relatedLinks = [
    { href: "/auto-verkaufen-mit-motorschaden", label: "Mit Motorschaden" },
    { href: "/auto-verkaufen-defektes-auto", label: "Defektes Auto" },
    { href: "/auto-verkaufen-unfallschaden", label: "Unfallwagen" },
    { href: "/autoankauf-nuernberg", label: "Ankauf Nürnberg" },
    { href: "/autoankauf-fuerth", label: "Ankauf Fürth" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<FileX className="w-20 h-20 mx-auto" />}
      heroTitle="Auto verkaufen ohne TÜV"
      heroSubtitle="TÜV abgelaufen? Kein Problem! Wir kaufen Ihr Fahrzeug auch ohne gültige Hauptuntersuchung zum Bestpreis."
      mainTitle="Auto ohne TÜV verkaufen – Einfach, schnell und fair"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Ihr <strong>TÜV ist abgelaufen</strong> und Sie möchten Ihr Auto verkaufen? Bei Auto Ankauf Franken sind Sie genau richtig! Wir sind spezialisiert auf den Ankauf von Fahrzeugen ohne gültige Hauptuntersuchung und bieten Ihnen eine unkomplizierte Lösung.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Viele Autobesitzer stehen vor dem Dilemma: Die HU ist abgelaufen, aber die notwendigen Reparaturen für eine neue TÜV-Plakette würden sich nicht mehr lohnen. Die gute Nachricht: Sie müssen keine teuren Reparaturen durchführen lassen! Wir kaufen Ihr <strong>Auto ohne TÜV</strong> in jedem Zustand.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Warum verkaufen ohne TÜV?</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Oft übersteigen die Kosten für TÜV-relevante Reparaturen den tatsächlichen Wert des Fahrzeugs. Bremsen, Auspuffanlage, Rost – die Liste der möglichen Mängel kann lang sein. Statt Geld in ein älteres Fahrzeug zu investieren, ist der direkte Verkauf oft die wirtschaftlichere Lösung.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Unser Service für Sie</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Wir machen Ihnen den Verkauf so einfach wie möglich. Füllen Sie unser Online-Formular aus und erhalten Sie eine erste Einschätzung. Unsere Experten kommen dann zu Ihnen – kostenlos und unverbindlich. Nach der Besichtigung erhalten Sie ein verbindliches Angebot. Bei Einigung zahlen wir sofort bar und kümmern uns um die Abmeldung.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Wir sind in ganz Franken für Sie unterwegs: Nürnberg, Fürth, Erlangen, Ansbach, Bamberg und darüber hinaus. Egal wo Sie sind – wir kommen zu Ihnen und holen Ihr Fahrzeug kostenlos ab.
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Auto ohne TÜV verkaufen?"
      ctaSubtitle="Sparen Sie sich teure Reparaturen! Verkaufen Sie Ihr Fahrzeug jetzt schnell und unkompliziert an uns."
      relatedLinks={relatedLinks}
    />
  )
}
