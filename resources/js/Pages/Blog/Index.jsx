import { Head, Link, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PageHeader from '@/Components/PageHeader';
import HeaderSection from '@/Components/HeaderSection';
import CustomButton from '@/Components/CustomButton';
import GuestLayout from '@/Layouts/GuestLayout';
import CtaSection from '../Components/Cta';

export default function Index({ auth, articles, filters }) {
    const [search, setSearch] = useState(filters.search || '');
    const [activeCategory, setActiveCategory] = useState(filters.category || '');

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 60,
        });
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
        <GuestLayout auth={auth} title="Blog & Wawasan Korporasi - Arunika Global Valuindo" activePage="blog" >
             <PageHeader 
                title="Blog" 
                breadcrumb={[
                    { label: 'Home', href: '/' }, 
                    { label: 'Blog', href: '/blog' }
                ]} 
            />

            <section className="pt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-duration="800">
                    <div className="flex items-center">
                        <div className="space-y-4">
                            <HeaderSection
                                tagline="Wawasan & Publikasi"
                                title="Lebih dari Satu Dekade Pengalaman Profesional Mendampingi Pertumbuhan Bisnis."
                                showButton={false}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-extrabold text-[#1B544D]">
                                {search || activeCategory ? 'Hasil Pencarian & Filter' : 'Semua Publikasi Artikel'}
                            </h3>
                        </div>

                        {articles.data.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {articles.data.map((article, idx) => (
                                    <div
                                        key={article.id}
                                        data-aos="fade-up"
                                        data-aos-delay={(idx % 3) * 150}
                                        data-aos-duration="800"
                                        className="group flex flex-col overflow-hidden cursor-pointer transition-all duration-300"
                                    >
                                        <Link href={route('blog.show', article.slug)} className="block">
                                            <div className="relative aspect-video overflow-hidden rounded-3xl md:rounded-2xl bg-slate-100">
                                                <img
                                                    src={article.thumbnail ? `/storage/${article.thumbnail}` : (article.image || 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80')}
                                                    alt={article.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                {/* Badge Kategori di Pojok Kanan Atas */}
                                                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider z-10">
                                                    {article.category?.name || 'Artikel'}
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
                                                    <span>{formatDate(article.published_at || article.created_at || article.date)}</span>
                                                </div>

                                                <h3 className="md:text-md text-lg font-body font-bold hover:underline tracking-wide text-primary group-hover:text-secondary transition-colors mb-2 line-clamp-2">
                                                    <Link href={route('blog.show', article.slug)}>
                                                        {article.title}
                                                    </Link>
                                                </h3>
                                            </div>

                                            <div className="pt-4 flex items-center gap-2">
                                                <Link 
                                                    href={route('blog.show', article.slug)}
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
                        ) : (
                            <div className="bg-white rounded-3xl border border-gray-200 p-12 text-center text-slate-400">
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

                        {articles.links && articles.links.length > 3 && (
                            <div className="mt-12 flex justify-center">
                                <div className="flex flex-wrap items-center gap-1.5">
                                    {articles.links.map((link, key) => (
                                        link.url ? (
                                            <Link
                                                key={key}
                                                href={link.url}
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                                                    link.active
                                                        ? 'bg-primary text-secondary'
                                                        : 'bg-white text-slate-700 hover:bg-stone-200 border border-stone-300'
                                                }`}
                                            />
                                        ) : (
                                            <span
                                                key={key}
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                                className="px-4 py-2 rounded-md text-sm text-stone-300 border border-stone-200"
                                            />
                                        )
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </section>

            <CtaSection/>
        </GuestLayout>
    );
}