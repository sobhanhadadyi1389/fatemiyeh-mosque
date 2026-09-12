"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const accordionItems = [
  {
    title: "صالحین چیست؟",
    content:
      "صالحین یک برنامه تربیتی، فرهنگی و اجتماعی است که با محوریت مسجد و با هدف رشد ایمانی، اخلاقی و اجتماعی اعضا شکل گرفته است.",
  },
  {
    title: "هدف حلقه‌های صالحین",
    content:
      "هدف اصلی، ایجاد یک فضای صمیمی و تربیتی برای گفت‌وگو، یادگیری، رشد فردی و تقویت ارتباط اعضا با مسجد و فعالیت‌های فرهنگی است.",
  },
  {
    title: "فعالیت‌های صالحین",
    content:
      "جلسات تربیتی، برنامه‌های فرهنگی، اردو، فعالیت‌های گروهی، برنامه‌های مناسبتی و فعالیت‌های آموزشی بخشی از برنامه‌های صالحین مسجد فاطمیه هستند.",
  },
  {
    title: "مربی و اعضای حلقه",
    content:
      "هر حلقه با حضور یک مربی و جمعی از اعضا برگزار می‌شود و برنامه‌ها متناسب با رده سنی و نیازهای تربیتی گروه طراحی می‌شوند.",
  },
];

export default function SalehinIntroduction() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      dir="rtl"
      className="relative w-full overflow-hidden bg-black py-12 sm:py-16"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-3 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-10">
          <span className="mb-3 inline-flex rounded-full border border-emerald-500/15 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-400">
            معرفی صالحین
          </span>

          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            آشنایی با صالحین مسجد فاطمیه
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            صالحین مسجد فاطمیه بستری برای رشد تربیتی، فرهنگی و اجتماعی نوجوانان
            و جوانان است؛ فضایی صمیمی برای یادگیری، گفت‌وگو، فعالیت گروهی و
            ارتباط بیشتر با مسجد.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {accordionItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.title}
                className="overflow-hidden rounded-2xl border border-emerald-500/10 bg-zinc-950"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-right transition-colors duration-200 hover:bg-white/[0.02] sm:px-5 sm:py-5"
                >
                  {/* عنوان سمت راست */}
                  <span className="flex-1 text-right text-sm font-medium text-white sm:text-base">
                    {item.title}
                  </span>

                  {/* Arrow سمت چپ */}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-emerald-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/5 px-4 pb-5 pt-4 text-right sm:px-5">
                      <p className="text-sm leading-7 text-zinc-400 sm:text-[15px] sm:leading-8">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
