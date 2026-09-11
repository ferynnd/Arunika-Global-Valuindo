import { Head, Link, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PageHeader from '@/Components/PageHeader';
import HeaderSection from '@/Components/HeaderSection';
import CustomButton from '@/Components/CustomButton';

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
        <div className="min-h-screen bg-[#FAF8F5] text-[#334155] font-sans antialiased selection:bg-[#ECAE36] selection:text-primary">
            <Head title="Layanan & Solusi Korporasi - Arunika Global Valuindo" />
            
            <Header auth={auth} title="Layanan & Solusi Korporasi - Arunika Global Valuindo" activePage="services" />
            
            {/* Component Page Header Banner */}
            <PageHeader 
                title="Layanan Kami" 
                breadcrumb={[
                    { label: 'Home', href: '/' }, 
                    { label: 'Layanan', href: '/layanan' }
                ]} 
            />

            {/* HEADER SERVICE SECTION */}
            <section className="pt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-duration="800">
                    <div className="flex items-center">
                        <div className=" space-y-4">
                            <HeaderSection
                                tagline="Solusi & Layanan Korporasi"
                                title="Lebih dari Satu Dekade Pengalaman Profesional Mendampingi Pertumbuhan Bisnis."
                                showButton={false}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

                    <div className="flex items-center justify-between border-b border-[#EAE6DF] pb-4" data-aos="fade-up">
                        <h2 className="text-xl sm:text-2xl font-extrabold text-primary">
                            {filters.search ? `Hasil Pencarian: "${filters.search}"` : 'Daftar Layanan Korporasi Kami'}
                        </h2>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                            Total {services.total || 0} Layanan
                        </span>
                    </div>

                    {services.data.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.data.map((service, idx) => (
                                <div
                                    key={service.id}
                                    data-aos="fade-up"
                                    data-aos-delay={(idx % 3) * 100}
                                    data-aos-duration="800"
                                    className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#EAE6DF] hover:shadow-xl hover:border-primary/40 transition-all duration-300 justify-between"
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
                                                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-md text-[#ECAE36] font-bold text-xs">
                                                    #{service.sort_order || idx + 1}
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="h-44 bg-gradient-to-br from-primary to-[#143F39] p-6 flex items-center justify-between text-white relative">
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
                                            <h3 className="text-lg sm:text-xl font-bold text-primary group-hover:text-[#ECAE36] transition-colors leading-snug">
                                                <Link href={route('services.show', service.slug)}>
                                                    {service.title}
                                                </Link>
                                            </h3>

                                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                                                {service.excerpt || 'Penjelasan rinci mengenai cakupan metodologi dan manfaat layanan bagi perusahaan Anda.'}
                                            </p>

                                            {/* Features Tags */}
                                            {service.features && service.features.length > 0 && (
                                                <div className="pt-2 flex flex-wrap gap-1.5">
                                                    {service.features.slice(0, 3).map((feat, fIdx) => (
                                                        <span key={fIdx} className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] text-[11px] font-medium text-primary border border-[#EAE6DF]">
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
                                            className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-[#FAF8F5] group-hover:bg-primary text-primary group-hover:text-white font-semibold text-xs transition-all border border-[#EAE6DF] group-hover:border-primary"
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
                                                    ? 'bg-primary text-[#ECAE36] shadow-sm'
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

            <section className="py-24 relative overflow-hidden bg-primary">
                <div className="absolute inset-0">
                    <img
                        src={'/assets/bgcta.webp'}
                        alt="Background overlay"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white" data-aos="fade-up" data-aos-duration="900">
                    <h2 className="text-3xl md:text-5xl font-normal tracking-wide leading-tight">
                        Ready to solve your problem with <br />
                        <span className="text-secondary italic">Arunika Global Valuindo?</span>
                    </h2>

                    <div className="mt-8 flex justify-center">
                        <CustomButton
                            href="#contact"
                            text="Kosultasi Sekarang"
                            bgColor="bg-accent hover:bg-accent/90"
                            textColor="text-white"
                            iconBgColor="bg-white/20"
                            iconTextColor="text-white"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}