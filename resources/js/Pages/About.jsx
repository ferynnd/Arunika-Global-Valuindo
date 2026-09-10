import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HeaderSection from '@/Components/HeaderSection';
import CustomButton from '@/Components/CustomButton';
import JourneySection from './Components/About/Journey';
import PageHeader from '@/Components/PageHeader';
import VisionMisionSection from './Components/About/VisiMisi'

export default function About({ auth }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const values = [
        {
            title: 'Character',
            subtitle: 'Integrity in Every Decision',
            desc: 'Kami menjunjung tinggi karakter, integritas, profesionalisme, independensi, kerahasiaan, dan kepentingan klien. Setiap pekerjaan dilakukan dengan standar etika profesional serta komitmen untuk memberikan layanan terbaik.',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
                </svg>
            ),
        },
        {
            title: 'Environment',
            subtitle: 'Creating Sustainable Positive Impact',
            desc: 'Kami percaya bahwa pertumbuhan bisnis harus berjalan bersama tanggung jawab terhadap lingkungan dan stakeholders. Arunika berupaya membantu klien menciptakan sustainable value dan meningkatkan dampak positif terhadap lingkungan.',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                </svg>
            ),
        },
        {
            title: 'Organization',
            subtitle: 'Building Capable & Collaborative Organizations',
            desc: 'Kami membangun organisasi yang adaptif, kolaboratif, bertanggung jawab, inovatif, dan terus berkembang. Kami juga mendorong pengembangan kemampuan internal serta hubungan kerja yang baik dan berkelanjutan dengan klien dan stakeholders.',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
            ),
        },
    ];

    const milestones = [
        { year: '2010', text: 'Fondasi Profesional: Founder Arunika mulai aktif dalam bidang akuntansi, keuangan, manajemen, serta berkembang ke bidang CSR dan social research.' },
        { year: '2015–2018', text: 'CSR & Social Impact: Memperluas pengalaman ke bidang CSR impact measurement menggunakan metodologi Social Return on Investment (SROI) pada beberapa perusahaan BUMN.' },
        { year: '2018–Sekarang', text: 'Akademik & Strategic Finance: Aktif sebagai akademisi sekaligus mengembangkan kompetensi dalam financial modeling, corporate valuation, dan strategic finance.' },
        { year: '20 Juli 2024', text: 'Arunika Didirikan: PT Arunika Global Valuindo resmi berdiri sebagai financial & business management consulting and research firm.' },
    ];

    const team = [
        { name: 'Dr. Ir. Bambang Wijaya', role: 'Managing Partner', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80' },
        { name: 'Ratna Kusuma, CFA', role: 'Head of Valuation', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80' },
        { name: 'Dimas Prasetyo', role: 'Head of Strategy Advisory', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-600 font-['Work_Sans'] font-normal tracking-wide antialiased selection:bg-secondary selection:text-primary">
            <Header auth={auth} title="Tentang Kami - PT Arunika Global Valuindo" activePage="about" />
            <PageHeader/>
            
            <section className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-6 space-y-6">
                            <HeaderSection
                                tagline="Cerita Kami"
                                title="Lebih dari Satu Dekade Pengalaman Profesional Mendampingi Pertumbuhan Bisnis."
                                showButton={false}
                            />
                            <p className="text-sm  text-gray-600 leading-relaxed tracking-wide">
                                Arunika berangkat dari pengalaman profesional di bidang akuntansi, keuangan, manajemen bisnis, Corporate Social Responsibility (CSR), dan social research. Arunika didirikan pada 20 Juli 2024, setelah lebih dari satu dekade pengalaman profesional founder yang dimulai sejak 2010.
                            </p>
                            <p className="text-sm  text-gray-600 leading-relaxed tracking-wide">
                                Kami memadukan analytical thinking, strategic perspective, relevant methodologies, dan collaborative approach untuk membantu klien memahami persoalan secara lebih mendalam, menentukan solusi yang tepat, serta membangun kemampuan organisasi untuk melakukan perbaikan secara berkelanjutan.
                            </p>
                        </div>
                        <div className="lg:col-span-6">
                            <div className="relative rounded-3xl md:rounded-2xl overflow-hidden ">
                                <img src={'/assets/team.webp'} alt="Tim Arunika" className="w-full h-80 sm:h-96 object-cover object-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-24 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-sm sm:text-base font-medium tracking-wide text-secondary block">
                            NILAI KAMI
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wide leading-tight">
                            Character, Environment, Organization
                        </h2>
                        <p className="mt-4 text-sm text-gray-300 leading-relaxed tracking-wide">
                            Ketiga nilai tersebut menjadi fondasi Arunika dalam menjalankan advisory: karakter yang kuat, kepedulian terhadap lingkungan dan dampak, serta organisasi yang mampu terus berkembang.
                        </p>
                    </div>
                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((v, idx) => (
                            <div key={idx} className="p-6 rounded-3xl md:rounded-2xl bg-stone-100 text-primary border border-stone-300transition-all flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center  mb-4">
                                        {v.icon}
                                    </div>
                                    <h3 className="text-lg font-normal tracking-wide text-primary">{v.title}</h3>
                                    <p className="text-xs font-medium text-secondary mt-1 tracking-wide">{v.subtitle}</p>
                                    <p className="text-xs font-light text-gray-600 mt-3 leading-relaxed tracking-wide">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <VisionMisionSection/>

            <JourneySection milestones={milestones} />
            
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
                            href="#contact"
                            text="Kosultasi Sekarang"
                            bgColor="bg-accent hover:bg-accent/90"
                            textColor="text-white"
                            iconBgColor="bg-white/20"
                            iconTextColor="text-white"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}