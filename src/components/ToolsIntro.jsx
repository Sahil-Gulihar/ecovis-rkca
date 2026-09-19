import icon1 from "../assets/images/tool-icon-1.png";
import icon2 from "../assets/images/tool-icon-2.png";
import icon3 from "../assets/images/tool-icon-3.png";
import icon4 from "../assets/images/tool-icon-4.png";
import icon5 from "../assets/images/tool-icon-5.png";
import icon6 from "../assets/images/tool-icon-6.png";

export default function ToolsIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
        <img src={icon5} alt="" className="absolute left-[-4%] top-[30%] w-[180px] object-contain" />
        <img src={icon4} alt="" className="absolute left-[12%] top-[18%] w-[90px] object-contain" />
        <img src={icon1} alt="" className="absolute left-[15%] top-[42%] w-[130px] object-contain" />
        <img src={icon2} alt="" className="absolute right-[8%] top-[18%] w-[130px] object-contain" />
        <img src={icon6} alt="" className="absolute right-[3%] top-[42%] w-[240px] object-contain" />
        <img src={icon3} alt="" className="absolute right-[-2%] top-[36%] w-[80px] object-contain" />
      </div>

      <div className="relative mx-auto max-w-[800px] px-6 text-center">
        <h2 className="text-[28px] font-bold leading-[1.2] text-[#090909] sm:text-[36px]">
          Explore the Tools Behind Our Campaigns
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-[16px] leading-[1.6] text-[#545454]">
          Meradian's campaigns are powered by a comprehensive suite of tools designed to address your influencer discovery, outreach, and reporting needs. Discover how each tool contributes to your success.
        </p>
      </div>
    </section>
  );
}
