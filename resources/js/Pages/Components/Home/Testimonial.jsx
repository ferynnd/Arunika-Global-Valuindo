import React, { useState } from "react";
import HeaderSection from "@/Components/HeaderSection"; // Sesuaikan path import HeaderSection

const defaultTestimonials = [
    {
        quote: "PT Arunika Global Valuindo memberikan layanan penilaian aset yang sangat profesional, transparan, dan sangat membantu kelancaran aksi korporasi perusahaan kami.",
        author: "Budi Santoso",
        role: "Direktur Keuangan PT Nusantara Jaya",
        avatar: "",
    },
    {
        quote: "Analisis strategi korporasi dan valuasi bisnis yang disajikan sangat mendalam serta berbasis data yang valid. Mitra terpercaya untuk jangka panjang.",
        author: "Siti Rahmawati",
        role: "CEO Solusi Finansial Utama",
        avatar: "",
    },
];

export default function TestimonialSection({
    tagline = "Testimoni",
    title = "Kepercayaan Klien Adalah Prioritas Utama Kami.",
    showButton = false,
    testimonials = defaultTestimonials,
    imageSrc = "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
    imageAlt = "Mitra strategis Arunika",
}) {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const currentTestimonial = testimonials[activeTestimonial] || testimonials[0];

    return (
        <section className="py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Testimonial Quote & Slider Controls */}
                    <div className="lg:col-span-6 space-y-6" data-aos="fade-right" data-aos-duration="900">
                        <HeaderSection
                            tagline={tagline}
                            title={title}
                            showButton={showButton}
                        />

                        <div className="mt-8 bg-background rounded-2xl md:rounded-xl p-6 border border-stone-200 ">
                            <p className="text-xs sm:text-sm font-light text-[#4A5D5A] leading-relaxed tracking-wide italic">
                                "{currentTestimonial?.quote}"
                            </p>
                            <div className="mt-4 pt-4 border-t border-[#E0DBD2] flex items-center gap-3">
                                {currentTestimonial?.avatar ? (
                                    <img
                                        src={`/storage/${currentTestimonial.avatar}`}
                                        alt={currentTestimonial.author}
                                        className="w-10 h-10 rounded-full object-cover border border-[#E3DFD7]"
                                    />
                                ) : null}
                                <div>
                                    <div className="font-normal tracking-wide text-sm text-primary">
                                        {currentTestimonial?.author}
                                    </div>
                                    <div className="text-xs font-light tracking-wide text-[#718783]">
                                        {currentTestimonial?.role}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {testimonials.length > 1 && (
                            <div className="mt-6 flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                                    className="w-12 h-9 rounded-md bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer"
                                    title="Sebelumnya"
                                >
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                                    className="w-12 h-9 rounded-md bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer"
                                    title="Berikutnya"
                                >
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Community Image */}
                    <div className="lg:col-span-6" data-aos="fade-left" data-aos-duration="900">
                        <div className="relative rounded-3xl md:rounded-2xl overflow-hidden shadow-sm">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="w-full h-80 sm:h-96 object-cover object-center"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}