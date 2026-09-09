import { Head, Link, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

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
            <Header auth={auth} title="Layanan & Solusi Korporasi - Arunika Global Valuindo" activePage="services" />

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

            <Footer />

        </div>
    );
}
