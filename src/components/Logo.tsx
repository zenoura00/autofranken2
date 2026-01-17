export function Logo({
  className = "w-40 h-auto",
  alt = "Franken Auto Ankauf Logo",
}: {
  className?: string
  alt?: string
}) {
  // <picture> enables automatic dark/light switching via OS/browser theme.
  // We intentionally use <img> (instead of next/image) so we can switch sources
  // without extra client-side JS.
  return (
    <picture>
      <source media="(prefers-color-scheme: dark)" srcSet="/brand/logo-dark.png" />
      <img
        src="/brand/logo-light.png"
        alt={alt}
        width={200}
        height={100}
        className={className}
        loading="eager"
        decoding="async"
      />
    </picture>
  )
}

export function LogoWithText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`.trim()}>
      <Logo className="w-40 h-auto" />
    </div>
  )
}
