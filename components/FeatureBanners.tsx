"use client";

import { Image as ImageIcon } from "lucide-react";

const banners = [
  {
    id: 1,
    title: "CTA 1",
    image: "",
  },
  {
    id: 2,
    title: "CTA 2",
    image: "",
  },
];

export default function CTABanners() {
  return (
    <section className="w-full bg-black py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {banners.map((banner) => (
            <a
              key={banner.id}
              href="#"
              className="group relative overflow-hidden rounded-2xl border border-emerald-500/10 bg-zinc-950"
            >
              <div className="relative aspect-[3/1] w-full">
                {banner.image ? (
                  <img
                    src={banner.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900">
                    <ImageIcon
                      className="mb-1 h-6 w-6 text-emerald-500/30"
                      strokeWidth={1.5}
                    />

                    <span className="text-[11px] text-zinc-600">
                      {banner.title}
                    </span>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}