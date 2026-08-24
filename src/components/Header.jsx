import { Link } from "react-router-dom";
import Logo from "./Logo";

const NAV_LINKS = ["For Brands", "For Influencers", "Campaigns", "Resources"];
const BOOK_A_MEET_HREF = "https://cal.com/meradian/intro";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[67px] max-w-[1330px] items-center justify-between px-6">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((label) => (
            <a key={label} href="#" className="text-[15px] font-medium text-[#222] hover:text-black">
              {label}
            </a>
          ))}
          <a href="#pricing" className="text-[15px] font-medium text-[#090909] hover:text-black">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BOOK_A_MEET_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl border border-[#090909] px-4 py-2.5 text-[15px] font-medium text-[#090909] transition hover:bg-black/5 sm:block"
          >
            Book a meet
          </a>
          <Link
            to="/signup"
            className="rounded-xl border border-[#090909] bg-[#090909] px-4 py-2.5 text-[15px] font-medium text-white transition hover:opacity-90"
          >
            Sign up as an Influencer
          </Link>
        </div>
      </div>
    </header>
  );
}
