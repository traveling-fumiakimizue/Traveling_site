"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isPrivacyPage = pathname === '/privacy';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const routes = [
        { href: '#services', label: 'サービス' },
        { href: '#ceo', label: '代表メッセージ' },
        { href: '#company', label: '会社概要' },
        { href: '#contact', label: 'お問い合わせ' },
    ];

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        if (pathname === '/') {
            e.preventDefault();
            const targetId = href.substring(1);
            const elem = document.getElementById(targetId);
            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 border-b bg-white py-4 ${isScrolled ? 'shadow-sm' : ''}`}>
            <div className="w-full flex items-center justify-between px-6 lg:px-10">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2" onClick={handleLogoClick}>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-[#10385F] text-lg md:text-xl leading-tight">株式会社Traveling</h1>
                            <span className="text-[10px] md:text-xs text-gray-600">非IT企業に特化した【情シスプロデューサー】</span>
                        </div>
                    </Link>
                </div>
                {!isPrivacyPage && (
                    <>
                        <nav className="hidden md:flex items-center gap-8">
                            {routes.map((route) => (
                                <a
                                    key={route.href}
                                    href={route.href}
                                    onClick={(e) => handleScrollTo(e, route.href)}
                                    className="text-sm font-medium transition-colors hover:text-primary text-[#10385F]"
                                >
                                    {route.label}
                                </a>
                            ))}
                        </nav>
                        <div className="md:hidden">
                            {/* Mobile Menu Placeholder - In a real app, this would use the Sheet component properly for mobile nav */}
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
}
