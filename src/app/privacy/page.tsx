
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'プライバシーポリシー | 株式会社Traveling',
    description: '株式会社Travelingのプライバシーポリシー（個人情報保護方針）に関するページです。',
}

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header spacer if needed, or just padding */}
            <main className="flex-grow container mx-auto px-6 py-20 md:py-28 max-w-4xl text-foreground">
                <h1 className="text-3xl md:text-4xl font-bold mb-10 text-[#10385F] text-center">
                    プライバシーポリシー
                </h1>

                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 space-y-8">
                    <section>
                        <p className="leading-relaxed text-muted-foreground mb-6">
                            株式会社Traveling（以下「当社」といいます）は、お客様の個人情報保護の重要性を強く認識し、以下の通りプライバシーポリシーを定め、全社を挙げて個人情報の適切な保護に努めます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#10385F] mb-4 border-b border-slate-200 pb-2">
                            1. 個人情報の利用目的
                        </h2>
                        <p className="leading-relaxed text-muted-foreground">
                            当社は、お客様からお預かりした個人情報を、以下の目的の達成に必要な範囲内で利用いたします。
                        </p>
                        <ul className="list-disc list-inside mt-3 space-y-1 text-muted-foreground ml-4">
                            <li>お問い合わせへの回答および確認のため</li>
                            <li>当社サービスの提供および運営のため</li>
                            <li>サービスのご案内や関連する情報の提供のため</li>
                            <li>これらに付随する業務の遂行のため</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#10385F] mb-4 border-b border-slate-200 pb-2">
                            2. 個人情報の管理
                        </h2>
                        <p className="leading-relaxed text-muted-foreground">
                            当社は、個人情報の漏洩、滅失、毀損等を防止するために、十分な安全保護に努めます。また、個人情報を正確かつ最新なものに保つよう、お預かりした個人情報の適切な管理を行います。通信経路においては、SSL（Secure Socket Layer）暗号化技術を使用し、データの盗聴や改ざんを防止します。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#10385F] mb-4 border-b border-slate-200 pb-2">
                            3. 第三者提供
                        </h2>
                        <p className="leading-relaxed text-muted-foreground">
                            当社は、以下の場合を除き、ご本人の同意を得ることなく第三者に個人情報を提供することはありません。
                        </p>
                        <ul className="list-disc list-inside mt-3 space-y-1 text-muted-foreground ml-4">
                            <li>法令に基づく場合</li>
                            <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#10385F] mb-4 border-b border-slate-200 pb-2">
                            4. 開示・訂正・削除
                        </h2>
                        <p className="leading-relaxed text-muted-foreground">
                            当社は、ご本人から自己の個人情報についての開示・訂正・削除・利用停止等の請求がある場合、速やかに対応いたします。その際、ご本人であることが確認できない場合には、これらの請求に応じません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#10385F] mb-4 border-b border-slate-200 pb-2">
                            5. クッキー（Cookie）について
                        </h2>
                        <p className="leading-relaxed text-muted-foreground">
                            当サイトでは、サービスの利便性向上やサイトの利用状況分析（Googleアナリティクス等の解析ツール）のために、クッキー（Cookie）を使用することがあります。クッキーには個人を特定する情報は含まれておりません。ブラウザの設定により、クッキーの受け取りを拒否することも可能です。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#10385F] mb-4 border-b border-slate-200 pb-2">
                            6. お問い合わせ窓口
                        </h2>
                        <p className="leading-relaxed text-muted-foreground">
                            本ポリシーに関するお問い合わせは、当サイトのお問い合わせフォームよりお願いいたします。
                        </p>
                    </section>

                    <section className="pt-6 border-t border-slate-100 text-right text-sm text-muted-foreground">
                        制定日：2024年9月23日<br />
                        株式会社Traveling<br />
                        代表取締役 水江 文暁
                    </section>
                </div>
            </main>
        </div>
    )
}
