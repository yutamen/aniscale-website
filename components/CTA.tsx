import Link from "next/link";

export function CTA() {
  return (
    <section className="border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-950/50 to-blue-950/50 p-10 text-center md:p-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[80px]" />
          </div>
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to upscale your anime?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-zinc-400">
              Download Aniscale for free and start enhancing your anime videos
              with AI today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
