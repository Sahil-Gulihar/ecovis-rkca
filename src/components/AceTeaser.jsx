import { Link } from "react-router-dom";
import carExploded from "../assets/images/ace-car.webp";
import { CAR_MASK, INK } from "./aceTheme";
import { DarkSeam, Starfield } from "./aceVisuals";

const PARTS = [
  { letter: "A", title: "Assess with clarity" },
  { letter: "C", title: "Collective intelligence" },
  { letter: "E", title: "Embedded education" },
];

export default function AceTeaser() {
  return (
    <div style={{ backgroundColor: INK }}>
      <DarkSeam to="dark" />

      <section className="relative overflow-hidden pb-20 pt-6">
        <Starfield className="opacity-70" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 60% at 50% 45%, rgba(200,16,46,0.22), transparent 72%)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-[1148px] px-6 text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.42em] text-[#ff4d5e]/80">
            Ecovis RKCA · ACE AI
          </p>
          <h2 className="mx-auto mt-6 max-w-[760px] font-display text-[38px] leading-[1.05] text-white sm:text-[54px]">
            Combining infinite depth with flawless precision.
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-[16px] leading-[1.65] text-white/50">
            Three parts. One system. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <img
            src={carExploded}
            alt="Exploded view of a Formula 1 car"
            className="mx-auto mt-6 w-[min(860px,100%)]"
            style={{ WebkitMaskImage: CAR_MASK, maskImage: CAR_MASK }}
            loading="lazy"
          />

          <div className="-mt-4 grid gap-4 sm:grid-cols-3">
            {PARTS.map((part) => (
              <div key={part.letter} className="flex items-center justify-center gap-3">
                <span className="font-display text-[26px] leading-none text-[#ff4d5e]">
                  {part.letter}
                </span>
                <span className="text-[15px] text-white/70">{part.title}</span>
              </div>
            ))}
          </div>

          <Link
            to="/ace-ai"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-medium text-[#07060a] transition hover:bg-white/90"
          >
            Explore ACE AI
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <DarkSeam to="glow" />
    </div>
  );
}
