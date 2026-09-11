import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Show({ auth, service, otherServices = [] }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 60,
        });

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

    return (
        <div className="min-h-screen bg-[#FAF8F5] text-[#334155] font-sans antialiased selection:bg-[#ECAE36] selection:text-[#1B544D]">
            <Header auth={auth} title={`${service.title} - Layanan Arunika Global Valuindo`} activePage="services" />

            {/* MAIN SERVICE CONTENT */}
            <article className="pt-32 pb-20 sm:pt-40">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

                    {/* Breadcrumb & Back */}
                    <div className="flex items-center justify-between" data-aos="fade-up">
                        <div className="flex items-center gap-2 text-xs text-[#718783] font-medium">
                            <Link href="/" className="hover:text-[#1B544D]">Home</Link>
                            <span>/</span>
                            <Link href={route('services.index')} className="hover:text-[#1B544D]">Services</Link>
                            <span>/</span>
                            <span className="text-slate-800 truncate max-w-xs">{service.title}</span>
                        </div>
                        <Link
                            href={route('services.index')}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B544D] hover:underline"
                        >
                            <span>← Kembali ke Layanan</span>
                        </Link>
                    </div>

                    {/* Service Header */}
                    <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="flex items-center gap-2">
                            <span className="px-3.5 py-1 rounded-full bg-[#1B544D] text-[#ECAE36] text-xs font-bold uppercase tracking-wider shadow-xs">
                                Layanan Korporasi
                            </span>
                            <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#EAE6DF] text-[#1B544D] font-bold text-xs">
                                Prioritas #{service.sort_order || 1}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B544D] tracking-tight leading-tight">
                            {service.title}
                        </h1>

                        {service.excerpt && (
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                                {service.excerpt}
                            </p>
                        )}
                    </div>

                    {/* Thumbnail Banner */}
                    {service.thumbnail && (
                        <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white max-h-[450px] bg-slate-100" data-aos="fade-up" data-aos-delay="150">
                            <img
                                src={`/storage/${service.thumbnail}`}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {/* Features Poin Keunggulan Card */}
                    {service.features && service.features.length > 0 && (
                        <div className="bg-[#143F39] text-white rounded-3xl p-6 sm:p-8 space-y-4 border border-[#2C6B62] shadow-lg" data-aos="fade-up" data-aos-delay="200">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ECAE36]"></span>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-[#ECAE36]">
                                    Poin Keunggulan & Fitur Utama
                                </h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {service.features.map((feat, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#205B53] border border-[#2C6B62] text-xs sm:text-sm font-semibold text-slate-100">
                                        <span className="w-6 h-6 rounded-full bg-[#ECAE36] text-[#1B544D] flex items-center justify-center font-bold text-xs shrink-0">
                                            ✓
                                        </span>
                                        <span>{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Rich Content HTML Body */}
                    <div className="bg-white rounded-3xl border border-[#EAE6DF] p-6 sm:p-10 shadow-sm space-y-6" data-aos="fade-up" data-aos-delay="250">
                        <h3 className="text-lg font-bold text-[#1B544D] border-b border-[#EAE6DF] pb-3">
                            Penjelasan Lengkap & Cakupan Metodologi
                        </h3>
                        <div
                            className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base font-sans prose-headings:text-[#1B544D] prose-headings:font-bold prose-a:text-[#1B544D] hover:prose-a:text-[#ECAE36]"
                            dangerouslySetInnerHTML={{ __html: service.content || service.excerpt || '<p>Informasi detail layanan belum diisi oleh administrator.</p>' }}
                        />
                    </div>

                    {/* CTA Box */}
                    <div className="bg-gradient-to-br from-[#1B544D] to-[#143F39] text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl border border-[#1B544D]" data-aos="fade-up" data-aos-delay="300">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                            Tertarik Menggunakan Layanan {service.title}?
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto leading-relaxed">
                            Hubungi tim ahli konsultan kami untuk diskusi kebutuhan spesifik perusahaan Anda dan penjadwalan presentasi.
                        </p>
                        <div className="pt-2">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#ECAE36] hover:bg-[#E0A12A] text-[#1B544D] font-bold text-xs sm:text-sm transition-all shadow-md"
                            >
                                <span>Hubungi Konsultan Sekarang</span>
                                <span>→</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </article>

            {/* OTHER SERVICES RECOMMENDATION */}
            {otherServices && otherServices.length > 0 && (
                <section className="py-16 bg-[#EFECE6]/60 border-t border-[#EAE6DF]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                        <div className="flex items-center justify-between" data-aos="fade-up">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-widest text-[#1B544D]">
                                    Eksplorasi Layanan
                                </span>
                                <h3 className="text-2xl font-bold text-[#1B544D] mt-1">
                                    Layanan Korporasi Lainnya
                                </h3>
                            </div>
                            <Link
                                href={route('services.index')}
                                className="text-xs font-bold text-[#1B544D] hover:underline"
                            >
                                Lihat Semua Layanan →
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {otherServices.map((other, idx) => (
                                <div
                                    key={other.id}
                                    data-aos="fade-up"
                                    data-aos-delay={idx * 100}
                                    data-aos-duration="800"
                                    className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] hover:shadow-lg transition-all duration-300 p-6 justify-between"
                                >
                                    <div className="space-y-3">
                                        <div className="w-8 h-8 rounded-xl bg-[#1B544D]/10 text-[#1B544D] flex items-center justify-center font-bold text-xs">
                                            ★
                                        </div>
                                        <h4 className="text-base font-bold text-[#1B544D] group-hover:text-[#ECAE36] transition-colors line-clamp-1">
                                            <Link href={route('services.show', other.slug)}>
                                                {other.title}
                                            </Link>
                                        </h4>
                                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                                            {other.excerpt || 'Layanan korporasi terpercaya dari Arunika Global Valuindo.'}
                                        </p>
                                    </div>
                                    <div className="pt-4 mt-2 border-t border-[#F0EDE7]">
                                        <Link
                                            href={route('services.show', other.slug)}
                                            className="text-xs font-bold text-[#1B544D] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                                        >
                                            <span>Lihat Layanan</span>
                                            <span>→</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer services={otherServices} />

        </div>
    );
}
