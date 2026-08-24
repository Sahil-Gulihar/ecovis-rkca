import avatarLouis from "../assets/images/avatar-louis.png";
import avatarHugo from "../assets/images/avatar-hugo.png";
import avatarMathieu from "../assets/images/avatar-mathieu.png";
import avatarFrancis from "../assets/images/avatar-francis.png";
import avatarCylia from "../assets/images/avatar-cylia.png";
import avatarAmanda from "../assets/images/avatar-amanda.png";
import avatarMohammed from "../assets/images/avatar-mohammed.png";

const TESTIMONIALS = [
  {
    name: "Louis",
    role: "Marketing Lead, DTC Brand",
    avatar: avatarLouis,
    quote:
      "We restarted a campaign with Meradian after a slow quarter, and within a week we were matched with creators who actually moved the needle.",
  },
  {
    name: "Hugo",
    role: "Content Creator",
    avatar: avatarHugo,
    quote:
      "Meradian keeps my calendar full of brand deals that actually fit my audience. Highly recommended for creators who want consistent, quality partnerships.",
  },
  {
    name: "Mathieu",
    role: "E-commerce Entrepreneur",
    avatar: avatarMathieu,
    quote:
      "Excellent service! Meradian quickly matched us with the right creators. Their team guided us through the whole campaign, and we saw results right away.",
  },
  {
    name: "Francis",
    role: "Aspiring Influencer",
    avatar: avatarFrancis,
    quote:
      "Great platform and guidance! I signed up on Meradian to land brand campaigns and learned a lot about working with brands through their support team.",
  },
  {
    name: "Cylia",
    role: "Founder of a Boutique Brand",
    avatar: avatarCylia,
    quote:
      "After 2 months running campaigns on Meradian, we've worked with 12 creators and seen a real lift in sales. The reporting makes ROI obvious.",
  },
  {
    name: "Amanda",
    role: "Small Business Owner",
    avatar: avatarAmanda,
    quote:
      "After trying six platforms, I'm thrilled with Meradian. It matches us with genuine creators, and the team even set up our first campaign at no extra cost!",
  },
  {
    name: "Mohammed",
    role: "Social Media Manager",
    avatar: avatarMohammed,
    quote:
      "Very satisfied! Meradian is easy to use, with responsive support. It helped us run compliant influencer campaigns with clear, trackable results.",
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
