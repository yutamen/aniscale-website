"use client";

import { useLocale } from "@/lib/locale-context";

const CheckIcon = () => (
  <svg
    className="mt-0.5 h-4 w-4 shrink-0 text-violet-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function PricingPage() {
  const { t } = useLocale();

  const plans = [
    {
      nameKey: "free" as const,
      price: t.pricing.freePrice,
      label: null,
      features: t.pricing.freeFeatures,
      highlight: false,
      badge: null,
      sub: null,
    },
    {
      nameKey: "standard" as const,
      price: t.pricing.standardPrice,
      label: t.pricing.monthLabel,
      features: t.pricing.standardFeatures,
      highlight: true,
      badge: null,
      sub: null,
    },
    {
      nameKey: "annual" as const,
      price: t.pricing.annualPrice,
      label: t.pricing.monthLabel,
      features: t.pricing.annualFeatures,
      highlight: false,
      badge: t.pricing.bestValue,
      sub: t.pricing.annualTotal,
    },
  ] as const;

  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {t.pricing.title1}{" "}
            <span className="gradient-text">{t.pricing.title2}</span>{" "}
            {t.pricing.title3}
          </h1>
          <p className="mt-4 text-lg text-zinc-400">{t.pricing.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.nameKey}
              className={`card-hover relative rounded-2xl p-8 ${
                plan.highlight
                  ? "gradient-border glow bg-zinc-900/80"
                  : "border border-white/5 bg-zinc-900/50"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-1 text-xs font-medium text-white">
                  {plan.badge}
                </div>
              )}

              <div className="mb-1 text-sm font-medium text-zinc-400">
                {t.pricing[plan.nameKey]}
              </div>

              <div className="mb-1 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.label && (
                  <span className="text-lg font-normal text-zinc-500">
                    {plan.label}
                  </span>
                )}
              </div>

              {plan.sub && (
                <div className="mb-4 text-sm text-zinc-500">{plan.sub}</div>
              )}
              {!plan.sub && <div className="mb-4" />}

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-full py-3 text-sm font-medium transition-opacity hover:opacity-90 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white"
                    : "border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
                }`}
              >
                {t.pricing.subscribeBtn}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">
            {t.pricing.faqTitle}
          </h2>
          <div className="mx-auto max-w-2xl space-y-4">
            {t.pricing.faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6"
              >
                <h3 className="mb-2 font-semibold">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
