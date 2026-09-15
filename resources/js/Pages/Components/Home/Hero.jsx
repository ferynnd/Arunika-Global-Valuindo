import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CustomButton from '@/Components/CustomButton';

export default function Hero({ 
    bgImage = "/assets/conference.webp",
}) {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
            easing: 'ease-out-cubic',
        });
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-[75vh] md:min-h-screen overflow-x-hidden bg-cover bg-center bg-no-repeat overflow-hidden flex items-start justify-center"
            style={{
                backgroundImage: `url('${bgImage}')`,
            }}
        >
            <div className="absolute inset-0 bg-linear-to-b from-background to-background/50"></div>
            <div className="absolute inset-0 bg-linear-to-b from-background to-background/50"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 translate-y-28">
                <span 
                    className="text-xs font-semibold text-gray-600 tracking-widest uppercase mb-4 block"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    PT Arunika Global Valuindo | Business Transformation & Advisory
                </span>

                <h1 
                    className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-primary max-w-5xl mx-auto leading-[1.15] sm:leading-[1.2]"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    Konsultan Manajemen & Penasihat Bisnis
                </h1>

                <div 
                    className="mt-8 sm:mt-10 flex items-center justify-center gap-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    <CustomButton
                        href={"https://wa.me/6282331144447"}
                        text="Konsultasi Sekarang"
                        bgColor="bg-secondary"
                        textColor="text-white font-medium"
                    />
                </div>
            </div>
        </section>
    );
}