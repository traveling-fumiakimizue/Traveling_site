"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollFadeIn } from '@/components/ui/scroll-fade-in';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactForm } from '@/components/features/ContactForm';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-start text-white bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/hero-background.png')" }}>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 px-6 lg:px-10 w-full">
          <ScrollFadeIn>
            <div className="bg-[#10385F]/85 p-8 md:p-14 rounded-lg max-w-4xl backdrop-blur-sm">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight font-[family-name:var(--font-inter)]">
                Empower Your<br />IT Department.
              </h2>
              <p className="text-lg md:text-xl leading-loose font-medium opacity-95">
                わたしたちは「強いIT部門が経営を強くする」という信念のもと、<br className="hidden md:inline" />
                非IT企業に特化した情シスプロデューサーとして、<br className="hidden md:inline" />
                IT部門構築に必要なノウハウを提供いたします。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Introduction */}
      <section id="introduction" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#10385F]">こんなお悩みありませんか？</h2>
          </ScrollFadeIn>

          <div className="space-y-6 mb-16">
            {[
              "事業拡大を優先してIT投資を後回しにしていたが、そろそろ検討したい",
              "IT投資が場当たりで、成果が見えない。社内に専門家がいないため、相談相手がいない",
              "IT部門＝PC調達や御用聞きに留まり、経営基盤を支える存在になっていない"
            ].map((item, index) => (
              <ScrollFadeIn key={index} delay={index * 0.1}>
                <div className="flex items-start gap-4 p-6 bg-slate-50/80 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mt-1 bg-[#10385F] rounded-full p-1 shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-base md:text-xl font-medium text-[#10385F] leading-relaxed break-words">
                    {item}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          <ScrollFadeIn delay={0.4}>
            <div className="p-6 md:p-10 bg-[#10385F] text-white rounded-2xl shadow-xl text-center">
              <p className="text-xl md:text-2xl font-bold mb-6">わたしたちが解決します</p>
              <p className="text-gray-100 leading-relaxed md:leading-loose text-base md:text-lg opacity-90 text-left md:text-center max-w-3xl mx-auto">
                業界最大手の情報システム部に13年間務めた経験から、御社に必要な【IT投資計画】を作成し、情シスプロデューサーとしてIT部門の &quot;機能&quot; と &quot;役割&quot; を定義して、IT部門の構築とIT導入支援を行います。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <ScrollFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-[#10385F]">提供サービス</h2>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ScrollFadeIn delay={0.1}>
              <Card className="h-full hover:shadow-lg transition-shadow border-none shadow-md bg-white gap-1">
                <CardHeader className="p-6 md:p-8 pb-0">
                  <CardTitle className="text-xl md:text-2xl font-bold text-[#10385F]">IT戦略・企画</CardTitle>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-0">
                  <p className="text-muted-foreground leading-loose text-base md:text-lg">
                    経営課題に基づいたIT戦略の策定から、具体的なシステム企画書の作成までサポート。
                    現状の業務フローを可視化し、最適なデジタルツールの選定を行います。
                  </p>
                </CardContent>
              </Card>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.2}>
              <Card className="h-full hover:shadow-lg transition-shadow border-none shadow-md bg-white gap-1">
                <CardHeader className="p-6 md:p-8 pb-0">
                  <CardTitle className="text-xl md:text-2xl font-bold text-[#10385F]">ベンダー管理・折衝</CardTitle>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-0">
                  <p className="text-muted-foreground leading-loose text-base md:text-lg">
                    お客様の立場に立ってベンダーと交渉し、コストや納期の適正化を図ります。
                    専門用語の翻訳役として、スムーズなプロジェクト進行を支援します。
                  </p>
                </CardContent>
              </Card>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.3}>
              <Card className="h-full hover:shadow-lg transition-shadow border-none shadow-md bg-white gap-1">
                <CardHeader className="p-6 md:p-8 pb-0">
                  <CardTitle className="text-xl md:text-2xl font-bold text-[#10385F]">自走支援・教育</CardTitle>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-0">
                  <p className="text-muted-foreground leading-loose text-base md:text-lg">
                    システム導入後の定着化支援はもちろん、社内IT人材の育成もサポート。
                    最終的には、お客様自身でITを活用できる「自走する組織」を目指します。
                  </p>
                </CardContent>
              </Card>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* CEO Profile */}
      <section id="ceo" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollFadeIn>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/assets/images/traveling_ceo.jpg"
                    alt="代表取締役 水江 文暁"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#10385F]">代表メッセージ</h2>
                <h3 className="text-xl font-medium text-[#10385F] mb-6">代表取締役　水江 文暁</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                  <p>
                    私はこれまで、大手SIerのシステム開発現場と、非IT企業の情報システム部門を経験してきました。その中で感じたのは、日本に足りないIT人材は、技術者ではなく、ITで成果を出す戦略家がいないという課題です。
                  </p>
                  <p>
                    弊社のビジョンは<span className="text-[#10385F]">【ITの民主化】</span>です。「ITは難しい」「私には関係がない」という社長を1人でも減らし、ITで会社の未来を明るくすること、ITで成果を出せる人材を増やすことが弊社のミッションです。
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <h4 className="text-[#10385F] font-bold mb-3 flex items-center gap-2">
                    <span className="w-1 h-4 bg-[#10385F] rounded-full"></span>
                    Career History
                  </h4>
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-[#10385F] mt-1.5 text-xs">●</span>
                      <span>システム開発を6年経験後、業界最大手の情報システム部に13年勤務</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10385F] mt-1.5 text-xs">●</span>
                      <span>SE→社内SE→PM→PMOとキャリアを積み、2024年に独立</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10385F] mt-1.5 text-xs">●</span>
                      <span>情シス時代はIT戦略、投資計画、BPR、IT人材育成に幅広く携わる</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Company Info */}
      <section id="company" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#10385F]">会社概要</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border">
              <dl className="divide-y">
                <div className="grid grid-cols-1 md:grid-cols-3 p-6 text-sm md:text-base hover:bg-slate-50/50">
                  <dt className="font-bold text-[#10385F] mb-1 md:mb-0">会社名</dt>
                  <dd className="md:col-span-2 text-muted-foreground">株式会社Traveling</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 p-6 text-sm md:text-base hover:bg-slate-50/50">
                  <dt className="font-bold text-[#10385F] mb-1 md:mb-0">代表取締役</dt>
                  <dd className="md:col-span-2 text-muted-foreground">水江 文暁</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 p-6 text-sm md:text-base hover:bg-slate-50/50">
                  <dt className="font-bold text-[#10385F] mb-1 md:mb-0">所在地</dt>
                  <dd className="md:col-span-2 text-muted-foreground">千葉県船橋市</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 p-6 text-sm md:text-base hover:bg-slate-50/50">
                  <dt className="font-bold text-[#10385F] mb-1 md:mb-0">設立</dt>
                  <dd className="md:col-span-2 text-muted-foreground">2024年9月</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 p-6 text-sm md:text-base hover:bg-slate-50/50">
                  <dt className="font-bold text-[#10385F] mb-1 md:mb-0">資本金</dt>
                  <dd className="md:col-span-2 text-muted-foreground">200万円</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 p-6 text-sm md:text-base hover:bg-slate-50/50">
                  <dt className="font-bold text-[#10385F] mb-1 md:mb-0">事業内容</dt>
                  <dd className="md:col-span-2 text-muted-foreground">
                    1. 情報システム部門の構築・運営支援<br />
                    2. IT戦略・DX推進コンサルティング<br />
                    3. IT顧問・アドバイザリー業務
                  </dd>
                </div>
              </dl>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#10385F] text-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <ScrollFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">お問い合わせ</h2>
            <p className="text-center text-gray-300 mb-12">
              サービスに関するご質問やご相談など、お気軽にお問い合わせください。<br />
              通常、2営業日以内に担当者よりご返信いたします。
            </p>
            <div className="w-full">
              <ContactForm />
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}
