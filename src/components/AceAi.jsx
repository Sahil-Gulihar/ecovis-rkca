import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { CAR_MASK } from "./aceTheme";
import { DarkSeam, Starfield } from "./aceVisuals";
import carExploded from "../assets/images/ace-car.webp";
import shotEngine from "../assets/images/ace-engine.webp";
import shotWing from "../assets/images/ace-wing.webp";
import shotMono from "../assets/images/ace-mono.webp";
import shotTyre from "../assets/images/ace-tyre.webp";
import shotRearWing from "../assets/images/ace-rwing.webp";

const LOREM_SHORT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.";

/**
 * Callouts are laid out in the scene box's own percentage space (0-100 on both
 * axes). `card` positions the glass panel, `line` is the leader polyline and
 * `dot` is where it lands on the car.
 */
const STEPS = [
  {
    letter: "A",
    title: "Assess with clarity",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    card: { left: "0%", top: "5%" },
    line: "M23.5 27 L29 31 L34.6 37.2",
    dot: { x: 34.6, y: 37.2 },
    reveal: [0.16, 0.34],
  },
  {
    letter: "C",
    title: "Collective intelligence",
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    card: { right: "0%", top: "9%" },
    line: "M80 36.5 L77.5 43 L74.3 51.3",
    dot: { x: 74.3, y: 51.3 },
    reveal: [0.4, 0.58],
  },
  {
    letter: "E",
    title: "Embedded education",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    card: { right: "2%", bottom: "6%" },
    line: "M75 70 L68.5 68.5 L61.5 66.6",
    dot: { x: 61.5, y: 66.6 },
    reveal: [0.64, 0.82],
  },
];

const SECTIONS = [
  {
    letter: "A",
    kicker: "Assess",
    title: "Assess with clarity",
    image: shotEngine,
    alt: "Exploded view of the power unit",
    body: [
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    ],
    bullets: ["Lorem ipsum dolor", "Consectetur adipiscing", "Tempor incididunt"],
  },
  {
    letter: "C",
    kicker: "Collective",
    title: "Collective intelligence",
    image: shotWing,
    alt: "Exploded view of the front wing assembly",
    body: [
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
      "Et harum quidem rerum facilis est et expedita distinctio.",
    ],
    bullets: ["Quis nostrud exercitation", "Ullamco laboris nisi", "Commodo consequat"],
  },
  {
    letter: "E",
    kicker: "Embedded",
    title: "Embedded education",
    image: shotMono,
    alt: "Exploded view of the carbon monocoque",
    body: [
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      "Itaque earum rerum hic tenetur a sapiente delectus.",
    ],
    bullets: ["Voluptate velit esse", "Cillum dolore fugiat", "Excepteur sint occaecat"],
  },
];

const SPECS = [
  { value: "1,000+", label: "Components" },
  { value: "~1,000", label: "Horsepower" },
  { value: "798 kg", label: "Minimum weight" },
  { value: "0.0", label: "Margin for error" },
];

const clamp = (v) => Math.min(1, Math.max(0, v));
const smooth = (t) => t * t * (3 - 2 * t);

/** Eased 0 -> 1 as scroll progress `p` crosses [from, to]; holds at 1 after. */
const phase = (p, [from, to]) => smooth(clamp((p - from) / (to - from)));

function useScrollProgress(ref) {
  const reduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [p, setP] = useState(reduced ? 1 : 0);

  useEffect(() => {
    if (reduced) return undefined;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setP(clamp(-rect.top / (rect.height - window.innerHeight)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, reduced]);

  return p;
}

function Callout({ step, t, compact = false }) {
  const body = (
    <>
      <div className="flex items-baseline gap-3">
        <span className="font-display text-[34px] leading-none text-[#ff4d5e]">{step.letter}</span>
        <h3 className="font-display text-[24px] leading-tight text-white">{step.title}</h3>
      </div>
      <p className="mt-2 text-[14px] leading-[1.6] text-white/55">{step.body}</p>
    </>
  );

  if (compact) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">{body}</div>
    );
  }

  return (
    <div
      className="absolute w-[min(300px,26vw)] rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md"
      style={{
        ...step.card,
        opacity: t,
        transform: `translateY(${(1 - t) * 14}px)`,
        willChange: "opacity, transform",
      }}
    >
      {body}
    </div>
  );
}

function CarScene() {
  const ref = useRef(null);
  const p = useScrollProgress(ref);

  const intro = phase(p, [0, 0.12]);
  const scale = 0.94 + 0.1 * intro + 0.03 * p;
  const progress = STEPS.map((s) => phase(p, s.reveal));

  return (
    <section ref={ref} className="relative h-[460vh] bg-[#07060a]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        <Starfield className="opacity-70" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 55% at 50% 52%, rgba(190,20,35,0.28) 0%, rgba(120,10,22,0.12) 45%, transparent 75%)",
          }}
          aria-hidden
        />

        <p className="relative z-20 mb-1 text-center text-[12px] font-medium uppercase tracking-[0.42em] text-white/40">
          Three parts. One system.
        </p>

        {/* Scene box: every callout coordinate below is a % of this box.
            The car occupies the middle 64%, leaving gutters for the callouts. */}
        <div className="relative z-10 aspect-[192/100] w-[min(1240px,92vw)]">
          <img
            src={carExploded}
            alt="Exploded view of a Formula 1 car"
            className="absolute left-1/2 top-1/2 aspect-[192/100] w-[64%] object-contain"
            style={{
              transform: `translate(-50%, -50%) scale(${scale}) rotate(${(1 - intro) * -1.2}deg)`,
              opacity: 0.3 + 0.7 * intro,
              WebkitMaskImage: CAR_MASK,
              maskImage: CAR_MASK,
              willChange: "transform, opacity",
            }}
          />

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            {STEPS.map((step, i) => (
              <path
                key={step.letter}
                d={step.line}
                pathLength="1"
                fill="none"
                stroke="rgba(255,255,255,0.45)"
                strokeWidth="0.16"
                strokeDasharray="1"
                strokeDashoffset={1 - progress[i]}
              />
            ))}
          </svg>

          {STEPS.map((step, i) => (
            <span
              key={step.letter}
              className="absolute size-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff4d5e]"
              style={{
                left: `${step.dot.x}%`,
                top: `${step.dot.y}%`,
                opacity: progress[i],
                boxShadow: "0 0 0 4px rgba(255,77,94,0.18)",
              }}
              aria-hidden
            />
          ))}

          {STEPS.map((step, i) => (
            <Callout key={step.letter} step={step} t={progress[i]} />
          ))}
        </div>

        {/* A - C - E rail */}
        <div className="relative z-20 mt-2 flex items-center gap-4">
          {STEPS.map((step, i) => (
            <span
              key={step.letter}
              className="font-display text-[20px] transition-colors duration-300"
              style={{ color: progress[i] > 0.5 ? "#fff" : "rgba(255,255,255,0.22)" }}
            >
              {step.letter}
            </span>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-white/10">
          <div className="h-px bg-[#ff4d5e]/70" style={{ width: `${p * 100}%` }} />
        </div>
      </div>
    </section>
  );
}

function CarStack() {
  return (
    <section className="relative bg-[#07060a] px-6 py-16">
      <Starfield className="opacity-60" />
      <p className="relative text-center text-[12px] font-medium uppercase tracking-[0.4em] text-white/40">
        Three parts. One system.
      </p>
      <img
        src={carExploded}
        alt="Exploded view of a Formula 1 car"
        className="relative mt-6 w-full"
        style={{ WebkitMaskImage: CAR_MASK, maskImage: CAR_MASK }}
      />
      <div className="relative mt-6 grid gap-4">
        {STEPS.map((step) => (
          <Callout key={step.letter} step={step} t={1} compact />
        ))}
      </div>
    </section>
  );
}

function DetailSection({ section, index }) {
  const flip = index % 2 === 1;
  return (
    <section className="relative border-t border-white/5 bg-[#07060a] py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1148px] items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <div className={flip ? "lg:order-2" : undefined}>
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg border border-[#ff4d5e]/30 bg-[#ff4d5e]/10 font-display text-[18px] text-[#ff4d5e]">
              {section.letter}
            </span>
            <span className="text-[12px] font-medium uppercase tracking-[0.3em] text-white/35">
              {section.kicker}
            </span>
          </div>
          <h2 className="mt-5 font-display text-[36px] leading-[1.1] text-white sm:text-[46px]">
            {section.title}
          </h2>
          {section.body.map((para) => (
            <p key={para.slice(0, 24)} className="mt-4 text-[16px] leading-[1.7] text-white/55">
              {para}
            </p>
          ))}
          <ul className="mt-7 grid gap-2.5">
            {section.bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-[15px] text-white/70">
                <span className="h-px w-5 bg-[#ff4d5e]/60" aria-hidden />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className={`relative ${flip ? "lg:order-1" : ""}`}>
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img src={section.image} alt={section.alt} className="w-full object-cover" loading="lazy" />
          </div>
          <div
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] blur-2xl"
            style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(200,16,46,0.28), transparent 70%)" }}
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}

export default function AceAi() {
  return (
    <div className="bg-[#07060a]">
      <Header dark />

      {/* Hero */}
      <section className="relative overflow-hidden pb-14 pt-[140px] lg:pb-20 lg:pt-[180px]">
        <Starfield />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[70vh]"
          style={{
            background: "radial-gradient(50% 60% at 50% 0%, rgba(200,16,46,0.22), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-[900px] px-6 text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.42em] text-[#ff4d5e]/80">
            Ecovis RKCA · ACE AI
          </p>
          <h1 className="mt-6 font-display text-[46px] leading-[1.04] tracking-[-0.01em] text-white sm:text-[68px] lg:text-[82px]">
            Combining infinite depth
            <br />
            with flawless precision.
          </h1>
          <p className="mx-auto mt-7 max-w-[560px] text-[17px] leading-[1.65] text-white/50">
            {LOREM_SHORT} Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:info@ecovisrkca.com"
              className="rounded-full bg-white px-6 py-3 text-[15px] font-medium text-[#07060a] transition hover:bg-white/90"
            >
              Book a walkthrough
            </a>
            <Link
              to="/"
              className="rounded-full border border-white/15 px-6 py-3 text-[15px] font-medium text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Back to Ecovis RKCA
            </Link>
          </div>
        </div>
      </section>

      <div className="hidden lg:block">
        <CarScene />
      </div>
      <div className="lg:hidden">
        <CarStack />
      </div>

      {/* Spec band */}
      <section className="relative overflow-hidden border-y border-white/5 bg-[#0a0810]">
        <img
          src={shotTyre}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          aria-hidden
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, #07060a 0%, rgba(7,6,10,0.72) 50%, #07060a 100%)" }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-[1148px] gap-8 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {SPECS.map((s) => (
            <div key={s.label}>
              <p className="font-display text-[42px] leading-none text-white">{s.value}</p>
              <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.28em] text-white/40">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {SECTIONS.map((section, i) => (
        <DetailSection key={section.letter} section={section} index={i} />
      ))}

      {/* Closing */}
      <section className="relative overflow-hidden border-t border-white/5 py-24">
        <Starfield className="opacity-60" />
        <img
          src={shotRearWing}
          alt=""
          className="pointer-events-none absolute -right-16 bottom-0 w-[560px] max-w-[58%] opacity-40"
          style={{
            WebkitMaskImage: "radial-gradient(ellipse 52% 56% at 50% 50%, #000 20%, transparent 78%)",
            maskImage: "radial-gradient(ellipse 52% 56% at 50% 50%, #000 20%, transparent 78%)",
          }}
          aria-hidden
          loading="lazy"
        />
        <div className="relative mx-auto max-w-[760px] px-6">
          <h2 className="font-display text-[38px] leading-[1.1] text-white sm:text-[52px]">
            The brains behind the brilliance.
          </h2>
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-white/55">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </p>
          <a
            href="mailto:info@ecovisrkca.com"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#ff4d5e] px-6 py-3 text-[15px] font-medium text-white transition hover:bg-[#ff3145]"
          >
            Contact Us
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      <DarkSeam to="light" />
      <Footer />
    </div>
  );
}
