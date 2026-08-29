import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Show({ article }) {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                            Detail Artikel
                        </h2>
                        <p className="text-sm text-slate-500 mt-1">
                            Pratinjau tampilan dan metadata artikel #{article.id}.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link
                            href={route('admin.articles.edit', article.id)}
                            className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-sm"
                        >
                            ✏️ Edit Artikel
                        </Link>
                        <Link
                            href={route('admin.articles.index')}
                            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors"
                        >
                            ← Kembali
                        </Link>
                    </div>
                </div>
            }
        >
            <Head title={`Detail: ${article.title} - Admin`} />

            <div className="py-8 bg-slate-50/50 min-h-[calc(100vh-8rem)]">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
                    <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm">

                        {/* Status & Kategori Badge */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 uppercase">
                                {article.category ? article.category.name : 'Tanpa Kategori'}
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase">
                                {article.status}
                            </span>
                            <span className="text-xs text-slate-400">
                                Ditulis oleh: <strong className="text-slate-600">{article.author?.name || 'Admin'}</strong>
                            </span>
                        </div>

                        {/* Judul Artikel */}
                        <h1 className="text-3xl font-extrabold text-slate-900 leading-tight mb-4">
                            {article.title}
                        </h1>

                        {/* Thumbnail */}
                        {article.thumbnail && (
                            <div className="my-6">
                                <img
                                    src={`/storage/${article.thumbnail}`}
                                    alt={article.title}
                                    className="w-full max-h-96 object-cover rounded-2xl border border-slate-200"
                                />
                            </div>
                        )}

                        {/* Excerpt */}
                        {article.excerpt && (
                            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-indigo-500 text-slate-700 italic text-sm mb-6">
                                {article.excerpt}
                            </div>
                        )}

                        {/* Content */}
                        <div className="prose max-w-none text-slate-800 text-base leading-relaxed space-y-4">
                            {article.content ? (
                                article.content.split('\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))
                            ) : (
                                <p className="text-slate-400 italic">Tidak ada konten teks artikel.</p>
                            )}
                        </div>

                        {/* Metadata Footer */}
                        <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-500">
                            <div>
                                <span className="block font-semibold text-slate-700">Dibuat Pada:</span>
                                {new Date(article.created_at).toLocaleString('id-ID')}
                            </div>
                            <div>
                                <span className="block font-semibold text-slate-700">Terakhir Diperbarui:</span>
                                {new Date(article.updated_at).toLocaleString('id-ID')}
                            </div>
                            <div>
                                <span className="block font-semibold text-slate-700">Dipublikasikan Pada:</span>
                                {article.published_at ? new Date(article.published_at).toLocaleString('id-ID') : 'Belum dipublikasikan'}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
