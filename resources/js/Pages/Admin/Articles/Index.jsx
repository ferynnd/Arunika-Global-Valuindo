import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Index({ articles, categories, filters }) {
    const { flash } = usePage().props;
    const [search, setSearch] = useState(filters.search || '');
    const [statusFilter, setStatusFilter] = useState(filters.status || '');
    const [categoryFilter, setCategoryFilter] = useState(filters.category_id || '');

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(
            route('admin.articles.index'),
            { search, status: statusFilter, category_id: categoryFilter },
            { preserveState: true }
        );
    };

    const handleDelete = (id, title) => {
        if (confirm(`Apakah Anda yakin ingin menghapus artikel "${title}"?`)) {
            router.delete(route('admin.articles.destroy', id));
        }
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'published':
                return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Published</span>;
            case 'draft':
                return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">Draft</span>;
            default:
                return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">Archived</span>;
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1B544D]">
                            Manajemen Artikel Blog
                        </h2>
                        <p className="text-xs sm:text-sm text-[#52605E] mt-0.5">
                            Kelola daftar artikel, konten berita, dan publikasi blog landing page.
                        </p>
                    </div>
                    <Link
                        href={route('admin.articles.create')}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1B544D] text-white font-semibold text-xs sm:text-sm hover:bg-[#15433E] transition-all"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Tambah Artikel Baru</span>
                    </Link>
                </div>
            }
        >
            <Head title="Manajemen Artikel - Admin Arunika" />

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
                                    placeholder="Cari judul artikel atau ringkasan..."
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
                                    <option value="published">Published</option>
                                    <option value="draft">Draft</option>
                                    <option value="archived">Archived</option>
                                </select>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    type="submit"
                                    className="w-full rounded-xl bg-[#1B544D] text-white font-semibold text-sm hover:bg-[#15433E] transition-colors py-2.5 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <span>Cari</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Articles Data Table */}
                    <div className="bg-white rounded-2xl border border-[#EAE6DF] overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-slate-600">
                                <thead className="bg-[#F8F6F2] text-[#1B544D] uppercase font-bold text-xs border-b border-[#EAE6DF]">
                                    <tr>
                                        <th className="px-6 py-4">Judul Artikel</th>
                                        <th className="px-6 py-4">Kategori</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4">Penulis</th>
                                        <th className="px-6 py-4">Tanggal</th>
                                        <th className="px-6 py-4 text-center">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#EAE6DF]/60">
                                    {articles.data.length > 0 ? (
                                        articles.data.map((item) => (
                                            <tr key={item.id} className="hover:bg-[#FAF8F5]/80 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="font-bold text-[#1B544D] text-sm">{item.title}</div>
                                                    <div className="text-xs text-[#718783] mt-0.5 truncate max-w-xs">{item.slug}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-[#EFECE6] text-[#1B544D]">
                                                        {item.category ? item.category.name : 'Umum'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    {getStatusBadge(item.status)}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-slate-700">
                                                    {item.author ? item.author.name : 'Admin'}
                                                </td>
                                                <td className="px-6 py-4 text-xs text-slate-500">
                                                    {new Date(item.created_at).toLocaleDateString('id-ID', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <Link
                                                            href={route('admin.articles.show', item.id)}
                                                            className="p-2 rounded-xl text-slate-500 hover:text-[#1B544D] hover:bg-[#1B544D]/10 transition-colors"
                                                            title="Detail"
                                                        >
                                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                                <circle cx="12" cy="12" r="3" />
                                                            </svg>
                                                        </Link>
                                                        <Link
                                                            href={route('admin.articles.edit', item.id)}
                                                            className="p-2 rounded-xl text-slate-500 hover:text-[#ECAE36] hover:bg-[#ECAE36]/10 transition-colors"
                                                            title="Edit"
                                                        >
                                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                            </svg>
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(item.id, item.title)}
                                                            className="p-2 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
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
                                            <td colSpan="6" className="px-6 py-12 text-center text-slate-400 text-sm">
                                                Belum ada artikel. Klik tombol <span className="font-semibold text-[#1B544D]">"+ Tambah Artikel Baru"</span> untuk membuat artikel pertama Anda.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination links */}
                        {articles.links && articles.links.length > 3 && (
                            <div className="px-6 py-4 border-t border-[#EAE6DF] bg-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-3">
                                <div className="text-xs text-slate-500">
                                    Menampilkan {articles.from || 0} hingga {articles.to || 0} dari total {articles.total} artikel
                                </div>
                                <div className="flex gap-1">
                                    {articles.links.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.url || '#'}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                            className={`px-3 py-1.5 rounded-xl text-xs font-medium ${link.active
                                                ? 'bg-[#1B544D] text-white'
                                                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                                } ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}`}
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
