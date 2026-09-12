import React from "react";
import HeaderSection from "@/Components/HeaderSection";
import CustomButton from "@/Components/CustomButton";

const defaultWhyUsItems = [
    {
        title: "C | Character",
        subtitle: "Integritas dalam Setiap Keputusan",
        desc: "Kami menjunjung tinggi karakter, integritas, profesionalisme, independensi, kerahasiaan, dan kepentingan klien. Setiap pekerjaan dilakukan dengan standar etika profesional serta komitmen untuk memberikan layanan terbaik.",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
            </svg>
        ),
    },
    {
        title: "E | Environment",
        subtitle: "Dampak Positif Berkelanjutan",
        desc: "Kami percaya bahwa pertumbuhan bisnis harus berjalan bersama tanggung jawab terhadap lingkungan dan stakeholders. Arunika berupaya membantu klien menciptakan sustainable value dan meningkatkan dampak positif terhadap lingkungan.",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
            </svg>
        ),
    },
    {
        title: "O | Organization",
        subtitle: "Organisasi Kolaboratif & Adaptif",
        desc: "Kami membangun organisasi yang adaptif, kolaboratif, bertanggung jawab, inovatif, dan terus berkembang. Kami juga mendorong pengembangan kemampuan internal serta hubungan kerja yang baik dan berkelanjutan dengan klien dan stakeholders.",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                {/* Tiga entitas/orang yang terhubung dalam satu jaringan */}
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        title: "Nilai Utama Perusahaan (CEO)",
        subtitle: "Character | Environment | Organization",
        desc: "Tiga nilai utama yang menjadi fondasi Arunika: karakter dan integritas profesional, komitmen terhadap keberlanjutan lingkungan, serta pengembangan organisasi yang adaptif.",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 10L12 3L22 10" />
                <path d="M2 20H22" />
                <path d="M6 10V20" />
                <path d="M12 10V20" />
                <path d="M18 10V20" />
            </svg>
        ),
    }
];

export default function WhyChooseUs({
    tagline = "MENGAPA MEMILIH KAMI",
    title = "Character, Environment, & Organization (CEO) | Fondasi Utama Arunika",
    showButton = false,
    buttonText = "Tentang Kami",
    items = defaultWhyUsItems,
    imageSrc = "/assets/wcu.webp",
    imageAlt = "Tim profesional PT Arunika Global Valuindo",
}) {
    return (
        <section className="py-20 sm:py-28 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* SISI KIRI: Terkunci diam di posisi atas (sticky) saat layar di-scroll */}
                    <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6" data-aos="fade-right" data-aos-duration="900">
                        <HeaderSection
                            tagline={tagline}
                            title={title}
                            showButton={showButton}
                            buttonText={buttonText}
                        />

                        <div className="relative rounded-3xl overflow-hidden border border-stone-200 shadow-lg bg-stone-50 mt-8 hidden lg:block">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="w-full h-80 object-cover object-center transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* SISI KANAN: Daftar card yang tergeser/bergerak naik turun */}
                    <div className="lg:col-span-7 space-y-6">
                        {items.map((item, idx) => (
                            <div
                                key={idx}
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                                className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-background border border-stone-200 transition-all duration-300 flex items-start gap-5 group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-primary text-white border border-secondary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/90 group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg sm:text-xl font-normal tracking-wide text-primary">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm font-medium text-text tracking-wider uppercase">
                                        {item.subtitle}
                                    </p>
                                    <p className="text-xs sm:text-sm font-light text-gray-600 mt-2 leading-relaxed tracking-wide">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Fallback gambar di tampilan mobile */}
                        <div className="block lg:hidden space-y-6 pt-6">
                            <div className="relative rounded-3xl overflow-hidden border border-stone-200 shadow-md bg-stone-50">
                                <img
                                    src={imageSrc}
                                    alt={imageAlt}
                                    className="w-full h-72 object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}