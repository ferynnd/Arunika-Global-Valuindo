import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HeaderSection from '@/Components/HeaderSection';
import CustomButton from '@/Components/CustomButton';
import PageHeader from '@/Components/PageHeader';

export default function PrivacyPolicy({ auth }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sections = [
        {
            title: '1. Informasi yang Kami Kumpulkan',
            body: 'Kami dapat mengumpulkan informasi seperti nama, alamat email, nomor telepon, dan nama perusahaan saat Anda mengisi formulir kontak atau menghubungi tim kami melalui situs ini.',
        },
        {
            title: '2. Penggunaan Informasi',
            body: 'Informasi yang Anda berikan digunakan untuk merespons pertanyaan, menyediakan layanan konsultasi, dan meningkatkan kualitas layanan kami. Kami tidak menjual atau menyewakan data Anda kepada pihak ketiga.',
        },
        {
            title: '3. Keamanan Data',
            body: 'Kami menerapkan langkah-langkah teknis dan administratif yang wajar untuk melindungi data pribadi Anda dari akses, perubahan, atau pengungkapan yang tidak sah.',
        },
        {
            title: '4. Cookie',
            body: 'Situs ini dapat menggunakan cookie untuk meningkatkan pengalaman pengguna, seperti mengingat preferensi tampilan. Anda dapat menonaktifkan cookie melalui pengaturan browser Anda.',
        },
        {
            title: '5. Pembagian Informasi dengan Pihak Ketiga',
            body: 'Kami hanya membagikan data kepada pihak ketiga jika diwajibkan oleh hukum atau diperlukan untuk menjalankan layanan yang Anda minta, dengan tetap menjaga kerahasiaan sesuai standar yang berlaku.',
        },
        {
            title: '6. Hak Anda',
            body: 'Anda berhak meminta akses, koreksi, atau penghapusan data pribadi yang kami simpan dengan menghubungi kami melalui kontak yang tercantum di bawah.',
        },
        {
            title: '7. Perubahan Kebijakan',
            body: 'Kebijakan privasi ini dapat diperbarui sewaktu-waktu. Perubahan akan diinformasikan melalui halaman ini beserta tanggal pembaruan terakhir.',
        },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-600 font-['Work_Sans'] font-normal tracking-wide antialiased selection:bg-secondary selection:text-primary">
            <Header auth={auth} title="Kebijakan Privasi - PT Arunika Global Valuindo" activePage="privacy" />
            <PageHeader 
                title="Kebijakan Privasi" 
                breadcrumb={[
                    { label: 'Home', href: '/' }, 
                    { label: 'Kebijakan Privasi', href: '/privacypolicy' }
                ]} 
            />

            {/* KONTEN UTAMA */}
            <section className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <HeaderSection
                            tagline="Legal & Privasi"
                            title="Kebijakan Privasi PT Arunika Global Valuindo"
                            showButton={false}
                        />
                        <p className="mt-4 text-xs font-medium text-secondary tracking-wide uppercase">
                            Terakhir diperbarui: 09 September 2026
                        </p>

                        <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed tracking-wide">
                            PT Arunika Global Valuindo ("kami") menghargai privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi yang Anda berikan saat menggunakan situs web ini.
                        </p>

                        <div className="mt-12 space-y-6">
                            {sections.map((s, idx) => (
                                <div 
                                    key={idx} 
                                    className="p-6 sm:p-8 rounded-3xl md:rounded-2xl bg-stone-100 text-primary border border-stone-300 transition-all flex flex-col justify-between"
                                >
                                    <h3 className="text-lg font-normal tracking-wide text-primary mb-3">
                                        {s.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm font-light text-gray-600 leading-relaxed tracking-wide">
                                        {s.body}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-8 rounded-3xl md:rounded-2xl bg-primary text-white space-y-3">
                            <h3 className="text-xl font-normal tracking-wide text-white">Hubungi Kami</h3>
                            <p className="text-xs sm:text-sm font-light leading-relaxed tracking-wide text-gray-300">
                                Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini, silakan hubungi kami di{' '}
                                <a href="mailto:contact@arunika-valuindo.com" className="text-secondary underline hover:text-secondary/80 font-medium transition-colors">
                                    contact@arunika-valuindo.com
                                </a>{' '}
                                atau +62 (21) 555-0198.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
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
                            href="/contact"
                            text="Konsultasi Sekarang"
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