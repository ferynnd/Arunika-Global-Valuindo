import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const user = usePage().props.auth.user;

    const roles = user?.roles || [];
    const mainRole = roles.length > 0 ? roles[0] : 'Admin';

    return (
        <AuthenticatedLayout
            header={
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1B544D]">
                            Dashboard Admin
                        </h2>
                        <p className="text-sm text-[#52605E] mt-1">
                            Selamat datang kembali, <span className="font-semibold text-[#1B544D]">{user.name}</span>!
                        </p>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#1B544D]/10 text-[#1B544D] border border-[#1B544D]/20 uppercase tracking-wider">
                            <span className="h-2 w-2 rounded-full bg-[#ECAE36] animate-pulse"></span>
                            {mainRole}
                        </span>
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                            Online
                        </span>
                    </div>
                </div>
            }
        >
            <Head title="Dashboard Admin - Arunika Global Valuindo" />

            <div className="py-8 min-h-[calc(100vh-10rem)]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">

                    {/* Welcome Hero Banner */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1B544D] via-[#164943] to-[#0E2C27] p-8 sm:p-10 text-white border border-[#1B544D]">
                        <div className="relative z-10 max-w-2xl">
                            <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#ECAE36] backdrop-blur-md border border-white/10">
                                Arunika Global Valuindo
                            </span>
                            <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white">
                                Portal Manajemen & Konten
                            </h3>
                            <p className="mt-3 text-slate-200 text-sm sm:text-base leading-relaxed">
                                Kelola artikel blog, publikasi berita, dan informasi sistem dengan cepat, terstruktur, dan efisien.
                            </p>
                        </div>
                        <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-[#ECAE36]/10 blur-3xl"></div>
                    </div>

                    {/* Quick Access Action Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Blog Management Card */}
                        <div className="bg-white rounded-2xl border border-[#EAE6DF] p-6 flex flex-col justify-between hover:border-[#1B544D]/40 transition-colors">
                            <div>
                                <div className="h-12 w-12 rounded-xl bg-[#1B544D]/10 text-[#1B544D] flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold text-[#1B544D]">Manajemen Artikel Blog</h4>
                                <p className="text-sm text-[#52605E] mt-2 leading-relaxed">
                                    Buat artikel dengan Rich Text Editor (TipTap), publikasikan berita baru, atau perbarui konten artikel untuk halaman landing page.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-[#F0EDE7] flex items-center justify-between">
                                <span className="text-xs text-[#718783] font-medium">TipTap Editor Siap</span>
                                <Link
                                    href={route('admin.articles.index')}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#1B544D] text-white hover:bg-[#15433E] transition-colors"
                                >
                                    <span>Kelola Artikel</span>
                                    <span>→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Testimonials Card */}
                        <div className="bg-white rounded-2xl border border-[#EAE6DF] p-6 flex flex-col justify-between hover:border-[#1B544D]/40 transition-colors">
                            <div>
                                <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold text-[#1B544D]">Testimoni Klien</h4>
                                <p className="text-sm text-[#52605E] mt-2 leading-relaxed">
                                    Kelola daftar ulasan, masukan, foto profil, dan kutipan kepuasan klien yang ditampilkan di halaman utama website.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-[#F0EDE7] flex items-center justify-between">
                                <span className="text-xs text-[#718783] font-medium">Testimoni Publik</span>
                                <Link
                                    href={route('admin.testimonials.index')}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#1B544D] text-white hover:bg-[#15433E] transition-colors"
                                >
                                    <span>Kelola Testimoni</span>
                                    <span>→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Profile Settings Card */}
                        <div className="bg-white rounded-2xl border border-[#EAE6DF] p-6 flex flex-col justify-between hover:border-[#1B544D]/40 transition-colors">
                            <div>
                                <div className="h-12 w-12 rounded-xl bg-[#ECAE36]/20 text-[#D99B26] flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold text-[#1B544D]">Pengaturan Profil Akun</h4>
                                <p className="text-sm text-[#52605E] mt-2 leading-relaxed">
                                    Perbarui nama lengkap, alamat email, atau ganti kata sandi akun Anda untuk menjaga keamanan akses.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-[#F0EDE7] flex items-center justify-between">
                                <span className="text-xs text-[#718783] font-medium">Status Terverifikasi</span>
                                <Link
                                    href={route('profile.edit')}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#FAF8F5] text-[#1B544D] border border-[#E3DFD7] hover:bg-[#EFECE6] transition-colors"
                                >
                                    <span>Edit Profil</span>
                                    <span>→</span>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}