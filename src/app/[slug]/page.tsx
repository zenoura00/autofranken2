import { notFound } from "next/navigation";
import type { Metadata } from "next";

// ✅ revalidate رقم ثابت فقط (ممنوع أي عمليات حسابية)
export const revalidate = 1209600; // 14 days

type PageProps = {
  params: {
    slug: string;
  };
};

/**
 * (اختياري) SEO Metadata
 */
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = params;

  return {
    title: `Auto Ankauf ${slug} | Franken Auto Ankauf`,
    description: `Auto verkaufen in ${slug}. Schnell, sicher und kostenlos.`,
  };
}

export default function Page({ params }: PageProps) {
  const { slug } = params;

  // حماية بسيطة
  if (!slug) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">
        Auto verkaufen in {slug}
      </h1>

      <p className="mb-6 text-gray-700">
        Verkaufen Sie Ihr Auto schnell und sicher in {slug}.
        Kostenlose Bewertung, sofortiges Angebot und schnelle Abwicklung.
      </p>

      <a
        href="/"
        className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Jetzt Auto verkaufen
      </a>
    </main>
  );
}
