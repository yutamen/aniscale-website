"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { type Locale, localeLabels } from "@/lib/i18n";

const locales: Locale[] = ["ja", "en", "zh", "ko"];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/download", label: t.nav.download },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Aniscale" width={32} height={32} className="rounded-lg" />
          <span className="text-lg font-bold tracking-tight">Aniscale</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                <path
                  fillRule="evenodd"
                  d="M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.5-5.25a.75.75 0 010-1.085l5.5-5.25a.75.75 0 011.06.025z"
                  clipRule="evenodd"
                />
              </svg>
              {localeLabels[locale]}
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 overflow-hidden rounded-xl border border-white/10 bg-zinc-900/95 shadow-xl backdrop-blur-xl">
                {locales.map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLocale(l);
                      setLangOpen(false);
                    }}
                    className={`block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-white/10 ${
                      l === locale ? "text-violet-400" : "text-zinc-300"
                    }`}
                  >
                    {localeLabels[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/download"
            className="rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {t.nav.getStarted}
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-white/5 bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLocale(l);
                    setMobileOpen(false);
                  }}
                  className={`rounded-lg px-3 py-1.5 text-xs transition-colors ${
                    l === locale
                      ? "bg-violet-600/20 text-violet-400"
                      : "border border-white/10 text-zinc-400 hover:text-white"
                  }`}
                >
                  {localeLabels[l]}
                </button>
              ))}
            </div>
            <Link
              href="/download"
              className="mt-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-2 text-center text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.getStarted}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
