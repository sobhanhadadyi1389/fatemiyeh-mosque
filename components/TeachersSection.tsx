"use client";

import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  GraduationCap,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { useRef } from "react";

import "swiper/css";

const teachers = [
  {
    id: 1,
    name: "حجت‌الاسلام احمد رضایی",
    role: "استاد معارف اسلامی",
    age: "۳۸ سال",
    education: "کارشناسی ارشد علوم اسلامی",
    course: "حلقه معرفت و اخلاق",
    experience: "۱۲ سال سابقه",
    students: "+۳۰۰ نفر",
    description:
      "فعال در حوزه آموزش معارف اسلامی، اخلاق و برگزاری جلسات پرسش و پاسخ.",
    image: "",
  },
  {
    id: 2,
    name: "استاد محمد حسینی",
    role: "مربی قرآن کریم",
    age: "۳۵ سال",
    education: "کارشناسی علوم قرآن و حدیث",
    course: "حلقه تدبر در قرآن",
    experience: "۹ سال سابقه",
    students: "+۲۵۰ نفر",
    description:
      "متخصص آموزش روخوانی، تجوید و تدبر قرآن کریم برای نوجوانان و بزرگسالان.",
    image: "",
  },
  {
    id: 3,
    name: "استاد علی کریمی",
    role: "مربی نوجوانان",
    age: "۳۲ سال",
    education: "کارشناسی روانشناسی تربیتی",
    course: "حلقه رشد نوجوان",
    experience: "۸ سال سابقه",
    students: "+۱۸۰ نفر",
    description:
      "فعال حوزه تربیتی نوجوانان با تمرکز بر رشد فردی، اجتماعی و معنوی.",
    image: "",
  },
  {
    id: 4,
    name: "استاد رضا موسوی",
    role: "مربی فرهنگی",
    age: "۴۱ سال",
    education: "کارشناسی ارشد مدیریت فرهنگی",
    course: "حلقه فرهنگی و رسانه",
    experience: "۱۰ سال سابقه",
    students: "+۲۲۰ نفر",
    description:
      "فعال در زمینه برنامه‌های فرهنگی، رسانه‌ای و فعالیت‌های اجتماعی مسجد.",
    image: "",
  },
  {
    id: 5,
    name: "استاد مهدی صادقی",
    role: "مربی احکام",
    age: "۴۵ سال",
    education: "سطح سه حوزه علمیه",
    course: "حلقه آموزش احکام",
    experience: "۷ سال سابقه",
    students: "+۱۵۰ نفر",
    description:
      "مدرس احکام و مسائل شرعی با تمرکز بر آموزش ساده و کاربردی برای خانواده‌ها.",
    image: "",
  },
];

export default function TeachersSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="teachers"
      dir="rtl"
      className="relative overflow-hidden bg-black py-8 text-white sm:py-10 lg:py-14"
    >
      {/* Top Separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      {/* Bottom Separator */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-emerald-500/[0.035] blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-emerald-900/[0.05] blur-[130px]" />

      <div className="relative mx-auto w-full max-w-7xl px-3 sm:px-4 lg:px-6 xl:px-8">
        {/* Header */}
        <div className="mb-6 flex flex-col items-center gap-4 text-center sm:mb-8 sm:flex-row sm:items-end sm:justify-between sm:text-right">
          <div>
            {/* Badge */}
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1.5 text-[10px] font-medium text-emerald-300 sm:text-xs">
              <GraduationCap
                size={13}
                strokeWidth={1.7}
              />

              <span>اساتید و مربی‌ها</span>
            </div>

            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
              مربی‌های فاطمیه
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
              با مربی‌ها و اساتید فعال حلقه‌های آموزشی و فرهنگی مسجد فاطمیه
              آشنا شوید.
            </p>
          </div>

          {/* Desktop Controls */}
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              aria-label="مربی بعدی"
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition duration-300 hover:border-emerald-400/25 hover:bg-emerald-400/[0.06] hover:text-emerald-300"
            >
              <ArrowRight
                size={17}
                strokeWidth={1.8}
              />
            </button>

            <button
              type="button"
              aria-label="مربی قبلی"
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition duration-300 hover:border-emerald-400/25 hover:bg-emerald-400/[0.06] hover:text-emerald-300"
            >
              <ArrowLeft
                size={17}
                strokeWidth={1.8}
              />
            </button>
          </div>
        </div>

        {/* Slider */}
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
          {teachers.map((teacher) => (
            <SwiperSlide
              key={teacher.id}
              className="!h-auto"
            >
              <TeacherCard teacher={teacher} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

/* =========================
   Teacher Card
========================= */

function TeacherCard({
  teacher,
}: {
  teacher: (typeof teachers)[number];
}) {
  return (
    <article className="group flex h-full min-h-[470px] flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-zinc-950/90 transition duration-300 hover:border-emerald-400/20">
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
        {teacher.image ? (
          <img
            src={teacher.image}
            alt={teacher.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-emerald-950/25">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] text-emerald-400">
              <GraduationCap
                size={36}
                strokeWidth={1.3}
              />
            </div>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        {/* Role */}
        <div className="absolute bottom-4 right-4 left-4">
          <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-[10px] font-medium text-emerald-300 backdrop-blur-md">
            <Sparkles
              size={12}
              strokeWidth={1.7}
            />

            {teacher.role}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-lg font-bold text-white">
          {teacher.name}
        </h3>

        <p className="mt-2 line-clamp-2 text-xs leading-6 text-zinc-500 sm:text-sm sm:leading-7">
          {teacher.description}
        </p>

        {/* Information */}
        <div className="mt-5 grid grid-cols-2 gap-2.5 border-t border-white/[0.06] pt-4">
          <InfoItem
            icon={
              <CalendarDays
                size={14}
                strokeWidth={1.7}
              />
            }
            label="سن"
            value={teacher.age}
          />

          <InfoItem
            icon={
              <GraduationCap
                size={14}
                strokeWidth={1.7}
              />
            }
            label="تحصیلات"
            value={teacher.education}
          />

          <InfoItem
            icon={
              <BookOpen
                size={14}
                strokeWidth={1.7}
              />
            }
            label="حلقه"
            value={teacher.course}
          />

          <InfoItem
            icon={
              <Award
                size={14}
                strokeWidth={1.7}
              />
            }
            label="سابقه"
            value={teacher.experience}
          />

          <div className="col-span-2">
            <InfoItem
              icon={
                <UsersRound
                  size={14}
                  strokeWidth={1.7}
                />
              }
              label="تعداد هنرجویان"
              value={teacher.students}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-5">
          <a
            href={`/teachers/${teacher.id}`}
            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
          >
            <span>مشاهده پروفایل</span>

            <ArrowLeft
              size={16}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover/link:-translate-x-1"
            />
          </a>
        </div>
      </div>
    </article>
  );
}

/* =========================
   Info Item
========================= */

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0 rounded-xl border border-white/[0.05] bg-white/[0.02] px-3 py-2.5">
      <div className="flex items-center gap-1.5 text-[9px] text-zinc-600">
        <span className="text-emerald-500/80">
          {icon}
        </span>

        <span>{label}</span>
      </div>

      <div className="mt-1 truncate text-[11px] font-medium text-zinc-300">
        {value}
      </div>
    </div>
  );
}