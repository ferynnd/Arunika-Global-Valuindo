import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CustomButton from '@/Components/CustomButton';

export default function Hero({ 
<<<<<<< HEAD
    title = "Mitra Strategis Transformasi Bisnis & Keuangan Berkelanjutan", 
    subtitle = "Together for Sustainable Growth.",
    description = "Membangun fondasi yang kuat, meningkatkan kinerja, mendorong pertumbuhan, dan menciptakan keberlanjutan bagi bisnis Anda.",
=======
    title = "Membangun Fondasi Bisnis Kuat dan Berkelanjutan", 
>>>>>>> 137716532990af085e042fadc81c329882660451
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
            className="relative min-h-[75vh] md:min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden flex items-start justify-center"
            style={{
                backgroundImage: `url('${bgImage}')`,
            }}
        >
            <div className="absolute inset-0 bg-linear-to-b from-white to-white/50"></div>

<<<<<<< HEAD
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 translate-y-28">

                <h1 
                    className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-primary max-w-5xl mx-auto leading-[1.15] sm:leading-[1.2]"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    {title}
=======
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 translate-y-36 md:translate-y-46">
                <span 
                    className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-5 block"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    PT Arunika Global Valuindo
                    <span className="hidden md:inline"> | </span>
                    <br className="block md:hidden" />
                    Business Transformation & Advisory
                </span>
                <h1 
                    className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-primary max-w-5xl mx-auto leading-[1.15] sm:leading-[1.2]"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                >
                    Membangun Fondasi Bisnis Kuat <br className="hidden sm:inline" />
                    dan Berkelanjutan
>>>>>>> 137716532990af085e042fadc81c329882660451
                </h1>

                <div 
                    className="mt-8 sm:mt-10 flex items-center justify-center gap-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    <CustomButton
<<<<<<< HEAD
                        href={"https://wa.me/6282331144447"}
                        text="Konsultasi Sekarang"
=======
                        href={"https://wa.me"}
                        text="Konsultasi Bisnis"
>>>>>>> 137716532990af085e042fadc81c329882660451
                        bgColor="bg-secondary hover:bg-secondary/90"
                        textColor="text-white font-medium"
                    />
                </div>
            </div>
        </section>
    );
}