import iconRealGrowth from "../assets/images/icon-real-growth.png";
import iconGuidelines from "../assets/images/icon-guidelines.png";
import iconTargeting from "../assets/images/icon-targeting.png";
import iconManagement from "../assets/images/icon-management.png";

const CARDS = [
  {
    icon: iconRealGrowth,
    title: "50+ Years of Experience",
    body: "More than five decades of presence in India, serving over 1,500 clients across industries.",
  },
  {
    icon: iconGuidelines,
    title: "Governance You Can Trust",
    body: "We help you build businesses that are well governed, compliant and ready for investors.",
  },
  {
    icon: iconTargeting,
    title: "A 90+ Country Global Network",
    body: "Part of a global network across more than 90 countries, bringing international expertise to your business.",
  },
  {
    icon: iconManagement,
    title: "Growth Partners, Not Just Advisors",
    body: "Technology, Strategy, Governance and Capital under one roof, so you get end-to-end support.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#f7f7f7] py-24">
      <div className="mx-auto max-w-[1148px] px-6 text-center">
        <h2 className="text-[28px] font-bold text-[#090909] sm:text-[36px]">Why Choose Ecovis RKCA?</h2>
        <p className="mx-auto mt-4 max-w-[600px] text-[16px] leading-[1.6] text-[#545454]">
          Discover the advantages that set us apart and make your business journey stronger, safer and more investable.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl bg-white p-10 text-center shadow-[0px_1px_1px_0px_rgba(14,14,14,0.04),0px_4px_4px_0px_rgba(211,211,211,0.06)]"
            >
              <img src={card.icon} alt="" className="mx-auto h-[110px] w-auto object-contain" />
              <h3 className="mt-6 text-[22px] font-bold text-[#090909]">{card.title}</h3>
              <p className="mt-3 text-[16px] leading-[1.6] text-[#545454]">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
