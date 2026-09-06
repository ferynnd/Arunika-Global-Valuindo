import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Welcome({ auth, latestArticles = [] }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const testimonials = [
        {
            quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            author: "Ahmad Fauzi",
            role: "Chief Financial Officer, PT Indo Energi Lestari",
        },
        {
            quote: "Layanan valuasi aset dan konsultasi strategi dari Arunika Global Valuindo memberikan kejelasan dan kepastian tinggi untuk keputusan investasi korporasi kami. Sangat profesional dan akurat.",
            author: "Siti Rahmawati",
            role: "Managing Director, Global Venture Capital",
        },
        {
            quote: "Pendampingan feasibility study yang komprehensif membuat proses audit dan ekspansi bisnis kami berjalan mulus sesuai timeline dan standar keberlanjutan.",
            author: "Budi Santoso",
            role: "VP Operations, Nusantara Infrastructure Group",
        }
    ];

    const fallbackArticles = [
        {
            id: 1,
            title: "What They Don't Tell You About Doing Carbon Neutral",
            date: "24 August 2024",
            image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80",
            category: "Sustainability",
            slug: "what-they-dont-tell-you-about-doing-carbon-neutral"
        },
        {
            id: 2,
            title: "Our Addiction to Concrete Is Wrecking the Planet",
            date: "18 September 2024",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
            category: "Industrial",
            slug: "our-addiction-to-concrete-is-wrecking-the-planet"
        },
        {
            id: 3,
            title: "The Unseen Price of Your Next Fast Delivery",
            date: "02 November 2024",
            image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
            category: "Logistics",
            slug: "the-unseen-price-of-your-next-fast-delivery"
        }
    ];

    const displayArticles = latestArticles && latestArticles.length > 0
        ? latestArticles.map((art) => ({
            id: art.id,
            title: art.title,
            date: new Date(art.published_at || art.created_at).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
            }),
            image: art.thumbnail ? `/storage/${art.thumbnail}` : 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80',
            category: art.category ? art.category.name : 'Artikel',
            slug: art.slug,
        }))
        : fallbackArticles;

    return (
        <div className="min-h-screen bg-[#FAF8F5] text-[#334155] font-sans antialiased selection:bg-[#ECAE36] selection:text-[#1B544D]">
            <Head title="Arunika Global Valuindo - Strategic Growth Meets Sustainable Impact" />

            {/* Floating Navigation Bar */}
            <header className={`fixed top-0 inset-x-0 z-50 pointer-events-none transition-all duration-300 ${scrolled ? 'py-3' : 'py-5 sm:py-6'
                }`}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <nav className={`pointer-events-auto rounded-full transition-all duration-300 flex items-center justify-between border ${scrolled
                            ? 'bg-white/85 backdrop-blur-xl border-white/70 shadow-lg shadow-slate-900/5 px-4 sm:px-5 py-2.5'
                            : 'bg-white/70 backdrop-blur-md border-white/50 shadow-[0_4px_25px_rgba(0,0,0,0.04)] px-5 sm:px-6 py-3'
                        }`}>

                        {/* Brand Logo */}
                        <a href="#" className="flex items-center gap-2.5 group">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ECAE36] to-[#D99B26] flex items-center justify-center shadow-md shadow-[#ECAE36]/30 text-white font-black">
                                <svg className="w-5 h-5 text-[#1B544D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <div className="leading-tight">
                                <span className="font-extrabold text-sm tracking-wider text-[#1B544D] block uppercase">
                                    ARUNIKA
                                </span>
                                <span className="text-[8px] font-semibold tracking-widest text-[#718783] block uppercase">
                                    GLOBAL VALUINDO
                                </span>
                            </div>
                        </a>

                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center space-x-1 lg:space-x-2 text-xs lg:text-sm font-medium text-[#4A5D5A]">
                            <a
                                href="#home"
                                className="px-3.5 py-1.5 rounded-full text-[#1B544D] bg-[#EFECE6]/80 font-semibold transition-colors"
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                className="px-3.5 py-1.5 rounded-full hover:text-[#1B544D] hover:bg-[#EFECE6]/60 transition-colors"
                            >
                                About Us
                            </a>
                            <a
                                href="#services"
                                className="px-3.5 py-1.5 rounded-full hover:text-[#1B544D] hover:bg-[#EFECE6]/60 transition-colors"
                            >
                                Services
                            </a>
                            <a
                                href="#blog"
                                className="px-3.5 py-1.5 rounded-full hover:text-[#1B544D] hover:bg-[#EFECE6]/60 transition-colors"
                            >
                                Blog
                            </a>
                            <a
                                href="#contact"
                                className="px-3.5 py-1.5 rounded-full hover:text-[#1B544D] hover:bg-[#EFECE6]/60 transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>

                        {/* CTA / Auth Buttons */}
                        <div className="hidden md:flex items-center gap-3">
                            {auth?.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="px-5 py-2 rounded-full bg-[#1B544D] text-white font-semibold text-xs hover:bg-[#15433E] transition-all shadow-sm flex items-center gap-1.5"
                                >
                                    <span>Dashboard</span>
                                    <span>→</span>
                                </Link>
                            ) : (
                                <a
                                    href="#contact"
                                    className="px-5 py-2 rounded-full bg-[#1B544D] text-white font-semibold text-xs hover:bg-[#15433E] transition-all shadow-sm"
                                >
                                    Get in touch
                                </a>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-1.5 rounded-full text-[#1B544D] hover:bg-black/5 transition-colors"
                                aria-label="Toggle navigation menu"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {mobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>

                    </nav>

                    {/* Mobile Menu Dropdown Card */}
                    {mobileMenuOpen && (
                        <div className="pointer-events-auto md:hidden mt-3 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/60 shadow-xl p-5 space-y-1.5 transition-all">
                            <a
                                href="#home"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-4 py-2.5 rounded-2xl font-semibold text-[#1B544D] bg-[#EFECE6]/80"
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-4 py-2.5 rounded-2xl text-[#4A5D5A] hover:bg-[#EFECE6]/60 transition-colors"
                            >
                                About Us
                            </a>
                            <a
                                href="#services"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-4 py-2.5 rounded-2xl text-[#4A5D5A] hover:bg-[#EFECE6]/60 transition-colors"
                            >
                                Services
                            </a>
                            <a
                                href="#blog"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-4 py-2.5 rounded-2xl text-[#4A5D5A] hover:bg-[#EFECE6]/60 transition-colors"
                            >
                                Blog
                            </a>
                            <a
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-4 py-2.5 rounded-2xl text-[#4A5D5A] hover:bg-[#EFECE6]/60 transition-colors"
                            >
                                Contact Us
                            </a>
                            <div className="pt-3 border-t border-[#EAE6DF]/80">
                                {auth?.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="block w-full text-center px-5 py-2.5 rounded-full bg-[#1B544D] text-white font-semibold text-xs shadow-sm"
                                    >
                                        Dashboard Admin
                                    </Link>
                                ) : (
                                    <a
                                        href="#contact"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block w-full text-center px-5 py-2.5 rounded-full bg-[#1B544D] text-white font-semibold text-xs shadow-sm"
                                    >
                                        Get in touch
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* SECTION 1: FULL-BLEED HERO SECTION */}
            <section
                id="home"
                className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=85')`,
                }}
            >
                {/* Subtle Washed-Out White/Neutral Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/85 via-[#FAF8F5]/75 to-[#FAF8F5]"></div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20 sm:pt-40 sm:pb-28">


                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1B544D] max-w-4xl mx-auto leading-[1.12] sm:leading-[1.15]">
                        Strategic Growth Meets <br className="hidden sm:inline" />
                        Sustainable Impact
                    </h1>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#services"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 pl-6 pr-2.5 py-2.5 rounded-full bg-[#ECAE36] hover:bg-[#E0A12A] text-white font-semibold text-sm sm:text-base transition-all shadow-md shadow-[#ECAE36]/30 group"
                        >
                            <span>Book Consultation</span>
                            <span className="w-8 h-8 rounded-full bg-[#1B544D] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </span>
                        </a>

                    </div>

                </div>
            </section>

            {/* SECTION 2: CLIENT / PARTNER LOGOS */}
            <section className="py-8 border-y border-[#EAE6DF] bg-white/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 sm:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                        <span className="font-extrabold text-xl sm:text-2xl text-slate-800 tracking-wider">
                            BLUE DART
                        </span>
                        <span className="font-black text-xl sm:text-2xl text-slate-800 lowercase tracking-wide flex items-center gap-1">
                            <span className="text-[#1B544D]">♥</span> lazada
                        </span>
                        <span className="font-bold text-lg sm:text-xl text-slate-800 tracking-wider">
                            CIMB NIAGA
                        </span>
                        <span className="font-black text-xl sm:text-2xl text-slate-800 lowercase">
                            blibli
                        </span>
                        <span className="font-extrabold text-xl sm:text-2xl text-slate-800 tracking-wider">
                            BLUE DART
                        </span>
                    </div>
                </div>
            </section>

            {/* SECTION 3: WHO WE ARE & 3 HIGHLIGHT CARDS */}
            <section id="about" className="py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="max-w-3xl">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#1B544D] block mb-3">
                            Who We Are
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B544D] leading-snug">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                        </h2>

                        <div className="mt-6">
                            <a
                                href="#services"
                                className="inline-flex items-center gap-3 pl-5 pr-2 py-1.5 rounded-full bg-[#ECAE36] hover:bg-[#E0A12A] text-white font-semibold text-xs sm:text-sm transition-all shadow-sm group"
                            >
                                <span>About Us</span>
                                <span className="w-6 h-6 rounded-full bg-[#1B544D] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* 3 Service Feature Cards */}
                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Card 1 */}
                        <div className="p-6 rounded-2xl bg-[#EFECE6] border border-[#E3DFD7] flex items-start gap-4 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-[#1B544D] text-white flex items-center justify-center shrink-0 shadow-sm">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#1B544D]">
                                    Business Advisory
                                </h3>
                                <p className="text-xs text-[#52605E] mt-1 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="p-6 rounded-2xl bg-[#EFECE6] border border-[#E3DFD7] flex items-start gap-4 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-[#1B544D] text-white flex items-center justify-center shrink-0 shadow-sm">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#1B544D]">
                                    Business Strategy
                                </h3>
                                <p className="text-xs text-[#52605E] mt-1 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="p-6 rounded-2xl bg-[#EFECE6] border border-[#E3DFD7] flex items-start gap-4 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-[#1B544D] text-white flex items-center justify-center shrink-0 shadow-sm">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="m16 10-4 4-2-2" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#1B544D]">
                                    Valuation Services
                                </h3>
                                <p className="text-xs text-[#52605E] mt-1 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* SECTION 4: LEADERSHIP / FOUNDER SPOTLIGHT */}
            <section className="py-16 sm:py-24 border-t border-[#EAE6DF]/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* Executive Portrait */}
                        <div className="lg:col-span-5">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80"
                                    alt="Executive leader"
                                    className="w-full h-80 sm:h-96 object-cover object-top"
                                />
                            </div>
                        </div>

                        {/* Description & Statement */}
                        <div className="lg:col-span-7">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#1B544D] block mb-3">
                                Our Mission
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B544D] leading-snug">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </h2>

                            <div className="mt-6">
                                <a
                                    href="#about"
                                    className="inline-flex items-center gap-3 pl-5 pr-2 py-1.5 rounded-full bg-[#ECAE36] hover:bg-[#E0A12A] text-white font-semibold text-xs sm:text-sm transition-all shadow-sm group"
                                >
                                    <span>About Us</span>
                                    <span className="w-6 h-6 rounded-full bg-[#1B544D] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                    </span>
                                </a>
                            </div>

                            <p className="mt-8 text-xs sm:text-sm text-[#52605E] leading-relaxed italic border-l-2 border-[#1B544D]/30 pl-4">
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto."
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 5: WHY CHOOSE US & CHECKLIST */}
            <section className="py-16 sm:py-24 border-t border-[#EAE6DF]/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* Left: Text & Checkmarks */}
                        <div className="lg:col-span-6">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#1B544D] block mb-3">
                                Why Choose Us
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B544D] leading-snug">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                            </h2>

                            <div className="mt-6">
                                <a
                                    href="#about"
                                    className="inline-flex items-center gap-3 pl-5 pr-2 py-1.5 rounded-full bg-[#ECAE36] hover:bg-[#E0A12A] text-white font-semibold text-xs sm:text-sm transition-all shadow-sm group"
                                >
                                    <span>About Us</span>
                                    <span className="w-6 h-6 rounded-full bg-[#1B544D] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                    </span>
                                </a>
                            </div>

                            {/* 2-Column Checklist */}
                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                                {[
                                    'Business Advisory',
                                    'Resource Advisory',
                                    'Business Strategy',
                                    'Financial Advisory',
                                    'Business Planning',
                                    'Valuation Services',
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-[#1B544D] text-white flex items-center justify-center shrink-0">
                                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <span className="text-xs sm:text-sm font-semibold text-[#1B544D]">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Team Photo in Casual Office */}
                        <div className="lg:col-span-6">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80"
                                    alt="Creative team collaboration"
                                    className="w-full h-80 sm:h-96 object-cover object-center"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 6: DARK GREEN SERVICES SHOWCASE */}
            <section id="services" className="py-20 sm:py-28 bg-[#205B53] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#ECAE36] block mb-2">
                            Services
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-bold leading-snug">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                        </h2>

                        <div className="mt-6 flex justify-center">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-3 pl-5 pr-2 py-1.5 rounded-full bg-[#ECAE36] hover:bg-[#E0A12A] text-white font-semibold text-xs sm:text-sm transition-all shadow-md group"
                            >
                                <span>View All</span>
                                <span className="w-6 h-6 rounded-full bg-[#143F39] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* 4 Dark Cards Grid */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: 'Business Advisory',
                                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                            },
                            {
                                title: 'Business Strategy',
                                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                            },
                            {
                                title: 'Business Planning',
                                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                            },
                            {
                                title: 'Valuation Services',
                                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                            }
                        ].map((srv, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl bg-[#143F39] border border-[#2C6B62] hover:border-[#ECAE36]/60 transition-all flex flex-col justify-between min-h-[220px]"
                            >
                                <div>
                                    <div className="w-2 h-2 rounded-full bg-[#ECAE36] mb-6"></div>
                                    <h3 className="text-base font-bold text-white mb-2">
                                        {srv.title}
                                    </h3>
                                    <p className="text-xs text-slate-300 leading-relaxed">
                                        {srv.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* SECTION 7: TESTIMONIALS & COMMUNITY */}
            <section className="py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* Left: Testimonial Quote & Slider Controls */}
                        <div className="lg:col-span-6">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#1B544D] block mb-3">
                                Testimonials
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B544D] leading-snug">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                            </h2>

                            <div className="mt-6">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-3 pl-5 pr-2 py-1.5 rounded-full bg-[#ECAE36] hover:bg-[#E0A12A] text-white font-semibold text-xs sm:text-sm transition-all shadow-sm group"
                                >
                                    <span>See All</span>
                                    <span className="w-6 h-6 rounded-full bg-[#1B544D] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                    </span>
                                </a>
                            </div>

                            <div className="mt-8 bg-[#EFECE6] rounded-2xl p-6 border border-[#E3DFD7]">
                                <p className="text-xs sm:text-sm text-[#4A5D5A] leading-relaxed italic">
                                    "{testimonials[activeTestimonial].quote}"
                                </p>
                                <div className="mt-4 pt-4 border-t border-[#E0DBD2]">
                                    <div className="font-bold text-sm text-[#1B544D]">
                                        {testimonials[activeTestimonial].author}
                                    </div>
                                    <div className="text-xs text-[#718783]">
                                        {testimonials[activeTestimonial].role}
                                    </div>
                                </div>
                            </div>

                            {/* Prev / Next Slider Buttons */}
                            <div className="mt-6 flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                                    className="w-9 h-9 rounded-full bg-[#1B544D] text-white flex items-center justify-center hover:bg-[#15433E] transition-colors"
                                    title="Previous Testimonial"
                                >
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                                    className="w-9 h-9 rounded-full bg-[#1B544D] text-white flex items-center justify-center hover:bg-[#15433E] transition-colors"
                                    title="Next Testimonial"
                                >
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Right: Community Image */}
                        <div className="lg:col-span-6">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80"
                                    alt="Community education and development"
                                    className="w-full h-80 sm:h-96 object-cover object-center"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 8: BLOG / LATEST ARTICLES */}
            <section id="blog" className="py-20 sm:py-28 border-t border-[#EAE6DF]/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="max-w-3xl mb-12">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#1B544D] block mb-2">
                            Our Blog
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B544D] leading-snug">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                        </h2>
                    </div>

                    {/* 3 Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {displayArticles.map((article) => (
                            <div
                                key={article.id}
                                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1B544D]/80 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider">
                                        {article.category}
                                    </span>
                                </div>
                                <div className="p-6 flex flex-col flex-grow justify-between">
                                    <div>
                                        <div className="flex items-center gap-1.5 text-xs text-[#718783] mb-2 font-medium">
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                <line x1="16" y1="2" x2="16" y2="6" />
                                                <line x1="8" y1="2" x2="8" y2="6" />
                                                <line x1="3" y1="10" x2="21" y2="10" />
                                            </svg>
                                            <span>{article.date}</span>
                                        </div>
                                        <h3 className="text-base font-bold text-[#1B544D] group-hover:text-[#ECAE36] transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-[#F0EDE7] flex items-center justify-between">
                                        <span className="text-xs font-bold text-[#1B544D] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                            Read More <span>→</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* SECTION 9: CTA BANNER (Ready to Solve Your Problem...) */}
            <section className="py-20 relative overflow-hidden bg-[#1B544D]">
                <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                    <img
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80"
                        alt="Background overlay"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                        Ready to solve your problem with <br />
                        <span className="text-[#ECAE36] italic">Arunika Global Valuindo?</span>
                    </h2>

                    <div className="mt-8 flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#EF4444] hover:bg-[#DC2626] text-white font-semibold text-sm sm:text-base transition-all shadow-lg shadow-rose-900/30 group"
                        >
                            <span>Schedule a Call</span>
                            <span className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* SECTION 10: FOOTER */}
            <footer id="contact" className="bg-[#0A1F1B] text-slate-300 pt-16 pb-8 border-t border-[#16352E]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-[#1A3D36]">

                        {/* Company Info & Logo */}
                        <div className="lg:col-span-2 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-[#ECAE36] flex items-center justify-center text-[#1B544D] font-bold">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <div className="leading-tight">
                                    <span className="font-bold text-base tracking-wider text-white block uppercase">
                                        ARUNIKA
                                    </span>
                                    <span className="text-[9px] font-medium tracking-widest text-[#8AA29E] block uppercase">
                                        GLOBAL VALUINDO
                                    </span>
                                </div>
                            </div>

                            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                                Layanan valuasi aset, studi kelayakan, dan konsultasi strategi korporasi berstandar global untuk mengakselerasi pertumbuhan bisnis yang berkelanjutan.
                            </p>

                            {/* Social Media Links */}
                            <div className="flex items-center gap-3 pt-2">
                                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="w-8 h-8 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-[#ECAE36] hover:bg-[#ECAE36]/10 flex items-center justify-center transition-all text-xs"
                                        title={social}
                                    >
                                        <span className="capitalize">{social[0]}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Information Column */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                                INFORMATION
                            </h4>
                            <ul className="space-y-2.5 text-xs text-slate-400">
                                <li>
                                    <a href="#about" className="hover:text-[#ECAE36] transition-colors">About Us</a>
                                </li>
                                <li>
                                    <a href="#services" className="hover:text-[#ECAE36] transition-colors">Services</a>
                                </li>
                                <li>
                                    <a href="#blog" className="hover:text-[#ECAE36] transition-colors">Blog</a>
                                </li>
                                <li>
                                    <a href="#contact" className="hover:text-[#ECAE36] transition-colors">Contact Us</a>
                                </li>
                            </ul>
                        </div>

                        {/* Services Column */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                                SERVICES
                            </h4>
                            <ul className="space-y-2.5 text-xs text-slate-400">
                                <li>
                                    <a href="#services" className="hover:text-[#ECAE36] transition-colors">Business Valuation</a>
                                </li>
                                <li>
                                    <a href="#services" className="hover:text-[#ECAE36] transition-colors">Strategic Advisory</a>
                                </li>
                                <li>
                                    <a href="#services" className="hover:text-[#ECAE36] transition-colors">Asset Appraisal</a>
                                </li>
                                <li>
                                    <a href="#services" className="hover:text-[#ECAE36] transition-colors">Company Assessment</a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Us Column */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                                CONTACT US
                            </h4>
                            <ul className="space-y-2.5 text-xs text-slate-400">
                                <li>+62 (21) 555-0198</li>
                                <li>contact@arunika-valuindo.com</li>
                                <li>Jakarta Selatan, DKI Jakarta, Indonesia</li>
                                <li>Senin - Jumat: 08.00 - 17.00 WIB</li>
                            </ul>
                        </div>

                    </div>

                    {/* Sub Footer */}
                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
                        <div>
                            Copyright © {new Date().getFullYear()} PT Arunika Global Valuindo. All rights reserved.
                        </div>
                        <div className="flex items-center space-x-6">
                            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-slate-400 transition-colors">Terms & Conditions</a>
                        </div>
                    </div>

                </div>
            </footer>

        </div>
    );
}
