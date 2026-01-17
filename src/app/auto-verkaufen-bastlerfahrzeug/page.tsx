import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { Hammer, Clock, Shield, Banknote, Cog, Car } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bastlerfahrzeug verkaufen | Projektauto Ankauf | Auto Ankauf Franken',
  description: 'Bastlerfahrzeug verkaufen in Franken. Projektauto oder Scheunenfund? Wir kaufen Ihr Fahrzeug! Faire Preise & schnelle Abwicklung. Jetzt Angebot erhalten!',
}

export default function AutoVerkaufenBastlerfahrzeugPage() {
  const faqs = [
    {
      question: "Was gilt als Bastlerfahrzeug?",
      answer: "Als Bastlerfahrzeug gelten Autos, die nicht mehr verkehrstauglich sind und umfangreiche Arbeiten benötigen: angefangene Restaurierungen, Scheunenfunde, Fahrzeuge mit mehreren Defekten oder Autos ohne Zulassung."
    },
    {
      question: "Kaufen Sie auch angefangene Restaurationsprojekte?",
      answer: "Ja, wir kaufen auch angefangene Projekte! Egal ob das Projekt in der Garage steht, teilweise zerlegt ist oder die Zeit zum Weitermachen fehlt – wir übernehmen Ihr Bastlerfahrzeug."
    },
    {
      question: "Mein Auto steht schon lange – ist das ein Problem?",
      answer: "Nein, überhaupt nicht. Wir kaufen auch Standfahrzeuge und Scheunenfunde. Ob das Auto 1 Jahr oder 10 Jahre gestanden hat, spielt für uns keine Rolle."
    },
    {
      question: "Werden lose Teile auch mit angekauft?",
      answer: "Ja, wenn Sie bereits Teile demontiert oder Ersatzteile gekauft haben, können diese im Ankauf berücksichtigt werden. Sprechen Sie uns einfach darauf an."
    },
    {
      question: "Wie bewerten Sie ein Bastlerfahrzeug?",
      answer: "Wir berücksichtigen den Grundwert des Fahrzeugs, die verbauten Teile, den Allgemeinzustand und das Potenzial. Oldtimer und Youngtimer können trotz schlechtem Zustand wertvoll sein."
    }
  ]

  const features = [
    {
      icon: <Hammer className="w-12 h-12 text-orange-600" />,
      title: "Alle Bastlerautos",
      description: "Scheunenfunde, Standfahrzeuge, angefangene Projekte – wir kaufen alles."
    },
    {
      icon: <Shield className="w-12 h-12 text-orange-600" />,
      title: "Faire Bewertung",
      description: "Wir erkennen das Potenzial und bewerten Ihr Fahrzeug entsprechend."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Unkompliziert",
      description: "Schnelle Abwicklung ohne bürokratischen Aufwand für Sie."
    }
  ]

  const benefits = [
    "Ankauf aller Bastlerfahrzeuge",
    "Scheunenfunde und Standfahrzeuge",
    "Angefangene Restaurierungen",
    "Fahrzeuge ohne Zulassung",
    "Teilzerlegte Autos mit losen Teilen",
    "Oldtimer und Youngtimer in jedem Zustand",
    "Kostenlose Abholung auch aus Scheune/Garage",
    "Sofortige Barzahlung bei Übergabe"
  ]

  const relatedLinks = [
    { href: "/auto-verkaufen-defektes-auto", label: "Defektes Auto" },
    { href: "/auto-verkaufen-ohne-tuev", label: "Ohne TÜV" },
    { href: "/auto-verkaufen-export", label: "Export Ankauf" },
    { href: "/autoankauf-nuernberg", label: "Ankauf Nürnberg" },
    { href: "/autoankauf-regensburg", label: "Ankauf Regensburg" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<Hammer className="w-20 h-20 mx-auto" />}
      heroTitle="Bastlerfahrzeug verkaufen"
      heroSubtitle="Projektauto in der Garage? Keine Zeit mehr zum Basteln? Wir kaufen Ihr Bastlerfahrzeug zu fairen Preisen!"
      mainTitle="Bastlerauto verkaufen – Wir kaufen Ihr Projekt"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Sie haben ein <strong>Bastlerfahrzeug</strong> in der Garage stehen und keine Zeit oder Lust mehr, das Projekt weiterzuführen? Bei Auto Ankauf Franken sind Sie richtig! Wir kaufen Projektautos, Scheunenfunde und angefangene Restaurierungen.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Ob Ihr Auto schon Jahre nicht mehr bewegt wurde, teilweise zerlegt in der Werkstatt steht oder einfach zu viele Baustellen auf einmal hat – wir machen Ihnen ein faires Angebot. Jedes <strong>Bastlerauto</strong> findet bei uns einen neuen Liebhaber.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Welche Bastlerfahrzeuge kaufen wir?</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Scheunenfunde und Dachbodenschätze</li>
            <li>Standfahrzeuge (auch jahrelange Standzeit)</li>
            <li>Angefangene Restaurierungsprojekte</li>
            <li>Teilzerlegte Fahrzeuge</li>
            <li>Autos ohne Papiere oder Zulassung</li>
            <li>Oldtimer und Youngtimer in jedem Zustand</li>
            <li>Unfertige Umbauten</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Warum Ihr Bastlerauto verkaufen?</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Viele Bastlerprojekte beginnen voller Enthusiasmus, aber dann kommt das Leben dazwischen. Zeitmangel, andere Prioritäten oder steigende Kosten – die Gründe sind vielfältig. Irgendwann steht das Auto nur noch im Weg und nimmt wertvollen Platz ein.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Anstatt das Fahrzeug weiter verstauben zu lassen, verkaufen Sie es an uns. Wir geben Ihrem Projekt eine neue Chance bei einem anderen Liebhaber oder verwerten die wertvollen Teile. Sie erhalten sofort Bargeld und gewinnen Platz in Ihrer Garage.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Unser Service umfasst ganz Franken und darüber hinaus. Wir holen Ihr Bastlerfahrzeug direkt aus der Scheune, Garage oder Werkstatt ab – natürlich kostenlos. Kontaktieren Sie uns für eine unverbindliche Bewertung!
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Bastlerprojekt loswerden?"
      ctaSubtitle="Verkaufen Sie Ihr Projektauto jetzt und machen Sie Platz für Neues – wir zahlen sofort bar!"
      relatedLinks={relatedLinks}
    />
  )
}
