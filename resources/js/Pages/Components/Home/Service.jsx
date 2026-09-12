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
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
                data-aos-duration="800"
                href={targetUrl}
                        className="relative rounded-2xl bg-primary border border-gray-100/10 transition-all cursor-pointer group hover:-translate-y-1 aspect-4/5 flex flex-col justify-between p-6 overflow-hidden"
                    >
                        <img
                            src={
                                service.thumbnail 
                                    ? (service.thumbnail.startsWith('http') ? service.thumbnail : `/storage/${service.thumbnail}`)
                                    : 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
                            }
                            alt={service.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/60 to-transparent z-0" />

                        <div className="relative z-10 flex flex-col justify-end h-full pt-12">
                            <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                                <h3 className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-secondary transition-colors leading-snug mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-xs md:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4 font-normal">
                                    {service.excerpt || 'Penjelasan rinci mengenai cakupan metodologi dan manfaat layanan bagi perusahaan Anda.'}
                                </p>

                                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-secondary">
                                    <span className="opacity-80 group-hover:opacity-100 transition-opacity">
                                        Lihat Detail Layanan
                                    </span>
                                    <div className="w-7 h-7 rounded-md bg-white/10 group-hover:bg-secondary group-hover:text-primary flex items-center justify-center transition-all duration-300">
                                        <svg
                                            className="w-3.5 h-3.5 transition-transform"
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
                );
            })}
        </div>
            </div>
        </section>
    );
}