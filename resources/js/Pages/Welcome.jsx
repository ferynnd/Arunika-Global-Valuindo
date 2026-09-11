import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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

export default function Welcome({ auth, latestArticles = [], services = [], testimonials = [] }) {
    const [scrolled, setScrolled] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const [selectedService, setSelectedService] = useState(null);
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 60,
        });

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

    const fallbackTestimonials = [
        {
            quote: "Layanan valuasi aset dan konsultasi strategi dari Arunika Global Valuindo memberikan kejelasan dan kepastian tinggi untuk keputusan investasi korporasi kami. Sangat profesional dan akurat.",
            author: "Ahmad Fauzi",
            role: "Chief Financial Officer, PT Indo Energi Lestari",
            avatar: null,
        },
        {
            quote: "Pendampingan feasibility study yang komprehensif membuat proses audit dan ekspansi bisnis kami berjalan mulus sesuai timeline dan standar keberlanjutan.",
            author: "Siti Rahmawati",
            role: "Managing Director, Global Venture Capital",
            avatar: null,
        },
        {
            quote: "Tim konsultan Arunika memiliki dedikasi dan metodologi riset yang mendalam, sangat direkomendasikan untuk analisis finansial korporasi.",
            author: "Budi Santoso",
            role: "VP Operations, Nusantara Infrastructure Group",
            avatar: null,
        }
    ];

    const displayTestimonials = testimonials && testimonials.length > 0 ? testimonials : fallbackTestimonials;
    const currentTestimonial = displayTestimonials[activeTestimonial] || displayTestimonials[0];

    const fallbackServices = [
        {
            id: 1,
            title: 'Business Valuation & Advisory',
            excerpt: 'Layanan penilai independen dan analisis nilai wajar aset serta penilaian ekuitas perusahaan berstandar internasional.',
            content: '<p>Layanan penilai independen dan analisis nilai wajar aset serta penilaian ekuitas perusahaan berstandar internasional untuk mendukung merger, akuisisi, dan pendanaan korporasi.</p>',
            thumbnail: null,
        },
        {
            id: 2,
            title: 'Feasibility Study & Strategy',
            excerpt: 'Studi kelayakan bisnis komprehensif, analisis pasar, dan formulasi strategi ekspansi usaha secara terukur.',
            content: '<p>Studi kelayakan bisnis komprehensif, analisis pasar, dan formulasi strategi ekspansi usaha secara terukur untuk meminimalkan risiko investasi.</p>',
            thumbnail: null,
        },
        {
            id: 3,
            title: 'Corporate Restructuring',
            excerpt: 'Pendampingan restrukturisasi modal, perbaikan tata kelola keuangan, serta optimalisasi portofolio bisnis.',
            content: '<p>Pendampingan restrukturisasi modal, perbaikan tata kelola keuangan, serta optimalisasi portofolio bisnis korporasi.</p>',
            thumbnail: null,
        }
    ];

    const fallbackArticles = [
        {
            id: 1,
            title: "Tantangan & Peluang Valuasi Aset Digital di Era Transformasi",
            date: "24 Agustus 2026",
            image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80",
            category: "Finansial",
            content: "<p>Memahami pentingnya kalkulasi nilai wajar pada era transformasi digital untuk mendukung keputusan akuisisi dan investasi strategis.</p>",
            slug: "valuasi-aset-digital"
        },
        {
            id: 2,
            title: "Pentingnya Feasibility Study Sebelum Ekspansi Usaha Korporasi",
            date: "18 September 2026",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
            category: "Strategi",
            content: "<p>Studi kelayakan bisnis yang akurat mencegah potensi risiko kegagalan investasi dalam proyek skala besar.</p>",
            slug: "pentingnya-feasibility-study"
        },
        {
            id: 3,
            title: "Integrasi Prinsip ESG untuk Meningkatkan Nilai Perusahaan",
            date: "02 November 2026",
            image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
            category: "Sustainability",
            content: "<p>Bagaimana kriteria lingkungan, sosial, dan tata kelola mempengaruhi kepercayaan investor global.</p>",
            slug: "integrasi-prinsip-esg"
        }
    ];

    const displayServices = services && services.length > 0
        ? services.map((srv) => ({
            id: srv.id,
            title: srv.title,
            excerpt: srv.excerpt || (srv.content ? srv.content.replace(/<[^>]+>/g, '').substring(0, 150) + '...' : 'Layanan korporasi dari Arunika Global Valuindo.'),
            content: srv.content || srv.excerpt || '',
            thumbnail: srv.thumbnail ? `/storage/${srv.thumbnail}` : null,
        }))
        : fallbackServices;

    const displayArticles = latestArticles && latestArticles.length > 0
        ? latestArticles.map((art) => ({
            id: art.id,
            title: art.title,
            date: new Date(art.published_at || art.created_at).toLocaleDateString('id-ID', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
            }),
            image: art.thumbnail ? `/storage/${art.thumbnail}` : 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80',
            category: art.category ? art.category.name : 'Artikel',
            content: art.content || art.excerpt || '',
            slug: art.slug,
        }))
        : fallbackArticles;

    // Icon set for About Us highlight cards (cycled by index)
    const aboutIcons = [
        // graduation cap
        <svg key="i1" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10L12 5 2 10l10 5 10-5z" />
            <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
        </svg>,
        // briefcase
        <svg key="i2" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>,
        // trending up
        <svg key="i3" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
        </svg>,
    ];

    return (
        <div className="min-h-screenbg-white text-text font-normal tracking-wide antialiased selection:bg-[#ECAE36] selection:text-[#1B544D]">
            
            <Header auth={auth} title="Arunika Global Valuindo" activePage="home" /> 
            
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

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white" data-aos="fade-up" data-aos-duration="900">
                    <h2 className="text-3xl md:text-5xl font-normal tracking-wide leading-tight">
                        Ready to solve your problem with <br />
                        <span className="text-secondary italic">Arunika Global Valuindo?</span>
                    </h2>

                    <div className="mt-8 flex justify-center">
                        <CustomButton
                            href="#contact"
                            text="Consultation Now"
                            bgColor="bg-accent hover:bg-accent/90"
                            textColor="text-white"
                            iconBgColor="bg-white/20"
                            iconTextColor="text-white"
                        />
                    </div>
                </div>
            </section>

            <Footer services={services} />
        </div>
    );
}