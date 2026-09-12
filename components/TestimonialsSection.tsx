
"use client";

import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { useRef } from "react";

import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "محمد رضایی",
    role: "عضو مسجد",
    text: "حضور در برنامه‌های مسجد فاطمیه برای من و خانواده‌ام تجربه بسیار خوبی بوده است. فضای صمیمی و برنامه‌های متنوع باعث شده ارتباط بیشتری با مسجد داشته باشیم.",
    rating: 5,
  },
  {
    id: 2,
    name: "زهرا احمدی",
    role: "والد یکی از نوجوانان",
    text: "برنامه‌های نوجوانان واقعاً منظم و هدفمند هستند. احساس می‌کنم فضای مسجد توانسته ارتباط خوبی بین آموزش، اخلاق و فعالیت‌های اجتماعی ایجاد کند.",
    rating: 5,
  },
  {
    id: 3,
    name: "علی موسوی",
    role: "شرکت‌کننده در جلسات قرآن",
    text: "جلسات قرآن و حلقه‌های آموزشی با فضای بسیار آرام و دوستانه برگزار می‌شوند. مطالب کاربردی هستند و انگیزه ادامه دادن را بیشتر می‌کنند.",
    rating: 5,
  },
  {
    id: 4,
    name: "مریم کریمی",
    role: "عضو خانواده فاطمیه",
    text: "چیزی که برای من جذاب است، تنوع برنامه‌ها و توجه به گروه‌های مختلف سنی است. خانواده‌ها و جوانان هر کدام برنامه‌های مخصوص خودشان را دارند.",
    rating: 4,
  },
  {
    id: 5,
    name: "حسین صادقی",
    role: "فعال فرهنگی",
    text: "همکاری با مجموعه فاطمیه برای من تجربه ارزشمندی بوده است. نظم برنامه‌ها و روحیه همکاری اعضا واقعاً قابل توجه است.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="testimonials"
      dir="rtl"
      className="relative overflow-hidden bg-black py-8 text-white sm:py-10 lg:py-14"
    >
      {/* Separators */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      {/* Glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-emerald-500/[0.035] blur-[130px]" />

      <div className="relative mx-auto w-full max-w-7xl px-3 sm:px-4 lg:px-6 xl:px-8">
        {/* Header */}
        <div className="mb-6 flex flex-col items-center gap-5 text-center sm:mb-8 sm:flex-row sm:items-end sm:justify-between sm:text-right">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1.5 text-[10px] font-medium text-emerald-300 sm:text-xs">
              <Sparkles size={13} strokeWidth={1.7} />
              <span>تجربه اعضای فاطمیه</span>
            </div>

            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
              نظر همراهان ما
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
              بخشی از تجربه و دیدگاه اعضا، خانواده‌ها و شرکت‌کنندگان در
              برنامه‌های مسجد فاطمیه.
            </p>
          </div>

          {/* Desktop Controls */}
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              aria-label="نظر بعدی"
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition duration-300 hover:border-emerald-400/25 hover:bg-emerald-400/[0.06] hover:text-emerald-300"
            >
              <ArrowRight size={17} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              aria-label="نظر قبلی"
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition duration-300 hover:border-emerald-400/25 hover:bg-emerald-400/[0.06] hover:text-emerald-300"
            >
              <ArrowLeft size={17} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          dir="rtl"
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerGroup={1}
          speed={650}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={12}
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
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 18,
            },
          }}
          className="!w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="!h-auto"
            >
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

/* =========================
   Testimonial Card
========================= */

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <article className="group flex h-full min-h-[300px] flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-zinc-950/90 p-5 transition duration-300 hover:border-emerald-400/20 sm:min-h-[320px] sm:p-6">
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.05] text-emerald-400">
          <Quote
            size={20}
            strokeWidth={1.6}
          />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={12}
              strokeWidth={1.6}
              fill={
                index < testimonial.rating
                  ? "currentColor"
                  : "transparent"
              }
              className={
                index < testimonial.rating
                  ? "text-emerald-400"
                  : "text-zinc-700"
              }
            />
          ))}
        </div>
      </div>

      {/* Text */}
      <p className="mt-6 flex-1 text-sm leading-8 text-zinc-400">
        «{testimonial.text}»
      </p>

      {/* Author */}
      <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
        {/* Avatar */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-400/10 bg-gradient-to-br from-emerald-500/10 to-zinc-900 text-sm font-bold text-emerald-400">
          {testimonial.name.charAt(0)}
        </div>

        <div className="min-w-0">
          <div className="truncate text-sm font-bold text-white">
            {testimonial.name}
          </div>

          <div className="mt-1 text-[10px] text-zinc-600 sm:text-xs">
            {testimonial.role}
          </div>
        </div>
      </div>
    </article>
  );
}

