import React from 'react';
import CustomButton from '@/Components/CustomButton';

export default function CtaSection({
    title = (
        <>
            Bersama Membangun Pertumbuhan <br />
            <span className="text-secondary italic">Bisnis yang Berkelanjutan</span>
        </>
    ),
    description = "Kami siap berjalan bersama Anda dalam membangun bisnis yang lebih kuat, meningkatkan kinerja, dan menciptakan nilai yang berdampak positif bagi perusahaan dan lingkungan.",
    buttonText = "Mulai Konsultasi",
    buttonHref = "https://wa.me/6282331144447",
    bgImage = "/assets/bgcta.webp",
}) {
    return (
        <section className="py-20 relative overflow-hidden bg-primary">
            <div className="absolute inset-0">
                <img
                    src={bgImage}
                    alt="Background overlay"
                    className="w-full h-full object-cover opacity-30"
                />
            </div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h2 className="text-3xl md:text-5xl font-normal tracking-wide leading-tight">
                    {title}
                </h2>

                {description && (
                    <p className="mt-4 text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>
                )}

                <div className="mt-8 flex justify-center">
                    <CustomButton
                        href={buttonHref}
                        text={buttonText}
                        bgColor="bg-accent hover:bg-accent/90"
                        textColor="text-white font-medium"
                        iconBgColor="bg-white/20"
                        iconTextColor="text-white"
                    />
                </div>
            </div>
        </section>
    );
}