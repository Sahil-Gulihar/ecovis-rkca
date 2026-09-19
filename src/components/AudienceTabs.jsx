import { useState } from "react";
import tabAgency from "../assets/images/tab-agency.png";

const TABS = [
  {
    key: "agency",
    label: "Legal",
    title: "Legal & Compliance",
    body: "Legal advice and policy support to keep your business compliant and well governed.",
    image: tabAgency,
  },
  {
    key: "business",
    label: "Finance",
    title: "Finance & Accounting",
    body: "Financial advisory, accounting and reporting support that give you clarity and control.",
    image: tabAgency,
  },
  {
    key: "startup",
    label: "Startup",
    title: "For Startups",
    body: "Tailored growth strategies and acceleration support for emerging ventures.",
    image: tabAgency,
  },
  {
    key: "enterprise",
    label: "Digital",
    title: "Digital Transformation",
    body: "Technology expertise and data analytics services to transform how your business operates.",
    image: tabAgency,
  },
];

export default function AudienceTabs() {
  const [active, setActive] = useState(TABS[0].key);
  const tab = TABS.find((t) => t.key === active);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[880px] px-6">
        <h2 className="text-center text-[28px] font-bold text-[#090909] sm:text-[36px]">
          Designed for Your Business Needs
        </h2>

        <div className="mt-12 rounded-3xl bg-[#f7f7f7] p-8 shadow-[0px_1px_1px_0px_rgba(14,14,14,0.04),0px_4px_4px_0px_rgba(211,211,211,0.06)] sm:p-16">
          <div className="text-center">
            <h3 className="text-[22px] font-bold text-[#090909]">{tab.title}</h3>
            <p className="mx-auto mt-3 max-w-[450px] text-[16px] leading-[1.6] text-[#545454]">{tab.body}</p>
            <a href="#more" className="mt-4 inline-flex items-center gap-3 text-[15px] font-medium text-[#090909]">
              More details
              <span className="flex size-[34px] items-center justify-center rounded-full border border-[#090909]">→</span>
            </a>
          </div>

          <div className="mx-auto mt-8 max-w-[560px] overflow-hidden rounded-[20px] border-2 border-black">
            <img src={tab.image} alt={tab.title} className="w-full object-cover" />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 border-t border-black/10 pt-6">
            {TABS.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setActive(t.key)}
                className={`rounded-2xl px-6 py-3 text-[15px] font-medium transition ${
                  active === t.key ? "bg-[#090909] font-bold text-white" : "text-[#545454] hover:bg-black/5"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
