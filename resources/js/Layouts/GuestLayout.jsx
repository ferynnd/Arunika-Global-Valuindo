import { useState, useEffect } from 'react';
import Footer from '@/Pages/Components/Footer';
import Header from '@/Pages/Components/Header';
import { Head } from '@inertiajs/react'; // 1. Import Head

export default function GuestLayout({ auth, title, description, activePage, children }) {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        /* Tambahkan w-full dan overflow-x-hidden di sini */
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-white text-text font-normal tracking-wide antialiased selection:bg-[#ECAE36] selection:text-[#1B544D] relative">
            <Head>
                <title>{title ? `${title}` : 'Konsultan Manajemen & Penasihat Bisnis'}</title>
                <meta name="description" content={description || 'Arunika Global Valuindo - Konsultan Manajemen & Penasihat Bisnis'} />
            </Head>

            <Header auth={auth} title={title} activePage={activePage} />
            
            {/* Bungkus children dengan w-full dan overflow-hidden */}
            <main className="grow w-full overflow-x-hidden">
                {children}
            </main>

            {showButton && (
                <button
                    type="button"
                    onClick={scrollToTop}
                    aria-label="Kembali ke atas"
                    className="fixed bottom-8 left-8 z-50 p-3.5 rounded-xl bg-accent text-white shadow-xl border border-secondary/30 hover:bg-accent/90 hover:scale-110 transition-all duration-300 cursor-pointer flex items-center justify-center group"
                >
                    <svg
                        className="w-4 h-4 transform -rotate-90 group-hover:-translate-y-0.5 transition-transform"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </button>
            )}

            <Footer />
        </div>
    );
}