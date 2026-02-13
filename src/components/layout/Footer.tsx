import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-[#10385F] text-white py-6 border-t border-slate-700">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm opacity-80">
                    &copy; 2024 Traveling Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
