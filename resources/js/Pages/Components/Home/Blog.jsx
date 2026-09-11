import React from "react";
import { Link } from "@inertiajs/react";
import HeaderSection from "@/Components/HeaderSection"; // Sesuaikan path import HeaderSection
import CustomButton from "@/Components/CustomButton"; // Sesuaikan path import CustomButton

const defaultArticles = [
    {
        id: 1,
        title: "Pentingnya Valuasi Bisnis yang Akurat untuk Aksi Korporasi",
        date: "12 Oktober 2026",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 2,
        title: "Memahami Standar Penilaian Properti Komersial di Indonesia",
        date: "05 Oktober 2026",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 3,
        title: "Strategi Restrukturisasi Keuangan Menghadapi Dinamika Pasar",
        date: "28 September 2026",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    },
];

export default function BlogSection({
    tagline = "Blog Terbaru",
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    showButton = false,
    articles = defaultArticles,
    onSelectArticle,
}) {
    return (
        <section id="blog" className="py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12" data-aos="fade-up" data-aos-duration="800">
                    <HeaderSection
                        tagline={tagline}
                        title={title}
                        showButton={showButton}
                    />
                    
                    
                    <a
                        href="/blog"
                        onClick={() => setMobileMenuOpen(false)}
                        className="self-start md:self-center justify-center items-center px-4 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium tracking-wide text-sm"
                    >
                        Lihat Semua Artikel
                    </a>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, idx) => (
                        <div
                            key={article.id}
                            onClick={() => onSelectArticle ? onSelectArticle(article) : null}
                            data-aos="fade-up"
                            data-aos-delay={idx * 150}
                            data-aos-duration="800"
                            className="group flex flex-col overflow-hidden cursor-pointer transition-all duration-300"
                        >
                            <div className="relative aspect-video overflow-hidden rounded-3xl md:rounded-2xl ">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="py-4 px-1.5 flex flex-col flex-grow justify-between">
                                <div>
                                    <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-2 tracking-wide">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                            <line x1="16" y1="2" x2="16" y2="6" />
                                            <line x1="8" y1="2" x2="8" y2="6" />
                                            <line x1="3" y1="10" x2="21" y2="10" />
                                        </svg>
                                        <span>{article.date}</span>
                                    </div>
                                    <h3 className="md:text-md text-lg font-body font-bold tracking-wide text-text mb-2 line-clamp-2">
                                        {article.title}
                                    </h3>
                                </div>
                                <div className="pt-4 flex items-center gap-2">
                                    <span className="text-sm font-medium tracking-wide group-hover:translate-x-1 transition-transform flex items-center gap-2 text-primary">
                                        Baca Selengkapnya 
                                        <span>
                                            <svg className="w-4 h-4 fill-current stroke-current stroke-[1.5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}