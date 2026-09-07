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
                            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                                service.status === 'active'
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
                    <div className="flex items-center gap-2">
                        <Link
                            href={route('admin.services.index')}
                            className="px-4 py-2 rounded-full border border-slate-300 text-slate-600 font-semibold text-xs hover:bg-slate-50 transition-colors"
                        >
                            ← Kembali
                        </Link>
                        <Link
                            href={route('admin.services.edit', service.id)}
                            className="px-4 py-2 rounded-full bg-[#ECAE36] text-[#1B544D] font-bold text-xs hover:bg-[#d99b26] transition-colors shadow-xs"
                        >
                            Edit Layanan
                        </Link>
                        <button
                            onClick={handleDelete}
                            className="px-4 py-2 rounded-full bg-rose-50 text-rose-600 border border-rose-200 font-semibold text-xs hover:bg-rose-100 transition-colors"
                        >
                            Hapus
                        </button>
                    </div>
                </div>
            }
        >
            <Head title={`Detail Layanan - ${service.title}`} />

            <div className="py-8 bg-[#FAF8F5]/60 min-h-[calc(100vh-8rem)]">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">

                    {/* Main Card */}
                    <div className="bg-white rounded-3xl border border-[#EAE6DF] p-6 sm:p-8 shadow-sm space-y-6">
                        
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

                        {/* Fitur / Keunggulan */}
                        {service.features && service.features.length > 0 && (
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1B544D] mb-3">
                                    Poin Keunggulan / Fitur Utama
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {service.features.map((feat, idx) => (
                                        <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] text-xs font-semibold text-slate-800">
                                            <span className="w-5 h-5 rounded-full bg-[#1B544D] text-[#ECAE36] flex items-center justify-center font-bold text-[10px] shrink-0">
                                                ✓
                                            </span>
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>
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
