import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

export default function About({ auth }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const values = [
        {
            title: 'Integritas',
            desc: 'Setiap analisis dan rekomendasi kami didasarkan pada data yang akurat dan independen, bebas dari konflik kepentingan.',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
                </svg>
            ),
        },
        {
            title: 'Profesionalisme',
            desc: 'Tim konsultan bersertifikat dengan pengalaman lintas industri, menerapkan standar penilaian dan riset berkelas internasional.',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
            ),
        },
        {
            title: 'Keberlanjutan',
            desc: 'Mengintegrasikan prinsip ESG dalam setiap rekomendasi strategi untuk mendukung pertumbuhan bisnis jangka panjang.',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                </svg>
            ),
        },
    ];

    const milestones = [
        { year: '2014', text: 'PT Arunika Global Valuindo didirikan di Jakarta.' },
        { year: '2017', text: 'Perluasan layanan ke feasibility study & strategi korporasi.' },
        { year: '2020', text: 'Sertifikasi penilai independen berstandar internasional.' },
        { year: '2026', text: 'Melayani lebih dari 100 klien korporasi lintas sektor.' },
    ];

    const team = [
        { name: 'Dr. Ir. Bambang Wijaya', role: 'Managing Partner', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80' },
        { name: 'Ratna Kusuma, CFA', role: 'Head of Valuation', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80' },
        { name: 'Dimas Prasetyo', role: 'Head of Strategy Advisory', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
    ];

    return (
        <div className="min-h-screen bg-[#FAF8F5] text-[#334155] font-['Work_Sans'] font-normal tracking-wide antialiased selection:bg-[#ECAE36] selection:text-[#1B544D]">
            <Header auth={auth} title="Tentang Kami - Arunika Global Valuindo" activePage="about" />

            {/* HERO */}
            <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-28 bg-[#FAF8F5]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#1B544D] block mb-3">Tentang Kami</span>
                    <h1 className="text-4xl sm:text-6xl font-light tracking-wide text-[#1B544D] leading-[1.2]">
                        Mitra Terpercaya Dalam <br className="hidden sm:inline" />
                        Valuasi & Strategi Korporasi
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base font-light text-[#52605E] leading-relaxed tracking-wide">
                        PT Arunika Global Valuindo hadir untuk membantu perusahaan mengambil keputusan strategis yang tepat melalui valuasi independen dan konsultasi berbasis data.
                    </p>
                </div>
            </section>

            {/* CERITA / VISI */}
            <section className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-6">
                            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#1B544D] block mb-3">Cerita Kami</span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-[#1B544D] leading-snug">
                                Lebih dari Satu Dekade Mendampingi Pertumbuhan Bisnis Nasional.
                            </h2>
                            <p className="mt-6 text-sm font-light text-[#52605E] leading-relaxed tracking-wide">
                                Berawal dari kebutuhan pelaku usaha akan penilaian aset yang independen dan akurat, Arunika Global Valuindo tumbuh menjadi mitra strategis bagi korporasi, institusi keuangan, dan lembaga pemerintah dalam pengambilan keputusan investasi.
                            </p>
                        </div>
                        <div className="lg:col-span-6">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80" alt="Tim Arunika" className="w-full h-80 sm:h-96 object-cover object-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NILAI-NILAI */}
            <section className="py-16 sm:py-24 bg-[#205B53] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#ECAE36] block mb-3">Nilai Kami</span>
                        <h2 className="text-2xl sm:text-4xl font-light tracking-wide leading-snug">Prinsip yang Memandu Setiap Layanan Kami</h2>
                    </div>
                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((v, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-[#143F39] border border-[#2C6B62] hover:border-[#ECAE36] transition-all">
                                <div className="w-12 h-12 rounded-full bg-[#ECAE36] text-[#1B544D] flex items-center justify-center shrink-0 shadow-sm mb-4">
                                    {v.icon}
                                </div>
                                <h3 className="text-base font-normal tracking-wide text-white">{v.title}</h3>
                                <p className="text-xs font-light text-slate-300 mt-2 leading-relaxed tracking-wide">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MILESTONE */}
            <section className="py-16 sm:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#1B544D] block mb-3">Perjalanan Kami</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-[#1B544D] leading-snug">Tonggak Pencapaian Arunika</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {milestones.map((m, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-[#EFECE6] border border-[#E3DFD7]">
                                <div className="text-2xl font-light tracking-wide text-[#ECAE36]">{m.year}</div>
                                <p className="text-xs font-light text-[#52605E] mt-2 leading-relaxed tracking-wide">{m.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TIM */}
            <section className="py-16 sm:py-24 border-t border-[#EAE6DF]/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#1B544D] block mb-3">Tim Kami</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-[#1B544D] leading-snug">Konsultan Berpengalaman di Bidangnya</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {team.map((t, idx) => (
                            <div key={idx} className="rounded-2xl overflow-hidden bg-white border border-[#EAE6DF] shadow-sm">
                                <img src={t.img} alt={t.name} className="w-full h-64 object-cover" />
                                <div className="p-5">
                                    <h3 className="text-sm font-normal tracking-wide text-[#1B544D]">{t.name}</h3>
                                    <p className="text-xs font-light text-[#718783] mt-1 tracking-wide">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 relative overflow-hidden bg-[#1B544D]">
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-wide leading-tight">
                        Mari Diskusikan Kebutuhan Valuasi & Strategi <br />
                        <span className="text-[#ECAE36] italic">Bisnis Anda Bersama Kami.</span>
                    </h2>
                    <div className="mt-8 flex justify-center">
                        <Link href="/#contact" className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#EF4444] hover:bg-[#DC2626] text-white font-medium tracking-wide text-sm sm:text-base transition-all shadow-lg shadow-rose-900/30 group">
                            <span>Hubungi Konsultan Kami</span>
                            <span className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}