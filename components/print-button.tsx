"use client"

export function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center rounded-lg border border-border px-4 py-2 font-mono text-sm transition-colors hover:border-brand/50 hover:text-brand focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 print:hidden"
    >
      {label}
    </button>
  )
}
