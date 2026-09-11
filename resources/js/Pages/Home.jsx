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

export default function Welcome({ auth, services = [], latestArticles = [], testimonials = [] }) {
 
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


export default function Home({ auth }) {
    return (
        <GuestLayout auth={auth} title="Arunika Global Valuindo" activePage="home" >
            <Hero/>

            <ClientMarquee />

            <About/>

            <MissionSection/>

            <WhyChooseUs/>
            
            <ServicesShowcase services={services} />

            <TestimonialSection testimonials={testimonials} />

            <BlogSection articles={latestArticles} />

            <section className="py-16 relative overflow-hidden bg-primary">
                <div className="absolute inset-0">
                    <img
                        src={'/assets/bgcta.webp'}
                        alt="Background overlay"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-normal tracking-wide leading-tight">
                        Bersama Membangun Pertumbuhan <br />
                        <span className="text-secondary italic">yang Berkelanjutan</span>
                    </h2>
                    <div className="mt-8 flex justify-center">
                        <CustomButton
                            href="https://wa.me/6282331144447"
                            text="Konsultasi Sekarang"
                            bgColor="bg-accent hover:bg-accent/90"
                    <h2 className="text-3xl md:text-4xl font-normal tracking-wide leading-tight">
                        Bersama Membangun Pertumbuhan <br />
                        <span className="text-secondary italic">Bisnis yang Berkelanjutan</span>
                    </h2>

                    <p className="mt-4 text-base md:text-md text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Diskusikan kebutuhan strategi keuangan, perbaikan operasional, atau pengukuran dampak program perusahaan Anda.
                    </p>

                    <div className="mt-8 flex justify-center">
                        <CustomButton
                            href="https://wa.me/6282331144447"
                            text="Mulai Konsultasi"
                            bgColor="bg-accent"
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