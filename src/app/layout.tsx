import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR, Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400"],
});

// G마켓 산스 — display headings (wordmark, section titles, game names). Basic Latin (U+0020-007E) subset only, since the title is English.
const gmarketSans = localFont({
  src: "./fonts/GmarketSansBold-latin.woff2",
  variable: "--font-gmarket-sans",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WINDUP — Game Studio",
  description: "WINDUP — 세상을 바꾸는 작은 회전. BOB LOGISTICS, OMG: Oh My Gravity를 만드는 게임 개발사",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} ${spaceMono.variable} ${gmarketSans.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
