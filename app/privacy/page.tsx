"use client";

import { useLocale } from "@/lib/locale-context";

const pageTitles = {
  ja: "プライバシーポリシー",
  en: "Privacy Policy",
  zh: "隐私政策",
  ko: "개인정보 처리방침",
} as const;

export default function PrivacyPage() {
  const { locale } = useLocale();

  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-12 text-center text-4xl font-bold tracking-tight md:text-5xl">
          {pageTitles[locale]}
        </h1>

        <div className="space-y-8">
          <Section title="1. はじめに">
            <p>
              Aniscale（以下「当社」）は、お客様のプライバシーを尊重し、個人情報の保護に努めます。
              本プライバシーポリシーは、当社がどのような情報を収集し、どのように使用・保護するかを説明します。
            </p>
          </Section>

          <Section title="2. 収集する情報">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>アカウント情報：</strong>
                メールアドレス、アカウント作成日
              </li>
              <li>
                <strong>利用状況データ：</strong>
                処理した動画の数、使用したAIエンジン、処理時間（動画の内容自体は収集しません）
              </li>
              <li>
                <strong>決済情報：</strong>
                決済処理はStripeが行います。当社はクレジットカード番号を直接保存しません。
                Stripeから提供される決済確認情報（最後の4桁、有効期限等）のみ保持します。
              </li>
              <li>
                <strong>技術情報：</strong>
                デバイス情報（macOSバージョン、チップ種別）、アプリバージョン、エラーログ
              </li>
            </ul>
          </Section>

          <Section title="3. 情報の利用目的">
            <ul className="list-disc space-y-1 pl-5">
              <li>サービスの提供・維持・改善</li>
              <li>アカウント管理および認証</li>
              <li>サブスクリプションの請求処理</li>
              <li>カスタマーサポートの提供</li>
              <li>サービスに関する重要な通知の送信</li>
              <li>利用統計の分析によるサービス改善</li>
            </ul>
          </Section>

          <Section title="4. 情報の共有">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Stripe：</strong>
                決済処理のためにStripeと必要な情報を共有します。
                Stripeのプライバシーポリシーは
                <a
                  href="https://stripe.com/privacy"
                  className="text-violet-400 hover:text-violet-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}stripe.com/privacy{" "}
                </a>
                をご参照ください。
              </li>
              <li>
                当社はお客様の個人情報を第三者に販売、貸与、または取引することはありません。
              </li>
              <li>
                法令に基づく要請がある場合、または当社の権利を保護するために必要な場合を除き、
                個人情報を第三者に開示することはありません。
              </li>
            </ul>
          </Section>

          <Section title="5. ローカル処理について">
            <p>
              Aniscaleの最も重要なプライバシー特性として、すべての動画処理はお客様のMac上でローカルに実行されます。
              お客様の動画が当社のサーバーにアップロードされることはありません。
              動画データはお客様のデバイスから離れることなく処理され、処理結果もローカルに保存されます。
            </p>
          </Section>

          <Section title="6. Cookie">
            <p>
              当社のウェブサイトでは、サービスの機能向上およびユーザー体験の改善のためにCookieを使用する場合があります。
              Cookieの使用を拒否することも可能ですが、一部の機能が制限される場合があります。
            </p>
          </Section>

          <Section title="7. データの保持">
            <p>
              お客様のアカウント情報は、アカウントが有効である間保持されます。
              アカウントを削除された場合、お客様の個人情報は合理的な期間内に削除されます。
              ただし、法的義務を遵守するために必要な情報は、法令で定められた期間保持される場合があります。
            </p>
          </Section>

          <Section title="8. お客様の権利">
            <p>お客様には以下の権利があります：</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>当社が保持するお客様の個人情報へのアクセスを要求する権利</li>
              <li>不正確な個人情報の訂正を要求する権利</li>
              <li>個人情報の削除を要求する権利</li>
              <li>個人情報の処理に対する同意を撤回する権利</li>
              <li>個人情報のポータビリティを要求する権利</li>
            </ul>
            <p className="mt-2">
              これらの権利を行使する場合は、support@aniscale.com までご連絡ください。
            </p>
          </Section>

          <Section title="9. GDPRへの対応">
            <p>
              欧州経済領域（EEA）にお住まいのお客様に対しては、一般データ保護規則（GDPR）に基づく権利を尊重します。
              データ処理の法的根拠は、サービスの提供に必要な契約の履行、お客様の同意、
              および当社の正当な利益に基づきます。
              GDPRに関するお問い合わせは support@aniscale.com までご連絡ください。
            </p>
          </Section>

          <Section title="10. ポリシーの変更">
            <p>
              当社は、本プライバシーポリシーを随時更新する場合があります。
              重要な変更がある場合は、本サービスまたはメールを通じてお知らせします。
            </p>
          </Section>

          <Section title="11. お問い合わせ">
            <p>
              本プライバシーポリシーに関するご質問やお問い合わせは、以下までご連絡ください。
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
