import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

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
            <Header auth={auth} title={`${article.title} - Blog Arunika Global Valuindo`} activePage="blog" />

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

            <Footer />

        </div>
    );
}
