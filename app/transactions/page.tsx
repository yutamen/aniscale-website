"use client";

import { useLocale } from "@/lib/locale-context";

const pageTitles = {
  ja: "特定商取引法に基づく表記",
  en: "Act on Specified Commercial Transactions",
  zh: "特定商业交易法标注",
  ko: "특정상거래법 표기",
} as const;

const rows = [
  { label: "販売業者", value: "Aniscale" },
  { label: "運営統括責任者", value: "代表者名" },
  { label: "所在地", value: "住所" },
  { label: "電話番号", value: "電話番号" },
  {
    label: "メールアドレス",
    value: "support@aniscale.com",
    isEmail: true,
  },
  {
    label: "販売価格",
    value: "スタンダードプラン ¥2,980/月、年間プラン ¥23,760/年（月額換算 ¥1,980）",
  },
  {
    label: "支払方法",
    value: "クレジットカード（Stripe経由：Visa、Mastercard、AMEX）",
  },
  { label: "支払時期", value: "登録時即時決済。以降、契約期間ごとに自動決済。" },
  { label: "商品の引渡時期", value: "決済完了後、即時にサービスをご利用いただけます。" },
  {
    label: "返品・交換・キャンセル",
    value:
      "デジタルサービスのため返品・交換はお受けできません。サブスクリプションの解約はいつでも可能で、解約後は次回更新日までサービスをご利用いただけます。",
  },
] as const;

export default function TransactionsPage() {
  const { locale } = useLocale();

  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-12 text-center text-4xl font-bold tracking-tight md:text-5xl">
          {pageTitles[locale]}
        </h1>

        <div className="overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50">
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-1 gap-2 px-6 py-5 sm:grid-cols-[200px_1fr] sm:gap-6 ${
                i < rows.length - 1 ? "border-b border-white/5" : ""
              }`}
            >
              <div className="text-sm font-semibold text-zinc-300">
                {row.label}
              </div>
              <div className="text-sm leading-relaxed text-zinc-400">
                {"isEmail" in row && row.isEmail ? (
                  <a
                    href={`mailto:${row.value}`}
                    className="text-violet-400 hover:text-violet-300"
                  >
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-zinc-600">
          最終更新日：2025年1月1日
        </p>
      </div>
    </div>
  );
}
