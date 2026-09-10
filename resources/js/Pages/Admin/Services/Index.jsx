import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Index({ services, filters }) {
    const { flash } = usePage().props;
    const [search, setSearch] = useState(filters.search || '');
    const [statusFilter, setStatusFilter] = useState(filters.status || '');

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(
            route('admin.services.index'),
            { search, status: statusFilter },
            { preserveState: true }
        );
    };

    const handleDelete = (id, title) => {
        if (confirm(`Apakah Anda yakin ingin menghapus layanan "${title}"?`)) {
            router.delete(route('admin.services.destroy', id));
        }
    };

    const getStatusBadge = (status) => {
        if (status === 'active') {
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
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1B544D]">
                            Manajemen Layanan
                        </h2>
                        <p className="text-xs sm:text-sm text-[#52605E] mt-0.5">
                            Kelola daftar layanan korporasi, deskripsi, dan fitur keunggulan Arunika.
                        </p>
                    </div>
                    <Link
                        href={route('admin.services.create')}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1B544D] text-white font-semibold text-xs sm:text-sm hover:bg-[#15433E] transition-all"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Tambah Layanan Baru</span>
                    </Link>
                </div>
            }
        >
            <Head title="Manajemen Layanan - Admin Arunika" />

            <div className="py-8 min-h-[calc(100vh-10rem)]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">

                    {/* Alert Flash Message */}
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

                    {/* Filter & Search Bar */}
                    <div className="bg-white rounded-2xl border border-[#EAE6DF] p-5">
                        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                            <div className="sm:col-span-2">
                                <input
                                    type="text"
                                    placeholder="Cari nama layanan atau deskripsi..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D] placeholder-slate-400 px-4 py-2.5"
                                />
                            </div>

                            <div>
                                <select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-sm focus:border-[#1B544D] focus:ring-[#1B544D] text-slate-700 px-4 py-2.5"
                                >
                                    <option value="">Semua Status</option>
                                    <option value="active">Aktif</option>
                                    <option value="inactive">Non-Aktif</option>
                                </select>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    type="submit"
                                    className="flex-1 rounded-xl bg-[#1B544D] text-white font-semibold text-sm px-4 py-2.5 hover:bg-[#15433E] transition-colors flex items-center justify-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <span>Cari</span>
                                </button>
                                {(search || statusFilter) && (
                                    <Link
                                        href={route('admin.services.index')}
                                        className="rounded-xl bg-slate-100 text-slate-600 font-semibold text-sm px-4 py-2.5 hover:bg-slate-200 transition-colors flex items-center justify-center"
                                    >
                                        Reset
                                    </Link>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* Service Table / List */}
                    <div className="bg-white rounded-2xl border border-[#EAE6DF] overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead>
                                    <tr className="bg-[#FAF8F5] border-b border-[#EAE6DF] text-[#1B544D] font-bold uppercase tracking-wider text-xs">
                                        <th className="py-4 px-6">Layanan</th>
                                        <th className="py-4 px-6">Urutan</th>
                                        <th className="py-4 px-6">Fitur Utama</th>
                                        <th className="py-4 px-6">Status</th>
                                        <th className="py-4 px-6 text-right">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#EAE6DF]">
                                    {services.data.length > 0 ? (
                                        services.data.map((service) => (
                                            <tr key={service.id} className="hover:bg-[#FDFBF7] transition-colors">
                                                <td className="py-4 px-6">
                                                    <div className="flex items-center gap-4">
                                                        {service.thumbnail ? (
                                                            <img
                                                                src={`/storage/${service.thumbnail}`}
                                                                alt={service.title}
                                                                className="w-12 h-12 rounded-xl object-cover border border-[#EAE6DF] shrink-0"
                                                            />
                                                        ) : (
                                                            <div className="w-12 h-12 rounded-xl bg-[#1B544D]/10 text-[#1B544D] flex items-center justify-center font-bold shrink-0 border border-[#1B544D]/20">
                                                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                                                </svg>
                                                            </div>
                                                        )}
                                                        <div>
                                                            <Link
                                                                href={route('admin.services.show', service.id)}
                                                                className="font-bold text-slate-800 hover:text-[#1B544D] transition-colors text-sm sm:text-base line-clamp-1"
                                                            >
                                                                {service.title}
                                                            </Link>
                                                            <div className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                                                                {service.excerpt || 'Tidak ada ringkasan'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 font-semibold text-slate-600">
                                                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs">
                                                        #{service.sort_order}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6">
                                                    {service.features && service.features.length > 0 ? (
                                                        <div className="flex flex-wrap gap-1 max-w-xs">
                                                            {service.features.slice(0, 3).map((feat, idx) => (
                                                                <span key={idx} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#FAF8F5] text-xs text-[#1B544D] border border-[#EAE6DF]">
                                                                    <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                                    </svg>
                                                                    <span>{feat}</span>
                                                                </span>
                                                            ))}
                                                            {service.features.length > 3 && (
                                                                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-xs text-slate-500">
                                                                    +{service.features.length - 3} lainnya
                                                                </span>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        <span className="text-xs text-slate-400">-</span>
                                                    )}
                                                </td>
                                                <td className="py-4 px-6">
                                                    {getStatusBadge(service.status)}
                                                </td>
                                                <td className="py-4 px-6 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <Link
                                                            href={route('admin.services.show', service.id)}
                                                            className="p-2 rounded-xl text-slate-500 hover:text-[#1B544D] hover:bg-[#1B544D]/10 transition-colors"
                                                            title="Detail"
                                                        >
                                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                                                <circle cx="12" cy="12" r="3"/>
                                                            </svg>
                                                        </Link>
                                                        <Link
                                                            href={route('admin.services.edit', service.id)}
                                                            className="p-2 rounded-xl text-slate-500 hover:text-[#ECAE36] hover:bg-[#ECAE36]/10 transition-colors"
                                                            title="Edit"
                                                        >
                                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                                                            </svg>
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(service.id, service.title)}
                                                            className="p-2 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                                                            title="Hapus"
                                                        >
                                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <polyline points="3 6 5 6 21 6"/>
                                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="py-12 text-center text-slate-400 text-sm">
                                                Belum ada data layanan yang tersedia.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {services.links && services.links.length > 3 && (
                            <div className="p-4 bg-[#FAF8F5] border-t border-[#EAE6DF] flex items-center justify-between">
                                <div className="text-xs text-slate-500">
                                    Menampilkan {services.from || 0} - {services.to || 0} dari {services.total} layanan
                                </div>
                                <div className="flex gap-1">
                                    {services.links.map((link, key) => (
                                        link.url ? (
                                            <Link
                                                key={key}
                                                href={link.url}
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                                                    link.active
                                                        ? 'bg-[#1B544D] text-[#ECAE36]'
                                                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-[#EAE6DF]'
                                                }`}
                                            />
                                        ) : (
                                            <span
                                                key={key}
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                                className="px-3 py-1.5 rounded-xl text-xs text-slate-300 border border-[#EAE6DF]"
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
