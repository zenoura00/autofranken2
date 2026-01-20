import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { pseoCases } from "@/lib/pseo/pseoCases";
import { pseoCities } from "@/lib/pseo/pseoCities";
import { isPSEOCityKey, isPSEOCaseKey } from "@/lib/pseo/pseoGenerator";

// This route exists only to catch legacy "dash" URLs that were previously linked
// (e.g. /autoankauf-nuernberg or /auto-verkaufen-sofort-nuernberg).
// We redirect them to the real, structured routes so Google & users land on
// the full pages (not thin placeholder content).

export const revalidate = 1209600; // 14 days

type PageProps = {
  params: Promise<{ slug: string }>;
};

function resolveLegacySlugToTarget(slug: string): string | null {
  // 1) City pages: /autoankauf-<city>
  if (slug.startsWith("autoankauf-")) {
    const cityKey = slug.slice("autoankauf-".length);
    if (isPSEOCityKey(cityKey)) return `/autoankauf/${cityKey}`;
    return null;
  }

  // 2) Intent pages: /auto-verkaufen-sofort-<city> and /auto-verkaufen-heute-<city>
  if (slug.startsWith("auto-verkaufen-sofort-")) {
    const cityKey = slug.slice("auto-verkaufen-sofort-".length);
    if (isPSEOCityKey(cityKey)) return `/auto-verkaufen-sofort/${cityKey}`;
    return null;
  }
  if (slug.startsWith("auto-verkaufen-heute-")) {
    const cityKey = slug.slice("auto-verkaufen-heute-".length);
    if (isPSEOCityKey(cityKey)) return `/auto-verkaufen-heute/${cityKey}`;
    return null;
  }

  // 3) Legacy case page: /auto-verkaufen-<case>
  const caseKeyGuess = normalizeCaseKeyFromLegacy(slug);
  if (caseKeyGuess && isPSEOCaseKey(caseKeyGuess)) {
    return `/auto-verkaufen/${caseKeyGuess}`;
  }

  // 4) Legacy combo: /auto-verkaufen-<case>-<city>
  // We try every city key as suffix.
  for (const cityKey of Object.keys(pseoCities)) {
    const suffix = `-${cityKey}`;
    if (slug.endsWith(suffix)) {
      const prefix = slug.slice(0, -suffix.length);
      const ck = normalizeCaseKeyFromLegacy(prefix);
      if (ck && Object.prototype.hasOwnProperty.call(pseoCases, ck) && isPSEOCityKey(cityKey)) {
        return `/auto-verkaufen/${ck}/${cityKey}`;
      }
    }
  }

  return null;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const target = resolveLegacySlugToTarget(slug);

  // These are legacy redirect-only URLs. We don't want them indexed.
  // Canonical points to the real structured page (helps if crawlers ever fetch HTML).
  return {
    title: "Weiterleitung…",
    robots: {
      index: false,
      follow: false,
    },
    alternates: target ? { canonical: target } : undefined,
  };
}

function normalizeCaseKeyFromLegacy(slug: string): string | null {
  // legacy: auto-verkaufen-ohne-tuev  -> ohne-tuev
  // legacy: auto-verkaufen-mit-motorschaden -> motorschaden
  if (!slug.startsWith("auto-verkaufen-")) return null;
  let rest = slug.slice("auto-verkaufen-".length);
  if (rest.startsWith("mit-")) rest = rest.slice(4);
  return rest || null;
}

export default async function LegacySlugRedirectPage(props: PageProps) {
  const { slug } = await props.params;

  // 1) City pages: /autoankauf-<city>
  if (slug.startsWith("autoankauf-")) {
    const cityKey = slug.slice("autoankauf-".length);
    if (isPSEOCityKey(cityKey)) redirect(`/autoankauf/${cityKey}`);
    notFound();
  }

  // 2) Intent pages: /auto-verkaufen-sofort-<city> and /auto-verkaufen-heute-<city>
  if (slug.startsWith("auto-verkaufen-sofort-")) {
    const cityKey = slug.slice("auto-verkaufen-sofort-".length);
    if (isPSEOCityKey(cityKey)) redirect(`/auto-verkaufen-sofort/${cityKey}`);
    notFound();
  }
  if (slug.startsWith("auto-verkaufen-heute-")) {
    const cityKey = slug.slice("auto-verkaufen-heute-".length);
    if (isPSEOCityKey(cityKey)) redirect(`/auto-verkaufen-heute/${cityKey}`);
    notFound();
  }

  // 3) Legacy case page: /auto-verkaufen-<case>
  const caseKeyGuess = normalizeCaseKeyFromLegacy(slug);
  if (caseKeyGuess && isPSEOCaseKey(caseKeyGuess)) {
    redirect(`/auto-verkaufen/${caseKeyGuess}`);
  }

  // 4) Legacy combo: /auto-verkaufen-<case>-<city>
  // We try every city key as suffix.
  for (const cityKey of Object.keys(pseoCities)) {
    const suffix = `-${cityKey}`;
    if (slug.endsWith(suffix)) {
      const prefix = slug.slice(0, -suffix.length);
      const ck = normalizeCaseKeyFromLegacy(prefix);
      if (ck && Object.prototype.hasOwnProperty.call(pseoCases, ck) && isPSEOCityKey(cityKey)) {
        redirect(`/auto-verkaufen/${ck}/${cityKey}`);
      }
    }
  }

  // If we didn't recognize the pattern, 404.
  notFound();
}
