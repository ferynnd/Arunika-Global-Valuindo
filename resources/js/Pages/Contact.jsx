import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PageHeader from '@/Components/PageHeader';
import HeaderSection from '@/Components/HeaderSection';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Contact({ auth }) {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
            easing: 'ease-out-cubic',
        });
    }, []);

    // Nomor WhatsApp Tujuan (Ganti dengan nomor WhatsApp kantor Anda, gunakan format 62)
    const targetWhatsappNumber = "6281234567890";

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format pesan WhatsApp
        const text = `Halo Admin, perkenalkan saya:\n\n` +
            `*Nama:* ${formData.name}\n` +
            `*No. WA:* ${formData.phone}\n\n` +
            `*Pesan:* \n${formData.message}`;

        // Encode URL agar aman dikirim melalui link WhatsApp
        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${targetWhatsappNumber}?text=${encodedText}`;

        // Buka WhatsApp di tab baru
        window.open(whatsappUrl, '_blank');
    };

    return (
        <GuestLayout auth={auth} activePage="contact">
            <Head title="Hubungi Kami - Arunika Global Valuindo" />

            <PageHeader 
                title="Hubungi Kami" 
                breadcrumb={[
                    { label: 'Home', href: '/' }, 
                    { label: 'Hubungi Kami', href: '/contact' }
                ]} 
            />

            <section className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* SISI KIRI: Info Kontak */}
                        <div className="lg:col-span-5 space-y-8" data-aos="fade-right">
                            <HeaderSection
                                tagline="Hubungi Kami"
                                title="Kami Siap Mendampingi Setiap Langkah Strategis Bisnis Anda."
                                showButton={false}
                            />

                            <div className="space-y-3">
                                <div className="flex items-start gap-4 p-5 bg-background rounded-2xl md:rounded-xl border border-stone-200 hover:border-primary/40 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-primary">WhatsApp</h3>
                                        <p className="text-sm font-semibold text-slate-800 mt-0.5">+62 812-3456-7890</p>
                                        <p className="text-xs text-slate-500 mt-1">Senin - Jumat (08.00 - 17.00 WIB)</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-5 bg-background rounded-2xl md:rounded-xl border border-stone-200 hover:border-primary/40 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-primary">Email</h3>
                                        <p className="text-sm font-semibold text-slate-800 mt-0.5">info@arunikaglobal.com</p>
                                        <p className="text-xs text-slate-500 mt-1">Kirimkan pertanyaan atau tawaran kerjasama</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-5 bg-background rounded-2xl md:rounded-xl border border-stone-200 hover:border-primary/40 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-primary">Alamat Kantor</h3>
                                        <p className="text-sm font-semibold text-slate-800 mt-0.5">PT Arunika Global Valuindo</p>
                                        <p className="text-xs text-slate-600 leading-relaxed mt-1">
                                            Perum. Citra Puri Majapahit B25, Jl. Ringroad Barat, Kel. Winongo, Kec. Manguharjo, Kota Madiun, Jawa Timur, 63126
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SISI KANAN: Form Kirim Pesan ke WhatsApp */}
                        <div className="lg:col-span-7 bg-background p-8 sm:p-10 rounded-3xl md:rounded-2xl border border-stone-200" data-aos="fade-left">
                            <div className="mb-6 space-y-1">
                                <h3 className="text-xl sm:text-2xl font-bold text-primary">
                                    Kirim Pesan Directly
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-500">
                                    Isi formulir di bawah ini untuk terhubung langsung dengan admin kami via WhatsApp.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                                        Nama Lengkap <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Masukkan nama lengkap Anda"
                                        className="w-full px-4 py-3 rounded-xl md:rounded-lg bg-white border border-stone-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                                        Nomor WhatsApp <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Contoh: 081234567890"
                                        className="w-full px-4 py-3 rounded-xl md:rounded-lg bg-white border border-stone-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                                        Pesan <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tuliskan kebutuhan atau pertanyaan Anda secara rinci..."
                                        className="w-full px-4 py-3 rounded-xl md:rounded-lg bg-white border border-stone-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl md:rounded-lg bg-primary hover:bg-primary/90 text-secondary font-bold text-sm transition-all cursor-pointer"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                    </svg>
                                    <span>Kirim Pesan ke WhatsApp</span>
                                </button>
                            </form>
                        </div>

                    </div>

                    {/* Iframe Google Maps Container */}
                    <div className="w-full aspect-video rounded-3xl md:rounded-2xl overflow-hidden border border-stone-200 relative bg-slate-100 shadow-sm" data-aos="fade-up">
                        <iframe
                            title="Google Maps Lokasi Kantor"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126507.01407338543!2d111.4582845!3d-7.6298319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79be01662fbdd7%3A0x3027a76e352bea0!2sMadiun%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </section>
        </GuestLayout>
    );
}