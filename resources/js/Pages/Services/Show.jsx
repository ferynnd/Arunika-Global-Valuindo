import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PageHeader from '@/Components/PageHeader';
import CustomButton from '@/Components/CustomButton';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Show({ auth, service, otherServices = [], ogImageUrl }) {
    const [copied, setCopied] = useState(false);
    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <Head>
                <title>{`${service.title} - Arunika Global Valuindo`}</title>
                <meta name="description" content={service.excerpt} />
                
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content={service.title} />
                <meta property="og:description" content={service.excerpt} />
                <meta property="og:image" content={ogImageUrl} />
                <meta property="og:type" content="service" />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content={ogImageUrl} />
            </Head>

            <GuestLayout auth={auth} title={`${service.title} - Layanan Arunika Global Valuindo`} activePage="services">
                <PageHeader 
                    title={service.title} 
                    breadcrumb={[
                        { label: 'Home', href: '/' }, 
                        { label: 'Layanan', href: route('services.index') },
                        { label: 'Detail Layanan', href: '#' }
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
                                <span>Kembali ke Semua Layanan</span>
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

                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="px-3.5 py-1 rounded-full bg-primary text-white text-sm font-bold uppercase tracking-wider shadow-xs">
                                    Layanan
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
                                {service.title}
                            </h1>

                            {service.excerpt && (
                                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium border-l-4 border-secondary pl-4 py-1">
                                    {service.excerpt}
                                </p>
                            )}
                        </div>

                        {service.thumbnail && (
                            <div className="rounded-3xl overflow-hidden shadow-md border border-stone-200 aspect-video bg-slate-100">
                                <img
                                    src={service.thumbnail.startsWith('http') ? service.thumbnail : `/storage/${service.thumbnail}`}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10">
                            <h3 className="text-lg font-bold text-primary border-b border-stone-300 pb-3 mb-5">
                                Penjelasan Lengkap 
                            </h3>
                            <div
                                className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base font-sans prose-headings:text-primary prose-headings:font-bold prose-a:text-primary prose-a:font-semibold hover:prose-a:text-secondary"
                                dangerouslySetInnerHTML={{ __html: service.content || service.excerpt || '<p>Tidak ada konten artikel.</p>' }}
                            />
                        </div>

                        <div className="bg-linear-to-br from-primary to-primary-dark relative text-white rounded-xl md:rounded-2xl p-8 sm:p-10 text-center">
                            <div className="absolute inset-0">
                                <img
                                    src={'/assets/bgcta.webp'}
                                    alt="Background overlay"
                                    className="w-full h-full object-cover rounded-xl md:rounded-2xl"
                                />
                            </div>

                            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                                <h2 className="text-2xl md:text-3xl font-normal tracking-wide leading-tight">
                                    Tertarik Menggunakan Layanan 
                                    <span className="text-secondary italic"> {service.title}?</span>
                                </h2>
                                <p className="text-sm mt-2 text-slate-200 max-w-xl mx-auto leading-relaxed">
                                    Hubungi tim ahli konsultan kami untuk diskusi kebutuhan spesifik perusahaan Anda dan penjadwalan presentasi.
                                </p>
                                <div className="mt-8 flex justify-center">
                                    <CustomButton
                                        href="/layanan"
                                        text="Konsultasi Sekarang"
                                        bgColor="bg-accent"
                                        textColor="text-white"
                                        iconBgColor="bg-white/20"
                                        iconTextColor="text-white"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </article>

                {otherServices && otherServices.length > 0 && (
                    <section className="py-16 bg-background border-t border-stone-200">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                            
                            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                                <div>
                                    <h3 className="text-2xl font-extrabold text-primary mt-0.5">
                                        Layanan Lainnya
                                    </h3>
                                </div>
                                <a
                                    href={route('services.index')}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="self-start md:self-center justify-center items-center px-4 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium tracking-wide text-sm"
                                >
                                    Lihat Semua Layanan
                                </a>
                            </div>

                            {/* Service Card Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {otherServices.map((srv, idx) => (
                                    <Link
                                        key={srv.id || idx}
                                        href={route('services.show', srv.slug)}
                                        className="relative rounded-2xl bg-primary border border-primary/60 transition-all cursor-pointer group hover:-translate-y-1 aspect-4/5 flex flex-col justify-between p-6 overflow-hidden shadow-md hover:shadow-xl"
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

                        </div>
                    </section>
                )}
            </GuestLayout>
        </>
    );
}