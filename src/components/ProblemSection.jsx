import iconTarget from "../assets/images/icon-target.png";
import iconInteract from "../assets/images/icon-interact.png";
import iconAds from "../assets/images/icon-ads.png";
import plusIcon from "../assets/images/plus-icon.png";
import arrowsDown from "../assets/images/arrows-down.png";
import noResultsShot from "../assets/images/no-results-screenshot.png";

const PROBLEMS = [
  { icon: iconTarget, title: "Lack strong governance" },
  { icon: iconInteract, title: "Struggle with compliance" },
  { icon: iconAds, title: "Miss growth capital" },
];

export default function ProblemSection() {
  return (
    <section className="bg-[#f7f7f7] py-24">
      <div className="mx-auto max-w-[1148px] px-6">
        <h2 className="text-[28px] font-bold text-[#090909] sm:text-[36px]">
          Many Businesses Struggle Because They…
        </h2>

        <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:items-stretch sm:justify-center sm:gap-2">
          {PROBLEMS.map((p, i) => (
            <div key={p.title} className="flex items-center gap-2">
              <div className="flex w-[220px] flex-col items-center gap-4 rounded-3xl bg-white p-8 text-center shadow-[0px_1px_1px_0px_rgba(14,14,14,0.04),0px_4px_4px_0px_rgba(211,211,211,0.06)]">
                <img src={p.icon} alt="" className="size-[80px] object-contain" />
                <p className="text-[17px] font-bold text-[#090909]">{p.title}</p>
              </div>
              {i < PROBLEMS.length - 1 && (
                <img src={plusIcon} alt="" className="hidden size-[24px] shrink-0 sm:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <img src={arrowsDown} alt="" className="h-[70px] w-auto object-contain" />
        </div>

        <div className="mt-8 flex flex-col items-center gap-10 rounded-3xl bg-white p-10 shadow-[0px_1px_1px_0px_rgba(14,14,14,0.04),0px_4px_4px_0px_rgba(211,211,211,0.06)] sm:flex-row sm:p-14">
          <div className="max-w-[380px] text-center sm:text-left">
            <h3 className="text-[24px] font-bold text-[#090909]">
              End up with <span className="text-[#ff0247]">NO DIRECTION...</span>
            </h3>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#545454]">
              Weak governance, compliance gaps and unclear strategy — a business that never becomes investable.
            </p>
          </div>
          <img src={noResultsShot} alt="Business performance dashboard" className="w-full max-w-[400px] rounded-2xl object-contain" />
        </div>
      </div>
    </section>
  );
}
