import { Link } from "react-router-dom";
import iconFollowers from "../assets/images/icon-followers.png";
import floating1 from "../assets/images/floating-1.png";
import floating2 from "../assets/images/floating-2.png";
import iconClients from "../assets/images/icon-clients.png";
import floating4 from "../assets/images/floating-4.png";
import floating5 from "../assets/images/floating-5.png";
import logoKfc from "../assets/images/logo-kfc.png";
import logoPaul from "../assets/images/logo-paul.png";
import logoOrpi from "../assets/images/logo-orpi.png";
import logoPierre from "../assets/images/logo-pierre.png";
import logoOptic from "../assets/images/logo-optic.png";
import checkBlue from "../assets/images/check-1.svg";
import checkGreen from "../assets/images/check-2.svg";

const BOOK_A_MEET_HREF = "https://cal.com/meradian/intro";

const LOGOS = [
  { src: logoKfc, alt: "KFC" },
  { src: logoPaul, alt: "Paul" },
  { src: logoOrpi, alt: "Orpi" },
  { src: logoPierre, alt: "Pierre Vacances" },
  { src: logoOptic, alt: "Optic 2000" },
];

const STATS = [
  {
    icon: iconFollowers,
    value: "+150%",
    suffix: "avg",
    title: "More Campaign Reach",
    body: "Put your brand in front of highly engaged, niche audiences",
  },
  {
    icon: floating2,
    value: "10K+",
    title: "Vetted Influencers",
    body: "Access a curated network of creators across every platform",
  },
  {
    icon: iconClients,
    value: "3x",
    title: "Higher ROI",
    body: "Turn campaigns into measurable sales and brand growth",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24">
      <div className="mx-auto max-w-[1148px] px-6">
        {/* Floating decorative images */}
        <div className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
          <img src={floating1} alt="" className="absolute right-[6%] top-[6%] w-[130px] object-contain" />
          <img src={floating2} alt="" className="absolute right-[0%] top-[26%] w-[70px] object-contain" />
          <img src={floating4} alt="" className="absolute left-[10%] top-[3%] w-[90px] object-contain" />
          <img src={iconFollowers} alt="" className="absolute left-[-2%] top-[16%] w-[150px] object-contain" />
          <img src={floating5} alt="" className="absolute left-[8%] top-[38%] w-[80px] object-contain" />
        </div>

        <div className="relative mx-auto max-w-[880px] text-center">
          <h1 className="text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-[#090909] sm:text-[48px] lg:text-[56px]">
            Influencer marketing.
            <br />
            Done right.
          </h1>
          <p className="mx-auto mt-5 max-w-[560px] text-[17px] leading-[1.55] text-[#545454]">
            Meradian connects brands with the right creators and runs the campaigns —
            from discovery and outreach to reporting and ROI.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BOOK_A_MEET_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-[#090909] bg-[#090909] px-6 py-3 text-[16px] font-medium text-white transition hover:opacity-90"
            >
              Book a meet
              <span aria-hidden>→</span>
            </a>
            <Link
              to="/signup"
              className="text-[16px] font-medium text-[#090909] underline-offset-4 hover:underline"
            >
              Sign up as an Influencer
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2 text-[14px] font-medium text-[#a6a6a6]">
              <img src={checkGreen} alt="" className="size-5" />
              Vetted Creators
            </div>
            <div className="flex items-center gap-2 text-[14px] font-medium text-[#a6a6a6]">
              <img src={checkBlue} alt="" className="size-5" />
              Data-Driven Campaigns
            </div>
          </div>
        </div>

        {/* Trusted-by logo strip */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="text-[15px] font-medium text-[#545454]">
            Trusted by <span className="font-bold">500+</span> brands and agencies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-80 grayscale">
            {LOGOS.map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-9 w-auto object-contain" />
            ))}
          </div>
        </div>

        {/* Video block */}
        <div className="relative mx-auto mt-14 aspect-video w-full max-w-[1148px] overflow-hidden rounded-3xl bg-[#090909]">
          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex size-[92px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 transition hover:bg-black/80"
          >
            <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
              <path d="M0 2.5C0 0.6 2.1-0.5 3.7 0.5L26 15C27.5 16 27.5 18.2 26 19.2L3.7 33.7C2.1 34.7 0 33.6 0 31.7V2.5Z" fill="white" />
            </svg>
          </button>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <a
            href={BOOK_A_MEET_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#090909] bg-[#090909] px-6 py-3 text-[16px] font-medium text-white transition hover:opacity-90"
          >
            Book a meet
          </a>
          <Link
            to="/signup"
            className="flex items-center gap-2 rounded-full border border-[#090909] px-5 py-3 text-[16px] font-medium text-[#090909] transition hover:bg-black/5"
          >
            Sign up as an Influencer
          </Link>
        </div>

        {/* "What can Meradian do" heading + stats */}
        <div className="mt-28 text-center">
          <h2 className="text-[28px] font-bold text-[#090909] sm:text-[36px]">
            What can Meradian do for you?
          </h2>

          <div className="mt-14 grid gap-12 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.title} className="flex flex-col items-center text-center">
                <img src={stat.icon} alt="" className="h-[64px] w-[64px] object-contain" />
                <p className="mt-4 text-[34px] font-bold text-[#090909]">
                  {stat.value}
                  {stat.suffix && <span className="text-[20px]"> {stat.suffix}</span>}
                </p>
                <p className="mt-1 text-[16px] font-bold text-[#090909]">{stat.title}</p>
                <p className="mt-2 max-w-[260px] text-[15px] leading-[1.55] text-[#545454]">{stat.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
