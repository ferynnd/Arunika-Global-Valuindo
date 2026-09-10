import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const user = usePage().props.auth.user;

    const roles = user?.roles || [];
    const mainRole = roles.length > 0 ? roles[0] : 'Admin';

    const formatDate = (dateString) => {
        if (!dateString) return 'Baru Saja (Sesi Sekarang)';
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1B544D]">
                            Dashboard Admin
                        </h2>
                        <p className="text-xs sm:text-sm text-[#52605E] mt-0.5">
                            Selamat datang kembali, <span className="font-semibold text-[#1B544D]">{user.name}</span>!
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#1B544D]/10 text-[#1B544D] border border-[#1B544D]/20 uppercase tracking-wider">
                            <span className="h-2 w-2 rounded-full bg-[#ECAE36] animate-pulse"></span>
                            {mainRole}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                            Online
                        </span>
                    </div>
                </div>
            }
        >
            <Head title="Dashboard Admin - Arunika Global Valuindo" />

            <div className="py-8 min-h-[calc(100vh-10rem)]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">

                    {/* Welcome Hero Banner */}
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1B544D] via-[#164943] to-[#0E2C27] p-8 sm:p-10 text-white shadow-xl shadow-[#1B544D]/15">
                        <div className="relative z-10 max-w-2xl">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#ECAE36] backdrop-blur-md border border-white/10">
                                Arunika Global Valuindo
                            </span>
                            <h3 className="mt-4 text-2xl font-extrabold sm:text-3xl text-white">
                                Portal Manajemen & Konten
                            </h3>
                            <p className="mt-2 text-slate-300 text-xs sm:text-sm leading-relaxed">
                                Kelola artikel blog, publikasi berita, dan informasi sistem dengan cepat, terstruktur, dan efisien.
                            </p>
                        </div>
                        <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-[#ECAE36]/10 blur-3xl"></div>
                    </div>

                    {/* Stats Overview */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className="bg-white rounded-2xl p-5 border border-[#EAE6DF] shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] font-bold text-[#718783] uppercase tracking-wider">Nama Lengkap</p>
                                    <p className="text-sm font-bold text-[#1B544D] mt-1 truncate">{user.name}</p>
                                </div>
                                <div className="h-10 w-10 rounded-xl bg-[#1B544D]/10 text-[#1B544D] flex items-center justify-center font-bold">
                                    👤
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-5 border border-[#EAE6DF] shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] font-bold text-[#718783] uppercase tracking-wider">Username</p>
                                    <p className="text-sm font-bold text-[#1B544D] mt-1 truncate">@{user.username || '-'}</p>
                                </div>
                                <div className="h-10 w-10 rounded-xl bg-[#ECAE36]/20 text-[#D99B26] flex items-center justify-center font-bold">
                                    🏷️
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-5 border border-[#EAE6DF] shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] font-bold text-[#718783] uppercase tracking-wider">Alamat Email</p>
                                    <p className="text-xs font-bold text-[#1B544D] mt-1 truncate">{user.email}</p>
                                </div>
                                <div className="h-10 w-10 rounded-xl bg-[#1B544D]/10 text-[#1B544D] flex items-center justify-center font-bold">
                                    ✉️
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-5 border border-[#EAE6DF] shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] font-bold text-[#718783] uppercase tracking-wider">Sesi Terakhir</p>
                                    <p className="text-xs font-bold text-[#1B544D] mt-1">{formatDate(user.last_login)}</p>
                                </div>
                                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                                    🕒
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Access Action Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Blog Management Card */}
                        <div className="bg-white rounded-3xl border border-[#EAE6DF] p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                            <div>
                                <div className="h-12 w-12 rounded-2xl bg-[#1B544D]/10 text-[#1B544D] flex items-center justify-center text-xl font-bold mb-4">
                                    📝
                                </div>
                                <h4 className="text-base font-bold text-[#1B544D]">Manajemen Artikel Blog</h4>
                                <p className="text-xs text-[#52605E] mt-1 leading-relaxed">
                                    Buat artikel dengan Rich Text Editor (TipTap), publikasikan berita baru, atau perbarui konten artikel untuk halaman landing page.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-[#F0EDE7] flex items-center justify-between">
                                <span className="text-[11px] text-[#718783] font-medium">TipTap Editor Siap</span>
                                <Link
                                    href={route('admin.articles.index')}
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#1B544D] text-white hover:bg-[#15433E] transition-all shadow-sm"
                                >
                                    <span>Kelola Artikel</span>
                                    <span>→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Testimonials Card */}
                        <div className="bg-white rounded-3xl border border-[#EAE6DF] p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                            <div>
                                <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl font-bold mb-4">
                                    💬
                                </div>
                                <h4 className="text-base font-bold text-[#1B544D]">Testimoni Klien</h4>
                                <p className="text-xs text-[#52605E] mt-1 leading-relaxed">
                                    Kelola daftar ulasan, masukan, foto profil, dan kutipan kepuasan klien yang ditampilkan di halaman utama website.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-[#F0EDE7] flex items-center justify-between">
                                <span className="text-[11px] text-[#718783] font-medium">Testimoni Publik</span>
                                <Link
                                    href={route('admin.testimonials.index')}
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#1B544D] text-white hover:bg-[#15433E] transition-all shadow-sm"
                                >
                                    <span>Kelola Testimoni</span>
                                    <span>→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Profile Settings Card */}
                        <div className="bg-white rounded-3xl border border-[#EAE6DF] p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                            <div>
                                <div className="h-12 w-12 rounded-2xl bg-[#ECAE36]/20 text-[#D99B26] flex items-center justify-center text-xl font-bold mb-4">
                                    ⚙️
                                </div>
                                <h4 className="text-base font-bold text-[#1B544D]">Pengaturan Profil Akun</h4>
                                <p className="text-xs text-[#52605E] mt-1 leading-relaxed">
                                    Perbarui nama lengkap, alamat email, atau ganti kata sandi akun Anda untuk menjaga keamanan akses.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-[#F0EDE7] flex items-center justify-between">
                                <span className="text-[11px] text-[#718783] font-medium">Status Terverifikasi</span>
                                <Link
                                    href={route('profile.edit')}
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#FAF8F5] text-[#1B544D] border border-[#E3DFD7] hover:bg-[#EFECE6] transition-all"
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
