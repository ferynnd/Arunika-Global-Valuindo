import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

export default function Error({ status = 404 }) {
    const errors = {
        403: {
            label: 'Akses Ditolak',
            title: 'Anda tidak memiliki izin untuk mengakses halaman ini',
            description:
                'Halaman ini hanya dapat diakses oleh pengguna yang memiliki izin tertentu.',
            icon: 'lock',
        },
        404: {
            label: 'Halaman Tidak Ditemukan',
            title: 'Maaf, halaman yang Anda cari tidak tersedia',
            description:
                'Halaman mungkin telah dipindahkan, dihapus, atau URL yang Anda masukkan tidak tepat. Silakan kembali ke beranda atau jelajahi layanan kami.',
            icon: 'search',
        },
        419: {
            label: 'Sesi Berakhir',
            title: 'Sesi Anda telah berakhir',
            description:
                'Sesi Anda sudah tidak berlaku. Silakan kembali dan coba lagi.',
            icon: 'refresh',
        },
        429: {
            label: 'Terlalu Banyak Permintaan',
            title: 'Mohon tunggu sebentar',
            description:
                'Terlalu banyak permintaan yang dikirim dalam waktu singkat. Silakan coba kembali beberapa saat lagi.',
            icon: 'clock',
        },
        500: {
            label: 'Kesalahan Server',
            title: 'Terjadi kesalahan pada server',
            description:
                'Maaf, terjadi masalah pada sistem kami. Silakan coba kembali beberapa saat lagi.',
            icon: 'server',
        },
        503: {
            label: 'Layanan Tidak Tersedia',
            title: 'Layanan sedang dalam pemeliharaan',
            description:
                'Kami sedang melakukan pemeliharaan sistem. Silakan coba kembali beberapa saat lagi.',
            icon: 'server',
        },
    };

    const error = errors[status] ?? errors[404];

    return (
        <>
        <GuestLayout>
            <Head title={`${status} - ${error.label} | Arunika Global Valuindo`} />

            <div className="min-h-screen bg-white text-text antialiased flex flex-col">

                {/* Main */}
                <main className="flex-1 flex items-center justify-center relative overflow-hidden mt-5">

                    <div className="absolute inset-0 bg-linear-to-b from-white via-white to-[#EFECE6]" />

                    {/* Decorative circles */}
                    <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primaru/5 blur-3xl" />

                    <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />

                    <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center py-16 sm:py-20">

                        {/* Error number */}
                        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">

                            <span className="text-7xl sm:text-9xl font-extrabold text-primaru tracking-tight leading-none">
                                {String(status)[0]}
                            </span>

                            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-secondary to-[#D99B26] flex items-center justify-center shadow-lg shadow-secondary/30">

                                {error.icon === 'lock' && (
                                    <svg
                                        className="w-8 h-8 sm:w-12 sm:h-12 text-primaru"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <rect
                                            x="4"
                                            y="10"
                                            width="16"
                                            height="11"
                                            rx="2"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            d="M8 10V7a4 4 0 018 0v3"
                                        />
                                    </svg>
                                )}

                                {error.icon === 'search' && (
                                    <svg
                                        className="w-8 h-8 sm:w-12 sm:h-12 text-primaru"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <circle cx="11" cy="11" r="7" />
                                        <path
                                            strokeLinecap="round"
                                            d="m20 20-3.5-3.5M9 8l4 6M13 8l-4 6"
                                        />
                                    </svg>
                                )}

                                {error.icon === 'refresh' && (
                                    <svg
                                        className="w-8 h-8 sm:w-12 sm:h-12 text-primaru"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 4v5h5M20 20v-5h-5"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5.5 15a7 7 0 0011.5 1M18.5 9a7 7 0 00-11.5-1"
                                        />
                                    </svg>
                                )}

                                {(error.icon === 'clock' || error.icon === 'server') && (
                                    <svg
                                        className="w-8 h-8 sm:w-12 sm:h-12 text-primaru"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <circle cx="12" cy="12" r="9" />
                                        <path
                                            strokeLinecap="round"
                                            d="M12 7v5l3 2"
                                        />
                                    </svg>
                                )}

                            </div>

                            <span className="text-7xl sm:text-9xl font-extrabold text-primaru tracking-tight leading-none">
                                {String(status).slice(-1)}
                            </span>
                        </div>

                        {/* Label */}
                        <span className="text-xs font-bold uppercase tracking-widest text-primaru block mb-3">
                            {error.label}
                        </span>

                        {/* Title */}
                        <h1 className="text-2xl sm:text-4xl font-bold text-primaru leading-snug">
                            {error.title}
                        </h1>

                        {/* Description */}
                        <p className="mt-4 text-sm sm:text-base text-[#52605E] leading-relaxed max-w-lg mx-auto">
                            {error.description}
                        </p>

                        {/* Actions */}
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

                            <Link
                                href="/"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 pl-6 pr-2.5 py-2.5 rounded-full bg-secondary hover:bg-[#E0A12A] text-white font-semibold text-sm sm:text-base transition-all shadow-md shadow-secondary/30 group"
                            >
                                <span>Kembali ke Beranda</span>

                                <span className="w-8 h-8 rounded-full bg-primaru text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                    <svg
                                        className="w-4 h-4"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                    >
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </span>
                            </Link>

                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-primaru/20 text-primaru font-semibold text-sm sm:text-base hover:bg-primaru/5 transition-all"
                            >
                                Hubungi Kami
                            </Link>

                        </div>

                        {/* Contact */}
                        <div className="mt-14 pt-8 border-t border-[#EAE6DF] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-xs text-[#718783]">

                            <span className="flex items-center gap-1.5">
                                <svg
                                    className="w-3.5 h-3.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>

                                +62 (21) 555-0198
                            </span>

                            <span className="flex items-center gap-1.5">
                                <svg
                                    className="w-3.5 h-3.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>

                                contact@arunika-valuindo.com
                            </span>

                        </div>
                    </div>
                </main>
            </div>
        </GuestLayout>
        </>
    );
}