import Link from "next/link"

function ActionLink({
  href,
  children,
  variant = "primary",
}: {
  href: string
  children: React.ReactNode
  variant?: "primary" | "outline"
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  )
}

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold tracking-tight">404 – Seite nicht gefunden</h1>
      <p className="mt-4 text-muted-foreground">
        Die angeforderte Seite existiert nicht oder wurde verschoben. Kein Problem – du kannst
        direkt eine Anfrage senden oder zur Startseite zurück.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ActionLink href="/#form">Zum Anfrage‑Formular</ActionLink>
        <ActionLink href="/" variant="outline">
          Startseite
        </ActionLink>
        <ActionLink href="/faelle" variant="outline">
          Fälle
        </ActionLink>
        <ActionLink href="/staedte" variant="outline">
          Städte
        </ActionLink>
      </div>
    </main>
  )
}
