import { Head, Link, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Index({ auth, services, filters }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [search, setSearch] = useState(filters.search || '');

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

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        router.get(
            route('services.index'),
            { search },
            { preserveState: true }
        );
    };

    return (
        <div className="min-h-screen bg-[#FAF8F5] text-[#334155] font-sans antialiased selection:bg-[#ECAE36] selection:text-[#1B544D]">
            <Head title="Layanan & Solusi Korporasi - Arunika Global Valuindo" />

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

            {/* HERO SECTION */}
            <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-b from-white via-[#FAF8F5] to-[#FAF8F5] border-b border-[#EAE6DF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#ECAE36] bg-[#1B544D] px-4 py-1.5 rounded-full inline-block mb-4 shadow-xs">
                        Portofolio Layanan Terpercaya
                    </span>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B544D] tracking-tight leading-tight max-w-4xl mx-auto">
                        Solusi Valuasi Aset & Konsultasi Strategi Korporasi
                    </h1>
                    <p className="text-xs sm:text-sm text-[#52605E] max-w-2xl mx-auto mt-4 leading-relaxed">
                        Pendampingan profesional berstandar nasional dan internasional untuk kepastian investasi, kepatuhan regulasi, serta peningkatan nilai wajar aset korporasi.
                    </p>

                    {/* Search Bar */}
                    <div className="mt-8 max-w-2xl mx-auto">
                        <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 bg-white p-2 rounded-full border border-[#EAE6DF] shadow-md shadow-slate-900/5">
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Cari jenis layanan korporasi..."
                                className="flex-1 border-0 bg-transparent text-xs sm:text-sm px-4 focus:ring-0 focus:outline-hidden text-slate-800 placeholder-slate-400"
                            />
                            <button
                                type="submit"
                                className="px-6 py-2.5 rounded-full bg-[#1B544D] text-white font-semibold text-xs hover:bg-[#15433E] transition-all shadow-sm shrink-0"
                            >
                                Cari
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* SERVICES GRID SECTION */}
            <section className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-extrabold text-[#1B544D]">
                            {search ? 'Hasil Pencarian Layanan' : 'Daftar Layanan Korporasi Kami'}
                        </h2>
                        <span className="text-xs text-[#718783]">
                            Total {services.total || 0} Layanan
                        </span>
                    </div>

                    {services.data.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.data.map((service, idx) => (
                                <div
                                    key={service.id}
                                    className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#EAE6DF] hover:shadow-xl hover:border-[#1B544D]/40 transition-all duration-300 justify-between"
                                >
                                    <div>
                                        {/* Thumbnail Banner */}
                                        {service.thumbnail ? (
                                            <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 border-b border-[#EAE6DF]">
                                                <img
                                                    src={`/storage/${service.thumbnail}`}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#1B544D]/90 backdrop-blur-md text-[#ECAE36] font-bold text-xs">
                                                    #{service.sort_order || idx + 1}
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="h-44 bg-gradient-to-br from-[#1B544D] to-[#143F39] p-6 flex items-center justify-between text-white relative">
                                                <div className="w-12 h-12 rounded-2xl bg-[#ECAE36]/20 border border-[#ECAE36]/30 text-[#ECAE36] flex items-center justify-center font-bold text-xl">
                                                    ★
                                                </div>
                                                <span className="px-3 py-1 rounded-full bg-white/10 text-[#ECAE36] font-bold text-xs backdrop-blur-md">
                                                    #{service.sort_order || idx + 1}
                                                </span>
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className="p-6 space-y-4">
                                            <h3 className="text-lg sm:text-xl font-bold text-[#1B544D] group-hover:text-[#ECAE36] transition-colors leading-snug">
                                                <Link href={route('services.show', service.slug)}>
                                                    {service.title}
                                                </Link>
                                            </h3>

                                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                                                {service.excerpt || 'Penjelasan rinci mengenai cakupan metodologi dan manfaat layanan bagi perusahaan Anda.'}
                                            </p>

                                            {/* Poin Keunggulan / Features Tags */}
                                            {service.features && service.features.length > 0 && (
                                                <div className="pt-2 flex flex-wrap gap-1.5">
                                                    {service.features.slice(0, 3).map((feat, fIdx) => (
                                                        <span key={fIdx} className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] text-[11px] font-medium text-[#1B544D] border border-[#EAE6DF]">
                                                            ✓ {feat}
                                                        </span>
                                                    ))}
                                                    {service.features.length > 3 && (
                                                        <span className="px-2 py-1 rounded-lg bg-slate-100 text-[10px] text-slate-500">
                                                            +{service.features.length - 3} fitur
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Action Footer */}
                                    <div className="p-6 pt-0">
                                        <Link
                                            href={route('services.show', service.slug)}
                                            className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-[#FAF8F5] group-hover:bg-[#1B544D] text-[#1B544D] group-hover:text-white font-semibold text-xs transition-all border border-[#EAE6DF] group-hover:border-[#1B544D]"
                                        >
                                            <span>Lihat Detail Layanan</span>
                                            <span>→</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-3xl border border-[#EAE6DF] p-12 text-center text-slate-400">
                            <svg className="w-12 h-12 mx-auto text-slate-300 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                            </svg>
                            <p className="text-sm font-semibold text-slate-600">Layanan tidak ditemukan.</p>
                            <p className="text-xs text-slate-400 mt-1">Coba kata kunci pencarian lainnya.</p>
                        </div>
                    )}

                    {/* PAGINATION */}
                    {services.links && services.links.length > 3 && (
                        <div className="mt-12 flex justify-center">
                            <div className="flex flex-wrap items-center gap-1.5">
                                {services.links.map((link, key) => (
                                    link.url ? (
                                        <Link
                                            key={key}
                                            href={link.url}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                            className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors ${
                                                link.active
                                                    ? 'bg-[#1B544D] text-[#ECAE36] shadow-sm'
                                                    : 'bg-white text-slate-700 hover:bg-[#EFECE6] border border-[#EAE6DF]'
                                            }`}
                                        />
                                    ) : (
                                        <span
                                            key={key}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                            className="px-4 py-2 rounded-full text-xs text-slate-300 border border-[#EAE6DF]"
                                        />
                                    )
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </section>

            {/* CTA BANNER */}
            <section className="py-20 bg-[#1B544D] text-white relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#ECAE36] bg-white/10 px-4 py-1.5 rounded-full inline-block">
                        Konsultasi Strategis
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                        Butuh Penilaian Aset & Studi Kelayakan Bisnis?
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto leading-relaxed">
                        Tim konsultan ahli Arunika Global Valuindo siap memberikan solusi terpercaya untuk kebutuhan korporasi Anda.
                    </p>
                    <div className="pt-2">
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#ECAE36] hover:bg-[#E0A12A] text-[#1B544D] font-bold text-sm transition-all shadow-lg shadow-[#ECAE36]/20"
                        >
                            <span>Jadwalkan Konsultasi Gratis</span>
                            <span>→</span>
                        </Link>
                    </div>
                </div>
            </section>

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
