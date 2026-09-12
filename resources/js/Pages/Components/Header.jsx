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
        { name: 'Home', href: '/', id: 'home' },
        { name: 'Tentang Kami', href: route('aboutus'), id: 'about' },
        { name: 'Layanan', href: route('services.index'), id: 'services' },
        { name: 'Blog', href: route('blog.index'), id: 'blog' },
        { name: 'Kontak', href: route('contact'), id: 'contact' },
    ];

    return (
        <>
            {title && (
                <Head title={title}>
                    <link rel="icon" type="image" href="images/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500&display=swap"
                        rel="stylesheet"
                    />
                </Head>
            )}

            <header className={`fixed top-0 inset-x-0 z-50 pointer-events-none transition-all duration-300 ${scrolled ? 'py-3 bg-gray-300/40 backdrop-blur' : 'py-3 sm:py-4'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-10">
                    <nav className="pointer-events-auto flex items-center justify-between gap-4">
                        <Link href="/" className="flex items-center group shrink-0">
                            <img
                                src="/images/logo.png"
                                alt="Arunika Global Valuindo"
                                className="md:h-14 h-12 w-auto object-contain"
                            />
                        </Link>

                        <div className={`hidden md:flex items-center gap-1 lg:gap-2 rounded-xl transition-all duration-300 ${scrolled
                            ? 'bg-gray-50/40 backdrop-blur-xl px-2 py-2'
                            : 'bg-gray-50/55 px-2 py-2'
                            }`}>
                            {navLinks.map((item) => {
                                const isActive = activePage === item.id;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`px-4 py-2 rounded-xl text-xs lg:text-sm tracking-wide transition-colors ${isActive
                                            ? 'bg-primary text-white font-medium '
                                            : 'text-primary-dark font-normal hover:text-primary'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="hidden md:flex items-center gap-3 shrink-0">
                            <a
                                href={"https://wa.me/6282331144447"}
                                className="px-6 py-3 rounded-xl bg-primary text-white font-medium text-xs lg:text-sm tracking-wide hover:bg-primary/90 transition-all "
                            >
                                Hubungi kami
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden ml-auto">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-3 rounded-xl bg-gray-50/40 backdrop-blur-xl text-primary hover:text-white hover:bg-primary/70 transition-colors"
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
                        <div className="pointer-events-auto md:hidden mt-3 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/60 p-5 space-y-1.5 transition-all">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px-4 py-2.5 rounded-2xl text-sm transition-colors ${activePage === item.id
                                        ? 'font-medium text-primary bg-gray-50/60 hover:bg-gray-50/80'
                                        : 'font-normal text-primary/75 hover:bg-gray-50/60 hover:bg-gray-50/80/60'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <div className="pt-3 border-t border-[#EAE6DF]/80">
                                <a
                                    href={(route('contact'))}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block w-full text-center px-5 py-2.5 rounded-xl bg-primary text-white font-medium tracking-wide text-xs "
                                >
                                    Hubungi kami
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}