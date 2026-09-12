import { useEffect } from 'react';
import CustomButton from '@/Components/CustomButton';
import Hero from './Components/Home/Hero';
import ClientMarquee from './Components/Home/MarqueClient';
import About from './Components/Home/About';
import MissionSection from './Components/Home/Mission';
import WhyChooseUs from './Components/Home/Wcu';
import ServicesShowcase from './Components/Home/Service';
import TestimonialSection from './Components/Home/Testimonial';
import BlogSection from './Components/Home/Blog';
import GuestLayout from '@/Layouts/GuestLayout';
import CtaSection from './Components/Cta';


export default function Home({ auth, services = [], latestArticles = [], testimonials = [] }) {
    return (
        <GuestLayout auth={auth} title="PT Arunika Global Valuindo - Business Transformation & Advisory" activePage="home">
            <Hero />

            <ClientMarquee />

            <About />

            <MissionSection />

            <WhyChooseUs />

            <ServicesShowcase services={services} />

            <TestimonialSection testimonials={testimonials} />

            <BlogSection articles={latestArticles} />

            <CtaSection/>
            
        </GuestLayout>
    );
}