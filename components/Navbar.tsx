"use client";

import { useEffect, useState } from "react";
import {
  Search,
  Menu,
  X,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "خانه", active: true },
    { label: "درباره ما" },
    { label: "خدمات" },
    { label: "پروژه‌ها" },
    { label: "تماس با ما" },
  ];

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMobileMenuOpen);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 px-2.5 pt-2.5 sm:px-4 sm:pt-4 lg:px-6">
        <nav
          dir="rtl"
          aria-label="ناوبری اصلی"
          className="relative mx-auto max-w-7xl overflow-hidden rounded-xl border border-emerald-900/40 bg-zinc-950/65 backdrop-blur-xl sm:rounded-2xl"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-16 -top-20 h-36 w-36 rounded-full bg-emerald-500/10 blur-3xl sm:-right-20 sm:-top-24 sm:h-48 sm:w-48" />

          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-32 w-32 rounded-full bg-emerald-900/10 blur-3xl sm:-bottom-24 sm:h-40 sm:w-40" />

          <div className="relative flex h-[58px] items-center justify-between px-3 sm:h-[72px] sm:px-6 lg:px-8">
            {/* Logo */}
            <a
              href="#"
              aria-label="صفحه اصلی"
              className="group flex shrink-0 items-center gap-2 sm:gap-3"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-emerald-400 transition duration-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/15 sm:h-10 sm:w-10 sm:rounded-xl">
                <ShieldCheck
                  size={18}
                  strokeWidth={1.8}
                  className="sm:h-[21px] sm:w-[21px]"
                />
              </span>

              <span className="hidden sm:block">
                <span className="block text-[15px] font-extrabold tracking-tight text-white">
                  سبزین
                </span>

                <span className="block text-[10px] font-medium text-zinc-500">
                  طراحی هوشمند
                </span>
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={
                    item.active
                      ? "rounded-xl px-4 py-2.5 text-sm font-medium text-emerald-400 transition duration-300 hover:bg-emerald-400/10 hover:text-emerald-300"
                      : "rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-300 transition duration-300 hover:bg-white/[0.04] hover:text-white"
                  }
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-2 lg:flex">
              <SearchButton />
              <AuthButton />
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="باز کردن منو"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-200 transition duration-300 hover:border-emerald-400/25 hover:bg-emerald-400/10 hover:text-emerald-300 sm:h-11 sm:w-11 sm:rounded-xl lg:hidden"
            >
              <Menu
                size={19}
                strokeWidth={1.8}
                className="sm:h-[22px] sm:w-[22px]"
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <div
        aria-hidden="true"
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/70 backdrop-blur-[2px] transition-all duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Mobile Panel */}
      <aside
        id="mobile-menu"
        dir="rtl"
        aria-label="منوی موبایل"
        aria-hidden={!isMobileMenuOpen}
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[78%] max-w-[320px] flex-col overflow-y-auto border-l border-emerald-900/40 bg-zinc-950/95 p-4 backdrop-blur-2xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[75%] sm:max-w-sm sm:p-5 lg:hidden ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-[110%] opacity-0"
        }`}
      >
        {/* Internal Glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-emerald-500/10 blur-3xl" />

        {/* Panel Header */}
        <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-4 sm:pb-5">
          <div>
            <div className="text-sm font-extrabold text-white sm:text-base">
              سبزین
            </div>

            <div className="mt-1 text-[10px] text-zinc-500 sm:text-[11px]">
              منوی اصلی
            </div>
          </div>

          <button
            type="button"
            aria-label="بستن منو"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-300 transition duration-300 hover:border-emerald-400/25 hover:bg-emerald-400/10 hover:text-emerald-300 sm:h-10 sm:w-10 sm:rounded-xl"
          >
            <X
              size={19}
              strokeWidth={1.8}
              className="sm:h-[21px] sm:w-[21px]"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="relative mt-4 flex flex-col gap-1.5 sm:mt-6 sm:gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className={
                item.active
                  ? "group flex items-center justify-between rounded-xl border border-emerald-400/10 bg-emerald-400/[0.07] px-3.5 py-3 text-xs font-semibold text-emerald-400 transition duration-300 hover:bg-emerald-400/10 sm:rounded-2xl sm:px-4 sm:py-4 sm:text-sm"
                  : "group flex items-center justify-between rounded-xl px-3.5 py-3 text-xs font-medium text-zinc-300 transition duration-300 hover:bg-white/[0.04] hover:text-white sm:rounded-2xl sm:px-4 sm:py-4 sm:text-sm"
              }
            >
              <span>{item.label}</span>

              <ArrowLeft
                size={15}
                strokeWidth={1.8}
                className={`sm:h-[17px] sm:w-[17px] ${
                  item.active
                    ? "text-emerald-500/70 transition group-hover:-translate-x-1"
                    : "text-zinc-600 transition group-hover:-translate-x-1 group-hover:text-emerald-400"
                }`}
              />
            </a>
          ))}
        </div>

        {/* Mobile Actions */}
        <div className="relative mt-auto border-t border-white/[0.07] pt-4 sm:pt-5">
          <button
            type="button"
            className="mb-2.5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3 text-xs font-medium text-zinc-300 transition duration-300 hover:border-emerald-400/25 hover:bg-emerald-400/10 hover:text-emerald-300 sm:mb-3 sm:rounded-2xl sm:px-4 sm:py-3.5 sm:text-sm"
          >
            <Search
              size={16}
              strokeWidth={1.8}
              className="sm:h-[18px] sm:w-[18px]"
            />

            <span>جستجو</span>
          </button>

          <AuthButton fullWidth />
        </div>
      </aside>
    </>
  );
}

/* =========================
   Search Button
========================= */

function SearchButton() {
  return (
    <button
      type="button"
      aria-label="جستجو"
      className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition duration-300 hover:border-emerald-400/25 hover:bg-emerald-400/10 hover:text-emerald-300"
    >
      <Search size={19} strokeWidth={1.8} />
    </button>
  );
}

/* =========================
   Auth Button
========================= */

function AuthButton({
  fullWidth = false,
}: {
  fullWidth?: boolean;
}) {
  return (
    <button
      type="button"
      className={`group relative overflow-hidden border border-emerald-300/20 bg-emerald-500 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 active:translate-y-0 ${
        fullWidth
          ? "w-full rounded-xl py-3 text-xs sm:rounded-2xl sm:py-3.5 sm:text-sm"
          : "rounded-xl px-5 py-2.5"
      }`}
    >
      {!fullWidth && (
        <span className="absolute inset-0 -translate-x-full bg-white/20 transition duration-500 group-hover:translate-x-full" />
      )}

      <span className="relative">
        ورود / ثبت‌نام
      </span>
    </button>
  );
}