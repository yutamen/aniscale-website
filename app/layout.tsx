import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aniscale - AI Video Upscaling for Anime",
  description:
    "Anime-focused AI video upscaling. Upscale, denoise, and interpolate frames with engines optimized for anime content.",
  keywords: ["anime", "upscale", "AI", "video", "macOS", "upscaling"],
  openGraph: {
    title: "Aniscale - AI Video Upscaling for Anime",
    description:
      "Anime-focused AI video upscaling. Upscale, denoise, and interpolate frames locally on your Mac.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
