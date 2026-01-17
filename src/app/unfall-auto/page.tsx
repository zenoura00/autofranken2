"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Phone, Mail, AlertTriangle, Shield } from "lucide-react"
import Link from "next/link"
import MainHeader from "@/components/MainHeader"

export default function UnfallAutoPage() {
  const scrollToForm = () => {
    window.location.href = '/#form'
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <AlertTriangle className="w-20 h-20 mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unfallwagen Ankauf
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Wir kaufen Ihr Unfallfahrzeug zum Bestpreis!
          </p>
          <Button
            size="lg"
            onClick={scrollToForm}
            className="bg-white text-orange-600 hover:bg-gray-100 hover:scale-105 transition-transform"
          >
            Jetzt Angebot erhalten
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Unfallwagen verkaufen in Nürnberg</h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Sie hatten einen Unfall und möchten Ihr beschädigtes Fahrzeug verkaufen? Kein Problem!
              Bei Auto Ankauf Franken kaufen wir Unfallfahrzeuge aller Art – unabhängig vom Schadensausmaß.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Ob leichter Blechschaden oder Totalschaden – wir machen Ihnen ein faires Angebot und
              übernehmen alle Formalitäten für Sie.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-orange-600 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Unsere Garantie</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Faire Bewertung durch Experten</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Sofortige Barauszahlung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Kostenlose Abholung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Abmeldung inklusive</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6">
                  <AlertTriangle className="w-12 h-12 text-orange-600 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Wir kaufen</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Fahrzeuge mit Frontschaden</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Fahrzeuge mit Heckschaden</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Fahrzeuge mit Seitenschaden</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Totalschäden</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-900 dark:bg-black text-white mb-12">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Jetzt Unfallwagen bewerten lassen!</h3>
                <p className="text-lg mb-6">Füllen Sie unser Formular aus und erhalten Sie ein unverbindliches Angebot.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={scrollToForm}
                    className="bg-orange-600 hover:bg-orange-700 text-lg"
                  >
                    Kostenlose Bewertung
                  </Button>
                  <a href="tel:+4917632333561">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg w-full sm:w-auto">
                      <Phone className="w-5 h-5 mr-2" />
                      0176 - 323 335 61
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-orange-600 hover:bg-orange-700"
              >
                Jetzt Angebot erhalten
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Jetzt kontaktieren!</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <a href="tel:+4917632333561" className="flex items-center justify-center gap-2 text-orange-400 hover:text-orange-300">
              <Phone className="w-6 h-6" />
              +49 (0) 176 32333561
            </a>
            <a href="mailto:info@frankenautoankauf.de" className="flex items-center justify-center gap-2 text-orange-400 hover:text-orange-300">
              <Mail className="w-6 h-6" />
              info@frankenautoankauf.de
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
