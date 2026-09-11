import React from "react";
import HeaderSection from "@/Components/HeaderSection"; 
const defaultArticles = [
    {
        id: 1,
        title: "Pentingnya Financial Modeling & Corporate Valuation dalam Mengambil Keputusan Strategis Bisnis",
        date: "12 Oktober 2026",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 2,
        title: "Metodologi Social Return on Investment (SROI) untuk Mengukur Dampak Nyata Program CSR",
        date: "05 Oktober 2026",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 3,
        title: "Strategi Transformasi Bisnis dan Perbaikan Proses Manajemen Korporasi",
        date: "28 September 2026",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    },
];

export default function BlogSection({
<<<<<<< HEAD
    tagline = "Wawasan & Artikel Terbaru",
    title = "Artikel & Insight Mengenai Keuangan Strategis, Transformasi Bisnis, dan Keberlanjutan Korporasi.",
=======
    tagline = "Wawasan & Artikel",
    title = "Catatan pemikiran seputar strategi keuangan, transformasi bisnis, dan efektivitas program CSR.",
>>>>>>> 137716532990af085e042fadc81c329882660451
    showButton = false,
    articles = [],
    onSelectArticle,
}) {
    // Gunakan data dari database jika ada, atau fallback ke defaultArticles
    const displayArticles = articles && articles.length > 0 ? articles : defaultArticles;

    const getArticleImage = (article) => {
        if (article.thumbnail) {
            return article.thumbnail.startsWith('http') ? article.thumbnail : `/storage/${article.thumbnail}`;
        }
        return article.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80';
    };

    const formatDate = (article) => {
        if (article.published_at) {
            try {
                return new Date(article.published_at).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                });
            } catch {
                return article.published_at;
            }
        }
        return article.date || 'Terbaru';
    };

    return (
        <section id="blog" className="py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12" data-aos="fade-up" data-aos-duration="800">
                    <HeaderSection
                        tagline={tagline}
                        title={title}
                        showButton={showButton}
                    />
                    
                    <Link
                        href={route('blog.index')}
                        className="self-start md:self-center justify-center items-center px-5 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium tracking-wide text-xs sm:text-sm transition-all shadow-xs"
                    >
                        Lihat Semua Artikel
                    </Link>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayArticles.map((article, idx) => {
                        const targetUrl = article.slug ? route('blog.show', article.slug) : '/blog';
                        const imageUrl = getArticleImage(article);
                        const formattedDate = formatDate(article);

                        return (
                            <Link
                                key={article.id || idx}
                                href={targetUrl}
                                onClick={() => onSelectArticle ? onSelectArticle(article) : null}
                                data-aos="fade-up"
                                data-aos-delay={idx * 150}
                                data-aos-duration="800"
                                className="group flex flex-col overflow-hidden cursor-pointer transition-all duration-300 block"
                            >
                                <div className="relative aspect-video overflow-hidden rounded-3xl md:rounded-2xl shadow-xs">
                                    <img
                                        src={imageUrl}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {article.category && (
                                        <span className="absolute top-3 left-3 bg-primary/90 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-lg backdrop-blur-xs">
                                            {article.category.name || article.category}
                                        </span>
                                    )}
                                </div>
                                <div className="py-4 px-1.5 flex flex-col flex-grow justify-between">
                                    <div>
                                        <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-2 tracking-wide">
                                            <svg className="w-3.5 h-3.5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                <line x1="16" y1="2" x2="16" y2="6" />
                                                <line x1="8" y1="2" x2="8" y2="6" />
                                                <line x1="3" y1="10" x2="21" y2="10" />
                                            </svg>
                                            <span>{formattedDate}</span>
                                        </div>
                                        <h3 className="md:text-md text-lg font-body font-bold tracking-wide text-text mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                            {article.title}
                                        </h3>
                                    </div>
                                    <div className="pt-3 flex items-center gap-2">
                                        <span className="text-xs sm:text-sm font-semibold tracking-wide group-hover:translate-x-1 transition-transform flex items-center gap-2 text-primary">
                                            Baca Selengkapnya 
                                            <span>
                                                <svg className="w-4 h-4 fill-current stroke-current stroke-[1.5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
                                                </svg>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}