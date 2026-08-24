import logoIcon from "../assets/images/logo-icon.png";

export default function Logo({ light = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <img src={logoIcon} alt="" className="size-9 shrink-0 rounded-lg object-contain" />
      <span className={`text-[20px] font-bold tracking-tight ${light ? "text-white" : "text-[#090909]"}`}>
        Meradian
      </span>
    </div>
  );
}
