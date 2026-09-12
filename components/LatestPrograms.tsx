"use client";

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Sparkles,
} from "lucide-react";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { useRef } from "react";

import "swiper/css";

const programs = [
  {
    id: 1,
    title: "محفل انس با قرآن",
    description:
      "جلسه تلاوت، تدبر و آموزش مفاهیم قرآن کریم با حضور استاد و اعضای محترم مسجد.",
    date: "جمعه ۲۷ اردیبهشت",
    time: "۱۸:۳۰ تا ۲۰:۰۰",
    category: "قرآنی",
    image: "",
  },
  {
    id: 2,
    title: "نماز جماعت و سخنرانی",
    description:
      "برگزاری نماز جماعت همراه با سخنرانی و بیان معارف اخلاقی و دینی.",
    date: "شنبه ۲۸ اردیبهشت",
    time: "۱۹:۰۰ تا ۲۰:۳۰",
    category: "مذهبی",
    image: "",
  },
  {
    id: 3,
    title: "نشست جوانان فاطمیه",
    description:
      "نشستی صمیمی با موضوع نقش جوانان در فعالیت‌های فرهنگی و اجتماعی مسجد.",
    date: "یکشنبه ۲۹ اردیبهشت",
    time: "۱۷:۳۰ تا ۱۹:۰۰",
    category: "فرهنگی",
    image: "",
  },
  {
    id: 4,
    title: "مراسم هفتگی",
    description:
      "مراسم هفتگی مسجد همراه با قرائت دعا، سخنرانی و برنامه‌های معنوی.",
    date: "دوشنبه ۳۰ اردیبهشت",
    time: "۲۰:۰۰ تا ۲۲:۰۰",
    category: "مناسبتی",
    image: "",
  },
  {
    id: 5,
    title: "جلسه آموزش احکام",
    description:
      "جلسه آموزشی احکام و پرسش و پاسخ با موضوع مسائل کاربردی زندگی روزمره.",
    date: "سه‌شنبه ۳۱ اردیبهشت",
    time: "۱۸:۰۰ تا ۱۹:۳۰",
    category: "آموزشی",
    image: "",
  },
  {
    id: 6,
    title: "جلسه خانواده",
    description:
      "نشست فرهنگی خانواده با محوریت سبک زندگی اسلامی و تربیت فرزندان.",
    date: "چهارشنبه ۱ خرداد",
    time: "۱۷:۰۰ تا ۱۸:۳۰",
    category: "خانواده",
    image: "",
  },
];

export default function LatestPrograms() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="programs"
      dir="rtl"
      className="relative overflow-hidden bg-black py-7 text-white sm:py-9 lg:py-11"
    >
      {/* Top Separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 -top-20 h-72 w-72 rounded-full bg-emerald-500/[0.035] blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-emerald-900/[0.05] blur-[130px]" />

      {/* Same container as Hero */}
      <div className="relative mx-auto w-full max-w-7xl px-3 sm:px-4 lg:px-6 xl:px-8">
        {/* Header */}
        <div className="mb-5 flex flex-col items-center gap-4 text-center sm:mb-6 sm:flex-row sm:items-end sm:justify-between sm:text-right">
          <div className="min-w-0">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1.5 text-[10px] font-medium text-emerald-300 sm:text-xs">
              <Sparkles size={13} strokeWidth={1.7} />

              <span>برنامه‌های مسجد</span>
            </div>

            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
              جدیدترین برنامه‌ها
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-zinc-500 sm:mx-0 sm:text-base sm:leading-8">
              تازه‌ترین مراسم، جلسات و فعالیت‌های فرهنگی و مذهبی مسجد فاطمیه
              را مشاهده کنید.
            </p>
          </div>

          {/* Desktop Controls Only */}
          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <button
              type="button"
              aria-label="حرکت به راست"
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition duration-300 hover:border-emerald-400/25 hover:bg-emerald-400/[0.06] hover:text-emerald-300"
            >
              <ArrowRight size={17} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              aria-label="حرکت به چپ"
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition duration-300 hover:border-emerald-400/25 hover:bg-emerald-400/[0.06] hover:text-emerald-300"
            >
              <ArrowLeft size={17} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="w-full min-w-0">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay]}
            dir="rtl"
            slidesPerGroup={1}
            speed={600}
            spaceBetween={10}
            loop
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              640: {
                slidesPerView: 1,
                spaceBetween: 12,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 14,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
            }}
            className="!w-full"
          >
            {programs.map((program) => (
              <SwiperSlide
                key={program.id}
                className="!h-auto"
              >
                <ProgramCard program={program} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
    </section>
  );
}

/* =========================
   Program Card
========================= */

function ProgramCard({
  program,
}: {
  program: (typeof programs)[number];
}) {
  return (
    <article
      className="
        group
        flex
        h-full
        min-h-[360px]
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.07]
        bg-zinc-950/90
        transition
        duration-300
        hover:border-emerald-400/20
        sm:min-h-[390px]
        sm:rounded-3xl
      "
    >
      {/* Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900">
        {program.image ? (
          <img
            src={program.image}
            alt={program.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-emerald-950/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/[0.05] text-emerald-400 sm:h-16 sm:w-16 sm:rounded-2xl">
              <Sparkles
                size={22}
                strokeWidth={1.4}
                className="sm:h-7 sm:w-7"
              />
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <span className="absolute right-3 top-3 rounded-lg border border-white/10 bg-black/40 px-2.5 py-1.5 text-[9px] font-medium text-emerald-300 backdrop-blur-md sm:right-4 sm:top-4 sm:text-[10px]">
          {program.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-base font-bold leading-7 text-white sm:text-lg">
          {program.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-xs leading-6 text-zinc-500 sm:line-clamp-3 sm:text-sm sm:leading-7">
          {program.description}
        </p>

        {/* Meta */}
        <div className="mt-4 space-y-2 border-t border-white/[0.06] pt-3.5 sm:mt-5 sm:space-y-2.5 sm:pt-4">
          <div className="flex items-center gap-2 text-[10px] text-zinc-500 sm:text-xs">
            <CalendarDays
              size={14}
              strokeWidth={1.7}
              className="shrink-0 text-emerald-500/80"
            />

            <span>{program.date}</span>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-zinc-500 sm:text-xs">
            <Clock3
              size={14}
              strokeWidth={1.7}
              className="shrink-0 text-emerald-500/80"
            />

            <span>{program.time}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 sm:pt-5">
          <a
            href="#details"
            className="group/link inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 transition duration-300 hover:text-emerald-300 sm:text-sm"
          >
            <span>مشاهده جزئیات</span>

            <ArrowLeft
              size={15}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover/link:-translate-x-1 sm:h-4 sm:w-4"
            />
          </a>
        </div>
      </div>
    </article>
  );
}