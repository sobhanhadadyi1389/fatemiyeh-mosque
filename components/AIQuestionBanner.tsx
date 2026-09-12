import {
  ArrowLeft,
  Bot,
  Sparkles,
} from "lucide-react";

export default function AIQuestionBanner() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-black py-5 sm:py-7 lg:py-9"
    >
      <div className="relative mx-auto w-full max-w-7xl px-3 sm:px-4 lg:px-6 xl:px-8">
        <a
          href="/ai"
          className="
            group
            relative
            flex
            w-full
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-emerald-400/15
            bg-gradient-to-br
            from-emerald-950/40
            via-zinc-950
            to-black
            p-5
            transition-all
            duration-300
            hover:border-emerald-400/30
            hover:bg-emerald-950/30
            sm:rounded-3xl
            sm:p-7
            lg:p-8
          "
        >
          {/* Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -left-20
              -top-20
              h-44
              w-44
              rounded-full
              bg-emerald-500/10
              blur-3xl
              transition
              duration-500
              group-hover:bg-emerald-500/15
            "
          />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Content */}
            <div className="flex min-w-0 items-center gap-4">
              {/* AI Icon */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-emerald-400/15
                  bg-emerald-400/[0.07]
                  text-emerald-400
                  sm:h-14
                  sm:w-14
                "
              >
                <Bot
                  size={25}
                  strokeWidth={1.6}
                />
              </div>

              <div className="min-w-0">
                <div className="mb-1 flex items-center gap-2">
                  <Sparkles
                    size={13}
                    strokeWidth={1.7}
                    className="shrink-0 text-emerald-400"
                  />

                  <span className="text-[10px] font-semibold text-emerald-400 sm:text-xs">
                    دستیار هوشمند فاطمیه
                  </span>
                </div>

                <h3 className="text-base font-bold text-white sm:text-lg lg:text-xl">
                  سوالی درباره مسجد، برنامه‌ها یا مراسم دارید؟
                </h3>

                <p className="mt-1.5 text-xs leading-6 text-zinc-500 sm:text-sm sm:leading-7">
                  از دستیار هوشمند فاطمیه بپرسید و پاسخ خود را سریع دریافت کنید.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex shrink-0 items-center justify-between gap-3 sm:justify-end">
              <span
                className="
                  rounded-xl
                  border
                  border-emerald-400/15
                  bg-emerald-400/[0.06]
                  px-4
                  py-2.5
                  text-xs
                  font-semibold
                  text-emerald-300
                  transition
                  duration-300
                  group-hover:border-emerald-400/30
                  group-hover:bg-emerald-400/10
                  sm:text-sm
                "
              >
                پرسش از هوش مصنوعی
              </span>

              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-zinc-300
                  transition
                  duration-300
                  group-hover:-translate-x-1
                  group-hover:border-emerald-400/25
                  group-hover:text-emerald-300
                "
              >
                <ArrowLeft
                  size={18}
                  strokeWidth={1.8}
                />
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}