import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Edit({ article, categories }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT',
        title: article.title || '',
        category_id: article.category_id || '',
        excerpt: article.excerpt || '',
        content: article.content || '',
        status: article.status || 'draft',
        thumbnail: null,
        meta_title: article.meta_title || '',
        meta_description: article.meta_description || '',
        meta_keywords: article.meta_keywords || '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.articles.update', article.id));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                            Edit Artikel Blog
                        </h2>
                        <p className="text-sm text-slate-500 mt-1">
                            Perbarui informasi dan konten artikel #{article.id}.
                        </p>
                    </div>
                    <Link
                        href={route('admin.articles.index')}
                        className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors"
                    >
                        ← Kembali ke Daftar
                    </Link>
                </div>
            }
        >
            <Head title={`Edit: ${article.title} - Admin`} />

            <div className="py-8 bg-slate-50/50 min-h-[calc(100vh-8rem)]">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm">
                        <form onSubmit={submit} className="space-y-6">

                            {/* Judul Artikel */}
                            <div>
                                <label htmlFor="title" className="block text-sm font-semibold text-slate-700 mb-1">
                                    Judul Artikel <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    className="w-full rounded-xl border-slate-300 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    required
                                />
                                {errors.title && <div className="text-xs text-rose-500 mt-1">{errors.title}</div>}
                            </div>

                            {/* Kategori & Status */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="category_id" className="block text-sm font-semibold text-slate-700 mb-1">
                                        Kategori Artikel
                                    </label>
                                    <select
                                        id="category_id"
                                        value={data.category_id}
                                        onChange={(e) => setData('category_id', e.target.value)}
                                        className="w-full rounded-xl border-slate-300 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    >
                                        <option value="">Pilih Kategori (Opsional)</option>
                                        {categories.map((cat) => (
                                            <option key={cat.id} value={cat.id}>
                                                {cat.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.category_id && <div className="text-xs text-rose-500 mt-1">{errors.category_id}</div>}
                                </div>

                                <div>
                                    <label htmlFor="status" className="block text-sm font-semibold text-slate-700 mb-1">
                                        Status Publikasi <span className="text-rose-500">*</span>
                                    </label>
                                    <select
                                        id="status"
                                        value={data.status}
                                        onChange={(e) => setData('status', e.target.value)}
                                        className="w-full rounded-xl border-slate-300 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        required
                                    >
                                        <option value="draft">Draft (Simpan Sementara)</option>
                                        <option value="published">Published (Publikasikan)</option>
                                        <option value="archived">Archived (Arsip)</option>
                                    </select>
                                    {errors.status && <div className="text-xs text-rose-500 mt-1">{errors.status}</div>}
                                </div>
                            </div>

                            {/* Excerpt */}
                            <div>
                                <label htmlFor="excerpt" className="block text-sm font-semibold text-slate-700 mb-1">
                                    Ringkasan Singkat (Excerpt)
                                </label>
                                <textarea
                                    id="excerpt"
                                    rows="2"
                                    value={data.excerpt}
                                    onChange={(e) => setData('excerpt', e.target.value)}
                                    className="w-full rounded-xl border-slate-300 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                                ></textarea>
                                {errors.excerpt && <div className="text-xs text-rose-500 mt-1">{errors.excerpt}</div>}
                            </div>

                            {/* Content */}
                            <div>
                                <label htmlFor="content" className="block text-sm font-semibold text-slate-700 mb-1">
                                    Isi Konten Artikel
                                </label>
                                <textarea
                                    id="content"
                                    rows="10"
                                    value={data.content}
                                    onChange={(e) => setData('content', e.target.value)}
                                    className="w-full rounded-xl border-slate-300 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                                ></textarea>
                                {errors.content && <div className="text-xs text-rose-500 mt-1">{errors.content}</div>}
                            </div>

                            {/* Thumbnail */}
                            <div>
                                <label htmlFor="thumbnail" className="block text-sm font-semibold text-slate-700 mb-1">
                                    Ganti Thumbnail Gambar
                                </label>
                                {article.thumbnail && (
                                    <div className="mb-2">
                                        <span className="text-xs text-slate-400 block mb-1">Gambar Terpasang:</span>
                                        <img
                                            src={`/storage/${article.thumbnail}`}
                                            alt="Thumbnail"
                                            className="h-24 w-auto rounded-lg object-cover border border-slate-200"
                                        />
                                    </div>
                                )}
                                <input
                                    id="thumbnail"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setData('thumbnail', e.target.files[0])}
                                    className="block w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                />
                                {errors.thumbnail && <div className="text-xs text-rose-500 mt-1">{errors.thumbnail}</div>}
                            </div>

                            {/* SEO Meta Box */}
                            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-4">
                                <h4 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                                    <span>🔍</span> Pengaturan SEO & Meta Tag
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 mb-1">Meta Title</label>
                                        <input
                                            type="text"
                                            value={data.meta_title}
                                            onChange={(e) => setData('meta_title', e.target.value)}
                                            className="w-full rounded-lg border-slate-300 text-xs focus:border-indigo-500 focus:ring-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 mb-1">Meta Keywords</label>
                                        <input
                                            type="text"
                                            value={data.meta_keywords}
                                            onChange={(e) => setData('meta_keywords', e.target.value)}
                                            className="w-full rounded-lg border-slate-300 text-xs focus:border-indigo-500 focus:ring-indigo-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1">Meta Description</label>
                                    <textarea
                                        rows="2"
                                        value={data.meta_description}
                                        onChange={(e) => setData('meta_description', e.target.value)}
                                        className="w-full rounded-lg border-slate-300 text-xs focus:border-indigo-500 focus:ring-indigo-500"
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit */}
                            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                                <Link
                                    href={route('admin.articles.index')}
                                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                                >
                                    Batal
                                </Link>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/20 disabled:opacity-50"
                                >
                                    {processing ? 'Menyimpan...' : 'Perbarui Artikel'}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
