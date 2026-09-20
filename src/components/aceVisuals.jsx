import { GLOW_RAMP, SEAM_RAMP, STARFIELD } from "./aceTheme";

export function Starfield({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} style={STARFIELD} aria-hidden />
  );
}

/**
 * The crimson horizon between surfaces. `dark` ramps down from the white brand
 * pages, `light` ramps back up to them, and `glow` sits between two dark
 * surfaces as a lit edge.
 */
export function DarkSeam({ to = "dark" }) {
  const ramp = to === "glow" ? GLOW_RAMP : SEAM_RAMP;
  const stops = ramp.map(([color, at]) => `${color} ${to === "light" ? 100 - at : at}%`);
  if (to === "light") stops.reverse();
  return (
    <div
      className="h-36 w-full"
      style={{ background: `linear-gradient(to bottom, ${stops.join(", ")})` }}
      aria-hidden
    />
  );
}
