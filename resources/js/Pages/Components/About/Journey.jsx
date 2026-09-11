import { Link } from '@inertiajs/react';
import React from 'react';
import HeaderSection from '@/Components/HeaderSection'; // Sesuaikan path import HeaderSection

export default function JourneySection({ milestones = [] }) {
    const defaultMilestones = [
        {
            year: '2010',
            title: 'Fondasi Profesional & Awal Perjalanan',
            text: 'Founder Arunika mulai aktif dalam bidang akuntansi, keuangan, dan manajemen, serta kemudian berkembang ke bidang CSR dan social research[cite: 1].',
            img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
        },
        {
            year: '2015–2018',
            title: 'Ekspansi ke CSR & Social Impact',
            text: 'Memperluas pengalaman ke bidang CSR impact measurement, termasuk pengukuran dampak program CSR menggunakan metodologi Social Return on Investment (SROI) pada beberapa perusahaan BUMN[cite: 1].',
            img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
        },
        {
            year: '2018–Sekarang',
            title: 'Akademik & Strategic Finance',
            text: 'Founder aktif sebagai akademisi di bidang akuntansi dan keuangan sekaligus mengembangkan kompetensi dalam financial modeling, corporate valuation, financial analysis, dan strategic finance[cite: 1].',
            img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
        },
        {
            year: '2024',
            title: 'Pendirian PT Arunika Global Valuindo',
            text: 'Arunika didirikan pada 20 Juli 2024 sebagai financial & business management consulting and research firm yang berfokus pada business transformation & advisory[cite: 1].',
            img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80',
        },
    ];

    const displayMilestones = milestones && milestones.length > 0 ? milestones : defaultMilestones;

    return (
        <section className="py-20 sm:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <HeaderSection
                    tagline="Perjalanan Kami"
                    title="Lebih dari Satu Dekade Pengalaman Profesional Mendampingi Pertumbuhan Bisnis."
                    showButton={false}
                />

                <div className="space-y-16 mt-5 sm:space-y-24">
                    {displayMilestones.map((m, idx) => {
                        const isOdd = idx % 2 === 0; // Ganjil (index 0, 2, dst) -> Gambar di Kanan, Genap (index 1, 3, dst) -> Gambar di Kiri
                        return (
                            <div 
                                key={idx} 
                                data-aos="fade-up"
                                data-aos-delay={idx * 200}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                            >
                                <div className={`lg:col-span-6 space-y-4 ${!isOdd ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <div className="inline-block px-3 py-1 rounded-md bg-primary text-white text-xs font-semibold tracking-wider">
                                        {m.year}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl tracking-wide text-primary leading-snug">
                                        {m.title || `Tonggak Pencapaian ${m.year}`}
                                    </h3>
                                    <p className="text-sm font-normal text-gray-600 leading-relaxed tracking-wide">
                                        {m.text}
                                    </p>
                                </div>

                                {/* Image Column */}
                                <div className={`lg:col-span-6 ${!isOdd ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <div className="relative rounded-3xl md:rounded-2xl overflow-hidden aspect-video">
                                        <img 
                                            src={m.img || "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80"} 
                                            alt={`Milestone ${m.year}`} 
                                            className="w-full h-full object-cover object-center" 
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}