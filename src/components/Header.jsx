import { Link } from "react-router-dom";
import Logo from "./Logo";

const NAV_LINKS = ["Services", "Industries", "About Us", "Contact"];
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
          <a href="#insights" className="text-[15px] font-medium text-[#090909] hover:text-black">
            Insights
          </a>
        </nav>

      </div>
    </header>
  );
}
