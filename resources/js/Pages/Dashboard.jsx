import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const user = usePage().props.auth.user;

    const roles = user?.roles || [];
    const mainRole = roles.length > 0 ? roles[0] : 'User';

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
                        <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                            Dashboard Admin
                        </h2>
                        <p className="text-sm text-slate-500 mt-1">
                            Selamat datang kembali, <span className="font-semibold text-slate-700">{user.name}</span>!
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 uppercase tracking-wider">
                            <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
                            {mainRole}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                            Akun Aktif
                        </span>
                    </div>
                </div>
            }
        >
            <Head title="Dashboard Admin" />

            <div className="py-8 bg-slate-50/50 min-h-[calc(100vh-8rem)]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">

                    {/* Welcome Banner */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-800 p-8 text-white shadow-xl">
                        <div className="relative z-10 max-w-2xl">
                            <span className="rounded-lg bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                                Arunika Global Valuindo
                            </span>
                            <h3 className="mt-4 text-2xl font-extrabold sm:text-3xl">
                                Sistem Informasi & Manajemen Admin
                            </h3>
                            <p className="mt-2 text-indigo-100 text-sm leading-relaxed">
                                Anda telah berhasil terautentikasi dan masuk ke portal dashboard. Gunakan navigasi untuk mengelola sistem.
                            </p>
                        </div>
                        <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
                        <div className="absolute right-32 bottom-0 -mb-16 h-48 w-48 rounded-full bg-purple-500/20 blur-2xl"></div>
                    </div>

                    {/* Stats Overview */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Nama Lengkap</p>
                                    <p className="text-base font-bold text-slate-800 mt-1 truncate">{user.name}</p>
                                </div>
                                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                                    👤
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Username</p>
                                    <p className="text-base font-bold text-slate-800 mt-1 truncate">@{user.username || '-'}</p>
                                </div>
                                <div className="h-10 w-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                                    🏷️
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Alamat Email</p>
                                    <p className="text-sm font-bold text-slate-800 mt-1 truncate">{user.email}</p>
                                </div>
                                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                                    ✉️
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Login Terakhir</p>
                                    <p className="text-xs font-bold text-slate-800 mt-1">{formatDate(user.last_login)}</p>
                                </div>
                                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                                    🕒
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Access Card */}
                    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
                        <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <span>⚡</span> Akses Cepat & Profil
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                                <h5 className="font-semibold text-slate-700 text-sm">Informasi Akun</h5>
                                <p className="text-xs text-slate-500 mt-1">Anda terdaftar dengan hak akses <span className="font-semibold text-indigo-600 uppercase">{mainRole}</span>.</p>
                                <div className="mt-4">
                                    <Link
                                        href={route('profile.edit')}
                                        className="inline-flex items-center text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                                    >
                                        Kelola Profil & Passwords →
                                    </Link>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                                <h5 className="font-semibold text-slate-700 text-sm">Keluar dari Sesi</h5>
                                <p className="text-xs text-slate-500 mt-1">Selesai bekerja? Amankan akun Anda dengan mengklik tombol logout.</p>
                                <div className="mt-4">
                                    <Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                        className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100 transition-colors"
                                    >
                                        Keluar (Logout)
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
