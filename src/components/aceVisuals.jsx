import { SEAM_RAMP, STARFIELD } from "./aceTheme";

export function Starfield({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} style={STARFIELD} aria-hidden />
  );
}

/** Softens the seam where a dark ACE surface meets the white brand pages. */
export function DarkSeam({ to = "dark" }) {
  const stops = SEAM_RAMP.map(([color, at]) => `${color} ${to === "dark" ? at : 100 - at}%`);
  if (to !== "dark") stops.reverse();
  return (
    <div
      className="h-36 w-full"
      style={{ background: `linear-gradient(to bottom, ${stops.join(", ")})` }}
      aria-hidden
    />
  );
}
