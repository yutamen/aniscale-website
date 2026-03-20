"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 md:pb-32 md:pt-36">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
            {t.hero.badge}
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-tight">
            {t.hero.title1}
            <br />
            <span className="gradient-text">{t.hero.title2}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/download"
              className="rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-3 font-medium text-white transition-opacity hover:opacity-90"
            >
              {t.hero.downloadBtn}
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-3 font-medium text-zinc-300 transition-colors hover:bg-white/10"
            >
              {t.hero.pricingBtn}
            </Link>
          </div>

          <div className="glow mt-16 w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/hero-banner.jpeg"
              alt="Aniscale - AI Video Upscaling"
              width={1500}
              height={750}
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
