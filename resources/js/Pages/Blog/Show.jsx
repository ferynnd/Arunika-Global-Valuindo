import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Show({ auth, article, relatedArticles = [] }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [copied, setCopied] = useState(false);

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

    const formatDate = (dateString) => {
        if (!dateString) return '';
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-[#FAF8F5] text-[#334155] font-sans antialiased selection:bg-[#ECAE36] selection:text-[#1B544D]">
            <Head title={`${article.title} - Blog Arunika Global Valuindo`} />

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

            {/* MAIN ARTICLE HEADER */}
            <article className="pt-32 pb-20 sm:pt-40">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

                    {/* Breadcrumbs & Back */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-[#718783] font-medium">
                            <Link href="/" className="hover:text-[#1B544D]">Home</Link>
                            <span>/</span>
                            <Link href={route('blog.index')} className="hover:text-[#1B544D]">Blog</Link>
                            <span>/</span>
                            <span className="text-slate-800 truncate max-w-xs">{article.title}</span>
                        </div>
                        <Link
                            href={route('blog.index')}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B544D] hover:underline"
                        >
                            <span>← Kembali ke Blog</span>
                        </Link>
                    </div>

                    {/* Title & Metadata */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            {article.category && (
                                <span className="px-3.5 py-1 rounded-full bg-[#1B544D] text-[#ECAE36] text-xs font-bold uppercase tracking-wider shadow-xs">
                                    {article.category.name}
                                </span>
                            )}
                            <span className="text-xs text-[#718783] font-semibold">
                                {formatDate(article.published_at || article.created_at)}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B544D] tracking-tight leading-tight">
                            {article.title}
                        </h1>

                        {article.excerpt && (
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed italic border-l-4 border-[#ECAE36] pl-4 py-1">
                                {article.excerpt}
                            </p>
                        )}

                        {/* Author Info & Share */}
                        <div className="pt-4 border-t border-[#EAE6DF] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#1B544D] text-[#ECAE36] flex items-center justify-center font-bold text-sm border border-[#ECAE36]/30">
                                    {article.author?.name ? article.author.name[0] : 'A'}
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-800">
                                        {article.author?.name || 'Redaksi Arunika Global Valuindo'}
                                    </div>
                                    <div className="text-[10px] text-[#718783]">
                                        Penulis & Konsultan Strategi
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleCopyLink}
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE6DF] text-xs font-semibold text-slate-700 hover:bg-[#FAF8F5] transition-colors shadow-xs"
                            >
                                <svg className="w-3.5 h-3.5 text-[#1B544D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                                </svg>
                                <span>{copied ? 'Tautan Disalin! ✓' : 'Bagikan'}</span>
                            </button>
                        </div>
                    </div>

                    {/* Featured Image */}
                    {article.thumbnail && (
                        <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white max-h-[450px] bg-slate-100">
                            <img
                                src={`/storage/${article.thumbnail}`}
                                alt={article.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {/* Rich Content Area */}
                    <div className="bg-white rounded-3xl border border-[#EAE6DF] p-6 sm:p-10 shadow-sm">
                        <div
                            className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base font-sans prose-headings:text-[#1B544D] prose-headings:font-bold prose-a:text-[#1B544D] prose-a:font-semibold hover:prose-a:text-[#ECAE36]"
                            dangerouslySetInnerHTML={{ __html: article.content || article.excerpt || '<p>Tidak ada konten artikel.</p>' }}
                        />
                    </div>

                </div>
            </article>

            {/* RELATED ARTICLES SECTION */}
            {relatedArticles && relatedArticles.length > 0 && (
                <section className="py-16 bg-[#EFECE6]/60 border-t border-[#EAE6DF]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-widest text-[#1B544D]">
                                    Rekomendasi Bacaan
                                </span>
                                <h3 className="text-2xl font-bold text-[#1B544D] mt-1">
                                    Artikel Terkait
                                </h3>
                            </div>
                            <Link
                                href={route('blog.index')}
                                className="text-xs font-bold text-[#1B544D] hover:underline"
                            >
                                Lihat Semua Artikel →
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedArticles.map((rel) => (
                                <div
                                    key={rel.id}
                                    className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="relative h-44 overflow-hidden bg-slate-100">
                                        <img
                                            src={rel.thumbnail ? `/storage/${rel.thumbnail}` : 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80'}
                                            alt={rel.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {rel.category && (
                                            <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#1B544D]/85 backdrop-blur-md text-[#ECAE36] text-[10px] font-bold uppercase tracking-wider">
                                                {rel.category.name}
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow justify-between space-y-3">
                                        <div>
                                            <div className="text-[11px] text-[#718783] font-medium mb-1">
                                                {formatDate(rel.published_at || rel.created_at)}
                                            </div>
                                            <h4 className="text-sm font-bold text-[#1B544D] group-hover:text-[#ECAE36] transition-colors line-clamp-2 leading-snug">
                                                <Link href={route('blog.show', rel.slug)}>
                                                    {rel.title}
                                                </Link>
                                            </h4>
                                        </div>
                                        <Link
                                            href={route('blog.show', rel.slug)}
                                            className="text-xs font-bold text-[#1B544D] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                                        >
                                            <span>Baca Artikel</span>
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
