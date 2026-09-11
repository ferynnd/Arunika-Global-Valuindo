import React from "react";
import HeaderSection from "@/Components/HeaderSection";
import CustomButton from "@/Components/CustomButton";

const defaultWhyUsItems = [
    {
        title: "Penilaian Aset & Properti Akurat",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
        ),
    },
    {
        title: "Tim Penilai Independen & Bersertifikat",
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
        title: "Standar Valuasi & Regulasi Nasional/Global",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        ),
    },
    {
        title: "Analisis Strategi Korporasi Mendalam",
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
    tagline = "Keunggulan Kami",
    title = "Mitra Penilai Independen dan Strategi Korporasi Terpercaya untuk Pertumbuhan Bisnis Anda.",
    showButton = false,
    buttonText = "Tentang Kami",
    buttonHref = "#",
    buttonBgColor = "bg-secondary hover:bg-secondary/90",
    buttonTextColor = "text-white font-medium",
    buttonSize = "md",
    onButtonClick,
    items = defaultWhyUsItems,
    imageSrc = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80",
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
                                    <span className="font-body text-base md:text-sm font-medium tracking-wide text-gray-600">
                                        {srv.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-6" data-aos="fade-left" data-aos-duration="900">
                        <div className="relative  rounded-3xl md:rounded-2xl  overflow-hidden shadow-sm">
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