import { Metadata } from 'next'
import SEOPageTemplate from '@/components/SEOPageTemplate'
import { Globe, Clock, Shield, Banknote, Truck, FileCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Auto für Export verkaufen | Export Ankauf | Auto Ankauf Franken',
  description: 'Auto für Export verkaufen in Franken. Wir kaufen Fahrzeuge für den Export! Ältere Modelle, hohe Laufleistung – kein Problem. Sofortankauf & Barzahlung!',
}

export default function AutoVerkaufenExportPage() {
  const faqs = [
    {
      question: "Welche Autos sind für den Export geeignet?",
      answer: "Grundsätzlich alle Fahrzeuge! Besonders gefragt sind zuverlässige Marken wie Toyota, Mercedes, BMW und VW. Auch ältere Modelle mit hoher Laufleistung sind für den Export interessant."
    },
    {
      question: "Warum werden Autos exportiert?",
      answer: "In vielen Ländern sind deutsche Gebrauchtwagen sehr begehrt wegen ihrer Qualität und Zuverlässigkeit. Fahrzeuge, die hier nicht mehr wirtschaftlich sind, können dort noch viele Jahre fahren."
    },
    {
      question: "Spielt die Laufleistung eine Rolle?",
      answer: "Für den Export ist eine hohe Laufleistung oft weniger problematisch. Fahrzeuge mit 200.000, 300.000 oder mehr Kilometern werden gerne gekauft, wenn sie mechanisch in Ordnung sind."
    },
    {
      question: "Muss ich mich um den Export kümmern?",
      answer: "Nein, absolut nicht. Wir kümmern uns um alles: Abmeldung, Ausfuhrkennzeichen, Transport und alle Formalitäten. Sie verkaufen einfach an uns und erhalten Ihr Geld."
    },
    {
      question: "Bekomme ich einen guten Preis beim Exportankauf?",
      answer: "Ja! Da wir direkten Zugang zu internationalen Märkten haben, können wir oft bessere Preise zahlen als der lokale Handel. Ihr Fahrzeug findet garantiert einen Abnehmer."
    }
  ]

  const features = [
    {
      icon: <Globe className="w-12 h-12 text-orange-600" />,
      title: "Internationale Käufer",
      description: "Wir haben direkten Zugang zu Käufern in Afrika, Osteuropa und dem Nahen Osten."
    },
    {
      icon: <Truck className="w-12 h-12 text-orange-600" />,
      title: "Komplettservice",
      description: "Wir kümmern uns um Abmeldung, Papiere und Transport – Sie müssen nichts tun."
    },
    {
      icon: <Banknote className="w-12 h-12 text-orange-600" />,
      title: "Faire Exportpreise",
      description: "Durch internationale Nachfrage erzielen wir oft bessere Preise."
    }
  ]

  const benefits = [
    "Alle Marken und Modelle für Export",
    "Hohe Laufleistung kein Hindernis",
    "Ältere Fahrzeuge willkommen",
    "Auch Fahrzeuge mit kleinen Mängeln",
    "Komplette Exportabwicklung durch uns",
    "Ausfuhrkennzeichen und Papiere inklusive",
    "Sofortige Barzahlung bei Übergabe",
    "Internationales Käufernetzwerk"
  ]

  const relatedLinks = [
    { href: "/auto-verkaufen-sofort", label: "Sofort verkaufen" },
    { href: "/auto-verkaufen-ohne-tuev", label: "Ohne TÜV" },
    { href: "/auto-verkaufen-defektes-auto", label: "Defektes Auto" },
    { href: "/autoankauf-nuernberg", label: "Ankauf Nürnberg" },
    { href: "/autoankauf-ingolstadt", label: "Ankauf Ingolstadt" }
  ]

  return (
    <SEOPageTemplate
      heroIcon={<Globe className="w-20 h-20 mx-auto" />}
      heroTitle="Auto für Export verkaufen"
      heroSubtitle="Ihr Auto ist für den deutschen Markt nicht mehr attraktiv? Wir kaufen es für den Export – zu fairen Preisen!"
      mainTitle="Export-Ankauf – Internationale Abnehmer für Ihr Auto"
      mainContent={
        <>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Ihr Auto ist älter, hat viele Kilometer oder kleinere Mängel? In Deutschland vielleicht schwer verkäuflich, aber international sehr gefragt! Bei Auto Ankauf Franken kaufen wir Fahrzeuge für den <strong>Export</strong> und bieten Ihnen faire Preise.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Deutsche Qualitätsfahrzeuge sind weltweit begehrt. Was hier als "Kilometer-König" gilt, ist in anderen Ländern ein zuverlässiger Begleiter für viele weitere Jahre. Durch unser internationales Netzwerk finden wir für fast jedes <strong>Exportfahrzeug</strong> einen Abnehmer.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Ideale Exportfahrzeuge:</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Mercedes-Benz, BMW, Audi, VW (alle Modelle)</li>
            <li>Toyota, Mazda, Honda (besonders beliebt)</li>
            <li>Fahrzeuge mit hoher Laufleistung (200.000+ km)</li>
            <li>Ältere Modelle ab Baujahr 2000</li>
            <li>SUVs und Geländewagen</li>
            <li>Transporter und Nutzfahrzeuge</li>
            <li>Fahrzeuge mit kleineren technischen Mängeln</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Unser Export-Service</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Der Verkauf für den Export ist bei uns genauso einfach wie jeder andere Autoverkauf. Sie müssen sich um nichts kümmern – wir erledigen alle Formalitäten. Nach der Bewertung und Einigung zahlen wir sofort bar und übernehmen die Abmeldung sowie alle weiteren Schritte.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Unsere Käufer sitzen in Afrika, Osteuropa, dem Nahen Osten und vielen weiteren Regionen. Dort werden deutsche Gebrauchtfahrzeuge wegen ihrer Qualität und Langlebigkeit geschätzt. Was hier ausgemustert wird, fährt dort noch viele Jahre zuverlässig.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Wir sind in ganz Franken für Sie da: Nürnberg, Fürth, Erlangen, Würzburg, Regensburg, Ingolstadt und alle umliegenden Regionen. Fragen Sie jetzt Ihr kostenloses Angebot an!
          </p>
        </>
      }
      benefits={benefits}
      features={features}
      faqs={faqs}
      ctaTitle="Auto für Export verkaufen?"
      ctaSubtitle="Nutzen Sie die internationale Nachfrage nach deutschen Qualitätsfahrzeugen und verkaufen Sie jetzt!"
      relatedLinks={relatedLinks}
    />
  )
}
