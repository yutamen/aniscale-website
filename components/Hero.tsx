import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 md:pb-32 md:pt-36">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
            macOS App — Runs locally on your machine
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-tight">
            AI Video Upscaling
            <br />
            <span className="gradient-text">Built for Anime</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Upscale, denoise, and interpolate frames with 4 specialized AI
            models. All processing happens locally on your Mac.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/download"
              className="rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-3 font-medium text-white transition-opacity hover:opacity-90"
            >
              Download for macOS
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-3 font-medium text-zinc-300 transition-colors hover:bg-white/10"
            >
              View Pricing
            </Link>
          </div>

          {/* Before/After placeholder */}
          <div className="glow mt-16 w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50">
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-zinc-600">Aniscale</span>
            </div>
            <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-950">
              <div className="absolute inset-0 flex">
                <div className="flex flex-1 flex-col items-center justify-center border-r border-dashed border-white/10">
                  <div className="mb-2 text-xs font-medium text-zinc-600">BEFORE</div>
                  <div className="flex h-24 w-36 items-center justify-center rounded-lg bg-zinc-800/50 md:h-32 md:w-48">
                    <div className="space-y-1 text-center">
                      <div className="text-2xl font-bold text-zinc-600 md:text-3xl">480p</div>
                      <div className="text-xs text-zinc-700">Low Resolution</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center">
                  <div className="mb-2 text-xs font-medium text-violet-400">AFTER</div>
                  <div className="flex h-24 w-36 items-center justify-center rounded-lg border border-violet-500/20 bg-violet-950/20 md:h-32 md:w-48">
                    <div className="space-y-1 text-center">
                      <div className="gradient-text text-2xl font-bold md:text-3xl">4K</div>
                      <div className="text-xs text-violet-300/60">AI Enhanced</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
