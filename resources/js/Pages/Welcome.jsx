import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
            <Head title="Selamat Datang - PT Arunika Global Valuindo" />

            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Brand Logo */}
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30 text-xl">
                                A
                            </div>
                            <div>
                                <span className="font-bold text-lg text-white tracking-wide block leading-tight">
                                    ARUNIKA
                                </span>
                                <span className="text-[10px] text-indigo-400 font-medium tracking-widest uppercase block">
                                    Global Valuindo
                                </span>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
                            <a href="#beranda" className="hover:text-indigo-400 transition-colors">Beranda</a>
                            <a href="#layanan" className="hover:text-indigo-400 transition-colors">Layanan</a>
                            <a href="#tentang" className="hover:text-indigo-400 transition-colors">Tentang Kami</a>
                            <a href="#kontak" className="hover:text-indigo-400 transition-colors">Kontak</a>
                        </div>

                        {/* Auth Buttons */}
                        <div className="flex items-center space-x-3">
                            {auth?.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2"
                                >
                                    <span>Dashboard</span>
                                    <span>→</span>
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
                                    >
                                        Masuk
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/20"
                                    >
                                        Daftar
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="beranda" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[140px] -z-10"></div>
                <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] -z-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-8">
                        <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
                        Solusi Valuasi & Konsultasi Terpercaya
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
                        Mengakselerasi Pertumbuhan & <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Nilai Bisnis Anda</span>
                    </h1>

                    <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        PT Arunika Global Valuindo hadir memberikan layanan penilaian profesional, konsultasi manajemen terpadu, dan solusi strategi untuk mendukung kesuksesan bisnis Anda.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#layanan"
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/30 text-center"
                        >
                            Jelajahi Layanan Kami
                        </a>
                        {!auth?.user && (
                            <Link
                                href={route('login')}
                                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 text-slate-200 font-semibold border border-slate-700 hover:bg-slate-700 transition-all text-center"
                            >
                                Portal Masuk Admin
                            </Link>
                        )}
                    </div>

                    {/* Stats Metrics */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-10 border-t border-slate-800/80">
                        <div>
                            <p className="text-3xl font-extrabold text-white">99%</p>
                            <p className="text-sm text-slate-400 mt-1">Kepuasan Klien</p>
                        </div>
                        <div>
                            <p className="text-3xl font-extrabold text-indigo-400">100+</p>
                            <p className="text-sm text-slate-400 mt-1">Proyek Selesai</p>
                        </div>
                        <div>
                            <p className="text-3xl font-extrabold text-purple-400">24/7</p>
                            <p className="text-sm text-slate-400 mt-1">Dukungan Profesional</p>
                        </div>
                        <div>
                            <p className="text-3xl font-extrabold text-white">10+</p>
                            <p className="text-sm text-slate-400 mt-1">Tahun Pengalaman</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="layanan" className="py-24 bg-slate-950/60 border-y border-slate-800/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">
                            Layanan Unggulan
                        </h2>
                        <p className="text-3xl sm:text-4xl font-bold text-white">
                            Solusi Komprehensif Untuk Kebutuhan Anda
                        </p>
                        <p className="text-slate-400 mt-3 text-sm">
                            Kami menyediakan berbagai macam layanan yang disesuaikan dengan standar industri terkini.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Service Card 1 */}
                        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 group">
                            <div className="h-14 w-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-2xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                📊
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Konsultasi Valuasi</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Penilaian aset dan bisnis yang independen, akurat, serta transparan sesuai dengan regulasi dan standar standar berlaku.
                            </p>
                        </div>

                        {/* Service Card 2 */}
                        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 group">
                            <div className="h-14 w-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold text-2xl mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
                                🎯
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Strategi & Manajemen</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Pendampingan manajemen strategis untuk membantu pengambilan keputusan bisnis secara terukur dan efektif.
                            </p>
                        </div>

                        {/* Service Card 3 */}
                        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1 group">
                            <div className="h-14 w-14 rounded-2xl bg-pink-500/10 text-pink-400 flex items-center justify-center font-bold text-2xl mb-6 group-hover:bg-pink-600 group-hover:text-white transition-all">
                                💡
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Pelatihan Industri</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Program pelatihan dan workshop untuk meningkatkan kapasitas SDM perusahaan dalam bidang penilaian dan analisis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="tentang" className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">
                                Tentang Kami
                            </h2>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                                PT Arunika Global Valuindo
                            </h3>
                            <p className="text-slate-300 text-base leading-relaxed mb-4">
                                Kami adalah perusahaan profesional yang bergerak di bidang jasa konsultan valuasi dan analisis terpadu. Berkomitmen tinggi terhadap integritas, ketepatan, serta kepuasan klien.
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                Dengan didukung oleh tim berpengalaman dan ahli di bidangnya, kami siap mendampingi perkembangan organisasi dan bisnis Anda ke tingkat selanjutnya.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-2">
                                    <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-xs text-white border-2 border-slate-900">AS</div>
                                    <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center font-bold text-xs text-white border-2 border-slate-900">FF</div>
                                    <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-xs text-white border-2 border-slate-900">AG</div>
                                </div>
                                <span className="text-xs text-slate-400 font-medium">Didukung oleh Tim Ahli Berlisensi</span>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-video rounded-3xl bg-gradient-to-tr from-indigo-900/60 to-purple-900/60 border border-slate-800 p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                                <div className="absolute -right-10 -bottom-10 h-48 w-48 bg-indigo-500/20 rounded-full blur-2xl"></div>
                                <div className="h-12 w-12 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-2xl text-white">
                                    ✨
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-white mb-2">Visi Kami</p>
                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        "Menjadi mitra valuasi dan konsultasi bisnis terdepan di Indonesia yang terpercaya, profesional, dan berdampak positif."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="kontak" className="border-t border-slate-800 bg-slate-950 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-sm">
                                A
                            </div>
                            <span className="font-bold text-slate-200 text-sm">
                                PT Arunika Global Valuindo
                            </span>
                        </div>

                        <p className="text-xs text-slate-500 text-center md:text-left">
                            &copy; {new Date().getFullYear()} PT Arunika Global Valuindo. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
