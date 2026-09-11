import React, { useState } from "react";
import CustomButton from '@/Components/CustomButton'; // Sesuaikan jalur import CustomButton Anda
import HeaderSection from "@/Components/HeaderSection";

const defaultServices = [
    {
        id: 1,
        title: "Penilaian Bisnis & Korporasi",
        excerpt: "Layanan valuasi profesional untuk saham, entitas bisnis, aset tak berwujud, serta uji tuntas kelayakan investasi guna mendukung aksi korporasi strategis.",
    },
    {
        id: 2,
        title: "Penilaian Aset & Properti",
        excerpt: "Penilaian independen untuk aset tetap, tanah, bangunan, mesin, instalasi, dan infrastruktur industri berstandar tinggi dan transparan.",
    },
    {
        id: 3,
        title: "Penasihat Strategi Keuangan",
        excerpt: "Solusi dan konsultasi strategis komprehensif bagi perusahaan dalam restrukturisasi, pembiayaan, merger, akuisisi, dan manajemen risiko korporasi.",
    },
];

// Ikon SVG sederhana untuk card (bisa diganti dengan Lucide/Heroicons jika ada)
const aboutIcons = [
    <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>,
    <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>,
    <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
];

export default function AboutSection({ displayServices = defaultServices }) {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <section id="about" className="py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div data-aos="fade-up" data-aos-duration="800">
                    <HeaderSection
                        tagline="Tentang Kami"
                        title="PT Arunika Global Valuindo adalah perusahaan penilai independen dan penasihat strategi korporasi terpercaya di Indonesia."
                        buttonText="Ketahui Lebih Lanjut"
                        buttonHref="/about"
                        buttonBgColor="bg-secondary hover:bg-secondary/90"
                        buttonTextColor="text-white font-medium"
                        buttonSize="md"
                        showButton={true}
                    />
                </div>

                <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {displayServices.slice(0, 3).map((srv, idx) => (
                        <div
                            key={srv.id || idx}
                            onClick={() => setSelectedService(srv)}
                            data-aos="fade-up"
                            data-aos-delay={idx * 150}
                            data-aos-duration="800"
                            className="p-6 rounded-2xl bg-stone-100 border border-stone-200 cursor-pointer transition-all hover:border-primary/30 group"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mb-4 group-hover:scale-105 transition-transform">
                                {aboutIcons[idx % aboutIcons.length]}
                            </div>
                            
                            <div className="font-body font-semibold text-lg tracking-wide group-hover:text-secondary transition-colors">
                                {srv.title}
                            </div>

                            <p className="font-body text-sm font-normal text-gray-600 mt-2 leading-relaxed tracking-wide line-clamp-2">
                                {srv.excerpt}
                            </p>
                        </div>
                    ))}
                </div>

            </div>

            {selectedService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-xl">
                        <h3 className="text-xl font-bold text-text mb-2">{selectedService.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-6">{selectedService.excerpt}</p>
                        <button
                            onClick={() => setSelectedService(null)}
                            className="w-full py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-text transition-colors"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}