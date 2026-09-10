import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Footer({ services = [] }) {
    const defaultServices = [
        { title: 'Valuasi Aset & Bisnis', slug: '' },
        { title: 'Studi Kelayakan (Feasibility Study)', slug: '' },
        { title: 'Strategic Advisory', slug: '' },
        { title: 'Restrukturisasi & Corporate Finance', slug: '' },
    ];

    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const displayServices = services && services.length > 0 ? services : defaultServices;

    return (
        <footer id="contact" className="bg-[#0A1F1B] text-slate-300 pt-16 pb-8 border-t border-[#16352E]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14">

                    {/* Brand Profile & Social Media */}
                    <div className="lg:col-span-2 space-y-4">
                        <Link href="/" className="flex items-center group shrink-0 mb-4">
                            <img
                                src="/images/logo-white.png"
                                alt="Arunika Global Valuindo"
                                className="h-16 w-auto object-contain"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/images/logo.png';
                                }}
                            />
                        </Link>
                        <p className="text-xs font-light text-slate-400 leading-relaxed tracking-wide max-w-sm">
                            Layanan valuasi aset, studi kelayakan, dan konsultasi strategi korporasi berstandar global untuk mengakselerasi pertumbuhan bisnis yang berkelanjutan.
                        </p>

                        {/* Social Media Links */}
                        <div className="pt-2 flex items-center gap-3">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#16352E] text-[#ECAE36] hover:bg-[#ECAE36] hover:text-[#1B544D] transition-all flex items-center justify-center" aria-label="Instagram">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#16352E] text-[#ECAE36] hover:bg-[#ECAE36] hover:text-[#1B544D] transition-all flex items-center justify-center" aria-label="LinkedIn">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#16352E] text-[#ECAE36] hover:bg-[#ECAE36] hover:text-[#1B544D] transition-all flex items-center justify-center" aria-label="Twitter">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="mailto:contact@arunika-valuindo.com" className="w-8 h-8 rounded-full bg-[#16352E] text-[#ECAE36] hover:bg-[#ECAE36] hover:text-[#1B544D] transition-all flex items-center justify-center" aria-label="Email Us">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigasi (with > icon) */}
                    <div>
                        <h4 className="text-xs font-medium uppercase text-white mb-4">
                            NAVIGASI
                        </h4>
                        <ul className="space-y-2.5 text-xs font-light tracking-wide text-slate-400">
                            <li>
                                <Link href={route('aboutus')} className="group flex items-center gap-2 hover:text-[#ECAE36] transition-colors">
                                    <span className="text-[#ECAE36] flex items-center transition-transform group-hover:translate-x-1">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span>Tentang Kami</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={route('services.index')} className="group flex items-center gap-2 hover:text-[#ECAE36] transition-colors">
                                    <span className="text-[#ECAE36] flex items-center transition-transform group-hover:translate-x-1">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span>Layanan</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={route('blog.index')} className="group flex items-center gap-2 hover:text-[#ECAE36] transition-colors">
                                    <span className="text-[#ECAE36] flex items-center transition-transform group-hover:translate-x-1">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span>Blog</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={route('privacypolicy')} className="group flex items-center gap-2 hover:text-[#ECAE36] transition-colors">
                                    <span className="text-[#ECAE36] flex items-center transition-transform group-hover:translate-x-1">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span>Privacy Policy</span>
                                </Link>
                            </li>
                            <li>
                                <a href="/#contact" className="group flex items-center gap-2 hover:text-[#ECAE36] transition-colors">
                                    <span className="text-[#ECAE36] flex items-center transition-transform group-hover:translate-x-1">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span>Kontak Kami</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Layanan (with > icon) */}
                    <div>
                        <h4 className="text-xs font-medium uppercase text-white mb-4">
                            LAYANAN
                        </h4>
                        <ul className="space-y-2.5 text-xs font-light tracking-wide text-slate-400">
                            {displayServices.slice(0, 5).map((srv, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={srv.slug ? route('services.show', srv.slug) : route('services.index')}
                                        className="group flex items-center gap-2 hover:text-[#ECAE36] transition-colors"
                                    >
                                        <span className="text-[#ECAE36] flex items-center transition-transform group-hover:translate-x-1">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span className="line-clamp-1">{srv.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kontak Kami (with info icons) */}
                    <div>
                        <h4 className="text-xs font-medium uppercase text-white mb-4">
                            KONTAK KAMI
                        </h4>
                        <ul className="space-y-3 text-xs font-light tracking-wide text-slate-400">
                            <li className="flex items-start gap-2.5">
                                <svg className="w-4 h-4 text-[#ECAE36] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+62215550198" className="hover:text-[#ECAE36] transition-colors">+62 (21) 555-0198</a>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <svg className="w-4 h-4 text-[#ECAE36] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:contact@arunika-valuindo.com" className="hover:text-[#ECAE36] transition-colors break-all">contact@arunika-valuindo.com</a>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <svg className="w-4 h-4 text-[#ECAE36] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Jakarta Selatan, DKI Jakarta, Indonesia</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <svg className="w-4 h-4 text-[#ECAE36] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Senin - Jumat: 08.00 - 17.00 WIB</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Sub Footer */}
                <div className="mt-8 px-7 py-4 rounded-lg bg-[#1B3B35] flex flex-col sm:flex-row items-center justify-between text-xs font-light tracking-wide text-slate-400 gap-4">
                    <div>
                        Copyright © {new Date().getFullYear()} Arunika - Powered by WorkForWorks
                    </div>
                    <Link href={route('privacypolicy')} className="hover:text-[#ECAE36] transition-colors">
                        Kebijakan Privasi
                    </Link>
                </div>

            </div>
            {showBackToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-[#ECAE36] text-[#16352E] flex items-center justify-center shadow-lg hover:bg-[#d99b28] transition-all duration-300"
                    aria-label="Back to top"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 15l7-7 7 7"
                        />
                    </svg>
                </button>
            )}
        </footer>
    );
}
