import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const PLATFORMS = ["Instagram", "TikTok", "YouTube", "X (Twitter)", "Facebook", "Other"];

export default function InfluencerSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    platform: "Instagram",
    followers: "",
    niche: "",
  });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <header className="border-b border-black/5 bg-white">
        <div className="mx-auto flex h-[67px] max-w-[1330px] items-center justify-between px-6">
          <Link to="/">
            <Logo />
          </Link>
          <Link to="/" className="text-[15px] font-medium text-[#545454] hover:text-black">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[560px] px-6 py-16">
        {submitted ? (
          <div className="rounded-3xl bg-white p-10 text-center shadow-[0px_1px_1px_0px_rgba(14,14,14,0.04),0px_4px_4px_0px_rgba(211,211,211,0.06)]">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-green-100 text-2xl">
              ✓
            </div>
            <h1 className="mt-6 text-[24px] font-bold text-[#090909]">You're on the list!</h1>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#545454]">
              Thanks for signing up, {form.name || "creator"}. Our partnerships team will review your
              profile and reach out to {form.email || "your inbox"} about upcoming campaigns that fit
              your audience.
            </p>
            <Link
              to="/"
              className="mt-8 inline-block rounded-xl border border-[#090909] bg-[#090909] px-6 py-3 text-[16px] font-medium text-white transition hover:opacity-90"
            >
              Back to home
            </Link>
          </div>
        ) : (
          <>
            <div className="text-center">
              <h1 className="text-[28px] font-bold text-[#090909] sm:text-[32px]">
                Sign up as an Influencer
              </h1>
              <p className="mx-auto mt-3 max-w-[440px] text-[16px] leading-[1.6] text-[#545454]">
                Join Meradian's creator network and get matched with brand campaigns that fit your
                audience and content style.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-5 rounded-3xl bg-white p-8 shadow-[0px_1px_1px_0px_rgba(14,14,14,0.04),0px_4px_4px_0px_rgba(211,211,211,0.06)] sm:p-10"
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-[14px] font-medium text-[#090909]">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jane Doe"
                  className="rounded-xl border border-black/10 px-4 py-3 text-[15px] text-[#090909] outline-none focus:border-[#090909]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="username" className="text-[14px] font-medium text-[#090909]">
                  Username / handle
                </label>
                <input
                  id="username"
                  type="text"
                  required
                  value={form.username}
                  onChange={update("username")}
                  placeholder="@janedoe"
                  className="rounded-xl border border-black/10 px-4 py-3 text-[15px] text-[#090909] outline-none focus:border-[#090909]"
                />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="platform" className="text-[14px] font-medium text-[#090909]">
                    Platform
                  </label>
                  <select
                    id="platform"
                    value={form.platform}
                    onChange={update("platform")}
                    className="rounded-xl border border-black/10 bg-white px-4 py-3 text-[15px] text-[#090909] outline-none focus:border-[#090909]"
                  >
                    {PLATFORMS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="followers" className="text-[14px] font-medium text-[#090909]">
                    Follower count
                  </label>
                  <input
                    id="followers"
                    type="text"
                    required
                    inputMode="numeric"
                    value={form.followers}
                    onChange={update("followers")}
                    placeholder="e.g. 25,000"
                    className="rounded-xl border border-black/10 px-4 py-3 text-[15px] text-[#090909] outline-none focus:border-[#090909]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="niche" className="text-[14px] font-medium text-[#090909]">
                  Content niche
                </label>
                <input
                  id="niche"
                  type="text"
                  value={form.niche}
                  onChange={update("niche")}
                  placeholder="Fashion, beauty, tech, food..."
                  className="rounded-xl border border-black/10 px-4 py-3 text-[15px] text-[#090909] outline-none focus:border-[#090909]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[14px] font-medium text-[#090909]">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  placeholder="jane@example.com"
                  className="rounded-xl border border-black/10 px-4 py-3 text-[15px] text-[#090909] outline-none focus:border-[#090909]"
                />
              </div>

              <button
                type="submit"
                className="mt-2 rounded-xl border border-[#090909] bg-[#090909] px-6 py-3.5 text-[16px] font-medium text-white transition hover:opacity-90"
              >
                Submit application
              </button>
            </form>
          </>
        )}
      </main>
    </div>
  );
}
