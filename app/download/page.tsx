import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download - Aniscale",
  description:
    "Download Aniscale for macOS. AI-powered anime video upscaling with local processing.",
};

const requirements = [
  { label: "OS", value: "macOS 12 Monterey or later" },
  { label: "Chip", value: "Apple Silicon (M1/M2/M3/M4) or Intel" },
  { label: "RAM", value: "8 GB minimum, 16 GB recommended" },
  { label: "GPU", value: "Vulkan-compatible (Metal via MoltenVK)" },
  { label: "Storage", value: "~500 MB for app + models" },
  { label: "Dependencies", value: "FFmpeg (installed via Homebrew)" },
];

const setupSteps = [
  {
    step: "1",
    title: "Install FFmpeg",
    description: "Open Terminal and run:",
    code: "brew install ffmpeg",
  },
  {
    step: "2",
    title: "Download Aniscale",
    description:
      "Download the .app bundle and move it to your Applications folder.",
    code: null,
  },
  {
    step: "3",
    title: "Launch & Sign Up",
    description:
      "Open Aniscale, create an account, and start processing your anime videos.",
    code: null,
  },
];

export default function DownloadPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Download <span className="gradient-text">Aniscale</span>
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Free to download. Point-based pricing for AI processing.
          </p>
        </div>

        {/* Download Card */}
        <div className="mx-auto max-w-xl">
          <div className="glow gradient-border rounded-3xl bg-zinc-900/80 p-8 text-center md:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500">
              <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-white">
                <path
                  d="M12 2a10 10 0 110 20 10 10 0 010-20z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M8 12l4 4 4-4M12 8v8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="mb-2 text-2xl font-bold">Aniscale for macOS</h2>
            <p className="mb-1 text-sm text-zinc-400">
              Universal Binary (Apple Silicon + Intel)
            </p>
            <p className="mb-8 text-xs text-zinc-600">
              Requires macOS 12+ &middot; ~500 MB
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-3.5 font-medium text-white transition-opacity hover:opacity-90"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download .app
            </a>
            <p className="mt-4 text-xs text-zinc-600">
              Coming soon — download link will be available after release.
            </p>
          </div>
        </div>

        {/* System Requirements */}
        <div className="mt-20">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">
            System Requirements
          </h2>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50">
            {requirements.map((req) => (
              <div
                key={req.label}
                className="grid grid-cols-[120px_1fr] items-center border-b border-white/5 last:border-0"
              >
                <div className="px-6 py-4 text-sm font-medium text-zinc-400">
                  {req.label}
                </div>
                <div className="border-l border-white/5 px-6 py-4 text-sm text-zinc-300">
                  {req.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Setup Guide */}
        <div className="mt-20">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">
            Quick Setup
          </h2>
          <div className="mx-auto max-w-2xl space-y-6">
            {setupSteps.map((step) => (
              <div
                key={step.step}
                className="flex gap-5 rounded-2xl border border-white/5 bg-zinc-900/50 p-6"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600/20 text-sm font-bold text-violet-400">
                  {step.step}
                </div>
                <div className="min-w-0">
                  <h3 className="mb-1 font-semibold">{step.title}</h3>
                  <p className="text-sm text-zinc-400">{step.description}</p>
                  {step.code && (
                    <code className="mt-3 block rounded-lg bg-zinc-950 px-4 py-2.5 font-mono text-sm text-violet-300">
                      {step.code}
                    </code>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
