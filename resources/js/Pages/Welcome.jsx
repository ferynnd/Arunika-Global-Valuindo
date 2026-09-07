import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Welcome({ auth, latestArticles = [], services = [] }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const [selectedService, setSelectedService] = useState(null);
    const [selectedArticle, setSelectedArticle] = useState(null);

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
            quote: "Layanan valuasi aset dan konsultasi strategi dari Arunika Global Valuindo memberikan kejelasan dan kepastian tinggi untuk keputusan investasi korporasi kami. Sangat profesional dan akurat.",
            author: "Ahmad Fauzi",
            role: "Chief Financial Officer, PT Indo Energi Lestari",
        },
        {
            quote: "Pendampingan feasibility study yang komprehensif membuat proses audit dan ekspansi bisnis kami berjalan mulus sesuai timeline dan standar keberlanjutan.",
            author: "Siti Rahmawati",
            role: "Managing Director, Global Venture Capital",
        },
        {
            quote: "Tim konsultan Arunika memiliki dedikasi dan metodologi riset yang mendalam, sangat direkomendasikan untuk analisis finansial korporasi.",
            author: "Budi Santoso",
            role: "VP Operations, Nusantara Infrastructure Group",
        }
    ];

    const fallbackServices = [
        {
            id: 1,
            title: 'Business Valuation & Advisory',
            excerpt: 'Layanan penilai independen dan analisis nilai wajar aset serta penilaian ekuitas perusahaan berstandar internasional.',
            content: '<p>Layanan penilai independen dan analisis nilai wajar aset serta penilaian ekuitas perusahaan berstandar internasional untuk mendukung merger, akuisisi, dan pendanaan korporasi.</p>',
            features: ['Penilaian Aset & Ekuitas', 'Kepatuhan Regulasi', 'Analisis Risiko Keuangan'],
            thumbnail: null,
        },
        {
            id: 2,
            title: 'Feasibility Study & Strategy',
            excerpt: 'Studi kelayakan bisnis komprehensif, analisis pasar, dan formulasi strategi ekspansi usaha secara terukur.',
            content: '<p>Studi kelayakan bisnis komprehensif, analisis pasar, dan formulasi strategi ekspansi usaha secara terukur untuk meminimalkan risiko investasi.</p>',
            features: ['Analisis Pasar', 'Proyeksi Keuangan', 'Mitigasi Risiko Ekspansi'],
            thumbnail: null,
        },
        {
            id: 3,
            title: 'Corporate Restructuring',
            excerpt: 'Pendampingan restrukturisasi modal, perbaikan tata kelola keuangan, serta optimalisasi portofolio bisnis.',
            content: '<p>Pendampingan restrukturisasi modal, perbaikan tata kelola keuangan, serta optimalisasi portofolio bisnis korporasi.</p>',
            features: ['Restrukturisasi Utang & Modal', 'Tata Kelola Keuangan', 'Optimasi Portofolio'],
            thumbnail: null,
        },
        {
            id: 4,
            title: 'Sustainability & ESG Advisory',
            excerpt: 'Konsultasi integrasi prinsip ESG dan keberlanjutan bisnis untuk meningkatkan nilai jangka panjang perusahaan.',
            content: '<p>Konsultasi integrasi prinsip ESG dan keberlanjutan bisnis untuk meningkatkan nilai jangka panjang perusahaan.</p>',
            features: ['Audit Berkelanjutan', 'Integrasi ESG', 'Laporan Keberlanjutan'],
            thumbnail: null,
        }
    ];

    const fallbackArticles = [
        {
            id: 1,
            title: "Tantangan & Peluang Valuasi Aset Digital di Era Transformasi",
            date: "24 Agustus 2026",
            image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80",
            category: "Finansial",
            excerpt: "Memahami pentingnya kalkulasi nilai wajar pada era transformasi digital untuk mendukung keputusan akuisisi.",
            content: "<p>Memahami pentingnya kalkulasi nilai wajar pada era transformasi digital untuk mendukung keputusan akuisisi dan investasi strategis.</p>",
            slug: "valuasi-aset-digital"
        },
        {
            id: 2,
            title: "Pentingnya Feasibility Study Sebelum Ekspansi Usaha Korporasi",
            date: "18 September 2026",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
            category: "Strategi",
            excerpt: "Studi kelayakan bisnis yang akurat mencegah potensi risiko kegagalan investasi dalam proyek skala besar.",
            content: "<p>Studi kelayakan bisnis yang akurat mencegah potensi risiko kegagalan investasi dalam proyek skala besar.</p>",
            slug: "pentingnya-feasibility-study"
        },
        {
            id: 3,
            title: "Integrasi Prinsip ESG untuk Meningkatkan Nilai Perusahaan",
            date: "02 November 2026",
            image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
            category: "Sustainability",
            excerpt: "Bagaimana kriteria lingkungan, sosial, dan tata kelola mempengaruhi kepercayaan investor global.",
            content: "<p>Bagaimana kriteria lingkungan, sosial, dan tata kelola mempengaruhi kepercayaan investor global.</p>",
            slug: "integrasi-prinsip-esg"
        }
    ];

    const displayServices = services && services.length > 0
        ? services.map((srv) => ({
            id: srv.id,
            title: srv.title,
            excerpt: srv.excerpt || (srv.content ? srv.content.replace(/<[^>]+>/g, '').substring(0, 150) + '...' : 'Layanan korporasi dari Arunika Global Valuindo.'),
            content: srv.content || srv.excerpt || '',
            thumbnail: srv.thumbnail ? `/storage/${srv.thumbnail}` : null,
            features: srv.features || [],
        }))
        : fallbackServices;

    const displayArticles = latestArticles && latestArticles.length > 0
        ? latestArticles.map((art) => ({
            id: art.id,
            title: art.title,
            date: new Date(art.published_at || art.created_at).toLocaleDateString('id-ID', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
            }),
            image: art.thumbnail ? `/storage/${art.thumbnail}` : 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80',
            category: art.category ? art.category.name : 'Artikel',
            excerpt: art.excerpt || '',
            content: art.content || art.excerpt || '',
            slug: art.slug,
        }))
        : fallbackArticles;

    return (
        <div className="min-h-screen bg-[#FAF8F5] text-[#334155] font-sans antialiased selection:bg-[#ECAE36] selection:text-[#1B544D]">
            <Head title="Arunika Global Valuindo" />

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
                            <Link
                                href={route('services.index')}
                                className="px-3.5 py-1.5 rounded-full hover:text-[#1B544D] hover:bg-[#EFECE6]/60 transition-colors"
                            >
                                Services
                            </Link>
                            <Link
                                href={route('blog.index')}
                                className="px-3.5 py-1.5 rounded-full hover:text-[#1B544D] hover:bg-[#EFECE6]/60 transition-colors"
                            >
                                Blog
                            </Link>
                            <a
                                href="#contact"
                                className="px-3.5 py-1.5 rounded-full hover:text-[#1B544D] hover:bg-[#EFECE6]/60 transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>

                        {/* CTA / Auth Buttons */}
                        <div className="hidden md:flex items-center gap-3">
                            {auth?.user?.role === 'admin' ? (
                                <Link
                                    href={route('admin.dashboard')}
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
                                        href={route('admin.dashboard')}
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

            {/* SECTION 1: HERO SECTION */}
            <section
                id="home"
                className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=85')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/85 via-[#FAF8F5]/75 to-[#FAF8F5]"></div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20 sm:pt-40 sm:pb-28">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1B544D] max-w-4xl mx-auto leading-[1.12] sm:leading-[1.15]">
                        Strategic Growth Meets <br className="hidden sm:inline" />
                        Sustainable Impact
                    </h1>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#services"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 pl-6 pr-2.5 py-2.5 rounded-full bg-[#ECAE36] hover:bg-[#E0A12A] text-white font-semibold text-sm sm:text-base transition-all shadow-md shadow-[#ECAE36]/30 group"
                        >
                            <span>Lihat Layanan Kami</span>
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
                    </div>
                </div>
            </section>

            {/* SECTION 3: ABOUT US & HIGHLIGHT CARDS */}
            <section id="about" className="py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="max-w-3xl">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#1B544D] block mb-3">
                            Tentang Kami
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B544D] leading-snug">
                            PT Arunika Global Valuindo adalah perusahaan penilai independen dan penasihat strategi korporasi terpercaya di Indonesia.
                        </h2>
                    </div>

                    {/* 3 Service Feature Cards */}
                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {displayServices.slice(0, 3).map((srv, idx) => (
                            <div
                                key={srv.id || idx}
                                onClick={() => setSelectedService(srv)}
                                className="p-6 rounded-2xl bg-[#EFECE6] border border-[#E3DFD7] flex items-start gap-4 hover:shadow-md cursor-pointer transition-all hover:border-[#1B544D]/30 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#1B544D] text-[#ECAE36] flex items-center justify-center shrink-0 shadow-sm font-bold text-sm group-hover:scale-105 transition-transform">
                                    0{idx + 1}
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-[#1B544D] group-hover:text-[#ECAE36] transition-colors">
                                        {srv.title}
                                    </h3>
                                    <p className="text-xs text-[#52605E] mt-1 leading-relaxed line-clamp-2">
                                        {srv.excerpt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* SECTION 5: WHY CHOOSE US */}
            <section className="py-16 sm:py-24 border-t border-[#EAE6DF]/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* Left: Text & Checkmarks */}
                        <div className="lg:col-span-6">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#1B544D] block mb-3">
                                Keunggulan Kami
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B544D] leading-snug">
                                Solusi Valuasi & Konsultasi Bisnis Terintegrasi Berstandar Global.
                            </h2>

                            {/* 2-Column Checklist */}
                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                                {displayServices.map((srv, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-[#1B544D] text-[#ECAE36] flex items-center justify-center shrink-0 font-bold text-xs">
                                            ✓
                                        </div>
                                        <span className="text-xs sm:text-sm font-semibold text-[#1B544D]">
                                            {srv.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Office / Team Photo */}
                        <div className="lg:col-span-6">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80"
                                    alt="Kolaborasi tim profesional Arunika"
                                    className="w-full h-80 sm:h-96 object-cover object-center"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 6: SERVICES SHOWCASE (Data dari Admin) */}
            <section id="services" className="py-20 sm:py-28 bg-[#205B53] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                        <div className="max-w-3xl">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#ECAE36] block mb-2">
                                Layanan Portofolio Kami
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-bold leading-snug">
                                Layanan Valuasi & Konsultasi Strategi Korporasi
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-200 mt-2">
                                Klik pada layanan untuk melihat perincian lengkap dan fitur keunggulannya.
                            </p>
                        </div>
                        <Link
                            href={route('services.index')}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ECAE36] text-[#1B544D] text-xs font-bold hover:bg-[#E0A12A] transition-all shadow-md shrink-0"
                        >
                            <span>Lihat Semua Layanan</span>
                            <span>→</span>
                        </Link>
                    </div>

                    {/* Dynamic Services Grid */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayServices.map((srv) => (
                            <div
                                key={srv.id}
                                onClick={() => setSelectedService(srv)}
                                className="p-6 rounded-2xl bg-[#143F39] border border-[#2C6B62] hover:border-[#ECAE36] transition-all flex flex-col justify-between cursor-pointer group hover:-translate-y-1 shadow-md"
                            >
                                <div>
                                    {srv.thumbnail ? (
                                        <img
                                            src={srv.thumbnail}
                                            alt={srv.title}
                                            className="w-full h-36 object-cover rounded-xl mb-4 border border-[#2C6B62]"
                                        />
                                    ) : (
                                        <div className="w-10 h-10 rounded-xl bg-[#ECAE36]/20 text-[#ECAE36] flex items-center justify-center mb-4 font-bold text-sm border border-[#ECAE36]/30">
                                            ★
                                        </div>
                                    )}

                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ECAE36] transition-colors">
                                        {srv.title}
                                    </h3>
                                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                                        {srv.excerpt}
                                    </p>
                                </div>

                                {srv.features && srv.features.length > 0 && (
                                    <div className="mt-4 pt-4 border-t border-[#2C6B62] flex flex-wrap gap-1">
                                        {srv.features.slice(0, 2).map((feat, idx) => (
                                            <span key={idx} className="px-2 py-0.5 rounded-md bg-[#205B53] text-[10px] text-[#ECAE36] border border-[#2C6B62]">
                                                ✓ {feat}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#ECAE36] group-hover:translate-x-1 transition-transform">
                                    <span>Lihat Detail Layanan</span>
                                    <span>→</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* SECTION 7: TESTIMONIALS */}
            <section className="py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* Testimonial Quote & Slider Controls */}
                        <div className="lg:col-span-6">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#1B544D] block mb-3">
                                Testimoni Klien
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B544D] leading-snug">
                                Kepercayaan Klien Adalah Prioritas Utama Kami.
                            </h2>

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

                            {/* Prev / Next Buttons */}
                            <div className="mt-6 flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                                    className="w-9 h-9 rounded-full bg-[#1B544D] text-white flex items-center justify-center hover:bg-[#15433E] transition-colors"
                                    title="Sebelumnya"
                                >
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                                    className="w-9 h-9 rounded-full bg-[#1B544D] text-white flex items-center justify-center hover:bg-[#15433E] transition-colors"
                                    title="Berikutnya"
                                >
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Community Image */}
                        <div className="lg:col-span-6">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80"
                                    alt="Mitra strategis Arunika"
                                    className="w-full h-80 sm:h-96 object-cover object-center"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 8: BLOG / LATEST ARTICLES (Data dari Admin) */}
            <section id="blog" className="py-20 sm:py-28 border-t border-[#EAE6DF]/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                        <div className="max-w-3xl">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#1B544D] block mb-2">
                                Blog & wawasan terbaru
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B544D] leading-snug">
                                Wawasan Terkini dari Tim Ahli Arunika
                            </h2>
                        </div>
                        <Link
                            href={route('blog.index')}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1B544D] text-white text-xs font-semibold hover:bg-[#15433E] transition-all shadow-sm shrink-0"
                        >
                            <span>Lihat Semua Artikel</span>
                            <span>→</span>
                        </Link>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {displayArticles.map((article) => (
                            <div
                                key={article.id}
                                onClick={() => setSelectedArticle(article)}
                                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] hover:shadow-xl cursor-pointer transition-all duration-300"
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
                                        {article.excerpt && (
                                            <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                                                {article.excerpt}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-[#F0EDE7] flex items-center justify-between">
                                        <span className="text-xs font-bold text-[#1B544D] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                            Baca Selengkapnya <span>→</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* SECTION 9: CTA BANNER */}
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
                        Siap Mengakselerasi Keputusan Bisnis Anda Bersama <br />
                        <span className="text-[#ECAE36] italic">Arunika Global Valuindo?</span>
                    </h2>

                    <div className="mt-8 flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#EF4444] hover:bg-[#DC2626] text-white font-semibold text-sm sm:text-base transition-all shadow-lg shadow-rose-900/30 group"
                        >
                            <span>Hubungi Konsultan Kami</span>
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
                        </div>

                        {/* Menu Navigation */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                                NAVIGASI
                            </h4>
                            <ul className="space-y-2.5 text-xs text-slate-400">
                                <li>
                                    <a href="#about" className="hover:text-[#ECAE36] transition-colors">Tentang Kami</a>
                                </li>
                                <li>
                                    <a href="#services" className="hover:text-[#ECAE36] transition-colors">Layanan</a>
                                </li>
                                <li>
                                    <a href="#blog" className="hover:text-[#ECAE36] transition-colors">Blog</a>
                                </li>
                                <li>
                                    <a href="#contact" className="hover:text-[#ECAE36] transition-colors">Kontak</a>
                                </li>
                            </ul>
                        </div>

                        {/* Layanan */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                                LAYANAN
                            </h4>
                            <ul className="space-y-2.5 text-xs text-slate-400">
                                {displayServices.slice(0, 4).map((srv, idx) => (
                                    <li key={idx}>
                                        <a href="#services" className="hover:text-[#ECAE36] transition-colors line-clamp-1">{srv.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Kontak Kami */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                                KONTAK KAMI
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
                    </div>

                </div>
            </footer>

            {/* MODAL DETAIL LAYANAN */}
            {selectedService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#EAE6DF] relative space-y-5">
                        <button
                            onClick={() => setSelectedService(null)}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center font-bold text-sm transition-colors"
                        >
                            ✕
                        </button>

                        {selectedService.thumbnail && (
                            <img
                                src={selectedService.thumbnail}
                                alt={selectedService.title}
                                className="w-full h-56 object-cover rounded-2xl border border-[#EAE6DF]"
                            />
                        )}

                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#1B544D] bg-[#1B544D]/10 px-3 py-1 rounded-full">
                                Detail Layanan
                            </span>
                            <h3 className="text-2xl font-bold text-[#1B544D] mt-2">
                                {selectedService.title}
                            </h3>
                        </div>

                        {selectedService.features && selectedService.features.length > 0 && (
                            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF]">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B544D] mb-2">
                                    Poin Keunggulan Utama
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {selectedService.features.map((feat, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                            <span className="text-[#1B544D] font-bold">✓</span>
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div
                            className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed border-t border-[#EAE6DF] pt-4"
                            dangerouslySetInnerHTML={{ __html: selectedService.content || selectedService.excerpt }}
                        />

                        <div className="pt-4 border-t border-[#EAE6DF] flex justify-end">
                            <button
                                onClick={() => setSelectedService(null)}
                                className="px-5 py-2 rounded-full bg-[#1B544D] text-white text-xs font-semibold hover:bg-[#15433E] transition-colors"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL DETAIL ARTIKEL BLOG */}
            {selectedArticle && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#EAE6DF] relative space-y-5">
                        <button
                            onClick={() => setSelectedArticle(null)}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center font-bold text-sm transition-colors"
                        >
                            ✕
                        </button>

                        <img
                            src={selectedArticle.image}
                            alt={selectedArticle.title}
                            className="w-full h-56 object-cover rounded-2xl border border-[#EAE6DF]"
                        />

                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#1B544D] px-3 py-0.5 rounded-full">
                                    {selectedArticle.category}
                                </span>
                                <span className="text-xs text-slate-400 font-medium">
                                    {selectedArticle.date}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-[#1B544D] mt-2">
                                {selectedArticle.title}
                            </h3>
                        </div>

                        <div
                            className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed border-t border-[#EAE6DF] pt-4"
                            dangerouslySetInnerHTML={{ __html: selectedArticle.content || selectedArticle.excerpt }}
                        />

                        <div className="pt-4 border-t border-[#EAE6DF] flex justify-end">
                            <button
                                onClick={() => setSelectedArticle(null)}
                                className="px-5 py-2 rounded-full bg-[#1B544D] text-white text-xs font-semibold hover:bg-[#15433E] transition-colors"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
