import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import CustomButton from "@/Components/CustomButton";

const defaultServices = [
    {
        id: 1,
        title: "01 — Strategic Finance",
        excerpt: "Financial Advisory, Financial Modeling, Corporate Valuation, Feasibility Study & Investment Analysis, serta Financial Business Partnering.",
        thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
        href: "/services",
    },
    {
        id: 2,
        title: "02 — Business Advisory",
        excerpt: "Business Transformation Advisory, Business Process Analysis, Management Advisory, dan Perbaikan Struktur Organisasi.",
        thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
        href: "/services",
    },
    {
        id: 3,
        title: "03 — Sustainability & Social Impact",
        excerpt: "Sustainability Advisory, pengukuran dampak CSR dengan Social Return on Investment (SROI), Community Development, dan Social Research.",
        thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
        href: "/services",
    },
];

export default function ServicesShowcase({ 
    tagline = "Layanan Kami",
    title = "Solusi Integratif Melalui Tiga Pilar Utama: Keuangan Strategis, Penasihat Bisnis, serta Keberlanjutan & Dampak Sosial.",
    showButton = true,
    buttonText = "Lihat Semua Layanan",
    buttonHref = "/layanan",
    buttonBgColor = "bg-secondary",
    buttonTextColor = "text-white font-medium",
    buttonSize = "md",
    onButtonClick,
    services = [],
    onSelectService
}) {
    const [selectedService, setSelectedService] = useState(null);

    // Ambil data dari CRUD Admin (tampilkan maksimal 4 item)
    const displayServices = (services && services.length > 0 ? services : defaultServices).slice(0, 4);

    const handleServiceClick = (srv) => {
        setSelectedService(srv);
        if (onSelectService) {
            onSelectService(srv);
        }
    };

    const getThumbnail = (srv) => {
        if (!srv.thumbnail) return 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80';
        return srv.thumbnail.startsWith('http') ? srv.thumbnail : `/storage/${srv.thumbnail}`;
    };

    return (
        <section id="services" className="py-20 md:py-18  bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto space-y-6 text-center" data-aos="fade-up" data-aos-duration="800">
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
                    {displayServices.map((srv, idx) => {
                        const targetUrl = srv.slug ? route('services.show', srv.slug) : (srv.href || '/layanan');
                        const imgUrl = getThumbnail(srv);

                        return (
                            <Link
                                key={srv.id || idx}
                                href={targetUrl}
                                onClick={() => handleServiceClick(srv)}
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                                data-aos-duration="800"
                                className="relative rounded-2xl bg-primary-dark border border-primary transition-all cursor-pointer group hover:-translate-y-1 aspect-4/5 flex flex-col justify-between p-6 overflow-hidden block"
                            >
                                <img
                                    src={imgUrl}
                                    alt={srv.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity"
                                />

                                {/* Bottom title + description */}
                                <div className="relative z-10 flex flex-col justify-end h-full">
                                    <h3 className="md:text-md text-lg font-body font-bold tracking-wide text-white mb-2 group-hover:text-[#ECAE36] transition-colors line-clamp-2">
                                        {srv.title}
                                    </h3>
                                    <p className="md:text-xs text-sm font-body text-slate-300 leading-relaxed tracking-wide line-clamp-3">
                                        {srv.excerpt}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}