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
                        <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                            Manajemen Artikel Blog
                        </h2>
                        <p className="text-sm text-slate-500 mt-1">
                            Kelola daftar artikel, konten berita, dan publikasi blog.
                        </p>
                    </div>
                    <Link
                        href={route('admin.articles.create')}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/20"
                    >
                        <span>+ Tambah Artikel Baru</span>
                    </Link>
                </div>
            }
        >
            <Head title="Manajemen Artikel - Admin" />

            <div className="py-8 bg-slate-50/50 min-h-[calc(100vh-8rem)]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">

                    {/* Alert Flash Message */}
                    {flash?.success && (
                        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-sm font-medium text-emerald-800 flex items-center justify-between shadow-sm">
                            <div className="flex items-center gap-2">
                                <span>✅</span>
                                <span>{flash.success}</span>
                            </div>
                        </div>
                    )}

                    {/* Filter & Search Bar */}
                    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
                        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                            <div className="sm:col-span-2">
                                <input
                                    type="text"
                                    placeholder="Cari judul artikel atau ringkasan..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full rounded-xl border-slate-300 text-sm focus:border-indigo-500 focus:ring-indigo-500 placeholder-slate-400"
                                />
                            </div>

                            <div>
                                <select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    className="w-full rounded-xl border-slate-300 text-sm focus:border-indigo-500 focus:ring-indigo-500 text-slate-700"
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
                                    className="w-full rounded-xl bg-slate-800 text-white font-medium text-sm hover:bg-slate-700 transition-colors py-2.5"
                                >
                                    Cari
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Articles Data Table */}
                    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-slate-600">
                                <thead className="bg-slate-50 text-slate-700 uppercase font-semibold text-xs border-b border-slate-200">
                                    <tr>
                                        <th className="px-6 py-4">Judul Artikel</th>
                                        <th className="px-6 py-4">Kategori</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4">Penulis</th>
                                        <th className="px-6 py-4">Tanggal</th>
                                        <th className="px-6 py-4 text-right">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    {articles.data.length > 0 ? (
                                        articles.data.map((item) => (
                                            <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="font-semibold text-slate-800">{item.title}</div>
                                                    <div className="text-xs text-slate-400 mt-0.5 truncate max-w-xs">{item.slug}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="inline-flex px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                                                        {item.category ? item.category.name : 'Umum'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    {getStatusBadge(item.status)}
                                                </td>
                                                <td className="px-6 py-4 text-slate-700">
                                                    {item.author ? item.author.name : 'Admin'}
                                                </td>
                                                <td className="px-6 py-4 text-xs text-slate-500">
                                                    {new Date(item.created_at).toLocaleDateString('id-ID', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                </td>
                                                <td className="px-6 py-4 text-right space-x-2">
                                                    <Link
                                                        href={route('admin.articles.show', item.id)}
                                                        className="inline-flex px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                                                    >
                                                        Detail
                                                    </Link>
                                                    <Link
                                                        href={route('admin.articles.edit', item.id)}
                                                        className="inline-flex px-2.5 py-1 rounded-lg text-xs font-medium bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(item.id, item.title)}
                                                        className="inline-flex px-2.5 py-1 rounded-lg text-xs font-medium bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors"
                                                    >
                                                        Hapus
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="px-6 py-12 text-center text-slate-400">
                                                Belum ada artikel. Klik tombol <span className="font-semibold text-slate-600">"+ Tambah Artikel Baru"</span> untuk membuat artikel pertama Anda.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination links */}
                        {articles.links && articles.links.length > 3 && (
                            <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/50 flex items-center justify-between">
                                <div className="text-xs text-slate-500">
                                    Menampilkan {articles.from || 0} hingga {articles.to || 0} dari total {articles.total} artikel
                                </div>
                                <div className="flex gap-1">
                                    {articles.links.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.url || '#'}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-medium ${link.active
                                                    ? 'bg-indigo-600 text-white'
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
