"use client";

import { useLocale } from "@/lib/locale-context";

const pageTitles = {
  ja: "利用規約",
  en: "Terms of Service",
  zh: "服务条款",
  ko: "이용약관",
} as const;

export default function TermsPage() {
  const { locale } = useLocale();

  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-12 text-center text-4xl font-bold tracking-tight md:text-5xl">
          {pageTitles[locale]}
        </h1>

        <div className="space-y-8">
          <Section title="1. サービス概要">
            <p>
              Aniscale（以下「本サービス」）は、macOS向けのAI動画アップスケーリングアプリケーションです。
              本サービスは、アニメ動画のアップスケーリング、ノイズ除去、フレーム補間などの
              AI処理機能を提供します。すべての動画処理はお客様のMac上でローカルに実行されます。
            </p>
          </Section>

          <Section title="2. アカウント登録">
            <p>
              本サービスの利用にはアカウント登録が必要です。登録時に提供する情報は正確かつ最新のものである必要があります。
              お客様はアカウントの認証情報を安全に管理する責任を負い、アカウントを通じて行われたすべての活動について責任を負います。
              アカウントの不正使用を発見した場合は、速やかに当社（support@aniscale.com）までご連絡ください。
            </p>
          </Section>

          <Section title="3. 料金・請求・解約">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>無料プラン：</strong>
                1分以下の動画を回数制限なく処理できます。全AIエンジンをご利用いただけます。透かしは入りません。
              </li>
              <li>
                <strong>スタンダードプラン（月額¥2,980）：</strong>
                動画の長さ制限なし、全AIエンジン対応、バッチ処理対応、優先サポートが含まれます。
              </li>
              <li>
                <strong>年間プラン（月額¥1,980 / 年額¥23,760）：</strong>
                スタンダードプランの全機能に加え、2ヶ月分の割引が適用されます。
              </li>
              <li>
                サブスクリプションはStripeを通じてクレジットカードで決済されます。
              </li>
              <li>
                いつでも解約可能です。解約後も請求期間の終了まではサービスをご利用いただけます。
              </li>
              <li>
                プランの変更は次回の更新タイミングで適用されます。
              </li>
            </ul>
          </Section>

          <Section title="4. 無料プランの利用条件">
            <p>
              無料プランでは、1分以下の動画に限り、回数制限なく全AIエンジンをご利用いただけます。
              1分を超える動画の処理には、スタンダードプランまたは年間プランへのご加入が必要です。
              当社は、無料プランの内容を事前の通知なく変更する権利を有します。
            </p>
          </Section>

          <Section title="5. 知的財産権">
            <p>
              お客様が本サービスを使用して処理した動画に関する権利は、すべてお客様に帰属します。
              当社は、お客様のコンテンツに対していかなる所有権も主張しません。
              本アプリケーション自体（ソフトウェア、AIモデル、デザイン、商標を含む）に関する知的財産権は当社に帰属します。
            </p>
          </Section>

          <Section title="6. 禁止事項">
            <p>以下の行為を禁止します：</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>本アプリケーションのリバースエンジニアリング、逆コンパイル、逆アセンブル</li>
              <li>本サービスの再販売、再配布、サブライセンス</li>
              <li>著作権を侵害するコンテンツの処理</li>
              <li>違法なコンテンツの処理または生成</li>
              <li>本サービスのセキュリティ機能の回避または無効化</li>
              <li>他のユーザーのサービス利用を妨害する行為</li>
            </ul>
          </Section>

          <Section title="7. 免責事項">
            <p>
              本サービスは「現状有姿」で提供されます。当社は、明示または黙示を問わず、
              商品性、特定目的への適合性、権利非侵害に関するいかなる保証も行いません。
              AI処理の結果の品質は、入力動画の品質や設定により異なる場合があります。
              当社は、サービスの中断、データの損失、または処理結果の品質について責任を負いません。
            </p>
          </Section>

          <Section title="8. 責任の制限">
            <p>
              法律で認められる最大限の範囲において、当社は、本サービスの使用または使用不能に起因する
              間接的、偶発的、特別、結果的、または懲罰的損害について責任を負いません。
              当社の責任の総額は、お客様が過去12ヶ月間に当社に支払った金額を上限とします。
            </p>
          </Section>

          <Section title="9. 規約の変更">
            <p>
              当社は、本規約を随時変更する権利を有します。重要な変更がある場合は、
              本サービスまたはメールを通じて事前に通知します。
              変更後も本サービスを継続して利用した場合、変更後の規約に同意したものとみなされます。
            </p>
          </Section>

          <Section title="10. 準拠法・管轄">
            <p>
              本規約は日本法に準拠し、日本法に従って解釈されます。
              本規約に関連する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </Section>

          <Section title="11. お問い合わせ">
            <p>
              本規約に関するご質問やお問い合わせは、以下までご連絡ください。
            </p>
            <p className="mt-2">
              <strong>メール：</strong>{" "}
              <a
                href="mailto:support@aniscale.com"
                className="text-violet-400 hover:text-violet-300"
              >
                support@aniscale.com
              </a>
            </p>
          </Section>

          <p className="pt-4 text-sm text-zinc-600">最終更新日：2025年1月1日</p>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6 md:p-8">
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-zinc-400">
        {children}
      </div>
    </div>
  );
}
