import React from "react";
import HeaderSection from "@/Components/HeaderSection"; 

export default function MissionSection({
    tagline = "Misi Kami",
    title = "Mendampingi organisasi mengambil keputusan strategis melalui analisis data teruji dan metodologi standar.",
    description = "Kami tidak sekadar memberikan laporan rekomendasi. Arunika bekerja langsung bersama tim Anda untuk memperbaiki sistem keuangan, merapikan proses kerja internal, serta memastikan program sosial perusahaan memberikan dampak terukur.",
    imageSrc = "/assets/speaking.webp",
    imageAlt = "Misi PT Arunika Global Valuindo",
    showButton = false,
    buttonText = "Tentang Kami",
    buttonHref = "/about",
    buttonBgColor = "bg-secondary",
    buttonTextColor = "text-white",
    buttonSize = "md",
    onButtonClick,
}) {
    return (
        <section className="py-16 sm:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                    <div className="lg:col-span-5 flex justify-center lg:justify-start" data-aos="fade-right" data-aos-duration="900">
                        <div className="relative overflow-hidden rounded-3xl md:rounded-2xl shadow-sm max-w-md w-full">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="w-full aspect-4/5 object-cover object-center rounded-3xl md:rounded-2xl scale-x-[-1]"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-6" data-aos="fade-left" data-aos-duration="900">
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

                        {description && (
                            <p className="font-body text-sm font-normal text-gray-600 leading-relaxed tracking-wide pt-2 max-w-xl">
                                {description}
                            </p>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}