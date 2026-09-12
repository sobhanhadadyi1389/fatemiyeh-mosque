"use client";

import { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  GraduationCap,
  UsersRound,
} from "lucide-react";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

const salehinGroups = [
  {
    id: 1,
    title: "حلقه نوجوانان",
    age: "۱۲ تا ۱۵ سال",
    coach: "مربی حلقه",
    members: 24,
    day: "شنبه",
    time: "۱۷:۰۰",
  },
  {
    id: 2,
    title: "حلقه جوانان",
    age: "۱۶ تا ۲۰ سال",
    coach: "مربی حلقه",
    members: 18,
    day: "یکشنبه",
    time: "۱۸:۳۰",
  },
  {
    id: 3,
    title: "حلقه نونهالان",
    age: "۸ تا ۱۱ سال",
    coach: "مربی حلقه",
    members: 20,
    day: "دوشنبه",
    time: "۱۷:۰۰",
  },
  {
    id: 4,
    title: "حلقه نوجوانان پیشرفته",
    age: "۱۵ تا ۱۷ سال",
    coach: "مربی حلقه",
    members: 16,
    day: "سه‌شنبه",
    time: "۱۸:۰۰",
  },
  {
    id: 5,
    title: "حلقه جوانان ویژه",
    age: "۱۸ تا ۲۵ سال",
    coach: "مربی حلقه",
    members: 14,
    day: "چهارشنبه",
    time: "۱۹:۰۰",
  },
  {
    id: 6,
    title: "حلقه نونهالان ۲",
    age: "۹ تا ۱۲ سال",
    coach: "مربی حلقه",
    members: 21,
    day: "پنجشنبه",
    time: "۱۷:۳۰",
  },
];

export default function SalehinGroups() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      dir="rtl"
      className="relative w-full overflow-hidden bg-black py-12 sm:py-16"
    >
      <div className="pointer-events-none absolute right-1/4 top-0 h-48 w-72 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 xl:px-8">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-10">
          <span className="mb-3 inline-flex rounded-full border border-emerald-500/15 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-400">
            حلقه‌های تربیتی
          </span>

          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            حلقه‌های صالحین
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            حلقه‌های صالحین مسجد فاطمیه در رده‌های سنی مختلف برگزار می‌شوند و
            هر گروه با برنامه‌های تربیتی و فرهنگی متناسب با اعضای خود فعالیت
            می‌کند.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-5 hidden items-center justify-end gap-2 sm:flex">
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="حرکت به سمت راست"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-zinc-950 text-zinc-400 transition-colors hover:border-emerald-500/20 hover:text-emerald-400"
          >
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="حرکت به سمت چپ"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-zinc-950 text-zinc-400 transition-colors hover:border-emerald-500/20 hover:text-emerald-400"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
        </div>

        {/* Slider */}
        <Swiper
          dir="rtl"
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop
          speed={650}
          slidesPerGroup={1}
          slidesPerView={1}
          spaceBetween={12}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 14,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
          }}
        >
          {salehinGroups.map((group) => (
            <SwiperSlide key={group.id} className="h-auto">
              <article className="group h-full overflow-hidden rounded-3xl border border-emerald-500/10 bg-zinc-950 p-5 transition-colors duration-300 hover:border-emerald-500/20">
                {/* Header */}
                <div className="mb-5">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-500/10 bg-emerald-500/5">
                    <GraduationCap
                      className="h-5 w-5 text-emerald-400"
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {group.title}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">{group.age}</p>
                </div>

                {/* Info */}
                <div className="space-y-3 border-t border-white/5 pt-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <GraduationCap className="h-4 w-4 text-emerald-400/70" />
                      <span>مربی</span>
                    </div>

                    <span className="text-sm text-zinc-300">
                      {group.coach}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <UsersRound className="h-4 w-4 text-emerald-400/70" />
                      <span>اعضا</span>
                    </div>

                    <span className="text-sm text-zinc-300">
                      {group.members} نفر
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <CalendarDays className="h-4 w-4 text-emerald-400/70" />
                      <span>روز</span>
                    </div>

                    <span className="text-sm text-zinc-300">
                      {group.day}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Clock3 className="h-4 w-4 text-emerald-400/70" />
                      <span>ساعت</span>
                    </div>

                    <span className="text-sm text-zinc-300">
                      {group.time}
                    </span>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-5 border-t border-white/5 pt-4">
                  <a
                    href={`/salehin/${group.id}`}
                    className="flex items-center justify-between text-sm font-medium text-emerald-400 transition-colors duration-200 hover:text-emerald-300"
                  >
                    <span>مشاهده جزئیات</span>

                    <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                  </a>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}