import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Windup",
  description: "세상을 바꾸는 조그만 움직임",
};

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
};

import { LanguageProvider } from "@/context/LanguageContext";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} ${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}>
        <LanguageProvider>
          <LanguageToggle />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
