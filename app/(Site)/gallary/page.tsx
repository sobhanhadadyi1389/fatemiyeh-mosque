"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Grid2X2,
  Image as ImageIcon,
  X,
} from "lucide-react";

type Category = "همه" | "صالحین" | "مراسم" | "فرهنگی" | "اردوها";

type GalleryItem = {
  id: number;
  title: string;
  category: Exclude<Category, "همه">;
  image: string;
};

const categories: Category[] = ["همه", "صالحین", "مراسم", "فرهنگی", "اردوها"];

const galleryCategories: Exclude<Category, "همه">[] = [
  "صالحین",
  "مراسم",
  "فرهنگی",
  "اردوها",
];

const galleryTitles = [
  "جلسه حلقه صالحین",
  "برنامه فرهنگی مسجد",
  "مراسم مذهبی",
  "اردوی صالحین",
  "فعالیت نوجوانان",
  "جلسه تربیتی",
  "برنامه مناسبتی",
  "فعالیت گروهی",
  "نشست فرهنگی",
  "اردوی نوجوانان",
];

const galleryItems: GalleryItem[] = Array.from({ length: 150 }, (_, index) => ({
  id: index + 1,
  title: galleryTitles[index % galleryTitles.length],
  category: galleryCategories[index % galleryCategories.length],
  image: "",
}));

const ITEMS_PER_PAGE = 12;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("همه");

  const [currentPage, setCurrentPage] = useState(1);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    return activeCategory === "همه"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;

    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredItems]);

  const selectedItem =
    selectedIndex !== null ? currentItems[selectedIndex] : null;

  const changeCategory = (category: Category) => {
    setActiveCategory(category);
    setCurrentPage(1);
    setSelectedIndex(null);
  };

  const changePage = (page: number) => {
    setCurrentPage(page);
    setSelectedIndex(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const showPrevious = () => {
    if (selectedIndex === null || currentItems.length === 0) {
      return;
    }

    setSelectedIndex(
      selectedIndex === 0 ? currentItems.length - 1 : selectedIndex - 1,
    );
  };

  const showNext = () => {
    if (selectedIndex === null || currentItems.length === 0) {
      return;
    }

    setSelectedIndex(
      selectedIndex === currentItems.length - 1 ? 0 : selectedIndex + 1,
    );
  };

  return (
    <main dir="rtl" className="min-h-screen bg-black text-white">
      {/* =========================
          Breadcrumb
      ========================= */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-emerald-500/[0.06] blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-40 left-1/4 h-72 w-72 rounded-full bg-emerald-900/[0.08] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-3 pb-8 pt-8 sm:px-4 sm:pb-10 sm:pt-10 lg:px-6 xl:px-8">
          <div className="flex items-center justify-start gap-2 text-xs text-zinc-600 sm:text-sm">
            <a href="/" className="transition-colors hover:text-emerald-400">
              خانه
            </a>

            <ChevronLeft className="h-3.5 w-3.5 text-zinc-700" />

            <span className="text-zinc-400">گالری</span>
          </div>
        </div>
      </section>

      {/* =========================
          Gallery
      ========================= */}
      <section className="py-8 sm:py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 xl:px-8">
          {/* Filters */}
          <div className="mb-7 w-full">
            <div className="grid w-full grid-cols-5 gap-1.5 rounded-2xl border border-white/[0.06] bg-zinc-950 p-1.5 sm:flex sm:justify-center sm:gap-2 sm:border-0 sm:bg-transparent sm:p-0">
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => changeCategory(category)}
                    className={`flex min-w-0 items-center justify-center rounded-xl px-1 py-2.5 text-[10px] font-medium whitespace-nowrap transition-all duration-300 sm:min-w-[72px] sm:px-4 sm:py-2.5 sm:text-sm ${
                      isActive
                        ? "bg-emerald-500 text-white"
                        : "text-zinc-500 hover:bg-white/[0.03] hover:text-zinc-200"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {currentItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-zinc-950 text-right outline-none transition duration-300 hover:border-emerald-400/20"
              >
                <div className="relative aspect-video w-full">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-emerald-950/20">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.05] text-emerald-400/40 transition duration-300 group-hover:scale-110 group-hover:text-emerald-400/60">
                        <ImageIcon className="h-6 w-6" strokeWidth={1.4} />
                      </div>
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-3 pt-12 sm:p-4 sm:pt-16">
                    <span className="mb-1 block text-[9px] font-medium text-emerald-400 sm:text-[10px]">
                      {item.category}
                    </span>

                    <h2 className="text-xs font-semibold text-white sm:text-sm">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Pagination */}
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-1.5 sm:mt-10 sm:gap-2">
              {/* Previous */}
              <button
                type="button"
                aria-label="صفحه قبلی"
                disabled={currentPage === 1}
                onClick={() => changePage(currentPage - 1)}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-zinc-950 text-zinc-400 transition hover:border-emerald-400/20 hover:text-emerald-400 disabled:pointer-events-none disabled:opacity-30 sm:h-10 sm:w-10"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Page Numbers - فقط 3 صفحه */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {Array.from({ length: Math.min(3, totalPages) }, (_, index) => {
                  let page = index + 1;

                  if (totalPages > 3) {
                    if (currentPage <= 2) {
                      page = index + 1;
                    } else if (currentPage >= totalPages - 1) {
                      page = totalPages - 2 + index;
                    } else {
                      page = currentPage - 1 + index;
                    }
                  }

                  const isActive = page === currentPage;

                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => changePage(page)}
                      className={`flex h-9 min-w-9 items-center justify-center rounded-xl px-2 text-xs font-medium transition sm:h-10 sm:min-w-10 sm:text-sm ${
                        isActive
                          ? "bg-emerald-500 text-white"
                          : "border border-white/10 bg-zinc-950 text-zinc-500 hover:border-emerald-400/20 hover:text-white"
                      }`}
                    >
                      {page.toLocaleString("fa-IR")}
                    </button>
                  );
                })}
              </div>

              {/* Next */}
              <button
                type="button"
                aria-label="صفحه بعدی"
                disabled={currentPage === totalPages}
                onClick={() => changePage(currentPage + 1)}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-zinc-950 text-zinc-400 transition hover:border-emerald-400/20 hover:text-emerald-400 disabled:pointer-events-none disabled:opacity-30 sm:h-10 sm:w-10"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* Empty State */}
          {currentItems.length === 0 && (
            <div className="flex min-h-60 items-center justify-center rounded-3xl border border-white/[0.06] bg-zinc-950">
              <p className="text-sm text-zinc-600">
                تصویری در این دسته‌بندی وجود ندارد.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =========================
          Lightbox
      ========================= */}
      {selectedItem && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 backdrop-blur-xl sm:p-6"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            type="button"
            aria-label="بستن"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-zinc-300 transition hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-white sm:right-5 sm:top-5"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Previous */}
          <button
            type="button"
            aria-label="تصویر قبلی"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-white/10 bg-black/60 text-white backdrop-blur-md transition hover:border-emerald-400/30 hover:bg-emerald-500 sm:right-5 sm:h-11 sm:w-11"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Next */}
          <button
            type="button"
            aria-label="تصویر بعدی"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-white/10 bg-black/60 text-white backdrop-blur-md transition hover:border-emerald-400/30 hover:bg-emerald-500 sm:left-5 sm:h-11 sm:w-11"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Image */}
          <div
            className="relative h-[78vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            {selectedItem.image ? (
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-3xl border border-white/10 bg-zinc-950">
                <div className="flex flex-col items-center gap-3 text-zinc-600">
                  <ImageIcon
                    className="h-12 w-12 text-emerald-400/30"
                    strokeWidth={1.2}
                  />

                  <span className="text-sm">{selectedItem.title}</span>
                </div>
              </div>
            )}
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs text-zinc-400 backdrop-blur-md">
            {(selectedIndex + 1).toLocaleString("fa-IR")} /{" "}
            {currentItems.length.toLocaleString("fa-IR")}
          </div>
        </div>
      )}
    </main>
  );
}
