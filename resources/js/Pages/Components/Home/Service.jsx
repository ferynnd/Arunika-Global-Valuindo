import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import CustomButton from "@/Components/CustomButton";

const defaultServices = [
    {
        id: 1,
        title: "Penilaian Bisnis & Entitas",
        excerpt: "Layanan valuasi profesional untuk saham, badan usaha, penyertaan modal, serta uji tuntas korporasi.",
        thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
        href: "/services/penilaian-bisnis-entitas", // Tambahkan properti href untuk navigasi
    },
    {
        id: 2,
        title: "Penilaian Aset Tetap & Properti",
        excerpt: "Penilaian independen untuk tanah, bangunan, pabrik, mesin, dan infrastruktur skala industri.",
        thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
        href: "/services/penilaian-aset-tetap-properti", // Tambahkan properti href untuk navigasi
    },
    {
        id: 3,
        title: "Penasihat Strategi Korporasi",
        excerpt: "Solusi komprehensif restrukturisasi keuangan, studi kelayakan, serta strategi merger dan akuisisi.",
        thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
        href: "/services/penasihat-strategi-korporasi", // Tambahkan properti href untuk navigasi
    },
    {
        id: 4,
        title: "Valuasi Aset Tak Berwujud",
        excerpt: "Penilaian hak kekayaan intelektual, merek dagang, goodwill, paten, dan lisensi perusahaan.",
        thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
        href: "/services/valuasi-aset-tak-berwujud", // Tambahkan properti href untuk navigasi
    },
];

export default function ServicesShowcase({ 
    tagline = "Layanan Kami",
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    showButton = true,
    buttonText = "Lihat Semua Layanan",
    buttonHref = "#",
    buttonBgColor = "bg-secondary hover:bg-secondary/90",
    buttonTextColor = "text-white font-medium",
    buttonSize = "md",
    onButtonClick,
    services = defaultServices,
    onSelectService
}) {
    const [selectedService, setSelectedService] = useState(null);

    const handleServiceClick = (srv) => {
        setSelectedService(srv);
        if (onSelectService) {
            onSelectService(srv);
        }
    };

    return (
        <section id="services" className="py-20 sm:py-28 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto space-y-6 text-center">
                    <span className="text-sm sm:text-base font-medium tracking-wide text-secondary block">
                        {tagline}
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wide leading-tight">
                        {title}
                    </h2>
                    {showButton && (
                    <CustomButton
                        href={buttonHref}
                        text={buttonText}
                        bgColor={buttonBgColor}
                        textColor={buttonTextColor}
                        size={buttonSize}
                        onClick={onButtonClick}
                    />
                    )}
                </div>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((srv, idx) => (
                        <div
                            key={srv.id || idx}
                            onClick={() => handleServiceClick(srv)}
                            className="relative rounded-2xl bg-primary-dark border border-primary transition-all cursor-pointer group hover:-translate-y-1 aspect-4/5 flex flex-col justify-between p-6 overflow-hidden"
                        >
                            {srv.thumbnail ? (
                                <img
                                    src={srv.thumbnail}
                                    alt={srv.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity"
                                />
                            ) : null}

                            {/* Bottom title + description */}
                            <div className="relative z-10 flex flex-col justify-end h-full">
                                <h3 className="md:text-md text-lg font-body font-bold tracking-wide text-white mb-2 group-hover:text-[#ECAE36] transition-colors">
                                    {srv.title}
                                </h3>
                                <p className="md:text-xs text-sm font-body  text-slate-300 leading-relaxed tracking-wide line-clamp-3">
                                    {srv.excerpt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}