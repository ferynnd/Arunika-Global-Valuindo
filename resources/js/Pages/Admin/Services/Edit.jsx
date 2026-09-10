import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import RichTextEditor from '@/Components/RichTextEditor';
import SeoPanel from '@/Components/SeoPanel';
import { Head, Link, useForm, router } from '@inertiajs/react';
import { useState } from 'react';

export default function Edit({ service }) {
    const { data, setData, processing, errors } = useForm({
        title: service.title || '',
        excerpt: service.excerpt || '',
        content: service.content || '',
        icon: service.icon || '',
        status: service.status || 'active',
        sort_order: service.sort_order ?? 0,
        thumbnail: null,
        features: service.features && service.features.length > 0 ? service.features : [''],
        // SEO
        seo_title: service.seo_title || '',
        seo_description: service.seo_description || '',
        seo_keywords: service.seo_keywords || '',
        og_image: null,
    });

    const [previewUrl, setPreviewUrl] = useState(
        service.thumbnail ? `/storage/${service.thumbnail}` : null
    );
    const [activeTab, setActiveTab] = useState('content'); // 'content' | 'seo'

    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('thumbnail', file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleFeatureChange = (index, value) => {
        const updated = [...data.features];
        updated[index] = value;
        setData('features', updated);
    };

    const addFeatureInput = () => {
        setData('features', [...data.features, '']);
    };

    const removeFeatureInput = (index) => {
        if (data.features.length === 1) {
            setData('features', ['']);
            return;
        }
        const updated = data.features.filter((_, i) => i !== index);
        setData('features', updated);
    };

    const submit = (e) => {
        e.preventDefault();
        router.post(route('admin.services.update', service.id), {
            _method: 'put',
            ...data,
        });
    };

    const hasSeoErrors = errors.seo_title || errors.seo_description || errors.seo_keywords || errors.og_image;

    const tabs = [
        {
            key: 'content',
            label: 'Konten Layanan',
            icon: (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
            ),
        },
        {
            key: 'seo',
            label: 'SEO & Meta',
            icon: (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                </svg>
            ),
            hasError: !!hasSeoErrors,
        },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1B544D]">
                            Edit Layanan
                        </h2>
                        <p className="text-xs sm:text-sm text-[#52605E] mt-0.5">
                            Perbarui informasi layanan korporasi "{service.title}".
                        </p>
                    </div>
                    <Link
                        href={route('admin.services.index')}
                        className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors"
                    >
                        ← Kembali ke Daftar
                    </Link>
                </div>
            }
        >
            <Head title={`Edit Layanan - ${service.title}`} />

            <div className="py-8 bg-[#FAF8F5]/60 min-h-[calc(100vh-8rem)]">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <form onSubmit={submit}>
                        {/* Tab Navigation */}
                        <div className="flex gap-1 bg-white rounded-2xl border border-[#EAE6DF] p-1.5 shadow-sm mb-5">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.key}
                                    type="button"
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                                        activeTab === tab.key
                                            ? 'bg-[#1B544D] text-white shadow-sm'
                                            : 'text-slate-500 hover:text-[#1B544D] hover:bg-[#FAF8F5]'
                                    }`}
                                >
                                    {tab.icon}
                                    <span>{tab.label}</span>
                                    {tab.hasError && (
                                        <span className="w-2 h-2 rounded-full bg-rose-500 flex-shrink-0" />
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="bg-white rounded-3xl border border-[#EAE6DF] p-6 sm:p-8 shadow-sm">

                            {/* ======== TAB: CONTENT ======== */}
                            {activeTab === 'content' && (
                                <div className="space-y-6">

                                    {/* Nama / Judul Layanan */}
                                    <div>
                                        <label htmlFor="title" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                                            Nama Layanan <span className="text-rose-500">*</span>
                                        </label>
                                        <input
                                            id="title"
                                            type="text"
                                            value={data.title}
                                            onChange={(e) => setData('title', e.target.value)}
                                            placeholder="Contoh: Valuasi Aset Korporasi & Bisnis..."
                                            className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-xs sm:text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D] placeholder-slate-400"
                                            required
                                        />
                                        {errors.title && <p className="text-xs text-rose-500 mt-1">{errors.title}</p>}
                                    </div>

                                    {/* Grid Status & Urutan & Icon */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div>
                                            <label htmlFor="status" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                                                Status Layanan <span className="text-rose-500">*</span>
                                            </label>
                                            <select
                                                id="status"
                                                value={data.status}
                                                onChange={(e) => setData('status', e.target.value)}
                                                className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-xs sm:text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D]"
                                            >
                                                <option value="active">Aktif (Tampil)</option>
                                                <option value="inactive">Non-Aktif (Sembunyikan)</option>
                                            </select>
                                            {errors.status && <p className="text-xs text-rose-500 mt-1">{errors.status}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="sort_order" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                                                Urutan Tampilan
                                            </label>
                                            <input
                                                id="sort_order"
                                                type="number"
                                                min="0"
                                                value={data.sort_order}
                                                onChange={(e) => setData('sort_order', parseInt(e.target.value) || 0)}
                                                className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-xs sm:text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D]"
                                            />
                                            {errors.sort_order && <p className="text-xs text-rose-500 mt-1">{errors.sort_order}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="icon" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                                                Kode / Nama Icon (Opsional)
                                            </label>
                                            <input
                                                id="icon"
                                                type="text"
                                                value={data.icon}
                                                onChange={(e) => setData('icon', e.target.value)}
                                                placeholder="Contoh: chart-bar, shield-check"
                                                className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-xs sm:text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D]"
                                            />
                                            {errors.icon && <p className="text-xs text-rose-500 mt-1">{errors.icon}</p>}
                                        </div>
                                    </div>

                                    {/* Ringkasan Layanan */}
                                    <div>
                                        <label htmlFor="excerpt" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                                            Deskripsi Singkat (Ringkasan)
                                        </label>
                                        <textarea
                                            id="excerpt"
                                            rows="3"
                                            value={data.excerpt}
                                            onChange={(e) => setData('excerpt', e.target.value)}
                                            placeholder="Tuliskan 1-2 kalimat ringkasan layanan..."
                                            className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-xs sm:text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D] placeholder-slate-400"
                                        />
                                        {errors.excerpt && <p className="text-xs text-rose-500 mt-1">{errors.excerpt}</p>}
                                    </div>

                                    {/* Upload Gambar / Thumbnail */}
                                    <div>
                                        <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                                            Gambar / Banner Layanan (Ganti jika ingin memperbarui)
                                        </label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleThumbnailChange}
                                            className="w-full text-xs sm:text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#1B544D]/10 file:text-[#1B544D] hover:file:bg-[#1B544D]/20 cursor-pointer"
                                        />
                                        {errors.thumbnail && <p className="text-xs text-rose-500 mt-1">{errors.thumbnail}</p>}

                                        {previewUrl && (
                                            <div className="mt-3">
                                                <p className="text-xs text-slate-500 mb-1 font-semibold">Gambar Saat Ini / Pratinjau:</p>
                                                <img
                                                    src={previewUrl}
                                                    alt="Pratinjau"
                                                    className="w-48 h-32 object-cover rounded-xl border border-[#EAE6DF]"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Detail Content (RichTextEditor) */}
                                    <div>
                                        <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                                            Detail Konten & Penjelasan Lengkap Layanan
                                        </label>
                                        <RichTextEditor
                                            value={data.content}
                                            onChange={(html) => setData('content', html)}
                                            placeholder="Tuliskan informasi lengkap..."
                                        />
                                        {errors.content && <p className="text-xs text-rose-500 mt-1">{errors.content}</p>}
                                    </div>

                                </div>
                            )}

                            {/* ======== TAB: SEO ======== */}
                            {activeTab === 'seo' && (
                                <SeoPanel
                                    data={data}
                                    setData={setData}
                                    errors={errors}
                                    slug={service.slug}
                                    existingOgImage={service.og_image}
                                />
                            )}

                            {/* Submit Buttons */}
                            <div className="flex items-center justify-end gap-3 pt-6 mt-6 border-t border-[#EAE6DF]">
                                <Link
                                    href={route('admin.services.index')}
                                    className="px-5 py-2.5 rounded-full border border-slate-300 text-slate-600 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-colors"
                                >
                                    Batal
                                </Link>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-6 py-2.5 rounded-full bg-[#1B544D] text-white font-semibold text-xs sm:text-sm hover:bg-[#15433E] transition-all shadow-md shadow-[#1B544D]/20 disabled:opacity-50"
                                >
                                    {processing ? 'Memperbarui...' : 'Perbarui Layanan'}
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
