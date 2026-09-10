import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Index({ testimonials, filters }) {
    const { flash } = usePage().props;
    const [search, setSearch] = useState(filters.search || '');
    const [statusFilter, setStatusFilter] = useState(filters.status || '');

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(
            route('admin.testimonials.index'),
            { search, status: statusFilter },
            { preserveState: true }
        );
    };

    const handleDelete = (id, author) => {
        if (confirm(`Apakah Anda yakin ingin menghapus testimoni dari "${author}"?`)) {
            router.delete(route('admin.testimonials.destroy', id));
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
                            Manajemen Testimoni Klien
                        </h2>
                        <p className="text-xs sm:text-sm text-[#52605E] mt-0.5">
                            Kelola daftar ulasan, masukan, dan testimoni apresiasi dari klien Arunika.
                        </p>
                    </div>
                    <Link
                        href={route('admin.testimonials.create')}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1B544D] text-white font-semibold text-xs sm:text-sm hover:bg-[#15433E] transition-all"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Tambah Testimoni Baru</span>
                    </Link>
                </div>
            }
        >
            <Head title="Manajemen Testimoni - Admin Arunika" />

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
                                    placeholder="Cari nama klien, jabatan, atau isi kutipan..."
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

                            <div className="flex items-center gap-2">
                                <button
                                    type="submit"
                                    className="w-full py-2.5 px-4 bg-[#1B544D] text-white rounded-xl text-sm font-semibold hover:bg-[#15433E] transition-colors flex items-center justify-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <span>Filter</span>
                                </button>
                                {(search || statusFilter) && (
                                    <Link
                                        href={route('admin.testimonials.index')}
                                        className="py-2.5 px-4 bg-slate-100 text-slate-600 rounded-xl text-sm font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center"
                                    >
                                        Reset
                                    </Link>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* Table Container */}
                    <div className="bg-white rounded-2xl border border-[#EAE6DF] overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-[#FAF8F5] border-b border-[#EAE6DF] text-[#1B544D] font-bold uppercase tracking-wider text-xs">
                                    <tr>
                                        <th className="py-4 px-6">Klien</th>
                                        <th className="py-4 px-6">Jabatan & Perusahaan</th>
                                        <th className="py-4 px-6">Kutipan Testimoni</th>
                                        <th className="py-4 px-6 text-center">Urutan</th>
                                        <th className="py-4 px-6 text-center">Status</th>
                                        <th className="py-4 px-6 text-right">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#EAE6DF]">
                                    {testimonials?.data?.length > 0 ? (
                                        testimonials.data.map((item) => (
                                            <tr key={item.id} className="hover:bg-[#FAF8F5]/60 transition-colors">
                                                <td className="py-4 px-6">
                                                    <div className="flex items-center gap-3">
                                                        {item.avatar ? (
                                                            <img
                                                                src={`/storage/${item.avatar}`}
                                                                alt={item.author}
                                                                className="w-10 h-10 rounded-full object-cover border border-[#E3DFD7]"
                                                            />
                                                        ) : (
                                                            <div className="w-10 h-10 rounded-full bg-[#1B544D]/10 text-[#1B544D] font-bold flex items-center justify-center border border-[#1B544D]/20 text-xs">
                                                                {item.author[0]?.toUpperCase()}
                                                            </div>
                                                        )}
                                                        <div>
                                                            <div className="font-bold text-[#1B544D] text-sm">{item.author}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 text-slate-600 font-medium text-sm">
                                                    {item.role || '-'}
                                                </td>
                                                <td className="py-4 px-6 text-slate-600 max-w-xs sm:max-w-md">
                                                    <p className="line-clamp-2 italic text-xs sm:text-sm leading-relaxed">
                                                        "{item.quote}"
                                                    </p>
                                                </td>
                                                <td className="py-4 px-6 text-center font-mono font-semibold text-slate-600 text-sm">
                                                    {item.sort_order ?? 0}
                                                </td>
                                                <td className="py-4 px-6 text-center">
                                                    {getStatusBadge(item.status)}
                                                </td>
                                                <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                                                    <Link
                                                        href={route('admin.testimonials.edit', item.id)}
                                                        className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#ECAE36]/15 text-[#B8811A] hover:bg-[#ECAE36]/30 transition-colors"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(item.id, item.author)}
                                                        className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors"
                                                    >
                                                        Hapus
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="py-12 text-center text-slate-400">
                                                <div className="w-12 h-12 rounded-2xl bg-[#1B544D]/10 text-[#1B544D] mx-auto mb-3 flex items-center justify-center">
                                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                    </svg>
                                                </div>
                                                <p className="font-medium text-sm">Belum ada testimoni yang ditemukan.</p>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {testimonials?.links?.length > 3 && (
                            <div className="p-4 border-t border-[#EAE6DF] bg-[#FAF8F5] flex items-center justify-between">
                                <div className="text-xs text-slate-500">
                                    Menampilkan {testimonials.from || 0} - {testimonials.to || 0} dari {testimonials.total} testimoni
                                </div>
                                <div className="flex gap-1">
                                    {testimonials.links.map((link, idx) => (
                                        <Link
                                            key={idx}
                                            href={link.url || '#'}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                            className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${
                                                link.active
                                                    ? 'bg-[#1B544D] text-white'
                                                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-[#EAE6DF]'
                                            } ${!link.url ? 'opacity-50 pointer-events-none' : ''}`}
                                        />
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
