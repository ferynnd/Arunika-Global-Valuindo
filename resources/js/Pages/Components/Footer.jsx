import { Link } from '@inertiajs/react';
export default function Footer({ services = [] }) {
    const defaultServices = [
        { title: 'Strategic Finance', slug: '' },
        { title: 'Business Advisory', slug: '' },
        { title: 'Sustainability, Community Development & Social Impact', slug: '' },
    ];
    const displayServices = services && services.length > 0 ? services : defaultServices;

    return (
        <footer id="contact" className="font-body bg-primary-dark text-slate-300 pt-16 pb-8 border-t border-[#1B544D]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10 pb-14">
                    <div className="lg:col-span-2 space-y-4">
                        <Link href="/" className="flex items-center group shrink-0 mb-4">
                            <img
                                src="/images/logo-white.png"
                                alt="Arunika Global Valuindo"
                                className="h-24 w-auto object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/images/logo.png';
                                }}
                            />
                        </Link>
                        <p className="text-sm font-light text-slate-400 leading-relaxed tracking-wide max-w-sm">
                            PT Arunika Global Valuindo adalah perusahaan Business Transformation & Advisory mitra strategis bagi bisnis dan organisasi dalam membangun fondasi kuat, meningkatkan kinerja, dan menciptakan keberlanjutan.
                        </p>

                        <div className="pt-2 flex items-center gap-3">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#1B544D] text-secondary hover:bg-[#1B544D]/80 transition-all flex items-center justify-center" aria-label="Instagram">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#1B544D] text-secondary hover:bg-[#1B544D]/80 transition-all flex items-center justify-center" aria-label="LinkedIn">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#1B544D] text-secondary hover:bg-[#1B544D]/80 transition-all flex items-center justify-center" aria-label="Twitter">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="mailto:contact@arunika-valuindo.com" className="w-8 h-8 rounded-full bg-[#1B544D] text-secondary hover:bg-[#1B544D]/80 transition-all flex items-center justify-center" aria-label="Email Us">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-1 space-y-4">
                        <h4 className="font-heading text-md font-semibold uppercase text-white mb-4 tracking-wider">
                            NAVIGASI
                        </h4>
                        <ul className="space-y-2.5 text-sm tracking-wide text-slate-400">
                            <li>
                                <Link href={route('aboutus')} className="group flex items-center gap-2 hover:text-secondary transition-colors">
                                    <span className="text-secondary flex items-center transition-transform group-hover:translate-x-1">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span>Tentang Kami</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={route('services.index')} className="group flex items-center gap-2 hover:text-secondary transition-colors">
                                    <span className="text-secondary flex items-center transition-transform group-hover:translate-x-1">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span>Layanan</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={route('blog.index')} className="group flex items-center gap-2 hover:text-secondary transition-colors">
                                    <span className="text-secondary flex items-center transition-transform group-hover:translate-x-1">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span>Blog</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={route('privacypolicy')} className="group flex items-center gap-2 hover:text-secondary transition-colors">
                                    <span className="text-secondary flex items-center transition-transform group-hover:translate-x-1">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span>Privacy Policy</span>
                                </Link>
                            </li>
                            <li>
                                <a href="/#contact" className="group flex items-center gap-2 hover:text-secondary transition-colors">
                                    <span className="text-secondary flex items-center transition-transform group-hover:translate-x-1">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span>Kontak Kami</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-1 space-y-4">
                        <h4 className="font-heading text-md font-semibold uppercase text-white mb-4 tracking-wider">
                            LAYANAN
                        </h4>
                        <ul className="space-y-2.5 text-sm tracking-wide text-slate-400">
                            {displayServices.slice(0, 5).map((srv, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={srv.slug ? route('services.show', srv.slug) : route('services.index')}
                                        className="group flex items-start gap-2 hover:text-secondary transition-colors"
                                    >
                                        <span className="text-secondary shrink-0 pt-0.5 transition-transform group-hover:translate-x-1">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span className="leading-relaxed">{srv.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="font-heading text-md font-semibold uppercase text-white mb-4 tracking-wider">
                            KONTAK KAMI
                        </h4>
                        <ul className="space-y-3 text-sm tracking-wide text-slate-400">
                            <li className="flex items-start gap-2.5">
                                <svg className="w-4 h-4 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="https://wa.me/6282331144447" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">082331144447 (WhatsApp)</a>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <svg className="w-4 h-4 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:info@arunikaglobalvaluindo.co.id" className="hover:text-secondary transition-colors break-all">info@arunikaglobalvaluindo.co.id</a>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <svg className="w-4 h-4 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Perum. Citra Puri Majapahit B25, Jl. Ringroad Barat, Kel. Winongo, Kec. Manguharjo, Kota Madiun, Jawa Timur, 63126</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <svg className="w-4 h-4 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Senin - Jumat: 08.00 - 17.00 WIB</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-8 px-3 md:px-7 text-xs md:text-sm py-4 rounded-lg bg-primary/10 border border-primary/20 flex flex-col sm:flex-row items-center justify-between font-light tracking-wide text-slate-400 gap-4">
                    <span>
                        Copyright © {new Date().getFullYear()} Arunika - Powered by WorkForWorks
                    </span>
                    <Link href={route('privacypolicy')} className="hover:text-secondary transition-colors">
                        Kebijakan Privasi
                    </Link>
                </div>

            </div>
        </footer>
    );
}