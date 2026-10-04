import type { CSSProperties } from "react"

interface FlipLogoProps {
  /** Pixel size of the square mark. Defaults to 40. */
  size?: number
  /** Stroke color. Defaults to currentColor so it inherits text color. */
  color?: string
  /**
   * "hover"  — rests as X, spins 360deg on hover/focus (default)
   * "auto"   — rests as X, automatically spins 360deg every ~5s
   * "static" — static X, no motion
   */
  mode?: "hover" | "auto" | "static"
  /** Accessible label. */
  label?: string
  className?: string
  style?: CSSProperties
}

/**
 * Rotating X mark: two diagonal strokes crossing at the centre. The whole
 * glyph rotates about its own centre, so every 90deg it reads identically —
 * the spin itself is the motion.
 */
export function FlipLogo({
  size = 40,
  color = "currentColor",
  mode = "hover",
  label = "Xu Zuxing",
  className,
  style,
}: FlipLogoProps) {
  const staticMode = mode === "static"
  const interactive = mode === "hover"
  const auto = mode === "auto"

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-label={label}
      className={className}
      style={style}
      data-interactive={interactive ? "" : undefined}
      data-auto={auto ? "" : undefined}
    >
      <g
        className={staticMode ? undefined : "logo-x"}
        fill="none"
        stroke={color}
        strokeWidth={11}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1={28} y1={28} x2={72} y2={72} />
        <line x1={72} y1={28} x2={28} y2={72} />
      </g>
      {interactive && (
        <style>{`
          .logo-x {
            transform-box: fill-box;
            transform-origin: center;
          }
          svg[data-interactive]:hover .logo-x,
          svg[data-interactive]:focus-visible .logo-x {
            animation: logo-spin 650ms cubic-bezier(0.65, 0, 0.35, 1);
          }
          @keyframes logo-spin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @media (prefers-reduced-motion: reduce) {
            svg[data-interactive]:hover .logo-x,
            svg[data-interactive]:focus-visible .logo-x { animation: none; }
          }
        `}</style>
      )}
      {auto && (
        <style>{`
          .logo-x {
            transform-box: fill-box;
            transform-origin: center;
          }
          @keyframes logo-spin-cycle {
            0%   { transform: rotate(0deg); }
            12%  { transform: rotate(360deg); }
            100% { transform: rotate(360deg); }
          }
          .logo-x {
            animation: logo-spin-cycle 5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .logo-x { animation: none; }
          }
        `}</style>
      )}
    </svg>
  )
}
