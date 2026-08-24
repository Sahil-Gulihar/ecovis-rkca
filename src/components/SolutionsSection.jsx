import solutionsGrowth from "../assets/images/solutions-growth.png";
import solutionsManagement from "../assets/images/solutions-management.png";
import iconWrench from "../assets/images/icon-wrench.svg";
import iconChip from "../assets/images/icon-chip.svg";

const CARDS = [
  {
    icon: iconWrench,
    title: "1. Campaign Solutions",
    body: "Boost visibility, engagement and conversion with influencer campaigns that connect your brand to the right audience, turning creators into a true growth engine.",
    image: solutionsGrowth,
  },
  {
    icon: iconChip,
    title: "2. Management Solutions",
    body: "Simplify influencer management with automated outreach, unified messaging, and effortless contract and payment control—all in one place.",
    image: solutionsManagement,
  },
];

export default function SolutionsSection() {
  return (
    <section className="bg-[#f7f7f7] py-24">
      <div className="mx-auto max-w-[1148px] px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <h2 className="text-[28px] font-bold leading-[1.2] text-[#090909] sm:text-[36px]">
            How can Meradian solve your marketing challenges?
          </h2>
          <div className="flex shrink-0 items-center gap-3">
            <a
              href="https://cal.com/meradian/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[#090909] bg-[#090909] px-5 py-3 text-[15px] font-medium text-white transition hover:opacity-90"
            >
              Book a meet
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 rounded-full border border-[#090909] px-4 py-2.5 text-[15px] font-medium text-[#090909] transition hover:bg-black/5"
            >
              Browse all features
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6">
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              className={`flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0px_1px_1px_0px_rgba(14,14,14,0.04),0px_4px_4px_0px_rgba(211,211,211,0.06)] md:flex-row ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex flex-1 flex-col justify-center gap-6 p-10 md:p-16">
                <img src={card.icon} alt="" className="size-7 object-contain" />
                <div>
                  <h3 className="text-[24px] font-bold text-[#090909]">{card.title}</h3>
                  <p className="mt-3 max-w-[420px] text-[16px] leading-[1.6] text-[#545454]">{card.body}</p>
                </div>
                <a href="#learn-more" className="flex items-center gap-3 text-[15px] font-medium text-[#090909]">
                  Learn more
                  <span className="flex size-[34px] items-center justify-center rounded-full border border-[#090909]">→</span>
                </a>
              </div>
              <div className="flex flex-1 items-center justify-center bg-white p-6">
                <img src={card.image} alt={card.title} className="max-h-[400px] w-full object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
