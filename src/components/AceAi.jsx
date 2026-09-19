import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ferrari from "../assets/images/ferrari-sf24.jpg";

const COLS = 8;
const ROWS = 6;

// Deterministic pseudo-random so tiles scatter the same way on every render.
function rand(seed) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

const TILES = Array.from({ length: COLS * ROWS }, (_, i) => {
  const c = i % COLS;
  const r = Math.floor(i / COLS);
  return {
    key: i,
    c,
    r,
    dx: (rand(i + 1) - 0.5) * 160, // vw
    dy: (rand(i + 101) - 0.5) * 130, // vh
    dz: (rand(i + 151) - 0.3) * 900, // px, toward the camera
    rot: (rand(i + 201) - 0.5) * 260,
    rx: (rand(i + 251) - 0.5) * 160,
    ry: (rand(i + 271) - 0.5) * 160,
    delay: rand(i + 301) * 0.45,
  };
});

const clamp = (v) => Math.min(1, Math.max(0, v));
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

const PILLARS = [
  {
    step: "A",
    title: "Assess with clarity",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    step: "C",
    title: "Collective intelligence via KPI Explorer",
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    step: "E",
    title: "Embedded execution via ERP integrations",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

function useScrollProgress(ref) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [p, setP] = useState(reduced ? 1 : 0);
  useEffect(() => {
    if (reduced) return;
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

function FerrariAssembly() {
  const ref = useRef(null);
  const p = useScrollProgress(ref);
  const assembled = p >= 1;

  return (
    <section ref={ref} className="relative h-[320vh] bg-[#1a0306]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, #5a0a12 0%, #1a0306 70%)" }}
        />

        <div className="relative z-10 mb-6 px-6 text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.3em] text-white/60">Scroll to assemble</p>
          <h2 className="mt-2 text-[28px] font-bold text-white sm:text-[36px]">
            Built like a Formula 1 machine
          </h2>
        </div>

        <div
          className="relative z-10"
          style={{
            width: "min(92vw, calc(62vh * 1.5))",
            aspectRatio: "3 / 2",
            perspective: "1200px",
            transform: `scale(${0.94 + 0.06 * easeOut(p)})`,
            filter: `drop-shadow(0 30px 60px rgba(255, 30, 50, ${0.35 * easeOut(p)}))`,
          }}
        >
          {TILES.map((t) => {
            const local = easeOut(clamp((p / 0.75 - t.delay) / 0.55));
            const inv = 1 - local;
            return (
              <div
                key={t.key}
                style={{
                  position: "absolute",
                  left: `${(t.c * 100) / COLS}%`,
                  top: `${(t.r * 100) / ROWS}%`,
                  width: `calc(${100 / COLS}% + 1px)`,
                  height: `calc(${100 / ROWS}% + 1px)`,
                  backgroundImage: `url(${ferrari})`,
                  backgroundSize: `${COLS * 100}% ${ROWS * 100}%`,
                  backgroundPosition: `${(t.c / (COLS - 1)) * 100}% ${(t.r / (ROWS - 1)) * 100}%`,
                  transform: `translate3d(${t.dx * inv}vw, ${t.dy * inv}vh, ${t.dz * inv}px) rotateX(${t.rx * inv}deg) rotateY(${t.ry * inv}deg) rotateZ(${t.rot * inv}deg)`,
                  opacity: assembled ? 1 : Math.min(1, local * 3),
                  filter: inv > 0.02 ? `blur(${(inv * 6).toFixed(1)}px)` : "none",
                  willChange: "transform, opacity",
                }}
              />
            );
          })}
        </div>

        <div className="relative z-10 mt-5 flex items-baseline gap-2 text-white">
          <span className="text-[32px] font-bold tabular-nums">
            {Math.round(easeOut(p) * 1000).toLocaleString()}
          </span>
          <span className="text-[13px] uppercase tracking-[0.25em] text-white/60">/ 1,000 components</span>
        </div>

        <p
          className="relative z-10 mt-3 max-w-[560px] px-6 text-center text-[15px] leading-[1.6] text-white/80 transition-opacity duration-500"
          style={{ opacity: p > 0.9 ? 1 : 0 }}
        >
          Human-in-the-loop driver, with KPI Explorer as the core engine.
        </p>
      </div>
    </section>
  );
}

export default function AceAi() {
  return (
    <>
      <Header />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[880px] px-6 text-center">
          <p className="text-[14px] font-medium uppercase tracking-[0.25em] text-[#545454]">Ecovis RKCA</p>
          <h1 className="mt-4 text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-[#090909] sm:text-[56px]">
            ACE AI
          </h1>
          <p className="mx-auto mt-5 max-w-[600px] text-[17px] leading-[1.6] text-[#545454]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero,
            sed cursus ante dapibus diam.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f7f7] py-24">
        <div className="mx-auto max-w-[1148px] px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {PILLARS.map((p) => (
              <div
                key={p.step}
                className="rounded-3xl bg-white p-10 shadow-[0px_1px_1px_0px_rgba(14,14,14,0.04),0px_4px_4px_0px_rgba(211,211,211,0.06)]"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-[#090909] text-[20px] font-bold text-white">
                  {p.step}
                </span>
                <h3 className="mt-6 text-[22px] font-bold leading-[1.25] text-[#090909]">{p.title}</h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-[#545454]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FerrariAssembly />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="text-[28px] font-bold text-[#090909] sm:text-[36px]">Lorem ipsum dolor sit amet</h2>
          <p className="mt-5 text-[16px] leading-[1.7] text-[#545454]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </p>
          <p className="mt-4 text-[16px] leading-[1.7] text-[#545454]">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
