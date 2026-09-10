import React from "react";
import HeaderSection from "@/Components/HeaderSection"; // Sesuaikan path import HeaderSection Anda

export default function MissionSection({
    tagline = "Misi Kami",
    title = "Memberikan solusi valuasi dan strategi korporasi yang independen, akurat, dan terpercaya untuk mengakselerasi pertumbuhan bisnis di Indonesia.",
    description = "PT Arunika Global Valuindo berkomitmen mendampingi setiap langkah strategis korporasi melalui pendekatan berbasis data, standar penilaian internasional, dan integritas tanpa kompromi.",
    imageSrc = "/assets/speaking.webp",
    imageAlt = "Our Mission - Arunika Global Valuindo",
    showButton = false,
    buttonText = "About Us",
    buttonHref = "/about",
    buttonBgColor = "bg-secondary hover:bg-secondary/90",
    buttonTextColor = "text-white",
    buttonSize = "md",
    onButtonClick,
}) {
    return (
        <section className="py-16 sm:py-24 bg-stone-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                    <div className="lg:col-span-5 flex justify-center lg:justify-start">
                        <div className="relative overflow-hidden rounded-3xl md:rounded-2xl shadow-sm max-w-md w-full">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="w-full aspect-4/5 object-cover object-center rounded-3xl md:rounded-2xl scale-x-[-1]"
                            />
                        </div>
                    </div>

                    {/* Right: Content using HeaderSection + Extra Description */}
                    <div className="lg:col-span-7 space-y-6">
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

                        {/* Additional Description Paragraph */}
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