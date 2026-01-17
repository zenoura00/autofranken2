import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { Wrench, Clock, Shield, Banknote, Settings, Car } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Defektes Auto verkaufen | Höchstpreis | Auto Ankauf Franken',
  description: 'Defektes Auto verkaufen in Franken. Fahrzeug mit Defekt? Wir kaufen es! Alle Defekte willkommen. Kostenlose Bewertung & Sofortankauf. Jetzt Angebot einholen!',
}

export default function AutoVerkaufenDefektesAutoPage() {
  const faqs = [
    {
      question: "Welche Defekte kaufen Sie an?",
      answer: "Wir kaufen Fahrzeuge mit allen möglichen Defekten: Getriebeschäden, Elektronikprobleme, defekte Klimaanlage, Rostschäden, Fahrwerksschäden und vieles mehr. Machen Sie uns einfach ein Angebot."
    },
    {
      question: "Lohnt sich der Verkauf eines defekten Autos?",
      answer: "In den meisten Fällen ja! Reparaturkosten übersteigen oft den Fahrzeugwert. Durch den direkten Verkauf sparen Sie sich Werkstattkosten und erhalten trotzdem einen fairen Preis für Ihr Fahrzeug."
    },
    {
      question: "Muss ich den Defekt vor dem Verkauf reparieren?",
      answer: "Nein, verkaufen Sie das Auto so wie es ist. Wir kaufen defekte Fahrzeuge im aktuellen Zustand und bewerten sie entsprechend fair."
    },
    {
      question: "Wie ermitteln Sie den Preis für ein defektes Auto?",
      answer: "Wir bewerten das gesamte Fahrzeug: Alter, Kilometerstand, Ausstattung und natürlich Art und Umfang des Defekts. Viele Teile behalten ihren Wert, auch wenn andere defekt sind."
    },
    {
      question: "Können Sie mein nicht fahrbereites Auto abholen?",
      answer: "Ja, wir holen auch nicht fahrbare Fahrzeuge kostenlos ab. Egal ob in der Garage, auf dem Parkplatz oder beim Pannendienst – wir kommen zu Ihnen."
    }
  ]

  const features = [
    {
      icon: <Wrench className="w-12 h-12 text-orange-600" />,
      title: "Alle Defekte",
      description: "Getriebe, Elektronik, Fahrwerk, Rost – wir kaufen alle defekten Fahrzeuge."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Schnell verkaufen",
      description: "Keine langen Wartezeiten. Oft können wir noch am selben Tag kaufen."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Sofort Bargeld",
      description: "Bei Einigung erhalten Sie sofort Barzahlung bei Fahrzeugübergabe."
    }
  ]

  const benefits = [
    "Ankauf aller technischen Defekte",
    "Getriebe- und Kupplungsschäden",
    "Elektronik- und Steuergerätdefekte",
    "Klimaanlage und Standheizung defekt",
    "Rostschäden und Durchrostungen",
    "Fahrwerks- und Bremsenschäden",
    "Keine Reparatur vor Verkauf nötig",
    "Kostenlose Abholung & Abmeldung"
  ]

  const relatedLinks = [
    { href: "/auto-verkaufen-mit-motorschaden", label: "Mit Motorschaden" },
    { href: "/auto-verkaufen-ohne-tuev", label: "Ohne TÜV" },
    { href: "/auto-verkaufen-bastlerfahrzeug", label: "Bastlerfahrzeug" },
    { href: "/autoankauf-nuernberg", label: "Ankauf Nürnberg" },
    { href: "/autoankauf-wuerzburg", label: "Ankauf Würzburg" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<Wrench className="w-20 h-20 mx-auto" />}
      heroTitle="Defektes Auto verkaufen"
      heroSubtitle="Ihr Auto hat einen Defekt? Verkaufen Sie es jetzt an uns – ohne Reparatur und zu fairen Konditionen!"
      mainTitle="Defektes Fahrzeug verkaufen – Wir kaufen jedes Auto"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Ihr Auto macht Probleme und die Reparaturkosten wären zu hoch? Bei Auto Ankauf Franken kaufen wir <strong>defekte Autos</strong> aller Art. Sparen Sie sich den Werkstattbesuch und verkaufen Sie direkt an uns!
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Egal ob es sich um einen Getriebeschaden, Elektronikprobleme, eine defekte Klimaanlage oder Rostschäden handelt – wir machen Ihnen ein faires Angebot. Jedes <strong>defekte Fahrzeug</strong> hat für uns einen Wert.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Diese Defekte sind kein Problem:</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Getriebeschäden (Automatik und Schaltgetriebe)</li>
            <li>Kupplungsprobleme und Schwungradschäden</li>
            <li>Elektronikdefekte und Steuergerätfehler</li>
            <li>Defekte Klimaanlage oder Standheizung</li>
            <li>Rostschäden und Durchrostungen</li>
            <li>Fahrwerks- und Lenkungsschäden</li>
            <li>Bremsenprobleme</li>
            <li>Auspuff- und Katalysatorschäden</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Warum ein defektes Auto verkaufen?</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Viele Defekte kosten mehr in der Reparatur, als das Auto danach noch wert ist. Ein neues Getriebe kann schnell mehrere tausend Euro kosten. Elektronikprobleme sind oft schwer zu diagnostizieren und teuer zu beheben. Rostschäden können TÜV-relevant sein und aufwendige Schweißarbeiten erfordern.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Statt Geld in unsichere Reparaturen zu investieren, ist der Verkauf oft die bessere Wahl. Wir kaufen Ihr defektes Auto und Sie erhalten sofort Bargeld. Das gesparte Geld können Sie in ein neues, zuverlässiges Fahrzeug investieren.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Wir sind in der gesamten Region aktiv: Nürnberg, Fürth, Erlangen, Ansbach, Bamberg, Bayreuth, Würzburg und darüber hinaus. Kontaktieren Sie uns für eine kostenlose Bewertung!
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Defektes Auto loswerden?"
      ctaSubtitle="Keine teuren Reparaturen mehr! Verkaufen Sie Ihr defektes Fahrzeug jetzt und erhalten Sie sofort Bargeld."
      relatedLinks={relatedLinks}
    />
  )
}
