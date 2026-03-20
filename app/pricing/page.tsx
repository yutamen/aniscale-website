"use client";

import { useLocale } from "@/lib/locale-context";

const plans = [
  { points: 200, price: 980, perPoint: "¥4.9", planKey: "starter" as const, highlight: false },
  { points: 500, price: 1980, perPoint: "¥3.96", planKey: "standard" as const, highlight: true },
  { points: 1500, price: 4980, perPoint: "¥3.32", planKey: "pro" as const, highlight: false },
];

export default function PricingPage() {
  const { t } = useLocale();

  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {t.pricing.title1} <span className="gradient-text">{t.pricing.title2}</span> {t.pricing.title3}
          </h1>
          <p className="mt-4 text-lg text-zinc-400">{t.pricing.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.planKey}
              className={`card-hover relative rounded-2xl p-8 ${
                plan.highlight
                  ? "gradient-border glow bg-zinc-900/80"
                  : "border border-white/5 bg-zinc-900/50"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-1 text-xs font-medium text-white">
                  {t.pricing.bestValue}
                </div>
              )}
              <div className="mb-1 text-sm font-medium text-zinc-400">
                {t.pricing[plan.planKey]}
              </div>
              <div className="mb-1 text-4xl font-bold">
                {plan.points}
                <span className="ml-1 text-lg font-normal text-zinc-500">pt</span>
              </div>
              <div className="mb-6 text-2xl font-semibold text-zinc-300">
                ¥{plan.price.toLocaleString()}
              </div>
              <div className="mb-6 text-sm text-zinc-500">
                {plan.perPoint} {t.pricing.perPoint}
              </div>
              <button
                className={`w-full rounded-full py-3 text-sm font-medium transition-opacity hover:opacity-90 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white"
                    : "border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
                }`}
              >
                {t.pricing.purchaseBtn}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">
            {t.pricing.usageTitle}
          </h2>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50">
            <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              <div>{t.pricing.usageContent}</div>
              <div>{t.pricing.usagePoints}</div>
            </div>
            {t.pricing.usageItems.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-white/5 px-6 py-4 last:border-0"
              >
                <div className="text-sm text-zinc-300">{item.content}</div>
                <div className="text-sm font-medium text-violet-400">{item.points}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-zinc-600">{t.pricing.usageNote}</p>
        </div>

        <div className="mt-20">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">
            {t.pricing.faqTitle}
          </h2>
          <div className="mx-auto max-w-2xl space-y-4">
            {t.pricing.faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6">
                <h3 className="mb-2 font-semibold">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
