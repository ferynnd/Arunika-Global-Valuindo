import React from 'react';
import CustomButton from '@/Components/CustomButton'; // Sesuaikan jalur import CustomButton Anda

export default function Hero({ 
    title = "Strategic Growth Meets Sustainable Impact", 
    bgImage = "/assets/conference.webp",
    consultationHref = "#services" 
}) {
    return (
        <section
            id="home"
            className="relative min-h-[75vh] md:min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden flex items-start justify-center"
            style={{
                backgroundImage: `url('${bgImage}')`,
            }}
        >
            <div className="absolute inset-0 bg-linear-to-b from-white to-white/40"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 translate-y-28 ">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-primary max-w-5xl mx-auto leading-[1.15] sm:leading-[1.2]">
                    Strategic Growth Meets <br className="hidden sm:inline" />
                    Sustainable Impact
                </h1>

                <div className="mt-8 sm:mt-10 flex items-center justify-center">
                    <CustomButton
                        href={consultationHref}
                        text="Book Consultation"
                        bgColor="bg-secondary hover:bg-secondary/90"
                        textColor="text-white font-medium"
                    />
                </div>
            </div>
        </section>
    );
}