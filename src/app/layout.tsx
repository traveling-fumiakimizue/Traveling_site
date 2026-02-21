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
  metadataBase: new URL('https://www.traveling.co.jp'),
  title: "株式会社Traveling | Empower Your IT Department.",
  description: "業界最大手の情シスに13年勤務した経験から、御社のITロードマップ作成、IT投資計画、IT部門の役割定義を推進。100億円規模の企業様向けに、ITの民主化と成果の最大化を実現します。",
  openGraph: {
    title: "株式会社Traveling | Empower Your IT Department.",
    description: "ITは難しい、関係ない、を解決します。ITロードマップの作成から導入推進まで。",
    siteName: "株式会社Traveling",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/assets/images/traveling_logo.png",
        width: 1200,
        height: 630,
        alt: "株式会社Traveling ロゴ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社Traveling | Empower Your IT Department.",
    description: "業界最大手の情シスに13年勤務した経験から、御社のITロードマップ作成、IT投資計画、IT部門の役割定義を推進。100億円規模の企業様向けに、ITの民主化と成果の最大化を実現します。",
    images: ["/assets/images/traveling_logo.png"],
  },
  icons: {
    icon: "/assets/images/traveling_logo.png",
    shortcut: "/assets/images/traveling_logo.png",
    apple: "/assets/images/traveling_logo.png",
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
