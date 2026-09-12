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
                                <svg className="w-4 h-4 text-secondary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                </svg>
                                <a href="https://wa.me/6282331144447" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">082331144447</a>
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
                                <a className="hover:text-secondary transition-colors break-all" href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.16707452772235!2d111.51052062740021!3d-7.610495752841818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bfb20858737d%3A0x7de0ce8e07628d84!2sCitra%20Puri%20Majapahit%2C%20Winongo%2C%20Kec.%20Manguharjo%2C%20Kota%20Madiun%2C%20Jawa%20Timur%2063126!5e0!3m2!1sid!2sid!4v1789191796445!5m2!1sid!2sid"> Perum. Citra Puri Majapahit B25, Jl. Ringroad Barat, Kel. Winongo, Kec. Manguharjo, Kota Madiun, Jawa Timur, 63126</a>
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
                        Copyright © {new Date().getFullYear()} Arunika - Powered by <a href="https://workforworks.com" target='_blank' className='hover:text-white hover:underline'>WorkForWorks</a>
                    </span>
                    <Link href={route('privacypolicy')} className="hover:text-secondary transition-colors">
                        Kebijakan Privasi
                    </Link>
                </div>

            </div>
        </footer>
    );
}