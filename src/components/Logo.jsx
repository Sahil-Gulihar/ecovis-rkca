export default function Logo({ light = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg viewBox="0 0 36 36" className="size-9 shrink-0" aria-hidden>
        <rect width="36" height="36" rx="8" fill="#0b3d91" />
        <path d="M11 9h9a6 6 0 0 1 1.5 11.8L26 27h-4.6l-4-5.7H15V27h-4V9Zm4 3.6v5.1h4.6a2.55 2.55 0 0 0 0-5.1H15Z" fill="#fff" />
      </svg>
      <span className={`text-[20px] font-bold tracking-tight ${light ? "text-white" : "text-[#090909]"}`}>
        Ecovis RKCA
      </span>
    </div>
  );
}
