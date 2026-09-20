/** Shared tokens for the ACE AI surfaces: the /ace-ai page and the dark
 *  teaser band that introduces it at the bottom of the landing page. */

export const INK = "#07060a";

/** Dissolves the car render's red studio backdrop into the page's black. */
export const CAR_MASK =
  "radial-gradient(ellipse 54% 56% at 50% 50%, #000 34%, rgba(0,0,0,0.55) 64%, transparent 92%)";

export const STARFIELD = {
  backgroundImage: [
    "radial-gradient(1.4px 1.4px at 12% 18%, rgba(255,255,255,0.55) 50%, transparent 51%)",
    "radial-gradient(1.2px 1.2px at 78% 12%, rgba(255,255,255,0.4) 50%, transparent 51%)",
    "radial-gradient(1px 1px at 34% 72%, rgba(255,255,255,0.35) 50%, transparent 51%)",
    "radial-gradient(1.6px 1.6px at 62% 44%, rgba(255,214,214,0.4) 50%, transparent 51%)",
    "radial-gradient(1px 1px at 88% 66%, rgba(255,255,255,0.3) 50%, transparent 51%)",
    "radial-gradient(1.1px 1.1px at 6% 52%, rgba(255,255,255,0.3) 50%, transparent 51%)",
    "radial-gradient(1px 1px at 50% 8%, rgba(255,255,255,0.28) 50%, transparent 51%)",
    "radial-gradient(1.3px 1.3px at 22% 90%, rgba(255,255,255,0.3) 50%, transparent 51%)",
  ].join(","),
  backgroundSize:
    "420px 420px, 560px 560px, 340px 340px, 700px 700px, 480px 480px, 620px 620px, 380px 380px, 520px 520px",
};

/**
 * Ramp for the seam where a dark ACE surface meets the white brand pages.
 * Tinted through the brand red rather than straight white-to-black, which
 * would land on a muddy grey band halfway down.
 */
export const SEAM_RAMP = [
  ["#ffffff", 0],
  ["#fbf3f4", 10],
  ["#ecd3d6", 24],
  ["#c88189", 39],
  ["#8d3039", 54],
  ["#4a121b", 70],
  ["#1c080e", 86],
  [INK, 100],
];
