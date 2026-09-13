import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import PageHeader from '@/Components/PageHeader';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Show({ auth, article, relatedArticles = [], ogImageUrl }) {
    const [copied, setCopied] = useState(false);

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
        <>
            <Head>
                <title>{`${article.title} - Arunika Global Valuindo`}</title>
                <meta name="description" content={article.excerpt} />
                
                {/* Open Graph Meta Tags untuk WhatsApp / Facebook / LinkedIn */}
                <meta property="og:title" content={article.title} />
                <meta property="og:description" content={article.excerpt} />
                <meta property="og:image" content={ogImageUrl} />
                <meta property="og:type" content="article" />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content={ogImageUrl} />
            </Head>

            <GuestLayout auth={auth} title={`${article.title} - Blog Arunika Global Valuindo`} activePage="blog">
                <PageHeader 
                    title={article.category ? article.category.name : "Blog Detail"} 
                    breadcrumb={[
                        { label: 'Home', href: '/' }, 
                        { label: 'Blog', href: route('blog.index') },
                        { label: 'Detail Blog', href: route('blog.show', article.slug) }
                    ]}
                />

                <article className="py-12 sm:py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

                        <div className="flex items-center justify-between">
                            <a
                                href={route('blog.index')}
                                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline transition-all group"
                            >   
                                <svg
                                    className="h-3.5 rotate-180 transition-transform group-hover:-translate-x-1"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                                <span>Kembali ke Semua Artikel</span>
                            </a>
                            

                            <button
                                type="button"
                                onClick={handleCopyLink}
                                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold transition-all duration-200 cursor-pointer shadow-xs ${
                                    copied
                                        ? 'bg-primary border-primary text-secondary'
                                        : 'bg-white border-stone-200 text-slate-700 hover:bg-background'
                                }`}
                            >
                                {copied ? (
                                    <svg 
                                        className="w-3.5 h-3.5 fill-none stroke-current stroke-[2.5]" 
                                        viewBox="0 0 24 24" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                ) : (
                                    <svg 
                                        className="w-3.5 h-3.5 text-primary stroke-current stroke-[2]" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    >
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                    </svg>
                                )}
                                
                                <span>{copied ? 'Tautan Disalin!' : 'Bagikan Artikel'}</span>
                            </button>
                        </div>

                    {/* Title & Metadata */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            {article.category && (
                                <span className="px-3.5 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-xs">
                                    {article.category.name}
                                </span>
                            )}
                            <span className="text-xs text-[#718783] font-semibold">
                                {formatDate(article.published_at || article.created_at)}
                            </span>
                        </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
                                {article.title}
                            </h1>

                            {article.excerpt && (
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed italic border-l-4 border-secondary pl-4 py-1">
                                    {article.excerpt}
                                </p>
                            )}

                            <div className="pt-4 border-t border-stone-300 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-sm border border-secondary/30">
                                    {article.author?.name ? article.author.name[0] : 'A'}
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-800">
                                        {article.author?.name || 'Redaksi Arunika Global Valuindo'}
                                    </div>
                                    <div className="text-[10px] text-[#718783]">
                                        Penulis & Konsultan Strategi Korporasi
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Featured Thumbnail */}
                        {article.thumbnail && (
                            <div className="rounded-2xl overflow-hidden border border-stone-200 aspect-video bg-slate-100">
                                <img
                                    src={`/storage/${article.thumbnail}`}
                                    alt={article.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10">
                            <div
                                className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base font-sans prose-headings:text-primary prose-headings:font-bold prose-a:text-primary prose-a:font-semibold hover:prose-a:text-secondary"
                                dangerouslySetInnerHTML={{ __html: article.content || article.excerpt || '<p>Tidak ada konten artikel.</p>' }}
                            />
                        </div>

                    </div>
                </article>

                {relatedArticles && relatedArticles.length > 0 && (
                    <section className="py-16 bg-background/60 border-t border-stone-200">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                            
                            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                                <div>
                                    <h3 className="text-2xl font-extrabold text-primary mt-0.5">
                                        Artikel Terkait
                                    </h3>
                                </div>
                                <a
                                    href={route('blog.index')}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="self-start md:self-center justify-center items-center px-4 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium tracking-wide text-xs md:text-sm"
                                >
                                    Lihat Semua Artikel
                                </a>
                            </div>

                            {/* Related Grid Card */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedArticles.map((rel) => (
                                    <div
                                        key={rel.id}
                                        className="group flex flex-col overflow-hidden cursor-pointer transition-all duration-300"
                                    >
                                        <Link href={route('blog.show', rel.slug)} className="block">
                                            <div className="relative aspect-video overflow-hidden rounded-3xl md:rounded-2xl bg-slate-100">
                                                <img
                                                    src={rel.thumbnail ? `/storage/${rel.thumbnail}` : 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80'}
                                                    alt={rel.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                {/* Badge Kategori Pojok Kanan Atas */}
                                                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider shadow-sm z-10">
                                                    {rel.category?.name || 'Artikel'}
                                                </span>
                                            </div>
                                        </Link>

                                        <div className="py-4 px-1.5 flex flex-col flex-grow justify-between">
                                            <div>
                                                <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-2 tracking-wide">
                                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                        <line x1="16" y1="2" x2="16" y2="6" />
                                                        <line x1="8" y1="2" x2="8" y2="6" />
                                                        <line x1="3" y1="10" x2="21" y2="10" />
                                                    </svg>
                                                    <span>{formatDate(rel.published_at || rel.created_at)}</span>
                                                </div>

                                                <h3 className="md:text-md text-lg font-body font-bold hover:underline tracking-wide text-primary group-hover:text-secondary transition-colors mb-2 line-clamp-2">
                                                    <Link href={route('blog.show', rel.slug)}>
                                                        {rel.title}
                                                    </Link>
                                                </h3>
                                            </div>

                                            <div className="pt-4 flex items-center gap-2">
                                                <Link 
                                                    href={route('blog.show', rel.slug)}
                                                    className="text-sm font-medium tracking-wide group-hover:translate-x-1 transition-transform flex items-center gap-2 text-primary"
                                                >
                                                    <span>Baca Selengkapnya</span> 
                                                    <span>
                                                        <svg className="w-4 h-4 fill-current stroke-current stroke-[1.5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                                            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
                                                        </svg>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </section>
                )}

            </GuestLayout>
        </>
    );
}