import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Header({ auth, title, activePage = '' }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/#home', id: 'home' },
        { name: 'About Us', href: route('aboutus'), id: 'about' },
        { name: 'Services', href: route('services.index'), id: 'services' },
        { name: 'Blog', href: route('blog.index'), id: 'blog' },
        { name: 'Contact Us', href: '/#contact', id: 'contact' },
    ];

    return (
        <>
            {title && (
                <Head title={title}>
                    <link rel="icon" type="image/x-icon" href="/logo.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500&display=swap"
                        rel="stylesheet"
                    />
                </Head>
            )}

            {/* Floating Navigation Bar */}
            <header className={`fixed top-0 inset-x-0 z-50 pointer-events-none transition-all duration-300 ${scrolled ? 'py-3' : 'py-5 sm:py-6'}`}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <nav className="pointer-events-auto flex items-center justify-between gap-4">

                        {/* Brand Logo */}
                        <Link href="/" className="flex items-center group shrink-0">
                            <img
                                src="/images/logo.png"
                                alt="Arunika Global Valuindo"
                                className="h-16 sm:h-20 w-auto object-contain"
                            />
                        </Link>

                        {/* Desktop Navigation Pill */}
                        <div className={`hidden md:flex items-center gap-1 lg:gap-2 rounded-full transition-all duration-300 ${
                            scrolled
                                ? 'bg-[#EBEBEB]/90 backdrop-blur-xl shadow-md px-2 py-2'
                                : 'bg-[#EBEBEB] shadow-[0_4px_20px_rgba(0,0,0,0.05)] px-2 py-2'
                        }`}>
                            {navLinks.map((item) => {
                                const isActive = activePage === item.id;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`px-4 py-2 rounded-full text-xs lg:text-sm tracking-wide transition-colors ${
                                            isActive
                                                ? 'bg-[#1B544D] text-white font-medium shadow-sm'
                                                : 'text-[#4A5D5A] font-normal hover:text-[#1B544D]'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* CTA / Auth Buttons */}
                        <div className="hidden md:flex items-center gap-3 shrink-0">
                            {auth?.user?.role === 'admin' ? (
                                <Link
                                    href={route('admin.dashboard')}
                                    className="px-6 py-2.5 rounded-full bg-[#4E7E77] text-white font-medium text-xs lg:text-sm tracking-wide hover:bg-[#3E6B64] transition-all shadow-sm flex items-center gap-1.5"
                                >
                                    <span>Dashboard</span>
                                </Link>
                            ) : (
                                <a
                                    href="/#contact"
                                    className="px-6 py-2.5 rounded-full bg-[#4E7E77] text-white font-medium text-xs lg:text-sm tracking-wide hover:bg-[#3E6B64] transition-all shadow-sm"
                                >
                                    Get In Touch
                                </a>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden ml-auto">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 rounded-full bg-[#EBEBEB] text-[#1B544D] hover:bg-black/5 transition-colors"
                                aria-label="Toggle navigation menu"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {mobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>

                    </nav>

                    {/* Mobile Menu Dropdown Card */}
                    {mobileMenuOpen && (
                        <div className="pointer-events-auto md:hidden mt-3 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/60 shadow-xl p-5 space-y-1.5 transition-all">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px-4 py-2.5 rounded-2xl text-sm transition-colors ${
                                        activePage === item.id
                                            ? 'font-medium text-[#1B544D] bg-[#EFECE6]'
                                            : 'font-normal text-[#4A5D5A] hover:bg-[#EFECE6]/60'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <div className="pt-3 border-t border-[#EAE6DF]/80">
                                {auth?.user ? (
                                    <Link
                                        href={route('admin.dashboard')}
                                        className="block w-full text-center px-5 py-2.5 rounded-full bg-[#4E7E77] text-white font-medium tracking-wide text-xs shadow-sm"
                                    >
                                        Dashboard Admin
                                    </Link>
                                ) : (
                                    <a
                                        href="/#contact"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block w-full text-center px-5 py-2.5 rounded-full bg-[#4E7E77] text-white font-medium tracking-wide text-xs shadow-sm"
                                    >
                                        Get In Touch
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}