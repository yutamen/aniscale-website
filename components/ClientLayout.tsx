"use client";

import { LocaleProvider } from "@/lib/locale-context";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { ReactNode } from "react";

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </LocaleProvider>
  );
}
