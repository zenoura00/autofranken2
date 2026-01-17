import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { AlertTriangle, Clock, Shield, Banknote, Car, FileCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Unfallwagen verkaufen | Unfallschaden Ankauf | Auto Ankauf Franken',
  description: 'Unfallwagen verkaufen in Franken. Unfallauto mit Schaden? Wir kaufen Ihr Fahrzeug! Faire Preise, schnelle Abwicklung & Sofortankauf. Jetzt Angebot erhalten!',
}

export default function AutoVerkaufenUnfallschadenPage() {
  const faqs = [
    {
      question: "Kaufen Sie auch Autos mit schwerem Unfallschaden?",
      answer: "Ja, wir kaufen Unfallfahrzeuge jeder Art – vom kleinen Parkrempler bis zum wirtschaftlichen Totalschaden. Jedes Fahrzeug wird individuell bewertet und erhält ein faires Angebot."
    },
    {
      question: "Muss ich den Unfallschaden vor dem Verkauf reparieren?",
      answer: "Nein, verkaufen Sie das Fahrzeug im aktuellen Zustand. Eine Reparatur vor dem Verkauf lohnt sich in den meisten Fällen nicht und kann sogar Geld kosten, das Sie nicht wieder herausbekommen."
    },
    {
      question: "Wie bewerten Sie ein Unfallauto?",
      answer: "Wir berücksichtigen den Gesamtzustand: Art und Umfang des Schadens, Baujahr, Kilometerstand, Ausstattung und den Zustand der nicht beschädigten Teile. So ermitteln wir einen fairen Preis."
    },
    {
      question: "Brauche ich ein Gutachten für den Verkauf?",
      answer: "Nein, ein Gutachten ist nicht erforderlich. Unsere erfahrenen Ankäufer bewerten Ihr Fahrzeug kostenlos vor Ort. Wenn Sie bereits ein Gutachten haben, können wir es jedoch berücksichtigen."
    },
    {
      question: "Was passiert mit meinem Unfallauto nach dem Verkauf?",
      answer: "Je nach Zustand wird das Fahrzeug repariert und weiterverkauft, als Ersatzteilspender genutzt oder fachgerecht recycelt. Wir haben ein großes Netzwerk für alle Verwertungsmöglichkeiten."
    }
  ]

  const features = [
    {
      icon: <AlertTriangle className="w-12 h-12 text-orange-600" />,
      title: "Alle Unfallschäden",
      description: "Vom Blechschaden bis zum Totalschaden – wir kaufen jedes Unfallauto."
    },
    {
      icon: <Shield className="w-12 h-12 text-orange-600" />,
      title: "Ohne Reparatur",
      description: "Verkaufen Sie im aktuellen Zustand. Keine Reparaturen nötig."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Faire Preise",
      description: "Professionelle Bewertung für einen gerechten Ankaufspreis."
    }
  ]

  const benefits = [
    "Ankauf aller Unfallfahrzeuge",
    "Auch wirtschaftlicher Totalschaden",
    "Keine Reparatur vor Verkauf nötig",
    "Kein Gutachten erforderlich",
    "Kostenlose Abholung nicht fahrbereiter Autos",
    "Sofortige Barzahlung bei Übergabe",
    "Kostenlose Abmeldung des Fahrzeugs",
    "Schnelle Abwicklung – oft am selben Tag"
  ]

  const relatedLinks = [
    { href: "/auto-verkaufen-defektes-auto", label: "Defektes Auto" },
    { href: "/auto-verkaufen-mit-motorschaden", label: "Mit Motorschaden" },
    { href: "/auto-verkaufen-ohne-tuev", label: "Ohne TÜV" },
    { href: "/autoankauf-nuernberg", label: "Ankauf Nürnberg" },
    { href: "/autoankauf-bamberg", label: "Ankauf Bamberg" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<AlertTriangle className="w-20 h-20 mx-auto" />}
      heroTitle="Unfallwagen verkaufen"
      heroSubtitle="Unfall gehabt? Verkaufen Sie Ihr beschädigtes Fahrzeug schnell und unkompliziert zu fairen Konditionen."
      mainTitle="Unfallauto verkaufen – Schnell, fair und ohne Stress"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Nach einem Unfall stehen viele Autobesitzer vor der Frage: Reparieren oder verkaufen? Bei Auto Ankauf Franken bieten wir Ihnen eine einfache Lösung für Ihren <strong>Unfallwagen</strong>. Wir kaufen Fahrzeuge mit allen Arten von Unfallschäden.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Egal ob es sich um einen kleineren Blechschaden, einen Frontaufprall, Heckschaden oder sogar einen wirtschaftlichen Totalschaden handelt – wir machen Ihnen ein faires Angebot für Ihr <strong>Unfallauto</strong>.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Diese Unfallschäden kaufen wir an:</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Frontschäden und Heckschäden</li>
            <li>Seitliche Kollisionsschäden</li>
            <li>Rahmen- und Karosserieschäden</li>
            <li>Wirtschaftlicher Totalschaden</li>
            <li>Wasserschäden und Hagelschäden</li>
            <li>Brandschäden</li>
            <li>Vandalismus-Schäden</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Vorteile beim Verkauf an uns</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Der Verkauf eines Unfallwagens kann kompliziert sein. Private Käufer sind oft skeptisch, und Händler bieten häufig zu wenig. Bei uns erhalten Sie eine professionelle und faire Bewertung. Unsere Experten kennen den Markt und wissen, was Ihr Fahrzeug wert ist.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Sie müssen nichts reparieren und brauchen kein teures Gutachten. Wir kommen zu Ihnen, begutachten das Fahrzeug vor Ort und machen Ihnen direkt ein verbindliches Angebot. Bei Einigung zahlen wir sofort bar und kümmern uns um alles Weitere.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Unser Service ist in ganz Franken verfügbar: Nürnberg, Fürth, Erlangen, Bamberg, Würzburg, Regensburg und alle umliegenden Regionen. Auch nicht fahrbare Fahrzeuge holen wir kostenlos ab.
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Unfallwagen schnell verkaufen?"
      ctaSubtitle="Befreien Sie sich von Ihrem Unfallfahrzeug und erhalten Sie sofort Bargeld – ohne Reparaturkosten und ohne Stress!"
      relatedLinks={relatedLinks}
    />
  )
}
