"use client";

import { useLocale } from "@/lib/locale-context";

const stepIcons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" className="h-7 w-7">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" className="h-7 w-7">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.32 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" className="h-7 w-7">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export function ProcessFlow() {
  const { t } = useLocale();
  const stepNumbers = ["01", "02", "03"];

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t.process.title1} <span className="gradient-text">{t.process.title2}</span> {t.process.title3}
          </h2>
          <p className="mt-4 text-lg text-zinc-400">{t.process.subtitle}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {t.process.steps.map((step, i) => (
            <div key={i} className="relative text-center">
              {i < t.process.steps.length - 1 && (
                <div className="pointer-events-none absolute right-0 top-12 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-violet-500/30 to-transparent md:block" />
              )}
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/80 text-violet-400">
                {stepIcons[i]}
              </div>
              <div className="mb-2 text-xs font-bold tracking-widest text-violet-400">
                STEP {stepNumbers[i]}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
