import iconRealGrowth from "../assets/images/icon-real-growth.png";
import iconGuidelines from "../assets/images/icon-guidelines.png";
import iconTargeting from "../assets/images/icon-targeting.png";
import iconManagement from "../assets/images/icon-management.png";

const CARDS = [
  {
    icon: iconRealGrowth,
    title: "Real, Vetted Influencers",
    body: "Unlike platforms that rely on inflated numbers, Meradian focuses on genuine reach, connecting you with creators whose audiences actually engage.",
  },
  {
    icon: iconGuidelines,
    title: "Transparent and Compliant Campaigns",
    body: "Meradian is designed to operate within every platform's guidelines and disclosure rules, keeping your brand safe while delivering results.",
  },
  {
    icon: iconTargeting,
    title: "Advanced Targeting for Maximum Impact",
    body: "With Meradian, you can target your ideal audience with precision, matching creators by niche, location, and audience demographics.",
  },
  {
    icon: iconManagement,
    title: "All-in-One Campaign Management",
    body: "Save time and streamline your workflow by managing creator outreach, content approvals, and performance analytics all in one place.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#f7f7f7] py-24">
      <div className="mx-auto max-w-[1148px] px-6 text-center">
        <h2 className="text-[28px] font-bold text-[#090909] sm:text-[36px]">Why Choose Meradian?</h2>
        <p className="mx-auto mt-4 max-w-[600px] text-[16px] leading-[1.6] text-[#545454]">
          Discover the unique advantages that set us apart and make your influencer marketing journey smarter, safer, and more effective.
        </p>
        <a
          href="https://cal.com/meradian/intro"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-xl border border-[#090909] bg-[#090909] px-6 py-3 text-[16px] font-medium text-white transition hover:opacity-90"
        >
          Book a meet
        </a>

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
