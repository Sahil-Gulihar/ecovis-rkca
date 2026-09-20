import iconRealGrowth from "../assets/images/icon-real-growth.png";
import iconGuidelines from "../assets/images/icon-guidelines.png";
import iconTargeting from "../assets/images/icon-targeting.png";
import iconManagement from "../assets/images/icon-management.png";

const CARDS = [
  {
    icon: iconRealGrowth,
    title: "Technology",
    body: "Transform and foster your business with our tech experts and data analytics team.",
  },
  {
    icon: iconGuidelines,
    title: "Strategy",
    body: "Strategic thinking and planning, go-to-market, customer insight and performance-enabling goals and KPIs.",
  },
  {
    icon: iconTargeting,
    title: "Governance",
    body: "Legal advice, policies and risk work that keep your business compliant and ready for scrutiny.",
  },
  {
    icon: iconManagement,
    title: "Capital",
    body: "Financial and capital services that fuel ventures and make your business financially sound.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#f7f7f7] py-24">
      <div className="mx-auto max-w-[1148px] px-6 text-center">
        <h2 className="text-[28px] font-bold text-[#090909] sm:text-[36px]">Our Growth Ecosystem</h2>
        <p className="mx-auto mt-4 max-w-[600px] text-[16px] leading-[1.6] text-[#545454]">
          At our core, we see ourselves as growth partners, not just advisors. Scaling a business in
          today&rsquo;s dynamic landscape demands a solid foundation built on four key pillars.
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
