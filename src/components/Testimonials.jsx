import avatarLouis from "../assets/images/avatar-louis.png";
import avatarHugo from "../assets/images/avatar-hugo.png";
import avatarMathieu from "../assets/images/avatar-mathieu.png";
import avatarFrancis from "../assets/images/avatar-francis.png";
import avatarCylia from "../assets/images/avatar-cylia.png";
import avatarAmanda from "../assets/images/avatar-amanda.png";
import avatarMohammed from "../assets/images/avatar-mohammed.png";

const TESTIMONIALS = [
  {
    name: "Our Tagline",
    role: "Firm",
    avatar: avatarLouis,
    quote:
      "We Help Build Investable & Well Governed Businesses.",
  },
  {
    name: "Governance",
    role: "Risk & Compliance",
    avatar: avatarHugo,
    quote:
      "Legal advice and policy support to keep your business compliant and well governed.",
  },
  {
    name: "Finance",
    role: "Capital",
    avatar: avatarMathieu,
    quote:
      "Financial advisory and capital services for growing businesses.",
  },
  {
    name: "Strategy",
    role: "Performance",
    avatar: avatarFrancis,
    quote:
      "Goal-oriented consulting that addresses business-performance gaps.",
  },
  {
    name: "Digital",
    role: "Transformation",
    avatar: avatarCylia,
    quote:
      "Technology expertise and data analytics services for modern businesses.",
  },
  {
    name: "Startups",
    role: "Acceleration",
    avatar: avatarAmanda,
    quote:
      "Tailored growth strategies for emerging ventures.",
  },
  {
    name: "Our Approach",
    role: "Growth Partners",
    avatar: avatarMohammed,
    quote:
      "We are growth partners, not just advisors — built on Technology, Strategy, Governance and Capital.",
  },
];

function Card({ t }) {
  return (
    <div className="w-[320px] shrink-0 rounded-3xl bg-[#f7f7f7] p-8 shadow-[0px_1px_1px_0px_rgba(14,14,14,0.04),0px_4px_4px_0px_rgba(211,211,211,0.06)]">
      <div className="mb-6 size-16 overflow-hidden rounded-xl">
        <img src={t.avatar} alt={t.name} className="size-full object-cover" />
      </div>
      <p className="text-[15px] leading-[1.55] text-[#545454]">“{t.quote}”</p>
      <p className="mt-6 text-[16px] font-bold text-[#090909]">{t.name}</p>
      <p className="text-[14px] text-[#545454]">{t.role}</p>
    </div>
  );
}

export default function Testimonials() {
  const track = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="overflow-hidden bg-white py-6">
      <div className="marquee flex w-max gap-6">
        {track.map((t, i) => (
          <Card key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
      <style>{`
        .marquee {
          animation: marquee-scroll 45s linear infinite;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
