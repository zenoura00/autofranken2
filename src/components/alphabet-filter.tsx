"use client"

import * as React from "react"

type Letter = string

const DEFAULT_LETTERS: Letter[] = [
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  "Ä",
  "Ö",
  "Ü",
  "#",
]

function getFirstLetter(value: string): Letter {
  const s = (value || "").trim()
  if (!s) return "#"

  // Normalize German umlauts consistently.
  const first = s[0].toUpperCase()
  if (/[A-ZÄÖÜ]/.test(first)) return first
  return "#"
}

export type AlphabetItem = {
  id: string
  label: string
  // Any extra data needed by the caller.
  [key: string]: unknown
}

export function AlphabetFilter<T extends AlphabetItem>(props: {
  items: T[]
  renderItem: (item: T) => React.ReactNode
  letters?: Letter[]
  allLabel?: string
  className?: string
}) {
  const { items, renderItem, letters = DEFAULT_LETTERS, allLabel = "Alle", className } = props

  const [active, setActive] = React.useState<Letter | "ALL">("ALL")

  const filtered = React.useMemo(() => {
    if (active === "ALL") return items
    return items.filter(i => getFirstLetter(i.label) === active)
  }, [items, active])

  // Compute which letters have results (for disabling buttons)
  const available = React.useMemo(() => {
    const set = new Set<Letter>()
    for (const i of items) set.add(getFirstLetter(i.label))
    return set
  }, [items])

  return (
    <div className={className}>
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <button
          type="button"
          onClick={() => setActive("ALL")}
          className={
            active === "ALL"
              ? "px-3 py-1 rounded-md bg-orange-600 text-white text-sm"
              : "px-3 py-1 rounded-md border text-sm hover:bg-muted"
          }
        >
          {allLabel}
        </button>

        {letters.map(letter => {
          const isActive = active === letter
          const isDisabled = letter !== "#" ? !available.has(letter) : !available.has("#")
          return (
            <button
              key={letter}
              type="button"
              disabled={isDisabled}
              onClick={() => setActive(letter)}
              className={
                isActive
                  ? "px-2.5 py-1 rounded-md bg-orange-600 text-white text-sm"
                  : isDisabled
                    ? "px-2.5 py-1 rounded-md border text-sm opacity-40 cursor-not-allowed"
                    : "px-2.5 py-1 rounded-md border text-sm hover:bg-muted"
              }
              aria-pressed={isActive}
            >
              {letter}
            </button>
          )
        })}

        <div className="ml-auto text-sm text-muted-foreground">
          {filtered.length} Ergebnis{filtered.length === 1 ? "" : "se"}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-sm text-muted-foreground">Keine Einträge für diesen Buchstaben.</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{filtered.map(i => renderItem(i))}</div>
      )}
    </div>
  )
}
