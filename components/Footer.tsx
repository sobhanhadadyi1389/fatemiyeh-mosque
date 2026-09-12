import {
  ArrowUpLeft,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const quickLinks = [
  { title: "خانه", href: "#home" },
  { title: "برنامه‌ها", href: "#programs" },
  { title: "مربی‌ها", href: "#teachers" },
  { title: "حلقه‌های صالحین", href: "#salehin" },
];

const services = [
  { title: "معرفی صالحین", href: "#salehin-introduction" },
  { title: "حلقه‌های صالحین", href: "#salehin-groups" },
  { title: "گالری تصاویر", href: "#gallery" },
  { title: "تماس با ما", href: "#contact" },
];

export default function Footer() {
  return (
    <footer dir="rtl" className="w-full border-t border-emerald-500/10 bg-black">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 xl:px-8">
        {/* Main Footer */}
        <div className="grid gap-10 py-10 sm:py-12 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#home"
              className="inline-block text-xl font-bold tracking-tight text-white"
            >
              مسجد <span className="text-emerald-400">فاطمیه</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-500">
              پایگاه فرهنگی مسجد فاطمیه؛ بستری برای رشد ایمانی، تربیتی، فرهنگی
              و اجتماعی نوجوانان و جوانان.
            </p>

            <div className="mt-5 flex items-center gap-2">
             

              <a
                href="#"
                aria-label="تلگرام"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-zinc-950 text-zinc-500 transition-colors hover:border-emerald-500/20 hover:text-emerald-400"
              >
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              دسترسی سریع
            </h3>

            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block w-fit text-sm text-zinc-500 transition-colors hover:text-emerald-400"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              بخش‌های سایت
            </h3>

            <nav className="space-y-3">
              {services.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block w-fit text-sm text-zinc-500 transition-colors hover:text-emerald-400"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              ارتباط با مسجد
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald-500/10 bg-emerald-500/5">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                </div>

                <p className="text-sm leading-6 text-zinc-500">
                  آدرس مسجد فاطمیه
                  <br />
                  در این قسمت آدرس دقیق قرار می‌گیرد
                </p>
              </div>

              <a
                href="tel:+980000000000"
                className="flex items-center gap-3 text-sm text-zinc-500 transition-colors hover:text-emerald-400"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald-500/10 bg-emerald-500/5">
                  <Phone className="h-4 w-4 text-emerald-400" />
                </div>

                <span>۰۹۱۲ ۰۰۰ ۰۰۰۰</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-xs text-zinc-600 sm:text-right">
            © {new Date().getFullYear()} مسجد فاطمیه. تمامی حقوق محفوظ است.
          </p>

          <a
            href="#home"
            aria-label="بازگشت به بالا"
            className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-zinc-950 text-zinc-500 transition-colors hover:border-emerald-500/20 hover:text-emerald-400 sm:mx-0"
          >
            <ArrowUpLeft className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}