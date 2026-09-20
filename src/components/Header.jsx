import { Link } from "react-router-dom";
import Logo from "./Logo";

const NAV_LINKS = ["Services", "Industries", "About Us", "Contact"];

export default function Header({ dark = false }) {
  return (
    <header
      className={
        dark
          ? "absolute inset-x-0 top-0 z-50"
          : "sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur"
      }
    >
      <div className="mx-auto flex h-[67px] max-w-[1330px] items-center justify-between px-6">
        <Link to="/" className="shrink-0">
          <Logo light={dark} />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className={`text-[15px] font-medium ${
                dark ? "text-white/70 hover:text-white" : "text-[#222] hover:text-black"
              }`}
            >
              {label}
            </a>
          ))}
          <Link
            to="/ace-ai"
            className={`text-[15px] font-medium ${
              dark ? "text-white" : "text-[#090909] hover:text-black"
            }`}
          >
            ACE AI
          </Link>
          <a
            href="mailto:info@ecovisrkca.com"
            className={`rounded-full px-5 py-2 text-[14px] font-medium transition ${
              dark
                ? "border border-white/20 text-white hover:border-white/50 hover:bg-white/5"
                : "border border-[#090909] bg-[#090909] text-white hover:opacity-90"
            }`}
          >
            Talk to us
          </a>
        </nav>
      </div>
    </header>
  );
}
