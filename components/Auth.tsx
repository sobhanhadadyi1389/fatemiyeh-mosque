"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  User,
} from "lucide-react";

type AuthMode = "login" | "register";

export default function Auth() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section
      dir="rtl"
      className="relative flex min-h-[calc(100vh-72px)] w-full items-center justify-center overflow-hidden bg-black px-3 py-10 text-white sm:px-4 sm:py-14"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-emerald-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-900/10 blur-[120px]" />

      <div className="relative w-full max-w-md">
        {/* Logo / Header */}
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/15 bg-emerald-400/5">
            <ShieldCheck
              className="h-7 w-7 text-emerald-400"
              strokeWidth={1.5}
            />
          </div>

          <h1 className="text-2xl font-black text-white sm:text-3xl">
            {mode === "login" ? "ورود به حساب کاربری" : "ایجاد حساب کاربری"}
          </h1>

          <p className="mt-2 text-sm leading-7 text-zinc-500">
            {mode === "login"
              ? "برای ادامه، وارد حساب کاربری خود شوید."
              : "برای استفاده از امکانات سایت، حساب خود را ایجاد کنید."}
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-zinc-950/90 p-5 backdrop-blur-xl sm:p-7">
          {/* Tabs */}
          <div className="mb-6 grid grid-cols-2 rounded-xl border border-white/5 bg-white/[0.02] p-1">
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                mode === "login"
                  ? "bg-emerald-500 text-white"
                  : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              ورود
            </button>

            <button
              type="button"
              onClick={() => setMode("register")}
              className={`rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                mode === "register"
                  ? "bg-emerald-500 text-white"
                  : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              ثبت‌نام
            </button>
          </div>

          <form className="space-y-4">
            {/* Name */}
            {mode === "register" && (
              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  نام و نام خانوادگی
                </label>

                <div className="relative">
                  <User className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />

                  <input
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] pr-10 pl-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-500/40"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm text-zinc-400">
                ایمیل
              </label>

              <div className="relative">
                <Mail className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />

                <input
                  type="email"
                  dir="ltr"
                  placeholder="example@email.com"
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] pr-10 pl-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-500/40"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm text-zinc-400">
                  رمز عبور
                </label>

                {mode === "login" && (
                  <button
                    type="button"
                    className="text-xs text-emerald-400 transition hover:text-emerald-300"
                  >
                    رمز عبور را فراموش کرده‌اید؟
                  </button>
                )}
              </div>

              <div className="relative">
                <LockKeyhole className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="رمز عبور"
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-11 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-500/40"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={
                    showPassword
                      ? "مخفی کردن رمز عبور"
                      : "نمایش رمز عبور"
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 transition hover:text-zinc-300"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Register confirmation */}
            {mode === "register" && (
              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  تکرار رمز عبور
                </label>

                <div className="relative">
                  <LockKeyhole className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />

                  <input
                    type="password"
                    placeholder="تکرار رمز عبور"
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] pr-10 pl-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-500/40"
                  />
                </div>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="group mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              <span>
                {mode === "login" ? "ورود به حساب" : "ایجاد حساب"}
              </span>

              <ArrowLeft
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                strokeWidth={1.8}
              />
            </button>
          </form>

          {/* Bottom Text */}
          <div className="mt-6 border-t border-white/5 pt-5 text-center">
            <p className="text-sm text-zinc-500">
              {mode === "login"
                ? "حساب کاربری ندارید؟"
                : "قبلاً حساب ساخته‌اید؟"}

              <button
                type="button"
                onClick={() =>
                  setMode((current) =>
                    current === "login" ? "register" : "login"
                  )
                }
                className="mr-1 text-emerald-400 transition hover:text-emerald-300"
              >
                {mode === "login" ? "ثبت‌نام کنید" : "وارد شوید"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}