
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "مسجد فاطمیه",
  description: "پایگاه فرهنگی مسجد فاطمیه",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}