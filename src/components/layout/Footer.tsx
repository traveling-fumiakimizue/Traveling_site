import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-[#10385F] text-white py-6 border-t border-slate-700">
            <div className="container mx-auto px-4 text-center">
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4 md:mb-0">
                    <p className="text-sm opacity-80">
                        &copy; 2024-2026 Traveling Inc. All rights reserved.
                    </p>
                    <span className="hidden md:inline text-slate-500">|</span>
                    <Link href="/privacy" className="text-sm opacity-80 hover:opacity-100 transition-opacity hover:text-white hover:underline underline-offset-4">
                        プライバシーポリシー
                    </Link>
                </div>
            </div>
        </footer>
    );
}
