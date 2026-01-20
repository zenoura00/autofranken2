import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { pseoCities } from "@/lib/pseo/pseoCities";
import { isPSEOCityKey, isPSEOCaseKey } from "@/lib/pseo/pseoGenerator";

export const revalidate = 1209600; // 14 days

type PageProps = {
  params: Promise<{ slug: string }>;
};

function normalizeCaseKeyFromLegacy(slug: string): string | null {
  if (!slug.startsWith("auto-verkaufen-")) return null;
  let rest = slug.slice("auto-verkaufen-".length);
  if (rest.startsWith("mit-")) rest = rest.slice(4);
  return rest || null;
}

function resolveLegacySlugToCanonical(slug: string): string | null {
  // City pages: /autoankauf-<city>
  if (slug.startsWith("autoankauf-")) {
    const cityKey = slug.slice("autoankauf-".length);
    return isPSEOCityKey(cityKey) ? `/autoankauf/${cityKey}` : null;
  }

  // Intent pages: /auto-verkaufen-sofort-<city> and /auto-verkaufen-heute-<city>
  if (slug.startsWith("auto-verkaufen-sofort-")) {
    const cityKey = slug.slice("auto-verkaufen-sofort-".length);
    return isPSEOCityKey(cityKey) ? `/auto-verkaufen-sofort/${cityKey}` : null;
  }
  if (slug.startsWith("auto-verkaufen-heute-")) {
    const cityKey = slug.slice("auto-verkaufen-heute-".length);
    return isPSEOCityKey(cityKey) ? `/auto-verkaufen-heute/${cityKey}` : null;
  }

  // Legacy case page: /auto-verkaufen-<case>
  const caseKeyGuess = normalizeCaseKeyFromLegacy(slug);
  if (caseKeyGuess && isPSEOCaseKey(caseKeyGuess)) return `/auto-verkaufen/${caseKeyGuess}`;

  // Legacy combo: /auto-verkaufen-<case>-<city>
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
    title: canonical ? "Weiterleitung | Franken Auto Ankauf" : "Seite nicht gefunden | Franken Auto Ankauf",
    robots: {
      index: false,
      follow: true,
    },
    alternates: canonical ? { canonical } : undefined,
  };
}

export default async function LegacySlugPage(props: PageProps) {
  const { slug } = await props.params;

  const canonical = resolveLegacySlugToCanonical(slug);
  if (canonical) redirect(canonical);

  notFound();
}
