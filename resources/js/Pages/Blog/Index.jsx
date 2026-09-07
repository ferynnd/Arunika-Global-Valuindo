import { Head, Link, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Index({ auth, articles, featuredArticle, categories, filters }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [search, setSearch] = useState(filters.search || '');
    const [activeCategory, setActiveCategory] = useState(filters.category || '');

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
            route('blog.index'),
            { search, category: activeCategory },
            { preserveState: true }
        );
    };

    const handleCategoryClick = (categorySlug) => {
        setActiveCategory(categorySlug);
        router.get(
            route('blog.index'),
            { search, category: categorySlug },
            { preserveState: true }
        );
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });
    };

    return (
        <div className="min-h-screen bg-[#FAF8F5] text-[#334155] font-sans antialiased selection:bg-[#ECAE36] selection:text-[#1B544D]">
            <Head title="Blog & Wawasan Korporasi - Arunika Global Valuindo" />

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
                            <Link href="/#home" className="px-3.5 py-1.5 rounded-full hover:text-[#1B544D] hover:bg-[#EFECE6]/60 transition-colors">
                                Home
                            </Link>
                            <Link href="/#about" className="px-3.5 py-1.5 rounded-full hover:text-[#1B544D] hover:bg-[#EFECE6]/60 transition-colors">
                                About Us
                            </Link>
                            <Link href="/#services" className="px-3.5 py-1.5 rounded-full hover:text-[#1B544D] hover:bg-[#EFECE6]/60 transition-colors">
                                Services
                            </Link>
                            <Link href={route('blog.index')} className="px-3.5 py-1.5 rounded-full text-[#1B544D] bg-[#EFECE6]/80 font-semibold transition-colors">
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
                            <Link href="/#services" className="block px-4 py-2.5 rounded-2xl text-[#4A5D5A] hover:bg-[#EFECE6]/60">
                                Services
                            </Link>
                            <Link href={route('blog.index')} className="block px-4 py-2.5 rounded-2xl font-semibold text-[#1B544D] bg-[#EFECE6]/80">
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
                        Wawasan & Insight Korporasi
                    </span>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B544D] tracking-tight leading-tight max-w-4xl mx-auto">
                        Kabar, Analisis & Publikasi Strategi Arunika
                    </h1>
                    <p className="text-xs sm:text-sm text-[#52605E] max-w-2xl mx-auto mt-4 leading-relaxed">
                        Temukan artikel terkini seputar valuasi bisnis, studi kelayakan, strategi korporasi, serta perkembangan isu industri berkelanjutan.
                    </p>

                    {/* Search Bar & Filter */}
                    <div className="mt-8 max-w-2xl mx-auto">
                        <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 bg-white p-2 rounded-full border border-[#EAE6DF] shadow-md shadow-slate-900/5">
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Cari artikel, topik, atau kata kunci..."
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

                    {/* Category Filter Tabs */}
                    {categories && categories.length > 0 && (
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                            <button
                                onClick={() => handleCategoryClick('')}
                                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                                    !activeCategory
                                        ? 'bg-[#1B544D] text-[#ECAE36] shadow-sm'
                                        : 'bg-white text-slate-600 hover:bg-[#EFECE6] border border-[#EAE6DF]'
                                }`}
                            >
                                Semua Artikel
                            </button>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => handleCategoryClick(cat.slug)}
                                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                                        activeCategory === cat.slug
                                            ? 'bg-[#1B544D] text-[#ECAE36] shadow-sm'
                                            : 'bg-white text-slate-600 hover:bg-[#EFECE6] border border-[#EAE6DF]'
                                    }`}
                                >
                                    {cat.name} ({cat.articles_count ?? 0})
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* MAIN CONTENT SECTION */}
            <section className="py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                    {/* FEATURED ARTICLE HERO CARD */}
                    {featuredArticle && (
                        <div className="group relative bg-white rounded-3xl border border-[#EAE6DF] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                                <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-[420px] overflow-hidden bg-slate-100">
                                    <img
                                        src={featuredArticle.thumbnail ? `/storage/${featuredArticle.thumbnail}` : 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80'}
                                        alt={featuredArticle.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#1B544D] text-[#ECAE36] text-xs font-extrabold uppercase tracking-wider shadow-md">
                                        Utama / Featured
                                    </span>
                                </div>
                                <div className="lg:col-span-5 p-6 sm:p-10 space-y-4">
                                    <div className="flex items-center gap-3 text-xs text-[#718783] font-semibold">
                                        <span className="px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-[#EAE6DF] text-[#1B544D]">
                                            {featuredArticle.category ? featuredArticle.category.name : 'Artikel'}
                                        </span>
                                        <span>•</span>
                                        <span>{formatDate(featuredArticle.published_at || featuredArticle.created_at)}</span>
                                    </div>

                                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1B544D] group-hover:text-[#ECAE36] transition-colors leading-snug">
                                        <Link href={route('blog.show', featuredArticle.slug)}>
                                            {featuredArticle.title}
                                        </Link>
                                    </h2>

                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                                        {featuredArticle.excerpt || 'Klik untuk membaca artikel lengkap dari pakar korporasi Arunika Global Valuindo.'}
                                    </p>

                                    <div className="pt-4 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-[#1B544D] text-[#ECAE36] flex items-center justify-center font-bold text-xs">
                                                {featuredArticle.author?.name ? featuredArticle.author.name[0] : 'A'}
                                            </div>
                                            <span className="text-xs font-semibold text-slate-700">
                                                {featuredArticle.author?.name || 'Redaksi Arunika'}
                                            </span>
                                        </div>

                                        <Link
                                            href={route('blog.show', featuredArticle.slug)}
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B544D] text-white font-semibold text-xs hover:bg-[#15433E] transition-all shadow-sm"
                                        >
                                            <span>Baca Selengkapnya</span>
                                            <span>→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ARTICLES GRID */}
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-extrabold text-[#1B544D]">
                                {search || activeCategory ? 'Hasil Pencarian & Filter' : 'Semua Publikasi Artikel'}
                            </h3>
                            <span className="text-xs text-[#718783]">
                                Total {articles.total || 0} Artikel
                            </span>
                        </div>

                        {articles.data.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {articles.data.map((article) => (
                                    <div
                                        key={article.id}
                                        className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                                            <img
                                                src={article.thumbnail ? `/storage/${article.thumbnail}` : 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80'}
                                                alt={article.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1B544D]/85 backdrop-blur-md text-[#ECAE36] text-[10px] font-bold uppercase tracking-wider">
                                                {article.category ? article.category.name : 'Artikel'}
                                            </span>
                                        </div>

                                        <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                                            <div>
                                                <div className="flex items-center gap-2 text-xs text-[#718783] mb-2 font-medium">
                                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                        <line x1="16" y1="2" x2="16" y2="6" />
                                                        <line x1="8" y1="2" x2="8" y2="6" />
                                                        <line x1="3" y1="10" x2="21" y2="10" />
                                                    </svg>
                                                    <span>{formatDate(article.published_at || article.created_at)}</span>
                                                </div>

                                                <h4 className="text-base font-bold text-[#1B544D] group-hover:text-[#ECAE36] transition-colors line-clamp-2 leading-snug">
                                                    <Link href={route('blog.show', article.slug)}>
                                                        {article.title}
                                                    </Link>
                                                </h4>

                                                {article.excerpt && (
                                                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                                                        {article.excerpt}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="pt-4 border-t border-[#F0EDE7] flex items-center justify-between">
                                                <span className="text-[11px] font-semibold text-slate-600">
                                                    Oleh {article.author?.name || 'Redaksi'}
                                                </span>
                                                <Link
                                                    href={route('blog.show', article.slug)}
                                                    className="text-xs font-bold text-[#1B544D] group-hover:translate-x-1 transition-transform flex items-center gap-1"
                                                >
                                                    <span>Baca Artikel</span>
                                                    <span>→</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-3xl border border-[#EAE6DF] p-12 text-center text-slate-400">
                                <svg className="w-12 h-12 mx-auto text-slate-300 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                    <polyline points="14 2 14 8 20 8"/>
                                    <line x1="9" y1="13" x2="15" y2="13"/>
                                    <line x1="9" y1="17" x2="13" y2="17"/>
                                </svg>
                                <p className="text-sm font-semibold text-slate-600">Tidak ada artikel yang ditemukan.</p>
                                <p className="text-xs text-slate-400 mt-1">Coba gunakan kata kunci lain atau pilih kategori berbeda.</p>
                            </div>
                        )}

                        {/* PAGINATION */}
                        {articles.links && articles.links.length > 3 && (
                            <div className="mt-12 flex justify-center">
                                <div className="flex flex-wrap items-center gap-1.5">
                                    {articles.links.map((link, key) => (
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

                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-[#0A1F1B] text-slate-300 pt-16 pb-8 border-t border-[#16352E]">
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

                        {/* Navigasi */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                                NAVIGASI
                            </h4>
                            <ul className="space-y-2.5 text-xs text-slate-400">
                                <li><Link href="/" className="hover:text-[#ECAE36]">Home</Link></li>
                                <li><Link href="/#about" className="hover:text-[#ECAE36]">About Us</Link></li>
                                <li><Link href="/#services" className="hover:text-[#ECAE36]">Services</Link></li>
                                <li><Link href={route('blog.index')} className="hover:text-[#ECAE36]">Blog</Link></li>
                            </ul>
                        </div>

                        {/* Kategori Blog */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                                KATEGORI BLOG
                            </h4>
                            <ul className="space-y-2.5 text-xs text-slate-400">
                                {categories && categories.slice(0, 4).map((cat) => (
                                    <li key={cat.id}>
                                        <Link href={route('blog.index', { category: cat.slug })} className="hover:text-[#ECAE36]">
                                            {cat.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Kontak */}
                        <div>
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
