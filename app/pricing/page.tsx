import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Aniscale",
  description:
    "Point-based pricing for Aniscale AI video upscaling. Pay only for what you use.",
};

const plans = [
  {
    points: 200,
    price: 980,
    perPoint: "¥4.9",
    label: "Starter",
    highlight: false,
  },
  {
    points: 500,
    price: 1980,
    perPoint: "¥3.96",
    label: "Standard",
    highlight: true,
  },
  {
    points: 1500,
    price: 4980,
    perPoint: "¥3.32",
    label: "Pro",
    highlight: false,
  },
];

const usageExamples = [
  { content: "5min anime clip (720p → 4K)", points: "~30pt" },
  { content: "24min episode (480p → 1080p)", points: "~80pt" },
  { content: "24min episode (1080p → 4K)", points: "~150pt" },
  { content: "Frame interpolation (24fps → 60fps, 24min)", points: "~100pt" },
];

const faqs = [
  {
    q: "How does the point system work?",
    a: "Points are consumed per video based on duration, resolution, and the AI model used. Purchase points in advance and they never expire.",
  },
  {
    q: "Can I try before buying?",
    a: "New accounts receive bonus points to test the app with your own videos before purchasing.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept all major credit cards (Visa, Mastercard, AMEX) through Stripe's secure payment platform.",
  },
  {
    q: "Are there refunds?",
    a: "Unused points can be refunded within 30 days of purchase. Contact support for assistance.",
  },
];

export default function PricingPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Simple <span className="gradient-text">Point-Based</span> Pricing
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Pay only for what you use. No subscriptions, no monthly fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.label}
              className={`card-hover relative rounded-2xl p-8 ${
                plan.highlight
                  ? "gradient-border glow bg-zinc-900/80"
                  : "border border-white/5 bg-zinc-900/50"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-1 text-xs font-medium text-white">
                  Best Value
                </div>
              )}
              <div className="mb-1 text-sm font-medium text-zinc-400">
                {plan.label}
              </div>
              <div className="mb-1 text-4xl font-bold">
                {plan.points}
                <span className="ml-1 text-lg font-normal text-zinc-500">
                  pt
                </span>
              </div>
              <div className="mb-6 text-2xl font-semibold text-zinc-300">
                ¥{plan.price.toLocaleString()}
              </div>
              <div className="mb-6 text-sm text-zinc-500">
                {plan.perPoint} / point
              </div>
              <button
                className={`w-full rounded-full py-3 text-sm font-medium transition-opacity hover:opacity-90 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white"
                    : "border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
                }`}
              >
                Purchase in App
              </button>
            </div>
          ))}
        </div>

        {/* Usage Examples */}
        <div className="mt-20">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">
            Point Usage Guide
          </h2>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50">
            <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              <div>Content</div>
              <div>Points</div>
            </div>
            {usageExamples.map((item) => (
              <div
                key={item.content}
                className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-white/5 px-6 py-4 last:border-0"
              >
                <div className="text-sm text-zinc-300">{item.content}</div>
                <div className="text-sm font-medium text-violet-400">
                  {item.points}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-zinc-600">
            * Actual point consumption varies based on video complexity and
            selected settings.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-2xl space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
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
