import type { ReactNode } from "react";
import "../globals.css";
export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-black text-white"
    >
      {children}
    </main>
  );
}