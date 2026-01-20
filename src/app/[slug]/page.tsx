import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import SEOPageTemplate from "@/components/SEOPageTemplate";
import { Banknote, Clock, MapPin, Shield, Settings, Car } from "lucide-react";

import { pseoCases, pseoCasesList, type PSEOCaseKey } from "@/lib/pseo/pseoCases";
import { pseoCities, type PSEOCityKey } from "@/lib/pseo/pseoCities";
import { generatePSEOPage, isPSEOCityKey, isPSEOCaseKey } from "@/lib/pseo/pseoGenerator";

// IMPORTANT:
// This route catches legacy "dash" URLs (e.g. /autoankauf-nuernberg, /auto-verkaufen-altes-auto, ...).
// We keep them accessible for users, but we prevent indexing (noindex) and set canonical to the
// structured route. This way, legacy links still work, and SEO stays clean.

export const revalidate = 1209600; // 14 days

type PageProps = {
  params: Promise<{ slug: string }>;
};

function normalizeCaseKeyFromLegacy(slug: string): string | null {
  // legacy: auto-verkaufen-ohne-tuev  -> ohne-tuev
  // legacy: auto-verkaufen-mit-motorschaden -> motorschaden
  if (!slug.startsWith("auto-verkaufen-")) return null;
  let rest = slug.slice("auto-verkaufen-".length);
  if (rest.startsWith("mit-")) rest = rest.slice(4);
  return rest || null;
}

function resolveLegacySlugToCanonical(slug: string): string | null {
  // 1) City pages: /autoankauf-<city>
  if (slug.startsWith("autoankauf-")) {
    const cityKey = slug.slice("autoankauf-".length);
    return isPSEOCityKey(cityKey) ? `/autoankauf/${cityKey}` : null;
  }

  // 2) Intent pages: /auto-verkaufen-sofort-<city> and /auto-verkaufen-heute-<city>
  if (slug.startsWith("auto-verkaufen-sofort-")) {
    const cityKey = slug.slice("auto-verkaufen-sofort-".length);
    return isPSEOCityKey(cityKey) ? `/auto-verkaufen-sofort/${cityKey}` : null;
  }
  if (slug.startsWith("auto-verkaufen-heute-")) {
    const cityKey = slug.slice("auto-verkaufen-heute-".length);
    return isPSEOCityKey(cityKey) ? `/auto-verkaufen-heute/${cityKey}` : null;
  }

  // 3) Legacy case page: /auto-verkaufen-<case>
  const caseKeyGuess = normalizeCaseKeyFromLegacy(slug);
  if (caseKeyGuess && isPSEOCaseKey(caseKeyGuess)) return `/auto-verkaufen/${caseKeyGuess}`;

  // 4) Legacy combo: /auto-verkaufen-<case>-<city>
  for (const cityKey of Object.keys(pseoCities)) {
    const suffix = `-${cityKey}`;
    if (!slug.endsWith(suffix)) continue;
    const prefix = slug.slice(0, -suffix.length);
    const ck = normalizeCaseKeyFromLegacy(prefix);
    if (ck && isPSEOCaseKey(ck) && isPSEOCityKey(cityKey)) return `/auto-verkaufen/${ck}/${cityKey}`;
  }

  return null;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const canonical = resolveLegacySlugToCanonical(slug);

  return {
    title: canonical ? "Weiterleitung (Legacy) | Franken Auto Ankauf" : "Seite nicht gefunden | Franken Auto Ankauf",
    robots: {
      index: false,
      follow: false,
    },
    alternates: canonical ? { canonical } : undefined,
  };
}

function featureIcon(name: "shield" | "clock" | "banknote") {
  if (name === "clock") return <Clock className="w-12 h-12 text-orange-600" />;
  if (name === "banknote") return <Banknote className="w-12 h-12 text-orange-600" />;
  return <Shield className="w-12 h-12 text-orange-600" />;
}

function iconForCase(caseKey: PSEOCaseKey) {
  if (caseKey === "motorschaden") return <Settings className="w-20 h-20 mx-auto" />;
  if (caseKey === "unfallwagen") return <Car className="w-20 h-20 mx-auto" />;
  return <Shield className="w-20 h-20 mx-auto" />;
}

function hash32(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function pickN<T>(arr: T[], seed: string, n: number): T[] {
  const out: T[] = [];
  const used = new Set<number>();
  for (let i = 0; i < n && used.size < arr.length; i++) {
    const idx = (hash32(seed + "::" + i) + i * 7) % arr.length;
    if (used.has(idx)) continue;
    used.add(idx);
    out.push(arr[idx]);
  }
  return out;
}

function renderNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-3">Seite nicht gefunden</h1>
        <p className="text-gray-600 dark:text-gray-300">Bitte prüfen Sie die URL.</p>
        <p className="mt-4">
          <Link className="text-orange-600 underline" href="/">
            Zur Startseite
          </Link>
        </p>
      </div>
    </div>
  );
}

export default async function LegacySlugPage(props: PageProps) {
  const { slug } = await props.params;

  // 1) City pages: /autoankauf-<city>
  if (slug.startsWith("autoankauf-")) {
    const cityKey = slug.slice("autoankauf-".length);
    if (!isPSEOCityKey(cityKey)) return renderNotFound();

    const city = pseoCities[cityKey];
    const seed = `legacy-city::${cityKey}`;
    const popular = pickN(pseoCasesList, seed, 6).map((c) => c.key as PSEOCaseKey);

    const benefits = [
      `Kostenloses Angebot für den Autoankauf in ${city.name}`,
      `Regionale Abwicklung in ${city.regionLabel} – kurze Wege`,
      "Keine Inserate, keine Probefahrten, kein Verhandlungsstress",
      "Abholung möglich (je nach Zustand und Lage)",
      "Zahlung bei Übergabe (Bar oder Überweisung)",
    ];

    const features = [
      {
        icon: "shield" as const,
        title: "Seriös & transparent",
        description: `Klare Kommunikation und eine nachvollziehbare Bewertung – passend für ${city.name}.`,
      },
      {
        icon: "clock" as const,
        title: "Schnell in der Region",
        description: `Termin & Abwicklung in ${city.name} und Umgebung – ohne Umwege.`,
      },
      {
        icon: "banknote" as const,
        title: "Zahlung bei Übergabe",
        description: `Bar oder Überweisung – Sie entscheiden, was in ${city.name} am besten passt.`,
      },
    ].map((f) => ({ icon: featureIcon(f.icon), title: f.title, description: f.description }));

    const faqs = [
      {
        question: `Wie schnell kann ich mein Auto in ${city.name} verkaufen?`,
        answer: `Oft geht es zügig: Anfrage → Angebot → Termin. In ${city.name} sind kurze Wege möglich – das hilft bei einer schnellen Übergabe.`,
      },
      {
        question: `Welche Unterlagen brauche ich in ${city.name}?`,
        answer: "In der Regel: Zulassungsbescheinigung Teil I/II (Schein/Brief) und ein Ausweis. Wenn vorhanden: Serviceheft, HU/AU, Rechnungen.",
      },
      {
        question: `Kann mein Auto in ${city.name} auch abgeholt werden?`,
        answer: `Je nach Zustand und Entfernung ja. Schreiben Sie kurz dazu, ob das Fahrzeug fahrbereit ist – dann planen wir die Abholung im Raum ${city.name}.`,
      },
    ];

    const relatedLinks = [
      { href: "/#form", label: "Zum Formular (kostenloses Angebot)" },
      { href: `/autoankauf/${cityKey}`, label: `Autoankauf ${city.name} (offizielle Seite)` },
      { href: `/auto-verkaufen-sofort/${cityKey}`, label: `Auto sofort verkaufen in ${city.name}` },
      ...popular.slice(0, 3).map((k) => ({
        href: `/auto-verkaufen/${k}/${cityKey}`,
        label: `${pseoCases[k].title} in ${city.name}`,
      })),
    ];

    return (
      <SEOPageTemplate
        heroIcon={<MapPin className="w-20 h-20 mx-auto" />}
        heroTitle={`Autoankauf in ${city.name}`}
        heroSubtitle={`Legacy-Link: Sie sind auf einer älteren URL gelandet. Inhalte & Anfrage funktionieren – die offizielle Seite ist /autoankauf/${cityKey}.`}
        mainTitle={`Auto verkaufen in ${city.name}: so einfach geht's`}
        mainContent={
          <>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              In <strong>{city.name}</strong> nutzen viele ihr Auto für {city.typicalUsePool?.[0] ?? "Alltag und Beruf"}. Wenn ein Verkauf ansteht,
              lohnt sich ein klarer Ablauf ohne Inserate und Besichtigungstourismus.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Sie senden kurz die Fahrzeugdaten, wir bewerten realistisch und koordinieren die Übergabe in {city.name} oder Umgebung.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Beliebte Fälle in {city.name}</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              {popular.map((k) => (
                <li key={k}>
                  <Link className="text-orange-600 underline" href={`/auto-verkaufen/${k}/${cityKey}`}>
                    {pseoCases[k].title} in {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        }
        benefits={benefits}
        features={features}
        faqs={faqs}
        ctaTitle={`Jetzt Angebot für ${city.name} anfordern`}
        ctaSubtitle={`Senden Sie die Fahrzeugdaten – wir melden uns schnell mit einem realistischen Angebot für ${city.name}.`}
        relatedLinks={relatedLinks}
      />
    );
  }

  // 2) Intent pages: keep as a simple helper page (legacy)
  if (slug.startsWith("auto-verkaufen-sofort-") || slug.startsWith("auto-verkaufen-heute-")) {
    const isSofort = slug.startsWith("auto-verkaufen-sofort-");
    const cityKey = slug.slice(isSofort ? "auto-verkaufen-sofort-".length : "auto-verkaufen-heute-".length);
    if (!isPSEOCityKey(cityKey)) return renderNotFound();
    const city = pseoCities[cityKey];
    const target = isSofort ? `/auto-verkaufen-sofort/${cityKey}` : `/auto-verkaufen-heute/${cityKey}`;

    return (
      <SEOPageTemplate
        heroIcon={<Clock className="w-20 h-20 mx-auto" />}
        heroTitle={`${isSofort ? "Auto sofort verkaufen" : "Auto heute verkaufen"} in ${city.name}`}
        heroSubtitle={`Legacy-Link: Für die vollständige Seite nutzen Sie ${target}. Anfrage & Kontakt funktionieren hier ebenfalls.`}
        mainTitle={`Schnell verkaufen in ${city.name}`}
        mainContent={
          <>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Wenn es in <strong>{city.name}</strong> schnell gehen muss, ist eine kurze Abstimmung wichtig: Daten senden, Angebot erhalten,
              Termin koordinieren.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Öffnen Sie gerne die offizielle Seite – dort finden Sie die komplette Übersicht für {city.name}.
            </p>
            <p>
              <Link className="text-orange-600 underline" href={target}>
                Zur offiziellen Seite
              </Link>
            </p>
          </>
        }
        benefits={["Schnelle Rückmeldung", "Klare Abwicklung", "Zahlung bei Übergabe"]}
        features={[
          { icon: featureIcon("shield"), title: "Seriös", description: "Klare Kommunikation ohne Stress." },
          { icon: featureIcon("clock"), title: "Schnell", description: `Kurze Wege in ${city.name} und Umgebung.` },
          { icon: featureIcon("banknote"), title: "Zahlung", description: "Bar oder Überweisung." },
        ]}
        faqs={[
          { question: "Wie starte ich am schnellsten?", answer: "Formular ausfüllen – je genauer die Daten, desto schneller das Angebot." },
          { question: "Kann ich heute noch verkaufen?", answer: "Oft ja – abhängig von Zustand, Unterlagen und Terminlage." },
        ]}
        ctaTitle="Jetzt kostenlos anfragen"
        ctaSubtitle="Formular ausfüllen – wir melden uns schnell zurück."
        relatedLinks={[{ href: target, label: "Offizielle Seite öffnen" }, { href: "/#form", label: "Zum Formular" }]}
      />
    );
  }

  // 3) Legacy case page: /auto-verkaufen-<case>
  const caseKeyGuess = normalizeCaseKeyFromLegacy(slug);
  if (caseKeyGuess && isPSEOCaseKey(caseKeyGuess)) {
    const caseKey = caseKeyGuess as PSEOCaseKey;
    const c = pseoCases[caseKey];

    const benefits = [
      `Kostenloses, unverbindliches Angebot für ${c.shortLabel}`,
      "Transparente Bewertung – nachvollziehbar statt pauschal",
      "Schnelle Abwicklung in Franken",
      "Bezahlung bei Übergabe (Bar oder Überweisung)",
      "Unterstützung bei Unterlagen/Abmeldung",
    ];

    const features = [
      { icon: featureIcon("shield"), title: "Seriös & klar", description: `Auch bei ${c.shortLabel}: klare Kommunikation und faire Einschätzung.` },
      { icon: featureIcon("clock"), title: "Schnell organisiert", description: "Kurze Wege in der Region – Termin und Übergabe strukturiert." },
      { icon: featureIcon("banknote"), title: "Zahlung bei Übergabe", description: "Sie wählen Barzahlung oder Überweisung." },
    ];

    const faqs = [
      {
        question: `Wie wirkt sich ${c.shortLabel} auf den Preis aus?`,
        answer: `Der Zustand (inkl. ${c.keyword}) beeinflusst den Marktwert. Entscheidend ist eine realistische Bewertung – wir erklären nachvollziehbar, wie sich ${c.shortLabel} auswirkt.`,
      },
      {
        question: `Muss ich ${c.shortLabel} vorher reparieren?`,
        answer: "Meist nicht. Eine Reparatur lohnt sich nicht immer – wir machen Ihnen ein Angebot auf Basis des aktuellen Zustands.",
      },
      { question: "Wie starte ich am schnellsten?", answer: "Am einfachsten: Formular ausfüllen. Je genauer die Daten, desto schneller erhalten Sie ein Angebot." },
    ];

    const relatedLinks = [
      { href: `/auto-verkaufen/${caseKey}`, label: "Offizielle Seite öffnen" },
      { href: "/#form", label: "Zum Formular (kostenloses Angebot)" },
    ];

    return (
      <SEOPageTemplate
        heroIcon={iconForCase(caseKey)}
        heroTitle={c.title}
        heroSubtitle={`Legacy-Link: Für die vollständige Seite nutzen Sie /auto-verkaufen/${caseKey}. Anfrage & Kontakt funktionieren hier ebenfalls.`}
        mainTitle={`So verkaufen Sie ein Auto ${c.shortLabel} – ohne Diskussionen`}
        mainContent={
          <>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Ein Auto <strong>{c.shortLabel}</strong> privat zu verkaufen ist oft mühsam: viele Rückfragen, Misstrauen, harte Verhandlungen.
              Wir bieten eine klare Alternative: Anfrage senden, Angebot erhalten, Übergabe planen.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Besonders bei <strong>{c.shortLabel}</strong> ist eine transparente Bewertung wichtig. Wir berücksichtigen den Zustand realistisch,
              erklären unsere Einschätzung und sorgen für eine saubere Abwicklung.
            </p>
          </>
        }
        benefits={benefits}
        features={features}
        faqs={faqs}
        ctaTitle="Jetzt kostenloses Angebot anfordern"
        ctaSubtitle="Fahrzeugdaten senden – wir melden uns schnell mit einer realistischen Einschätzung."
        relatedLinks={relatedLinks}
      />
    );
  }

  // 4) Legacy combo: /auto-verkaufen-<case>-<city>
  for (const cityKey of Object.keys(pseoCities)) {
    const suffix = `-${cityKey}`;
    if (!slug.endsWith(suffix)) continue;
    const prefix = slug.slice(0, -suffix.length);
    const ck = normalizeCaseKeyFromLegacy(prefix);
    if (!ck || !isPSEOCaseKey(ck) || !isPSEOCityKey(cityKey)) continue;

    const g = generatePSEOPage(ck, cityKey);
    const features = g.features.map((f) => ({
      icon: featureIcon(f.icon),
      title: f.title,
      description: f.description,
    }));

    return (
      <SEOPageTemplate
        heroIcon={iconForCase(ck)}
        heroTitle={g.heroTitle}
        heroSubtitle={`Legacy-Link: Für die offizielle Seite nutzen Sie /auto-verkaufen/${ck}/${cityKey}. Anfrage & Kontakt funktionieren hier ebenfalls.`}
        mainTitle={g.mainTitle}
        mainContent={
          <>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{g.intro}</p>
            <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Das Problem</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{g.problem}</p>
            <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">Warum vor Ort</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{g.cityWhy}</p>
            <h3 className="text-2xl font-bold mt-8 mb-4 text-orange-600">{g.stepsTitle}</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              {g.stepsBullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </>
        }
        benefits={g.benefits}
        features={features}
        faqs={g.faqs}
        ctaTitle={g.ctaTitle}
        ctaSubtitle={g.ctaSubtitle}
        relatedLinks={[{ href: `/auto-verkaufen/${ck}/${cityKey}`, label: "Offizielle Seite öffnen" }, ...g.relatedLinks]}
      />
    );
  }

  // Unknown pattern → 404
  notFound();
}
