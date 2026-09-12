import React from "react";
import { Link } from "@inertiajs/react";
import CustomButton from "@/Components/CustomButton";

const defaultServices = [
    {
        id: 1,
        title: "01 — Strategic Finance",
        excerpt:
            "Financial Advisory, Financial Modeling, Corporate Valuation, Feasibility Study & Investment Analysis, serta Financial Business Partnering.",
        thumbnail:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
        href: "/services",
    },
    {
        id: 2,
        title: "02 — Business Advisory",
        excerpt:
            "Business Transformation Advisory, Business Process Analysis, Management Advisory, dan Perbaikan Struktur Organisasi.",
        thumbnail:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
        href: "/services",
    },
    {
        id: 3,
        title: "03 — Sustainability, Community Development & Social Impact",
        excerpt:
            "Sustainability Advisory, pengukuran dampak CSR dengan Social Return on Investment (SROI), Community Development, dan Social Research.",
        thumbnail:
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
        href: "/services",
    },
];

export default function ServicesShowcase({
    tagline = "Our Services",
    title = "Solusi Integratif Melalui Tiga Pilar Utama: Keuangan Strategis, Penasihat Bisnis, serta Keberlanjutan & Dampak Sosial.",
    showButton = true,
    buttonText = "View All Services",
    buttonHref = "/layanan",
    buttonBgColor = "bg-secondary",
    buttonTextColor = "text-white font-medium",
    buttonSize = "md",
    onButtonClick,
    services = [],
}) {
    const displayServices = (
        services.length > 0 ? services : defaultServices
    ).slice(0, 3);

    const getThumbnail = (service) => {
        if (!service.thumbnail) {
            return defaultServices[0].thumbnail;
        }

        return service.thumbnail.startsWith("http")
            ? service.thumbnail
            : `/storage/${service.thumbnail}`;
    };

    return (
        <section id="services" className="py-20 md:py-18 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div
                    className="max-w-3xl mx-auto space-y-6 text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
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

                {/* Services */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {displayServices.map((service, index) => {
                    const targetUrl = service.slug
                        ? route("services.show", service.slug)
                        : "/layanan";

                        return (
                            <Link
                                key={service.id || index}
                                href={targetUrl}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                data-aos-duration="800"
                                className="relative aspect-4/5 rounded-2xl overflow-hidden bg-primary-dark border border-primary group transition-all duration-300 hover:-translate-y-1"
                            >
                                <img
                                    src={getThumbnail(service)}
                                    alt={service.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                                />

                                <div className="relative z-10 flex flex-col justify-end h-full p-6">
                                    <h3 className="text-lg md:text-md font-body font-bold tracking-wide text-white mb-2 group-hover:text-[#ECAE36] transition-colors line-clamp-2">
                                        {service.title}
                                    </h3>

                                    <p className="text-sm md:text-xs font-body text-slate-300 leading-relaxed tracking-wide line-clamp-3">
                                        {service.excerpt}
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