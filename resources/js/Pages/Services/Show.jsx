import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Show({ auth, service, otherServices = [] }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    return (
        <div className="min-h-screen bg-[#FAF8F5] text-[#334155] font-sans antialiased selection:bg-[#ECAE36] selection:text-[#1B544D]">
            <Head title={`${service.title} - Layanan Arunika Global Valuindo`} />

            {/* Floating Navigation Bar */}
            <header className={`fixed top-0 inset-x-0 z-50 pointer-events-none transition-all duration-300 ${scrolled ? 'py-3' : 'py-5 sm:py-6'}`}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <nav className={`pointer-events-auto rounded-full transition-all duration-300 flex items-center justify-between border ${
                        scrolled
                            ? 'bg-white/85 backdrop-blur-xl border-white/70 shadow-lg shadow-slate-900/5 px-4 sm:px-5 py-2.5'
                            : 'bg-white/70 backdrop-blur-md border-white/50 shadow-[0_4px_25px_rgba(0,0,0,0.04)] px-5 sm:px-6 py-3'
                    }`}>

                        {/* Brand Logo */}
                        <Link href="/" className="flex items-center gap-2.5 group">
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
                        </Link>

                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center space-x-1 lg:space-x-2 text-xs lg:text-sm font-medium text-[#4A5D5A]">
                            <Link href="/" className="px-3.5 py-1.5 rounded-full hover:text-[#1B544D] hover:bg-[#EFECE6]/60 transition-colors">
                                Home
                            </Link>
                            <Link href="/#about" className="px-3.5 py-1.5 rounded-full hover:text-[#1B544D] hover:bg-[#EFECE6]/60 transition-colors">
                                About Us
                            </Link>
                            <Link href={route('services.index')} className="px-3.5 py-1.5 rounded-full text-[#1B544D] bg-[#EFECE6]/80 font-semibold transition-colors">
                                Services
                            </Link>
                            <Link href={route('blog.index')} className="px-3.5 py-1.5 rounded-full hover:text-[#1B544D] hover:bg-[#EFECE6]/60 transition-colors">
                                Blog
                            </Link>
                            <Link href="/#contact" className="px-3.5 py-1.5 rounded-full hover:text-[#1B544D] hover:bg-[#EFECE6]/60 transition-colors">
                                Contact Us
                            </Link>
                        </div>

                        {/* CTA / Auth Buttons */}
                        <div className="hidden md:flex items-center gap-3">
                            {auth?.user?.is_admin ? (
                                <Link
                                    href={route('admin.dashboard')}
                                    className="px-5 py-2 rounded-full bg-[#1B544D] text-white font-semibold text-xs hover:bg-[#15433E] transition-all shadow-sm flex items-center gap-1.5"
                                >
                                    <span>Dashboard</span>
                                    <span>→</span>
                                </Link>
                            ) : (
                                <Link
                                    href="/#contact"
                                    className="px-5 py-2 rounded-full bg-[#1B544D] text-white font-semibold text-xs hover:bg-[#15433E] transition-all shadow-sm"
                                >
                                    Get in touch
                                </Link>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-1.5 rounded-full text-[#1B544D] hover:bg-black/5 transition-colors"
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

                    {/* Mobile Menu Dropdown */}
                    {mobileMenuOpen && (
                        <div className="pointer-events-auto md:hidden mt-3 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/60 shadow-xl p-5 space-y-1.5 transition-all">
                            <Link href="/" className="block px-4 py-2.5 rounded-2xl text-[#4A5D5A] hover:bg-[#EFECE6]/60">
                                Home
                            </Link>
                            <Link href="/#about" className="block px-4 py-2.5 rounded-2xl text-[#4A5D5A] hover:bg-[#EFECE6]/60">
                                About Us
                            </Link>
                            <Link href={route('services.index')} className="block px-4 py-2.5 rounded-2xl font-semibold text-[#1B544D] bg-[#EFECE6]/80">
                                Services
                            </Link>
                            <Link href={route('blog.index')} className="block px-4 py-2.5 rounded-2xl text-[#4A5D5A] hover:bg-[#EFECE6]/60">
                                Blog
                            </Link>
                            <Link href="/#contact" className="block px-4 py-2.5 rounded-2xl text-[#4A5D5A] hover:bg-[#EFECE6]/60">
                                Contact Us
                            </Link>
                        </div>
                    )}
                </div>
            </header>

            {/* MAIN SERVICE CONTENT */}
            <article className="pt-32 pb-20 sm:pt-40">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

                    {/* Breadcrumb & Back */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-[#718783] font-medium">
                            <Link href="/" className="hover:text-[#1B544D]">Home</Link>
                            <span>/</span>
                            <Link href={route('services.index')} className="hover:text-[#1B544D]">Services</Link>
                            <span>/</span>
                            <span className="text-slate-800 truncate max-w-xs">{service.title}</span>
                        </div>
                        <Link
                            href={route('services.index')}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B544D] hover:underline"
                        >
                            <span>← Kembali ke Layanan</span>
                        </Link>
                    </div>

                    {/* Service Header */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="px-3.5 py-1 rounded-full bg-[#1B544D] text-[#ECAE36] text-xs font-bold uppercase tracking-wider shadow-xs">
                                Layanan Korporasi
                            </span>
                            <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#EAE6DF] text-[#1B544D] font-bold text-xs">
                                Prioritas #{service.sort_order || 1}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B544D] tracking-tight leading-tight">
                            {service.title}
                        </h1>

                        {service.excerpt && (
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                                {service.excerpt}
                            </p>
                        )}
                    </div>

                    {/* Thumbnail Banner */}
                    {service.thumbnail && (
                        <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white max-h-[450px] bg-slate-100">
                            <img
                                src={`/storage/${service.thumbnail}`}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {/* Features Poin Keunggulan Card */}
                    {service.features && service.features.length > 0 && (
                        <div className="bg-[#143F39] text-white rounded-3xl p-6 sm:p-8 space-y-4 border border-[#2C6B62] shadow-lg">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ECAE36]"></span>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-[#ECAE36]">
                                    Poin Keunggulan & Fitur Utama
                                </h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {service.features.map((feat, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#205B53] border border-[#2C6B62] text-xs sm:text-sm font-semibold text-slate-100">
                                        <span className="w-6 h-6 rounded-full bg-[#ECAE36] text-[#1B544D] flex items-center justify-center font-bold text-xs shrink-0">
                                            ✓
                                        </span>
                                        <span>{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Rich Content HTML Body */}
                    <div className="bg-white rounded-3xl border border-[#EAE6DF] p-6 sm:p-10 shadow-sm space-y-6">
                        <h3 className="text-lg font-bold text-[#1B544D] border-b border-[#EAE6DF] pb-3">
                            Penjelasan Lengkap & Cakupan Metodologi
                        </h3>
                        <div
                            className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base font-sans prose-headings:text-[#1B544D] prose-headings:font-bold prose-a:text-[#1B544D] hover:prose-a:text-[#ECAE36]"
                            dangerouslySetInnerHTML={{ __html: service.content || service.excerpt || '<p>Informasi detail layanan belum diisi oleh administrator.</p>' }}
                        />
                    </div>

                    {/* CTA Box */}
                    <div className="bg-gradient-to-br from-[#1B544D] to-[#143F39] text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl border border-[#1B544D]">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                            Tertarik Menggunakan Layanan {service.title}?
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto leading-relaxed">
                            Hubungi tim ahli konsultan kami untuk diskusi kebutuhan spesifik perusahaan Anda dan penjadwalan presentasi.
                        </p>
                        <div className="pt-2">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#ECAE36] hover:bg-[#E0A12A] text-[#1B544D] font-bold text-xs sm:text-sm transition-all shadow-md"
                            >
                                <span>Hubungi Konsultan Sekarang</span>
                                <span>→</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </article>

            {/* OTHER SERVICES RECOMMENDATION */}
            {otherServices && otherServices.length > 0 && (
                <section className="py-16 bg-[#EFECE6]/60 border-t border-[#EAE6DF]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-widest text-[#1B544D]">
                                    Eksplorasi Layanan
                                </span>
                                <h3 className="text-2xl font-bold text-[#1B544D] mt-1">
                                    Layanan Korporasi Lainnya
                                </h3>
                            </div>
                            <Link
                                href={route('services.index')}
                                className="text-xs font-bold text-[#1B544D] hover:underline"
                            >
                                Lihat Semua Layanan →
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {otherServices.map((other) => (
                                <div
                                    key={other.id}
                                    className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] hover:shadow-lg transition-all duration-300 p-6 justify-between"
                                >
                                    <div className="space-y-3">
                                        <div className="w-8 h-8 rounded-xl bg-[#1B544D]/10 text-[#1B544D] flex items-center justify-center font-bold text-xs">
                                            ★
                                        </div>
                                        <h4 className="text-base font-bold text-[#1B544D] group-hover:text-[#ECAE36] transition-colors line-clamp-1">
                                            <Link href={route('services.show', other.slug)}>
                                                {other.title}
                                            </Link>
                                        </h4>
                                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                                            {other.excerpt || 'Layanan korporasi terpercaya dari Arunika Global Valuindo.'}
                                        </p>
                                    </div>
                                    <div className="pt-4 mt-2 border-t border-[#F0EDE7]">
                                        <Link
                                            href={route('services.show', other.slug)}
                                            className="text-xs font-bold text-[#1B544D] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                                        >
                                            <span>Lihat Layanan</span>
                                            <span>→</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FOOTER */}
            <footer className="bg-[#0A1F1B] text-slate-300 pt-16 pb-8 border-t border-[#16352E]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-[#1A3D36]">

                        {/* Company Info */}
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

                        {/* Navigasi */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                                NAVIGASI
                            </h4>
                            <ul className="space-y-2.5 text-xs text-slate-400">
                                <li><Link href="/" className="hover:text-[#ECAE36]">Home</Link></li>
                                <li><Link href="/#about" className="hover:text-[#ECAE36]">About Us</Link></li>
                                <li><Link href={route('services.index')} className="hover:text-[#ECAE36]">Services</Link></li>
                                <li><Link href={route('blog.index')} className="hover:text-[#ECAE36]">Blog</Link></li>
                            </ul>
                        </div>

                        {/* Kontak */}
                        <div className="lg:col-span-2">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                                KONTAK KAMI
                            </h4>
                            <ul className="space-y-2.5 text-xs text-slate-400">
                                <li>+62 (21) 555-0198</li>
                                <li>contact@arunika-valuindo.com</li>
                                <li>Jakarta Selatan, DKI Jakarta</li>
                            </ul>
                        </div>

                    </div>

                    <div className="pt-8 text-center text-xs text-slate-500">
                        Copyright © {new Date().getFullYear()} PT Arunika Global Valuindo. All rights reserved.
                    </div>
                </div>
            </footer>

        </div>
    );
}
