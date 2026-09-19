import float1 from "../assets/images/footer-float-1.png";
import float2 from "../assets/images/footer-float-2.png";
import float3 from "../assets/images/footer-float-3.png";
import float4 from "../assets/images/footer-float-4.png";
import Logo from "./Logo";

const COLUMNS = [
  { title: "Solution", links: ["Campaigns", "Influencer Discovery", "Analytics & Reporting"] },
  { title: "Use cases", links: ["Agency", "Business", "Startup", "Enterprise"] },
  { title: "Resources", links: ["Pricing", "Blog", "Case studies", "Affiliate program"] },
  { title: "Company", links: ["Support", "Terms of use", "Privacy policy"] },
];

export default function Footer() {
  return (
    <footer className="bg-[#090909]">
      <div className="relative overflow-hidden bg-white py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
          <img src={float1} alt="" className="absolute right-[8%] top-[28%] w-[160px] object-contain" />
          <img src={float2} alt="" className="absolute left-[19%] top-[30%] w-[100px] object-contain" />
          <img src={float3} alt="" className="absolute left-[14%] top-[10%] w-[70px] object-contain" />
          <img src={float4} alt="" className="absolute right-[16%] top-[5%] w-[110px] object-contain" />
        </div>
        <div className="relative mx-auto max-w-[615px] px-6 text-center">
          <h2 className="text-[28px] font-bold leading-[1.2] text-[#090909] sm:text-[36px]">
            Launch Your Next Campaign with Meradian
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.6] text-[#545454]">
            Reach real audiences, build lasting engagement, and drive measurable ROI with Meradian's
            influencer marketing platform for brands, agencies, and creators.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1330px] px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-[256px]">
            <Logo light />
            <p className="mt-6 text-[14px] font-medium text-[#a6a6a6]">Copyright ©2025 Meradian</p>
            <p className="mt-3 text-[12px] leading-[1.7] text-[#a6a6a6]">
              Meradian is an independent influencer marketing platform and is not affiliated with or
              endorsed by any social media platform.
            </p>
            <p className="mt-6 text-[15px] font-medium text-white">🇺🇸 English</p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-[16px] font-bold text-white">{col.title}</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[14px] text-[#a6a6a6] hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
