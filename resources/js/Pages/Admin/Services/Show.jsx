import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Show({ service }) {
    const handleDelete = () => {
        if (confirm(`Apakah Anda yakin ingin menghapus layanan "${service.title}"?`)) {
            router.delete(route('admin.services.destroy', service.id));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#1B544D]/10 text-[#1B544D]">
                                Detail Layanan #{service.id}
                            </span>
                            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${service.status === 'active'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-slate-100 text-slate-600'
                                }`}>
                                {service.status === 'active' ? 'Aktif' : 'Non-Aktif'}
                            </span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1B544D] mt-1">
                            {service.title}
                        </h2>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <Link
                            href={route('admin.services.edit', service.id)}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                            <span>Edit Layanan</span>
                        </Link>
                        <Link
                            href={route('admin.services.index')}
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
            <Head title={`Detail Layanan - ${service.title}`} />

            <div className="py-8 bg-[#FAF8F5]/60 min-h-[calc(100vh-8rem)]">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">

                    {/* Main Card */}
                    <div className="bg-white rounded-2xl border border-[#EAE6DF] p-6 sm:p-8 space-y-6">

                        {/* Header Banner / Image */}
                        {service.thumbnail && (
                            <div className="rounded-2xl overflow-hidden border border-[#EAE6DF] max-h-80 bg-slate-100">
                                <img
                                    src={`/storage/${service.thumbnail}`}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {/* Title & Slug */}
                        <div className="border-b border-[#EAE6DF] pb-4">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1B544D]">
                                {service.title}
                            </h1>
                            <p className="text-xs text-slate-400 mt-1 font-mono">
                                Slug: /{service.slug}
                            </p>
                        </div>

                        {/* Ringkasan */}
                        {service.excerpt && (
                            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF]">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1B544D] mb-1">
                                    Ringkasan (Excerpt)
                                </h3>
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    {service.excerpt}
                                </p>
                            </div>
                        )}
                        {/* Detail Konten */}
                        {service.content && (
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1B544D] mb-3">
                                    Detail Konten Layanan
                                </h3>
                                <div
                                    className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed border-t border-[#EAE6DF] pt-4"
                                    dangerouslySetInnerHTML={{ __html: service.content }}
                                />
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
