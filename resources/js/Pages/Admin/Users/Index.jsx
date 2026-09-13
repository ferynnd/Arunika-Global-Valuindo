import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { showConfirmDialog } from '@/libs/sweetalert';

export default function Index({ admins, filters }) {
    const { flash } = usePage().props;
    const [search, setSearch] = useState(filters?.search || '');
    const [statusFilter, setStatusFilter] = useState(filters?.status || '');

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(
            route('admin.users.index'),
            { search, status: statusFilter },
            { preserveState: true }
        );
    };

    const handleDelete = async (id, name) => {
        const confirmed = await showConfirmDialog({
            title: 'Hapus Pengguna?',
            text: `Apakah Anda yakin ingin menghapus akun "${name}"? Tindakan ini tidak dapat dibatalkan.`,
            confirmButtonText: 'Ya, Hapus Pengguna',
        });

        if (confirmed) {
            router.delete(route('admin.users.destroy', id));
        }
    };

    const getStatusBadge = (isActive) => {
        if (isActive) {
            return (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Aktif
                </span>
            );
        }
        return (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                Non-Aktif
            </span>
        );
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-primary-dark">
                            Manajemen Pengguna & Hak Akses
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                            Kelola daftar administrator sistem, kredensial masuk, dan peran (role) akses menu.
                        </p>
                    </div>
                    <Link
                        href={route('admin.users.create')}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-xs sm:text-sm hover:bg-primary-dark transition-all shadow-2xs"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Tambah Pengguna</span>
                    </Link>
                </div>
            }
        >
            <Head title="Manajemen Pengguna - Admin Arunika" />

            <div className="py-8 w-full min-h-[calc(100vh-10rem)]">
                <div className="w-full px-4 sm:px-6 lg:px-8 space-y-6">

                    {flash?.success && (
                        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-xs sm:text-sm font-medium text-emerald-800 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{flash.success}</span>
                            </div>
                        </div>
                    )}

                    {flash?.error && (
                        <div className="rounded-2xl bg-rose-50 border border-rose-200 p-4 text-xs sm:text-sm font-medium text-rose-800 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                                <svg className="w-5 h-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <span>{flash.error}</span>
                            </div>
                        </div>
                    )}

                    {/* Filter & Search */}
                    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs w-full">
                        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                            <div className="sm:col-span-2">
                                <input
                                    type="text"
                                    placeholder="Cari nama, username, atau email..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary placeholder-slate-400 px-4 py-2.5 shadow-2xs"
                                />
                            </div>

                            <div>
                                <select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    className="w-full rounded-xl border-slate-200 bg-background text-sm focus:border-primary focus:ring-primary text-slate-700 px-4 py-2.5 shadow-2xs"
                                >
                                    <option value="">Semua Status</option>
                                    <option value="active">Aktif</option>
                                    <option value="inactive">Non-Aktif</option>
                                </select>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    type="submit"
                                    className="flex-1 rounded-xl bg-primary text-white font-semibold text-sm px-4 py-2.5 hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                                >
                                    <span>Cari</span>
                                </button>
                                {(search || statusFilter) && (
                                    <Link
                                        href={route('admin.users.index')}
                                        className="rounded-xl bg-slate-100 text-slate-600 font-semibold text-sm px-4 py-2.5 hover:bg-slate-200 transition-colors flex items-center justify-center"
                                    >
                                        Reset
                                    </Link>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* Table */}
                    <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs w-full">
                        <div className="overflow-x-auto w-full">
                            <table className="w-full text-left border-collapse text-sm text-slate-600">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200 text-primary-dark font-bold uppercase tracking-wider text-xs">
                                        <th className="py-4 px-6">Nama & Username</th>
                                        <th className="py-4 px-6">Email</th>
                                        <th className="py-4 px-6">Hak Akses (Role)</th>
                                        <th className="py-4 px-6 text-center">Status</th>
                                        <th className="py-4 px-6 text-center">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {admins?.data && admins.data.length > 0 ? (
                                        admins.data.map((admin) => (
                                            <tr key={admin.id} className="hover:bg-slate-50/60 transition-colors">
                                                <td className="py-4 px-6">
                                                    <div className="font-bold text-primary-dark">{admin.name}</div>
                                                    <div className="text-xs text-slate-400">@{admin.username}</div>
                                                </td>
                                                <td className="py-4 px-6 text-slate-600 text-sm">
                                                    {admin.email}
                                                </td>
                                                <td className="py-4 px-6">
                                                    <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20 text-xs font-semibold uppercase">
                                                        {admin.role || 'Admin'}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-center">
                                                    {getStatusBadge(admin.is_active)}
                                                </td>
                                                <td className="py-4 px-6 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <Link
                                                            href={route('admin.users.edit', admin.id)}
                                                            className="p-2 rounded-xl text-slate-400 hover:text-secondary hover:bg-secondary/10 transition-colors"
                                                            title="Edit"
                                                        >
                                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                            </svg>
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(admin.id, admin.name)}
                                                            className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                                                            title="Hapus"
                                                        >
                                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <polyline points="3 6 5 6 21 6" />
                                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="py-12 text-center text-slate-400 text-sm">
                                                Belum ada data pengguna yang tersedia.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {admins?.links && admins.links.length > 3 && (
                            <div className="p-4 bg-slate-50/50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 w-full">
                                <div className="text-xs text-slate-500">
                                    Menampilkan {admins.from || 0} - {admins.to || 0} dari {admins.total} pengguna
                                </div>
                                <div className="flex gap-1 flex-wrap">
                                    {admins.links.map((link, key) => (
                                        link.url ? (
                                            <Link
                                                key={key}
                                                href={link.url}
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                                                    link.active
                                                        ? 'bg-primary text-white'
                                                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                                                }`}
                                            />
                                        ) : (
                                            <span
                                                key={key}
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                                className="px-3 py-1.5 rounded-xl text-xs text-slate-300 border border-slate-200 opacity-50 cursor-not-allowed"
                                            />
                                        )
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}