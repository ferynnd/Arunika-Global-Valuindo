import React, { useState, useEffect } from 'react';
import HeaderSection from '@/Components/HeaderSection';

// Sub-Component Native Slider berbasis Transform
function NativeImageSlider({ images = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const validImages = Array.isArray(images) && images.length > 0 
        ? images 
        : ['https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80'];

    useEffect(() => {
        if (validImages.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % validImages.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [validImages.length]);

    return (
        <div className="relative w-full aspect-video rounded-3xl md:rounded-2xl overflow-hidden shadow-md bg-stone-200">
            {/* Slider Track menggunakan TranslateX */}
            <div 
                className="flex w-full h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {validImages.map((imgUrl, idx) => (
                    <div key={idx} className="w-full h-full flex-shrink-0 relative">
                        <img
                            src={imgUrl}
                            alt={`Slide ${idx + 1}`}
                            className="w-full h-full object-cover object-center block"
                            onError={(e) => {
                                e.target.src = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80';
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Dots Pagination */}
            {validImages.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-xs">
                    {validImages.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                idx === currentIndex ? 'bg-white w-5' : 'bg-white/50 w-2'
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function JourneySection({ milestones = [] }) {
    const defaultMilestones = [
        {
            year: '2024',
            title: 'Pendirian PT Arunika Global Valuindo',
            text: 'Arunika didirikan pada 20 Juli 2024 sebagai financial & business management consulting and research firm yang berfokus pada business transformation & advisory.',
            imgs: [
                'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80',
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
            ],
        },
        {
            year: '2018–Sekarang',
            title: 'Akademik & Strategic Finance',
            text: 'Founder aktif sebagai akademisi di bidang akuntansi dan keuangan sekaligus mengembangkan kompetensi dalam financial modeling, corporate valuation, financial analysis, dan strategic finance.',
            imgs: [
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
            ],
        },
    ];

    const displayMilestones = [...(milestones?.length ? milestones : defaultMilestones)];

    return (
        <section className="py-20 sm:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <HeaderSection
                    tagline="Perjalanan Kami"
                    title="Lebih dari Satu Dekade Pengalaman Profesional Mendampingi Pertumbuhan Bisnis."
                    showButton={false}
                />

                <div className="space-y-16 mt-5 sm:space-y-24">
                    {displayMilestones.map((m, idx) => {
                        const isOdd = idx % 2 === 0;
                        const imageList = Array.isArray(m.imgs) 
                            ? m.imgs 
                            : [m.img || m.imgs].filter(Boolean);

                        return (
                            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                                <div className={`lg:col-span-6 space-y-4 ${!isOdd ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <div className="inline-block px-3 py-1 rounded-md bg-primary text-white text-xs font-semibold tracking-wider">
                                        {m.year}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl tracking-wide text-primary leading-snug">
                                        {m.title}
                                    </h3>
                                    <p className="text-sm font-normal text-gray-600 leading-relaxed tracking-wide">
                                        {m.text}
                                    </p>
                                </div>

                                <div className={`lg:col-span-6 ${!isOdd ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <NativeImageSlider images={imageList} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}