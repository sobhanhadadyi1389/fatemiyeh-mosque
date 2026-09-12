"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Heart,
  Image as ImageIcon,
  Sparkles,
  Users,
  Video,
} from "lucide-react";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

const slides = [1, 2, 3];

const stats = [
  {
    icon: <Users size={16} strokeWidth={1.7} />,
    value: 500,
    label: "عضو فعال",
  },
  {
    icon: <CalendarDays size={16} strokeWidth={1.7} />,
    value: 30,
    label: "برنامه ماهانه",
  },
  {
    icon: <Heart size={16} strokeWidth={1.7} />,
    value: 10,
    label: "فعالیت فرهنگی",
  },
  {
    icon: <Sparkles size={16} strokeWidth={1.7} />,
    value: 20,
    label: "رویداد سالانه",
  },
  {
    icon: <ImageIcon size={16} strokeWidth={1.7} />,
    value: 100,
    label: "تصویر و گالری",
  },
  {
    icon: <Video size={16} strokeWidth={1.7} />,
    value: 50,
    label: "محتوای ویدیویی",
  },
];

export default function FatemiyehHero() {
  return (
    <section
      dir="rtl"
      className="relative w-full overflow-hidden bg-black text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-[180px] -top-[180px] h-[450px] w-[450px] rounded-full bg-emerald-500/[0.05] blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-[220px] -left-[120px] h-[400px] w-[400px] rounded-full bg-emerald-900/[0.07] blur-[130px]" />

      {/* Main Container */}
      <div className="relative mx-auto w-full max-w-7xl px-3 pb-7 pt-8 sm:px-4 sm:pb-9 sm:pt-12 lg:px-6 lg:pb-8 lg:pt-16 xl:px-8">
        {/* =========================
            Main Hero
        ========================= */}

        <div className="grid w-full min-w-0 items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Content */}
          <div className="order-1 min-w-0 text-center lg:text-right">
            {/* Badge */}
            <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.07] px-3 py-2 text-[11px] font-medium text-emerald-300 backdrop-blur-md sm:px-3.5 sm:text-sm">
              <Sparkles
                size={14}
                strokeWidth={1.8}
                className="shrink-0"
              />

              <span className="truncate">
                به پایگاه فرهنگی مسجد فاطمیه خوش آمدید
              </span>
            </div>

            {/* Heading */}
            <h1 className="mx-auto max-w-3xl text-3xl font-black leading-[1.4] tracking-tight text-white sm:text-4xl md:text-5xl lg:mx-0 lg:text-6xl">
              مسجد فاطمیه

              <span className="mt-2 block text-xl font-bold leading-relaxed text-emerald-400 sm:text-2xl md:text-3xl lg:text-4xl">
                خانه‌ای برای ایمان، آرامش و همدلی
              </span>
            </h1>

            {/* Mobile Slider */}
            <div className="mt-6 block w-full min-w-0 lg:hidden">
              <ImageSlider />
            </div>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg lg:leading-9">
              مسجد فاطمیه فضایی برای عبادت، انس با قرآن، برگزاری مراسم
              مذهبی و فعالیت‌های فرهنگی است؛ جایی برای گردهمایی خانواده‌ها،
              جوانان و همه علاقه‌مندان به معارف اسلامی.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex w-full flex-row items-center justify-center gap-2 sm:gap-3 lg:justify-start">
              <a
                href="#programs"
                className="group inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-xl bg-emerald-500 px-3 py-3 text-xs font-bold text-white transition duration-300 hover:bg-emerald-400 sm:flex-none sm:gap-2 sm:px-5 sm:py-3.5 sm:text-sm"
              >
                <span className="whitespace-nowrap">
                  مشاهده برنامه‌ها
                </span>

                <ArrowLeft
                  size={16}
                  strokeWidth={1.8}
                  className="shrink-0 transition-transform duration-300 group-hover:-translate-x-1 sm:h-[18px] sm:w-[18px]"
                />
              </a>

              <a
                href="#about"
                className="inline-flex min-w-0 flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-xs font-medium text-zinc-200 backdrop-blur-md transition duration-300 hover:border-emerald-400/25 hover:bg-emerald-400/[0.06] hover:text-white sm:flex-none sm:px-5 sm:py-3.5 sm:text-sm"
              >
                <span className="whitespace-nowrap">
                  آشنایی با مسجد
                </span>
              </a>
            </div>
          </div>

          {/* Desktop Slider */}
          <div className="order-2 hidden min-w-0 flex-col lg:flex">
            <ImageSlider />

            <div className="mt-5 text-center">
              <p className="mx-auto max-w-2xl text-sm leading-7 text-zinc-500 lg:text-base lg:leading-8">
                در این بخش می‌توانید تصاویری از برنامه‌ها، مراسم مذهبی،
                رویدادهای فرهنگی و فعالیت‌های مختلف مسجد فاطمیه را مشاهده کنید
                و با فضای این مجموعه بیشتر آشنا شوید.
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            Desktop Stats
        ========================= */}

        <div className="mt-5 hidden border-t border-white/[0.06] pt-5 lg:block">
          <div className="grid w-full grid-cols-6">
            {stats.map((stat, index) => (
              <DesktopStat
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                hasBorder={index !== stats.length - 1}
              />
            ))}
          </div>
        </div>

        {/* =========================
            Mobile Stats Marquee
        ========================= */}

        <div className="mt-5 overflow-hidden border-t border-white/[0.06] pt-5 lg:hidden">
          <div
            className="pointer-events-none relative -mx-3 overflow-hidden touch-none select-none"
            style={{ touchAction: "none" }}
          >
            <div className="mobile-stats-marquee flex w-max">
              {/* First Set */}
              <div className="flex shrink-0 items-center gap-3 pr-3">
                {stats.map((stat) => (
                  <MobileStat
                    key={`first-${stat.label}`}
                    icon={stat.icon}
                    value={stat.value}
                    label={stat.label}
                  />
                ))}
              </div>

              {/* Duplicate Set for Infinite Loop */}
              <div className="flex shrink-0 items-center gap-3 pr-3">
                {stats.map((stat) => (
                  <MobileStat
                    key={`second-${stat.label}`}
                    icon={stat.icon}
                    value={stat.value}
                    label={stat.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            Desktop Scroll Indicator
        ========================= */}

        <div className="mt-5 hidden flex-col items-center lg:flex">
          <div className="scroll-indicator flex h-9 flex-col items-center justify-start text-zinc-600">
            <ArrowDown size={16} strokeWidth={1.5} />

            <ArrowDown
              size={16}
              strokeWidth={1.5}
              className="-mt-3 opacity-35"
            />
          </div>

          <span className="mt-1.5 text-[10px] font-medium tracking-wide text-zinc-600">
            برای ادامه اسکرول کنید
          </span>
        </div>
      </div>

      {/* =========================
          Animations
      ========================= */}

      <style jsx>{`
        .mobile-stats-marquee {
          animation: mobileStatsMarquee 22s linear infinite;
          will-change: transform;
        }

        @keyframes mobileStatsMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(50%);
          }
        }

        .scroll-indicator {
          animation: scrollIndicator 1.6s ease-in-out infinite;
        }

        @keyframes scrollIndicator {
          0% {
            transform: translateY(-4px);
            opacity: 0.2;
          }

          25% {
            opacity: 1;
          }

          55% {
            transform: translateY(5px);
            opacity: 0.8;
          }

          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mobile-stats-marquee,
          .scroll-indicator {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

/* =========================
   Animated Number
========================= */

function AnimatedNumber({
  value,
  duration = 1800,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;
    let animationFrame = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Ease-out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [started, value, duration]);

  return (
    <div ref={ref} className="tabular-nums">
      +{count.toLocaleString("fa-IR")}
    </div>
  );
}

/* =========================
   Image Slider
========================= */

function ImageSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative mx-auto w-full min-w-0 max-w-full lg:mx-0 lg:max-w-3xl">
      <div className="relative w-full min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 sm:rounded-3xl">
        <div className="aspect-[16/10] w-full sm:aspect-video">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop
            className="!h-full !w-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide}>
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-950 via-black to-emerald-950/20">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.05] text-emerald-400 sm:h-20 sm:w-20 sm:rounded-3xl">
                    <Sparkles
                      size={26}
                      strokeWidth={1.4}
                      className="sm:h-[34px] sm:w-[34px]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Previous */}
        <button
          type="button"
          aria-label="اسلاید قبلی"
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute bottom-3 left-3 z-20 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/50 text-white backdrop-blur-md transition duration-300 hover:border-emerald-400/30 hover:bg-emerald-500 sm:bottom-5 sm:left-5 sm:h-11 sm:w-11 sm:rounded-xl"
        >
          <ArrowLeft
            size={17}
            strokeWidth={1.8}
            className="sm:h-[19px] sm:w-[19px]"
          />
        </button>

        {/* Next */}
        <button
          type="button"
          aria-label="اسلاید بعدی"
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute bottom-3 left-14 z-20 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/50 text-white backdrop-blur-md transition duration-300 hover:border-emerald-400/30 hover:bg-emerald-500 sm:bottom-5 sm:left-[4.25rem] sm:h-11 sm:w-11 sm:rounded-xl"
        >
          <ArrowRight
            size={17}
            strokeWidth={1.8}
            className="sm:h-[19px] sm:w-[19px]"
          />
        </button>
      </div>
    </div>
  );
}

/* =========================
   Desktop Stat
========================= */

function DesktopStat({
  icon,
  value,
  label,
  hasBorder,
}: {
  icon: ReactNode;
  value: number;
  label: string;
  hasBorder: boolean;
}) {
  return (
    <div
      className={`flex min-w-0 items-center justify-center gap-2 px-3 ${
        hasBorder ? "border-l border-white/[0.06]" : ""
      }`}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-400/10 bg-emerald-400/[0.05] text-emerald-400">
        {icon}
      </div>

      <div className="min-w-0 text-right">
        <div className="text-sm font-bold text-zinc-200">
          <AnimatedNumber value={value} />
        </div>

        <div className="mt-0.5 whitespace-nowrap text-[10px] text-zinc-600">
          {label}
        </div>
      </div>
    </div>
  );
}

/* =========================
   Mobile Stat
========================= */

function MobileStat({
  icon,
  value,
  label,
}: {
  icon: ReactNode;
  value: number;
  label: string;
}) {
  return (
    <div className="flex h-16 w-[150px] shrink-0 items-center gap-2.5 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald-400/10 bg-emerald-400/[0.05] text-emerald-400">
        {icon}
      </div>

      <div className="min-w-0 text-right">
        <div className="text-sm font-bold text-zinc-200">
          <AnimatedNumber value={value} />
        </div>

        <div className="mt-0.5 truncate text-[9px] text-zinc-600">
          {label}
        </div>
      </div>
    </div>
  );
}