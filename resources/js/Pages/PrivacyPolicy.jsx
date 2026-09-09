import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

export default function PrivacyPolicy() {
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
        <div className="min-h-screen bg-[#FAF8F5] text-[#334155] font-['Work_Sans'] font-normal tracking-wide antialiased selection:bg-[#ECAE36] selection:text-[#1B544D]">
            <Header title="Privacy Policy - Arunika Global Valuindo" />

            {/* KONTEN */}
            <section className="pt-32 pb-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#1B544D] block mb-3">Legal</span>
                    <h1 className="text-3xl sm:text-4xl font-light tracking-wide text-[#1B544D] leading-snug">
                        Kebijakan Privasi
                    </h1>
                    <p className="mt-3 text-xs font-light tracking-wide text-[#718783]">
                        Terakhir diperbarui: 09 September 2026
                    </p>

                    <p className="mt-8 text-sm font-light text-[#52605E] leading-relaxed tracking-wide">
                        PT Arunika Global Valuindo ("kami") menghargai privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi yang Anda berikan saat menggunakan situs web ini.
                    </p>

                    <div className="mt-10 space-y-8">
                        {sections.map((s, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-[#EFECE6] border border-[#E3DFD7]">
                                <h2 className="text-base font-normal tracking-wide text-[#1B544D] mb-2">{s.title}</h2>
                                <p className="text-sm font-light text-[#52605E] leading-relaxed tracking-wide">{s.body}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 p-6 rounded-2xl bg-[#1B544D] text-white">
                        <h2 className="text-base font-normal tracking-wide mb-2">Hubungi Kami</h2>
                        <p className="text-sm font-light leading-relaxed tracking-wide text-slate-200">
                            Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini, silakan hubungi kami di{' '}
                            <a href="mailto:contact@arunika-valuindo.com" className="text-[#ECAE36] hover:underline">
                                contact@arunika-valuindo.com
                            </a>{' '}
                            atau +62 (21) 555-0198.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}