import SEOPageTemplate from "@/components/SEOPageTemplate"
import { Car, MapPin, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

import { buildCTASubtitle, buildFaq, buildIntro, buildProblemParagraph, buildSteps, buildUSPs, buildWhyLocal, hash32 } from "@/lib/seo/text"
import { getCase, getCity, resolveSlug } from "@/lib/seo/resolve"
import { CITIES } from "@/lib/seo/cities"
import { CASES } from "@/lib/seo/cases"
import { buildJsonLd } from "@/lib/seo/schema"

// On-demand generation for the long tail. Pages are cached (ISR) after first request.
export const dynamicParams = true
export const revalidate = 60 * 60 * 24 * 14 // 14 days

export async function generateStaticParams() {
  // We pre-render:
  // 1) All case pages (ohne Stadt)
  // 2) Long-tail (case+city) only for Tier 1+2 cities
  // Everything else is generated on-demand and cached via `revalidate`.

  const tierCities = CITIES.filter(c => (c.tier ?? 3) <= 2)
  const slugs: string[] = []

  // case-only pages
  for (const c of CASES) slugs.push(c.slug)

  // case+city pages (tier subset)
  for (const c of CASES) {
    for (const city of tierCities) {
      slugs.push(`${c.slug}-${city.slug}`)
    }
  }

  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const baseUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://frankenautoankauf.de")

  const resolved = resolveSlug(params.slug)
  if (!resolved) return {}
  const c = getCase(resolved.caseSlug)
  if (!c) return {}

  const url = new URL(`/${params.slug}`, baseUrl).toString()

  if (resolved.kind === "case") {
    return {
      title: `${c.title} | Franken Auto Ankauf`,
      description: `Faire Bewertung & schnelle Abwicklung: ${c.title}. Kostenlos anfragen und direkt Angebot erhalten.`,
      alternates: { canonical: url },
      openGraph: {
        title: `${c.title} | Franken Auto Ankauf`,
        description: `Faire Bewertung & schnelle Abwicklung: ${c.title}. Kostenlos anfragen und direkt Angebot erhalten.`,
        url,
        siteName: "Franken Auto Ankauf",
        locale: "de_DE",
        type: "website",
      },
      twitter: {
        card: "summary",
        title: `${c.title} | Franken Auto Ankauf`,
        description: `Faire Bewertung & schnelle Abwicklung: ${c.title}. Kostenlos anfragen und direkt Angebot erhalten.`,
      },
    }
  }

  const city = getCity(resolved.citySlug)
  if (!city) return {}
  return {
    title: `${c.title} in ${city.name} | Franken Auto Ankauf`,
    description: `${c.title} in ${city.name}: schnell, transparent, mit klarer Abwicklung. Jetzt kostenlos anfragen.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${c.title} in ${city.name} | Franken Auto Ankauf`,
      description: `${c.title} in ${city.name}: schnell, transparent, mit klarer Abwicklung. Jetzt kostenlos anfragen.`,
      url,
      siteName: "Franken Auto Ankauf",
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${c.title} in ${city.name} | Franken Auto Ankauf`,
      description: `${c.title} in ${city.name}: schnell, transparent, mit klarer Abwicklung. Jetzt kostenlos anfragen.`,
    },
  }
}

export default function ProgrammaticSEOPage({ params }: { params: { slug: string } }) {
  const resolved = resolveSlug(params.slug)
  if (!resolved) return notFound()
  const c = getCase(resolved.caseSlug)
  if (!c) return notFound()

  const seed = hash32(params.slug)

  // Case-only page (no city)
  if (resolved.kind === "case") {
    const intro = `Sie möchten ${c.title.toLowerCase()}? Wir machen es Ihnen einfach: kurze Anfrage, klare Bewertung, saubere Abwicklung.`
    const steps = [
      `Anfrage senden: Fahrzeugdaten + kurzer Hinweis zu Ihrem Fall.`,
      `Angebot erhalten: transparent, ohne Spielchen.`,
      `Übergabe/Abholung: Vertrag, Zahlung, auf Wunsch Abmeldung.`,
    ]
    const benefits = [
      `Kostenlose Einschätzung – auch bei Problemfällen`,
      `Schnelle Abwicklung & klare Kommunikation`,
      `Seriöser Kaufvertrag ohne Überraschungen`,
      `Abholung möglich (je nach Zustand)`,
    ]
    const faqs = buildFaq(
      { name: "der Region", slug: "region", hook: "weil Privatkäufer bei Sonderfällen oft zögern", neighbor: "nuernberg" },
      c,
      seed,
    )

    const jsonLd = buildJsonLd({
      pathname: `/${params.slug}`,
      title: `${c.title} | Franken Auto Ankauf`,
      description: `Faire Bewertung & schnelle Abwicklung: ${c.title}. Kostenlos anfragen und direkt Angebot erhalten.`,
      caze: c,
      faqs,
    })

    return (
      <SEOPageTemplate
        jsonLd={jsonLd}
        heroIcon={<Car className="w-16 h-16 mx-auto" />}
        heroTitle={c.title}
        heroSubtitle={intro}
        mainTitle={`So klappt der Verkauf: ${c.title}`}
        mainContent={
          <>
            <p>
              {c.pain} Wir übernehmen die strukturierte Abwicklung und führen Sie Schritt für Schritt zum Abschluss – ohne
              Stress und ohne unnötige Termine.
            </p>
            <h3>So läuft es ab</h3>
            <ul>
              {steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
            <p>
              <strong>Jetzt starten:</strong> Nutzen Sie das zentrale Formular – je genauer Ihre Angaben, desto schneller bekommen Sie
              ein realistisches Angebot.
            </p>
          </>
        }
        benefits={benefits}
        features={[
          {
            icon: <ShieldCheck className="w-10 h-10 text-orange-600" />,
            title: "Sicher & seriös",
            description: "Klare Kommunikation, sauberer Vertrag, nachvollziehbare Abwicklung.",
          },
          {
            icon: <Car className="w-10 h-10 text-orange-600" />,
            title: "Auch bei Sonderfällen",
            description: `Wir kaufen auch bei "${c.title}" – fair bewertet statt wegverhandelt.`,
          },
          {
            icon: <MapPin className="w-10 h-10 text-orange-600" />,
            title: "Vor Ort möglich",
            description: "Übergabe/Abholung im passenden Rahmen – abhängig von Zustand & Lage.",
          },
        ]}
        faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))}
        ctaTitle={`Angebot für „${c.title}“ anfordern`}
        ctaSubtitle={`Jetzt Daten senden und in kurzer Zeit ein klares Angebot erhalten.`}
        relatedLinks={[
          { href: `/${c.siblingSlug}`, label: `Alternative: ${getCase(c.siblingSlug)?.title ?? "Weitere Fälle"}` },
          { href: `/auto-verkaufen-sofort`, label: "Heute / sofort verkaufen" },
          { href: `/autoankauf-nuernberg`, label: "Autoankauf Nürnberg" },
        ]}
      />
    )
  }

  // Case + City page
  const city = getCity(resolved.citySlug)
  if (!city) return notFound()

  const intro = buildIntro(city, c, seed)
  const problem = buildProblemParagraph(city, c, seed)
  const whyLocal = buildWhyLocal(city, c, seed)
  const steps = buildSteps(city, c, seed)
  const usps = buildUSPs(city, c, seed)
  const faqs = buildFaq(city, c, seed)

  const jsonLd = buildJsonLd({
    pathname: `/${params.slug}`,
    title: `${c.title} in ${city.name} | Franken Auto Ankauf`,
    description: `${c.title} in ${city.name}: schnell, transparent, mit klarer Abwicklung. Jetzt kostenlos anfragen.`,
    city,
    caze: c,
    faqs,
  })

  const sameCaseOtherCityHref = `/${c.slug}-${city.neighbor}`
  const otherCaseSameCityHref = `/${c.siblingSlug}-${city.slug}`
  const urgentHref = `/auto-verkaufen-sofort-${city.slug}`

  return (
    <SEOPageTemplate
      jsonLd={jsonLd}
      heroIcon={<Car className="w-16 h-16 mx-auto" />}
      heroTitle={`${c.title} in ${city.name}`}
      heroSubtitle={intro}
      mainTitle={`Autoankauf in ${city.name}: ${c.title}`}
      mainContent={
        <>
          <p>{problem}</p>
          <p>{whyLocal}</p>

          <h3>So läuft der Ankauf bei dieser Situation in {city.name} ab</h3>
          <ol>
            {steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>

          <p>
            <strong>CTA:</strong> <Link className="text-orange-600 underline" href="/#form">Jetzt zum Formular</Link> – je klarer Ihre Angaben,
            desto schneller das Angebot.
          </p>

          <h3>Interne Links (hilft auch bei Orientierung)</h3>
          <ul>
            <li>
              <Link className="text-orange-600 underline" href={sameCaseOtherCityHref}>
                Gleiche Situation in {getCity(city.neighbor)?.name ?? "einer anderen Stadt"}
              </Link>
            </li>
            <li>
              <Link className="text-orange-600 underline" href={otherCaseSameCityHref}>
                Andere Situation in {city.name}
              </Link>
            </li>
            <li>
              <Link className="text-orange-600 underline" href={urgentHref}>
                Heute / sofort verkaufen in {city.name}
              </Link>
            </li>
          </ul>
        </>
      }
      benefits={usps}
      features={[
        {
          icon: <ShieldCheck className="w-10 h-10 text-orange-600" />,
          title: "Seriös & transparent",
          description: "Klare Bewertung, keine Spielchen, verständlicher Kaufvertrag.",
        },
        {
          icon: <MapPin className="w-10 h-10 text-orange-600" />,
          title: `Vor Ort in ${city.name}`,
          description: "Übergabe oder Abholung je nach Zustand – kurze Wege, schnelle Koordination.",
        },
        {
          icon: <Car className="w-10 h-10 text-orange-600" />,
          title: `Passend für „${c.title}“`,
          description: "Wir kalkulieren den Zustand direkt ein – damit Sie ein realistisches Angebot bekommen.",
        },
      ]}
      faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))}
      ctaTitle={`Jetzt Angebot für ${city.name} anfordern`}
      ctaSubtitle={buildCTASubtitle(city, c)}
      relatedLinks={[
        { href: sameCaseOtherCityHref, label: `Gleicher Fall in ${getCity(city.neighbor)?.name ?? "Nachbarstadt"}` },
        { href: otherCaseSameCityHref, label: `Andere Situation in ${city.name}` },
        { href: urgentHref, label: `Heute / sofort in ${city.name}` },
      ]}
    />
  )
}
