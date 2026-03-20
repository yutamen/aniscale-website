import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-blue-500">
                <span className="text-xs font-bold text-white">A</span>
              </div>
              <span className="font-bold tracking-tight">Aniscale</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              Anime-focused AI video upscaling.
              <br />
              Powered by cutting-edge AI models.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-zinc-300">Product</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <Link href="/download" className="transition-colors hover:text-zinc-300">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition-colors hover:text-zinc-300">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-zinc-300">AI Models</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>waifu2x</li>
              <li>Real-CUGAN</li>
              <li>Real-ESRGAN</li>
              <li>RIFE v4.6</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-zinc-300">Legal</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <Link href="/terms" className="transition-colors hover:text-zinc-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition-colors hover:text-zinc-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="https://commerce.coinbase.com/legal/privacy-policy"
                  className="transition-colors hover:text-zinc-300"
                >
                  Act on Specified Commercial Transactions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} Aniscale. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
