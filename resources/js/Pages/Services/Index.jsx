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

export default function Index({ auth, services, filters }) {
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
        const formData = new FormData(e.currentTarget);
        const searchVal = formData.get('search');

        router.get(
            route('services.index'),
            { search: searchVal },
            { preserveState: true }
        );
    };

    return (
        <GuestLayout auth={auth} title="Layanan - PT Arunika Global Valuindo" activePage="services" >
                <PageHeader 
                    title="Layanan Kami" 
                    breadcrumb={[
                        { label: 'Home', href: '/' }, 
                        { label: 'Layanan', href: '/layanan' }
                    ]} 
                />

                <section className="pt-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center">
                            <div className="space-y-4">
                                <HeaderSection
                                    tagline="OUR SERVICES"
                                    title="Building Stronger Businesses. Creating Sustainable Value."
                                    showButton={false}
                                />
                                <p className="mt-4 max-w-3xl text-sm text-text/70 leading-relaxed tracking-wide">
                                    Arunika menyediakan layanan Business Transformation & Advisory melalui tiga pilar utama yang saling terintegrasi: Strategic Finance, Business Advisory, serta Sustainability, Community Development & Social Impact.
                                </p>
                                <p className="mt-4 max-w-3xl text-sm text-text/70 leading-relaxed tracking-wide">
                                    Pendekatan kami dirancang untuk membantu klien memahami kondisi bisnis, mengambil keputusan yang lebih baik, meningkatkan kinerja, dan menciptakan nilai yang berkelanjutan.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 sm:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

                        <div className="flex items-center justify-between border-b border-stone-200 pb-4"  data-aos="fade-up">
                            <h2 className="text-xl sm:text-2xl font-extrabold text-primary">
                                {filters.search ? `Hasil Pencarian: "${filters.search}"` : 'Daftar Layanan '}
                            </h2>
                        </div>

                        {services.data.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {services.data.map((srv, idx) => (
                                    <Link
                                        key={srv.id || idx}
                                        data-aos="fade-up"
                                    data-aos-delay={(idx % 3) * 100}
                                    data-aos-duration="800"
                                        href={route('services.show', srv.slug)}
                                        className="relative rounded-2xl bg-primary border border-primary/60 transition-all cursor-pointer group hover:-translate-y-1 aspect-4/5 flex flex-col justify-between p-6 overflow-hidden "
                                    >
                                        <img
                                            src={
                                                srv.thumbnail 
                                                    ? (srv.thumbnail.startsWith('http') ? srv.thumbnail : `/storage/${srv.thumbnail}`)
                                                    : 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
                                            }
                                            alt={srv.title}
                                            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                        />

                                        <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/60 to-transparent z-0" />

                                        <div className="relative z-10 flex flex-col justify-end h-full pt-12">
                                                <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                                                    {/* Title dengan aksen garis tipis */}
                                                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-secondary transition-colors leading-snug mb-2">
                                                        {srv.title}
                                                    </h3>
                                                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4 font-normal">
                                                        {srv.excerpt || 'Penjelasan rinci mengenai cakupan metodologi dan manfaat layanan bagi perusahaan Anda.'}
                                                    </p>

                                                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-secondary">
                                                        <span className="opacity-80 group-hover:opacity-100 transition-opacity">
                                                            Lihat Detail Layanan
                                                        </span>
                                                        <div className="w-7 h-7 rounded-md bg-white/10 group-hover:bg-secondary group-hover:text-primary flex items-center justify-center transition-all duration-300">
                                                            <svg
                                                                    className="h-3.5 transition-transform"
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-3xl border border-stone-200 p-12 text-center text-slate-400">
                                <svg className="w-12 h-12 mx-auto text-slate-300 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                </svg>
                                <p className="text-sm font-semibold text-slate-600">Layanan tidak ditemukan.</p>
                                <p className="text-xs text-slate-400 mt-1">Coba kata kunci pencarian lainnya.</p>
                            </div>
                        )}

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
                                                        ? 'bg-primary text-[#ECAE36] shadow-sm'
                                                        : 'bg-white text-slate-700 hover:bg-[#EFECE6] border border-stone-200'
                                                }`}
                                            />
                                        ) : (
                                            <span
                                                key={key}
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                                className="px-4 py-2 rounded-full text-xs text-slate-300 border border-stone-200"
                                            />
                                        )
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </section>

                <CtaSection/>
        </GuestLayout>
    );
}