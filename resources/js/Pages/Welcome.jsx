import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import CustomButton from '@/Components/CustomButton';
import Header from './Components/Header';
import Footer from './Components/Footer';

export default function Welcome({ auth, latestArticles = [], services = [], testimonials = [] }) {
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

    const fallbackTestimonials = [
        {
            quote: "Layanan valuasi aset dan konsultasi strategi dari Arunika Global Valuindo memberikan kejelasan dan kepastian tinggi untuk keputusan investasi korporasi kami. Sangat profesional dan akurat.",
            author: "Ahmad Fauzi",
            role: "Chief Financial Officer, PT Indo Energi Lestari",
            avatar: null,
        },
        {
            quote: "Pendampingan feasibility study yang komprehensif membuat proses audit dan ekspansi bisnis kami berjalan mulus sesuai timeline dan standar keberlanjutan.",
            author: "Siti Rahmawati",
            role: "Managing Director, Global Venture Capital",
            avatar: null,
        },
        {
            quote: "Tim konsultan Arunika memiliki dedikasi dan metodologi riset yang mendalam, sangat direkomendasikan untuk analisis finansial korporasi.",
            author: "Budi Santoso",
            role: "VP Operations, Nusantara Infrastructure Group",
            avatar: null,
        }
    ];

    const displayTestimonials = testimonials && testimonials.length > 0 ? testimonials : fallbackTestimonials;
    const currentTestimonial = displayTestimonials[activeTestimonial] || displayTestimonials[0];

    const fallbackServices = [
        {
            id: 1,
            title: 'Business Valuation & Advisory',
            excerpt: 'Layanan penilai independen dan analisis nilai wajar aset serta penilaian ekuitas perusahaan berstandar internasional.',
            content: '<p>Layanan penilai independen dan analisis nilai wajar aset serta penilaian ekuitas perusahaan berstandar internasional untuk mendukung merger, akuisisi, dan pendanaan korporasi.</p>',
            thumbnail: null,
        },
        {
            id: 2,
            title: 'Feasibility Study & Strategy',
            excerpt: 'Studi kelayakan bisnis komprehensif, analisis pasar, dan formulasi strategi ekspansi usaha secara terukur.',
            content: '<p>Studi kelayakan bisnis komprehensif, analisis pasar, dan formulasi strategi ekspansi usaha secara terukur untuk meminimalkan risiko investasi.</p>',
            thumbnail: null,
        },
        {
            id: 3,
            title: 'Corporate Restructuring',
            excerpt: 'Pendampingan restrukturisasi modal, perbaikan tata kelola keuangan, serta optimalisasi portofolio bisnis.',
            content: '<p>Pendampingan restrukturisasi modal, perbaikan tata kelola keuangan, serta optimalisasi portofolio bisnis korporasi.</p>',
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
            content: "<p>Memahami pentingnya kalkulasi nilai wajar pada era transformasi digital untuk mendukung keputusan akuisisi dan investasi strategis.</p>",
            slug: "valuasi-aset-digital"
        },
        {
            id: 2,
            title: "Pentingnya Feasibility Study Sebelum Ekspansi Usaha Korporasi",
            date: "18 September 2026",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
            category: "Strategi",
            content: "<p>Studi kelayakan bisnis yang akurat mencegah potensi risiko kegagalan investasi dalam proyek skala besar.</p>",
            slug: "pentingnya-feasibility-study"
        },
        {
            id: 3,
            title: "Integrasi Prinsip ESG untuk Meningkatkan Nilai Perusahaan",
            date: "02 November 2026",
            image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
            category: "Sustainability",
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
            content: art.content || art.excerpt || '',
            slug: art.slug,
        }))
        : fallbackArticles;

    // Icon set for About Us highlight cards (cycled by index)
    const aboutIcons = [
        // graduation cap
        <svg key="i1" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10L12 5 2 10l10 5 10-5z" />
            <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
        </svg>,
        // briefcase
        <svg key="i2" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>,
        // trending up
        <svg key="i3" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
        </svg>,
    ];

    return (
        <div className="min-h-screen bg-[#FAF8F5] text-[#334155] font-['Work_Sans'] font-normal tracking-wide antialiased selection:bg-[#ECAE36] selection:text-[#1B544D]">
            <Header auth={auth} title="Arunika Global Valuindo" activePage="home" />

            {/* SECTION 1: HERO SECTION */}
            <section
                id="home"
                className="relative min-h-[85vh] lg:min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
                style={{
                    backgroundImage: `url('/images/hero.png')`,
                }}
            >
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 sm:pt-36 lg:pt-40 pb-20">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#497C73] max-w-5xl mx-auto leading-[1.15] sm:leading-[1.2]">
                        Strategic Growth Meets <br className="hidden sm:inline" />
                        Sustainable Impact
                    </h1>

                    <div className="mt-8 sm:mt-10 flex items-center justify-center">
                        <CustomButton
                            href="#services"
                            text="Book Consultation"
                            bgColor="bg-[#E2BE43] hover:bg-[#D5B138]"
                            textColor="text-white"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 2: CLIENT / PARTNER LOGOS */}
            <section className="py-8 border-y border-[#EAE6DF] bg-white/50 overflow-hidden">
                <div className="relative overflow-hidden">
                    <div className="flex w-max animate-logo-slider">

                        {/* SET 1 */}
                        <div className="flex items-center gap-16 sm:gap-24 pr-16 sm:pr-24 shrink-0">
                            <img src="/images/blibli.png" alt="Blibli" className="h-8 sm:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                            <img src="/images/lazada.png" alt="Lazada" className="h-8 sm:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                            <img src="/images/shopee.png" alt="Shopee" className="h-8 sm:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                            <img src="/images/blibli.png" alt="Blibli" className="h-8 sm:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                        </div>

                        {/* SET 2 - DUPLIKAT */}
                        <div className="flex items-center gap-16 sm:gap-24 pr-16 sm:pr-24 shrink-0">
                            <img src="/images/blibli.png" alt="Blibli" className="h-8 sm:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                            <img src="/images/lazada.png" alt="Lazada" className="h-8 sm:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                            <img src="/images/shopee.png" alt="Shopee" className="h-8 sm:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                            <img src="/images/blibli.png" alt="Blibli" className="h-8 sm:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 3: ABOUT US & HIGHLIGHT CARDS */}
            <section id="about" className="py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="max-w-3xl space-y-6">
                        <span className="text-sm sm:text-base font-semibold tracking-wide text-[#3D7068] block">
                            Tentang Kami
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wide leading-snug">
                            PT Arunika Global Valuindo adalah perusahaan penilai independen dan penasihat strategi korporasi terpercaya di Indonesia.
                        </h2>
                    </div>

                    {/* 3 About Highlight Cards (matches "About Card" reference) */}
                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {displayServices.slice(0, 3).map((srv, idx) => (
                            <div
                                key={srv.id || idx}
                                onClick={() => setSelectedService(srv)}
                                className="p-6 rounded-2xl bg-[#EFECE6] border border-[#E3DFD7] cursor-pointer transition-all hover:border-[#1B544D]/30 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#1B544D] text-white flex items-center justify-center shrink-0 mb-4 group-hover:scale-105 transition-transform">
                                    {aboutIcons[idx % aboutIcons.length]}
                                </div>
                                <h3 className="text-base font-semibold tracking-wide group-hover:text-[#ECAE36] transition-colors">
                                    {srv.title}
                                </h3>
                                <p className="text-xs font-normal text-[#52605E] mt-2 leading-relaxed tracking-wide line-clamp-2">
                                    {srv.excerpt}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* SECTION: OUR MISSION */}
            <section className="py-16 sm:py-24 bg-[#FAF8F5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                        {/* Left: Owner Image */}
                        <div className="lg:col-span-5 flex justify-center lg:justify-start">
                            <div className="relative overflow-hidden rounded-3xl sm:rounded-[32px] shadow-sm max-w-md w-full">
                                <img
                                    src="/images/owner.png"
                                    alt="Our Mission - Arunika Global Valuindo"
                                    className="w-full h-[380px] sm:h-[460px] object-cover object-center"
                                />
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="lg:col-span-7 space-y-6">
                            <span className="text-sm sm:text-base font-semibold tracking-wide text-[#3D7068] block">
                                Our Mission
                            </span>

                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wide leading-[1.3]">
                                Memberikan solusi valuasi dan strategi korporasi yang independen, akurat, dan terpercaya untuk mengakselerasi pertumbuhan bisnis di Indonesia.
                            </h2>

                            <div className="pt-2">
                                <CustomButton
                                    href={route('aboutus')}
                                    text="About Us"
                                    bgColor="bg-[#ECAE36] hover:bg-[#D99B26]"
                                    textColor="text-white"
                                    iconBgColor="bg-[#D99B26]"
                                    iconTextColor="text-white"
                                />
                            </div>

                            <p className="text-xs sm:text-sm text-[#52605E] leading-relaxed tracking-wide pt-4 max-w-xl font-light">
                                PT Arunika Global Valuindo berkomitmen mendampingi setiap langkah strategis korporasi melalui pendekatan berbasis data, standar penilaian internasional, dan integritas tanpa kompromi.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 5: WHY CHOOSE US */}
            <section className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* Left: Text & Checklist */}
                        <div className="lg:col-span-6 space-y-6">
                            <span className="text-sm sm:text-base font-semibold tracking-wide text-[#3D7068] block">
                                Why Choose us?
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wide text-slate-800 leading-snug">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                            </h2>

                            {/* About Us Button with circular arrow */}
                            <Link
                                href={route('services.index')}
                                className="mt-6 inline-flex items-center gap-0 group"
                            >
                                <span className="px-6 py-3 rounded-full bg-[#ECAE36] text-[#1B544D] text-xs font-medium tracking-wide group-hover:bg-[#E0A12A] transition-all shadow-md">
                                    About Us
                                </span>
                                <span className="w-9 h-9 -ml-2 rounded-full bg-[#ECAE36] text-[#1B544D] flex items-center justify-center group-hover:bg-[#E0A12A] transition-all shadow-md">
                                    →
                                </span>
                            </Link>

                            {/* 2-Column Checklist */}
                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                                {displayServices.map((srv, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-[#1B544D] text-white flex items-center justify-center shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="4" width="18" height="14" rx="2" />
                                                <circle cx="9" cy="10" r="2" />
                                                <path d="M15 9h3M15 13h3M6 18v-1a3 3 0 0 1 6 0v1" />
                                            </svg>
                                        </div>
                                        <span className="text-sm sm:text-base font-semibold tracking-wide text-slate-800">
                                            {srv.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Office / Team Photo */}
                        <div className="lg:col-span-6">
                            <div className="relative rounded-3xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80"
                                    alt="Kolaborasi tim profesional Arunika"
                                    className="w-full h-[420px] sm:h-[480px] object-cover object-center"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 6: SERVICES SHOWCASE (matches "Service Card" reference) */}
            <section id="services" className="py-20 sm:py-28 bg-[#205B53] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header - Centered */}
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <span className="text-sm sm:text-base font-semibold tracking-wide text-[#ECAE36] block">
                            Our Service
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-normal tracking-wide leading-snug">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                        </h2>

                        {/* About Us Button with circular arrow */}
                        <Link
                            href={route('services.index')}
                            className="mt-6 inline-flex items-center gap-0 group"
                        >
                            <span className="px-6 py-3 rounded-full bg-[#ECAE36] text-[#1B544D] text-xs font-medium tracking-wide group-hover:bg-[#E0A12A] transition-all">
                                About Us
                            </span>
                            <span className="w-9 h-9 -ml-2 rounded-full bg-[#ECAE36] text-[#1B544D] flex items-center justify-center group-hover:bg-[#E0A12A] transition-all">
                                →
                            </span>
                        </Link>
                    </div>

                    {/* Dynamic Services Grid - 4 columns */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {displayServices.map((srv, idx) => (
                            <div
                                key={srv.id}
                                onClick={() => setSelectedService(srv)}
                                className="relative rounded-3xl bg-[#0F2D28] border border-[#2C6B62] hover:border-[#ECAE36] transition-all cursor-pointer group hover:-translate-y-1 min-h-[240px] flex flex-col justify-between p-6 overflow-hidden"
                            >
                                {srv.thumbnail ? (
                                    <img
                                        src={srv.thumbnail}
                                        alt={srv.title}
                                        className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                                    />
                                ) : null}

                                {/* Top-right label */}
                                <span className="relative z-10 self-end text-[10px] font-light text-slate-400 tracking-wide">
                                    {`[${idx === 0 ? 'First Service' : `Service ${idx + 1}`}]`}
                                </span>

                                {/* Bottom title + description */}
                                <div className="relative z-10">
                                    <h3 className="text-base sm:text-lg font-semibold tracking-wide text-white mb-2 group-hover:text-[#ECAE36] transition-colors">
                                        {srv.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm font-light text-slate-300 leading-relaxed tracking-wide line-clamp-3">
                                        {srv.excerpt}
                                    </p>

                                    {srv.features && srv.features.length > 0 && (
                                        <div className="mt-4 pt-4 border-t border-[#2C6B62] flex flex-wrap gap-1">
                                            {srv.features.slice(0, 2).map((feat, fIdx) => (
                                                <span key={fIdx} className="px-2 py-0.5 rounded-md bg-[#205B53] text-[10px] font-light text-[#ECAE36] border border-[#2C6B62]">
                                                    ✓ {feat}
                                                </span>
                                            ))}
                                        </div>
                                    )}
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
                        <div className="lg:col-span-6 space-y-6">
                            <span className="text-sm sm:text-base font-semibold tracking-wide text-[#3D7068] block">
                                Testimoni
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wide leading-snug">
                                Kepercayaan Klien Adalah Prioritas Utama Kami.
                            </h2>

                            <div className="mt-8 bg-[#EFECE6] rounded-2xl p-6 border border-[#E3DFD7]">
                                <p className="text-xs sm:text-sm font-light text-[#4A5D5A] leading-relaxed tracking-wide italic">
                                    "{currentTestimonial?.quote}"
                                </p>
                                <div className="mt-4 pt-4 border-t border-[#E0DBD2] flex items-center gap-3">
                                    {currentTestimonial?.avatar ? (
                                        <img
                                            src={`/storage/${currentTestimonial.avatar}`}
                                            alt={currentTestimonial.author}
                                            className="w-10 h-10 rounded-full object-cover border border-[#E3DFD7]"
                                        />
                                    ) : null}
                                    <div>
                                        <div className="font-normal tracking-wide text-sm text-[#1B544D]">
                                            {currentTestimonial?.author}
                                        </div>
                                        <div className="text-xs font-light tracking-wide text-[#718783]">
                                            {currentTestimonial?.role}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Prev / Next Buttons */}
                            {displayTestimonials.length > 1 && (
                                <div className="mt-6 flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setActiveTestimonial((prev) => (prev === 0 ? displayTestimonials.length - 1 : prev - 1))}
                                        className="w-9 h-9 rounded-full bg-[#1B544D] text-white flex items-center justify-center hover:bg-[#15433E] transition-colors"
                                        title="Sebelumnya"
                                    >
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M15 18l-6-6 6-6" />
                                        </svg>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTestimonial((prev) => (prev === displayTestimonials.length - 1 ? 0 : prev + 1))}
                                        className="w-9 h-9 rounded-full bg-[#1B544D] text-white flex items-center justify-center hover:bg-[#15433E] transition-colors"
                                        title="Berikutnya"
                                    >
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Community Image */}
                        <div className="lg:col-span-6">
                            <div className="relative rounded-3xl overflow-hidden">
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
            <section id="blog" className="py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                        <div className="max-w-3xl space-y-6">
                            <span className="text-sm sm:text-base font-semibold tracking-wide text-[#3D7068] block">
                                Blog & wawasan terbaru
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wide leading-snug">
                                Wawasan Terkini dari Tim Ahli Arunika
                            </h2>
                        </div>
                        <Link
                            href={route('blog.index')}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1B544D] text-white text-xs font-medium tracking-wide hover:bg-[#15433E] transition-all shrink-0"
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
                                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] cursor-pointer transition-all duration-300"
                            >
                                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow justify-between">
                                    <div>
                                        <div className="flex items-center gap-1.5 text-xs font-light text-[#718783] mb-2 tracking-wide">
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                <line x1="16" y1="2" x2="16" y2="6" />
                                                <line x1="8" y1="2" x2="8" y2="6" />
                                                <line x1="3" y1="10" x2="21" y2="10" />
                                            </svg>
                                            <span>{article.date}</span>
                                        </div>
                                        <h3 className="text-base font-medium tracking-wide group-hover:text-[#1B544D] transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>
                                    </div>
                                    <div className="pt-4 flex items-center justify-between">
                                        <span className="text-xs font-medium tracking-wide group-hover:translate-x-1 transition-transform flex items-center gap-1">
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
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-wide leading-tight">
                        Ready to solve your problem with <br />
                        <span className="text-[#ECAE36] italic">Arunika Global Valuindo?</span>
                    </h2>

                    <div className="mt-8 flex justify-center">
                        <CustomButton
                            href="#contact"
                            text="Consultation Now"
                            bgColor="bg-[#EF4444] hover:bg-[#DC2626]"
                            textColor="text-white"
                            iconBgColor="bg-white/20"
                            iconTextColor="text-white"
                        />
                    </div>
                </div>
            </section>

            <Footer services={services} />

            {/* MODAL DETAIL LAYANAN */}
            {selectedService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#EAE6DF] relative space-y-5">
                        <button
                            onClick={() => setSelectedService(null)}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center text-sm transition-colors"
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
                            <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#1B544D] bg-[#1B544D]/10 px-3 py-1 rounded-full">
                                Detail Layanan
                            </span>
                            <h3 className="text-2xl font-light tracking-wide text-[#1B544D] mt-2">
                                {selectedService.title}
                            </h3>
                        </div>

                        {selectedService.features && selectedService.features.length > 0 && (
                            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF]">
                                <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-[#1B544D] mb-2">
                                    Poin Keunggulan Utama
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {selectedService.features.map((feat, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs font-normal tracking-wide text-slate-700">
                                            <span className="text-[#1B544D]">✓</span>
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div
                            className="prose prose-slate max-w-none text-sm font-light text-slate-700 leading-relaxed tracking-wide border-t border-[#EAE6DF] pt-4"
                            dangerouslySetInnerHTML={{ __html: selectedService.content || selectedService.excerpt }}
                        />

                        <div className="pt-4 border-t border-[#EAE6DF] flex justify-end">
                            <button
                                onClick={() => setSelectedService(null)}
                                className="px-5 py-2 rounded-full bg-[#1B544D] text-white text-xs font-medium tracking-wide hover:bg-[#15433E] transition-colors"
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
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center text-sm transition-colors"
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
                                <span className="text-xs font-medium uppercase tracking-[0.15em] text-white bg-[#1B544D] px-3 py-0.5 rounded-full">
                                    {selectedArticle.category}
                                </span>
                                <span className="text-xs font-light tracking-wide text-slate-400">
                                    {selectedArticle.date}
                                </span>
                            </div>
                            <h3 className="text-2xl font-light tracking-wide text-[#1B544D] mt-2">
                                {selectedArticle.title}
                            </h3>
                        </div>

                        <div
                            className="prose prose-slate max-w-none text-sm font-light text-slate-700 leading-relaxed tracking-wide border-t border-[#EAE6DF] pt-4"
                            dangerouslySetInnerHTML={{ __html: selectedArticle.content || selectedArticle.excerpt }}
                        />

                        <div className="pt-4 border-t border-[#EAE6DF] flex justify-end">
                            <button
                                onClick={() => setSelectedArticle(null)}
                                className="px-5 py-2 rounded-full bg-[#1B544D] text-white text-xs font-medium tracking-wide hover:bg-[#15433E] transition-colors"
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