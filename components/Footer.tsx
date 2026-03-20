"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-blue-500">
                <span className="text-xs font-bold text-white">A</span>
              </div>
              <span className="font-bold tracking-tight">Aniscale</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              {t.footer.tagline1}
              <br />
              {t.footer.tagline2}
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-zinc-300">{t.footer.product}</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <Link href="/download" className="transition-colors hover:text-zinc-300">
                  {t.nav.download}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition-colors hover:text-zinc-300">
                  {t.nav.pricing}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-zinc-300">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <Link href="/terms" className="transition-colors hover:text-zinc-300">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition-colors hover:text-zinc-300">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/transactions" className="transition-colors hover:text-zinc-300">
                  {t.footer.transactions}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} Aniscale. {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
