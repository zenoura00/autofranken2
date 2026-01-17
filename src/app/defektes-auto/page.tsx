"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Phone, Mail, Car, Wrench, Settings } from "lucide-react"
import Link from "next/link"
import MainHeader from "@/components/MainHeader"

export default function DefektesAutoPage() {
  const scrollToForm = () => {
    window.location.href = '/#form'
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Wrench className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Defektes Auto verkaufen
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Motorschaden? Getriebeschaden? Wir kaufen es!
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
            <h2 className="text-3xl font-bold mb-8">Defekte Autos ankaufen in Nürnberg</h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Ihr Auto hat einen Motorschaden, Getriebeschaden oder andere technische Defekte?
              Die Reparaturkosten übersteigen den Wert des Fahrzeugs? Wir bieten Ihnen eine Lösung!
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Auto Ankauf Franken kauft defekte Fahrzeuge aller Marken und Modelle.
              Sparen Sie sich teure Reparaturen und verkaufen Sie Ihr Auto schnell und unkompliziert an uns.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300 dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6 text-center">
                  <Settings className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Motorschaden</h3>
                  <p className="text-gray-600 dark:text-gray-400">Alle Arten von Motordefekten</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300 dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6 text-center">
                  <Wrench className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Getriebeschaden</h3>
                  <p className="text-gray-600 dark:text-gray-400">Automatik oder Schaltung</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300 dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6 text-center">
                  <Car className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Sonstige Defekte</h3>
                  <p className="text-gray-600 dark:text-gray-400">Elektronik, Fahrwerk, etc.</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-orange-50 dark:bg-gray-800 border-orange-200 dark:border-gray-700 mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Ihre Vorteile bei uns</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Ankauf ohne TÜV</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Keine Reparaturen nötig</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Sofortige Bezahlung</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Kostenlose Abholung</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Faire Preise garantiert</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Abwicklung in 24 Stunden</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 dark:bg-black text-white mb-12">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Jetzt defektes Auto bewerten!</h3>
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
