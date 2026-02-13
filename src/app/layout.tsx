import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: true,
  variable: "--font-noto-sans-jp",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  preload: true,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "株式会社Traveling | 非IT企業に特化した【情シスプロデューサー】",
  description: "株式会社Travelingは、非IT企業の経営基盤を支える「IT部門」をプロデュースします。業界最大手の情シスで13年の経験を持つ水江文暁が、御社専用のIT投資計画、組織構築、ベンダー管理を支援。ITの民主化で、会社の未来を明るくします。",
  openGraph: {
    title: "株式会社Traveling",
    description: "非IT企業に特化した【情シスプロデューサー】",
    siteName: "株式会社Traveling",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} ${inter.variable}`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
