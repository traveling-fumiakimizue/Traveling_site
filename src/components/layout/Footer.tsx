import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-[#10385F] text-white py-6 border-t border-slate-700">
            <div className="container mx-auto px-4 text-center">
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4">
                    {/* SNS Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://x.com/mittii_biz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-white transition-colors"
                            aria-label="X (Twitter)"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.055-4.425 5.055H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                            </svg>
                        </a>
                        <a
                            href="https://note.com/mittii_note"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-white transition-colors"
                            aria-label="note"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 40 40">
                                <path d="M30 6.5H10A3.5 3.5 0 0 0 6.5 10v20A3.5 3.5 0 0 0 10 33.5h20a3.5 3.5 0 0 0 3.5-3.5V10A3.5 3.5 0 0 0 30 6.5zm-5.63 19.34a2.08 2.08 0 0 1-2.94 0l-5.63-5.63v5.63a2.08 2.08 0 0 1-4.16 0V14.16a2.08 2.08 0 0 1 3.55-1.47l6.24 6.24V14.16a2.08 2.08 0 0 1 4.16 0z" />
                            </svg>
                        </a>
                    </div>

                    <span className="hidden md:inline text-slate-500">|</span>

                    <p className="text-sm opacity-80 whitespace-nowrap">
                        &copy; 2024-2026 Traveling Inc. All rights reserved.
                    </p>

                    <span className="hidden md:inline text-slate-500">|</span>

                    <Link href="/privacy" className="text-sm opacity-80 hover:opacity-100 transition-opacity hover:text-white hover:underline underline-offset-4 whitespace-nowrap">
                        プライバシーポリシー
                    </Link>
                </div>
            </div>
        </footer>
    );
}
