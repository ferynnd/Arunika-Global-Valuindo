import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Show({ article }) {
    const formatDate = (dateString) => {
        if (!dateString) return '-';
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-primary">
                            Detail Artikel
                        </h2>
                        <p className="text-sm text-slate-500 mt-1">
                            Pratinjau tampilan dan metadata artikel #{article.id}.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link
                            href={route('admin.articles.edit', article.id)}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                            <span>Edit Artikel</span>
                        </Link>
                        <Link
                            href={route('admin.articles.index')}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span>Kembali</span>
                        </Link>
                    </div>
                </div>
            }
        >
            <Head title={`Detail: ${article.title} - Admin`} />

            <div className="py-12 sm:py-16 bg-background/60 min-h-[calc(100vh-8rem)]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

                    {/* Status Info Bar */}
                    <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-xs text-[#718783] font-semibold">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            Diperbarui {formatDate(article.updated_at)}
                        </span>

                        <span className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs ${article.status === 'published'
                                ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                                : 'bg-amber-100 text-amber-700 border border-amber-200'
                            }`}>
                            {article.status}
                        </span>
                    </div>

                    {/* Title & Metadata */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            {article.category && (
                                <span className="px-3.5 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-xs">
                                    {article.category.name}
                                </span>
                            )}
                            <span className="text-xs text-[#718783] font-semibold">
                                {formatDate(article.published_at || article.created_at)}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
                            {article.title}
                        </h1>

                        {article.excerpt && (
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed italic border-l-4 border-secondary pl-4 py-1">
                                {article.excerpt}
                            </p>
                        )}

                        <div className="pt-4 border-t border-stone-300 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-sm border border-secondary/30">
                                {article.author?.name ? article.author.name[0] : 'A'}
                            </div>
                            <div>
                                <div className="text-xs font-bold text-slate-800">
                                    {article.author?.name || 'Redaksi Arunika Global Valuindo'}
                                </div>
                                <div className="text-[10px] text-[#718783]">
                                    Penulis & Konsultan Strategi Korporasi
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Featured Thumbnail */}
                    {article.thumbnail && (
                        <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200 aspect-video bg-slate-100">
                            <img
                                src={`/storage/${article.thumbnail}`}
                                alt={article.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {/* Content Card */}
                    <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10">
                        {article.content ? (
                            <div
                                className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base font-sans prose-headings:text-primary prose-headings:font-bold prose-a:text-primary prose-a:font-semibold hover:prose-a:text-secondary"
                                dangerouslySetInnerHTML={{ __html: article.content }}
                            />
                        ) : (
                            <p className="text-slate-400 italic text-sm">Tidak ada konten teks artikel.</p>
                        )}
                    </div>

                    {/* Metadata Footer */}
                    <div className="bg-white rounded-2xl border border-stone-200 p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-500">
                        <div>
                            <span className="block font-semibold text-primary mb-1">Dibuat Pada</span>
                            {new Date(article.created_at).toLocaleString('id-ID')}
                        </div>
                        <div>
                            <span className="block font-semibold text-primary mb-1">Terakhir Diperbarui</span>
                            {new Date(article.updated_at).toLocaleString('id-ID')}
                        </div>
                        <div>
                            <span className="block font-semibold text-primary mb-1">Dipublikasikan Pada</span>
                            {article.published_at ? new Date(article.published_at).toLocaleString('id-ID') : 'Belum dipublikasikan'}
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}