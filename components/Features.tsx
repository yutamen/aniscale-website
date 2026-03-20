"use client";

import { useLocale } from "@/lib/locale-context";

const icons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

const colors = [
  "from-pink-500 to-rose-500",
  "from-violet-500 to-purple-500",
  "from-blue-500 to-cyan-500",
  "from-amber-500 to-orange-500",
];

export function Features() {
  const { t } = useLocale();

  return (
    <section className="relative border-t border-white/5 bg-zinc-950/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t.features.title1} <span className="gradient-text">{t.features.title2}</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">{t.features.subtitle}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {t.features.items.map((feature, i) => (
            <div
              key={i}
              className="card-hover gradient-border rounded-2xl bg-zinc-900/50 p-6 md:p-8"
            >
              <div
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${colors[i]} text-white`}
              >
                {icons[i]}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
