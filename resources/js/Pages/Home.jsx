import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import CustomButton from '@/Components/CustomButton';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Hero from './Components/Home/Hero';
import ClientMarquee from './Components/Home/MarqueClient';
import About from './Components/Home/About';
import MissionSection from './Components/Home/Mission';
import WhyChooseUs from './Components/Home/Wcu';
import ServicesShowcase from './Components/Home/Service';
import TestimonialSection from './Components/Home/Testimonial';
import BlogSection from './Components/Home/Blog';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Welcome({ auth, services = [] }) {
 
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <GuestLayout auth={auth} title="Arunika Global Valuindo" activePage="home" >
            <Hero/>

            <ClientMarquee />

            <About/>

            <MissionSection/>

            <WhyChooseUs/>
            
            <ServicesShowcase/>

            <TestimonialSection/>

            <BlogSection/>

            <section className="py-24 relative overflow-hidden bg-primary">
                <div className="absolute inset-0">
                    <img
                        src={'/assets/bgcta.webp'}
                        alt="Background overlay"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-normal tracking-wide leading-tight">
                        Ready to solve your problem with <br />
                        <span className="text-secondary italic">Arunika Global Valuindo?</span>
                    </h2>

                    <div className="mt-8 flex justify-center">
                        <CustomButton
                            href="/layanan"
                            text="Consultation Now"
                            bgColor="bg-accent hover:bg-accent/90"
                            textColor="text-white"
                            iconBgColor="bg-white/20"
                            iconTextColor="text-white"
                        />
                    </div>
                </div>
            </section>
        </GuestLayout> 
            
    );
}