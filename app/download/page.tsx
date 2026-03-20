"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";

export default function DownloadPage() {
  const { t } = useLocale();

  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {t.download.title1} <span className="gradient-text">{t.download.title2}</span>
          </h1>
          <p className="mt-4 text-lg text-zinc-400">{t.download.subtitle}</p>
        </div>

        <div className="mx-auto max-w-xl">
          <div className="glow gradient-border rounded-3xl bg-zinc-900/80 p-8 text-center md:p-12">
            <Image src="/logo.png" alt="Aniscale" width={80} height={80} className="mx-auto mb-6 rounded-2xl" />
            <h2 className="mb-2 text-2xl font-bold">{t.download.appTitle}</h2>
            <p className="mb-1 text-sm text-zinc-400">{t.download.appBinary}</p>
            <p className="mb-8 text-xs text-zinc-600">{t.download.appSize}</p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-3.5 font-medium text-white transition-opacity hover:opacity-90"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t.download.downloadBtn}
            </a>
            <p className="mt-4 text-xs text-zinc-600">{t.download.comingSoon}</p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">{t.download.reqTitle}</h2>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50">
            {t.download.requirements.map((req, i) => (
              <div key={i} className="grid grid-cols-[120px_1fr] items-center border-b border-white/5 last:border-0">
                <div className="px-6 py-4 text-sm font-medium text-zinc-400">{req.label}</div>
                <div className="border-l border-white/5 px-6 py-4 text-sm text-zinc-300">{req.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">{t.download.setupTitle}</h2>
          <div className="mx-auto max-w-2xl space-y-6">
            {t.download.setupSteps.map((step, i) => (
              <div key={i} className="flex gap-5 rounded-2xl border border-white/5 bg-zinc-900/50 p-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600/20 text-sm font-bold text-violet-400">
                  {i + 1}
                </div>
                <div className="min-w-0">
                  <h3 className="mb-1 font-semibold">{step.title}</h3>
                  <p className="text-sm text-zinc-400">{step.description}</p>
                  {step.code && (
                    <code className="mt-3 block rounded-lg bg-zinc-950 px-4 py-2.5 font-mono text-sm text-violet-300">
                      {step.code}
                    </code>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
