import React from "react";
import HeaderSection from "@/Components/HeaderSection";
import CustomButton from "@/Components/CustomButton";

const defaultWhyUsItems = [
    {
        title: "C — Character: Integritas dalam Setiap Keputusan",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"></path>
            </svg>
        ),
    },
    {
        title: "E — Environment: Dampak Positif Berkelanjutan",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
        ),
    },
    {
        title: "O — Organization: Organisasi Kolaboratif & Adaptif",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        ),
    },
    {
        title: "Pengalaman Berdedikasi & Teruji Lebih Dari 10 Tahun",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
        ),
    },
];

export default function WhyChooseUs({
    tagline = "Nilai Utama Perusahaan (CEO)",
    title = "Character, Environment, & Organization — Fondasi Utama Arunika dalam Menghadirkan Layanan Advisory Terbaik.",
    showButton = false,
    buttonText = "Tentang Kami",
    buttonHref = "/tentang",
    buttonBgColor = "bg-secondary",
    buttonTextColor = "text-white font-medium",
    buttonSize = "md",
    onButtonClick,
    items = defaultWhyUsItems,
    imageSrc = "/assets/wcu.webp",
    imageAlt = "Kolaborasi tim profesional PT Arunika Global Valuindo",
}) {
    return (
        <section className="py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left: HeaderSection & 2-Column Checklist */}
                    <div className="lg:col-span-6 space-y-8" data-aos="fade-right" data-aos-duration="900">
                        <HeaderSection
                            tagline={tagline}
                            title={title}
                            showButton={showButton}
                            buttonText={buttonText}
                            buttonHref={buttonHref}
                            buttonBgColor={buttonBgColor}
                            buttonTextColor={buttonTextColor}
                            buttonSize={buttonSize}
                            onButtonClick={onButtonClick}
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                            {items.map((srv, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                                        {srv.icon}
                                    </div>
                                    <span className="font-body text-xs md:text-sm font-medium tracking-wide text-gray-600">
                                        {srv.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-6" data-aos="fade-left" data-aos-duration="900">
                        <div className="relative rounded-3xl md:rounded-2xl overflow-hidden shadow-sm">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="w-full aspect-4/3 object-cover object-center"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}