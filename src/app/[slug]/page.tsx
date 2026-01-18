import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 1209600; // 14 days

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const { slug } = await props.params;

  return {
    title: `Auto Ankauf ${slug} | Franken Auto Ankauf`,
    description: `Auto verkaufen in ${slug}. Schnell, sicher und kostenlos.`,
  };
}

export default async function Page(props: PageProps) {
  const { slug } = await props.params;

  if (!slug) notFound();

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Auto verkaufen in {slug}</h1>

      <p className="mb-6 text-gray-700">
        Verkaufen Sie Ihr Auto schnell und sicher in {slug}. Kostenlose Bewertung,
        sofortiges Angebot und schnelle Abwicklung.
      </p>

      <Link
        href="/"
        className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Jetzt Auto verkaufen
      </Link>
    </main>
  );
}
