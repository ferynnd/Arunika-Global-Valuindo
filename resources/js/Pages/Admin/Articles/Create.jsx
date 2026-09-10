import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import RichTextEditor from '@/Components/RichTextEditor';
import SeoPanel from '@/Components/SeoPanel';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Create({ categories }) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        category_id: '',
        excerpt: '',
        content: '',
        status: 'draft',
        thumbnail: null,
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
    });

    const [activeTab, setActiveTab] = useState('content');
    const [thumbnailPreview, setThumbnailPreview] = useState(null);

    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('thumbnail', file);
            setThumbnailPreview(URL.createObjectURL(file));
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.articles.store'));
    };

    const hasSeoErrors = errors.meta_title || errors.meta_description || errors.meta_keywords;

    const tabs = [
        {
            key: 'content',
            label: 'Konten Artikel',
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
                            Tambah Artikel Baru
                        </h2>
                        <p className="text-xs sm:text-sm text-[#52605E] mt-0.5">
                            Buat dan publikasikan artikel blog baru ke sistem.
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
            <Head title="Tambah Artikel Baru - Admin" />

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

                                    {/* Judul Artikel */}
                                    <div>
                                        <label htmlFor="title" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                                            Judul Artikel <span className="text-rose-500">*</span>
                                        </label>
                                        <input
                                            id="title"
                                            type="text"
                                            value={data.title}
                                            placeholder="Masukkan judul artikel yang menarik..."
                                            onChange={(e) => setData('title', e.target.value)}
                                            className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-xs sm:text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D] placeholder-slate-400"
                                            required
                                        />
                                        {errors.title && <div className="text-xs text-rose-500 mt-1">{errors.title}</div>}
                                    </div>

                                    {/* Kategori & Status */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="category_id" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                                                Kategori Artikel
                                            </label>
                                            <select
                                                id="category_id"
                                                value={data.category_id}
                                                onChange={(e) => setData('category_id', e.target.value)}
                                                className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-xs sm:text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D]"
                                            >
                                                <option value="">Pilih Kategori (Opsional)</option>
                                                {categories.map((cat) => (
                                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                                ))}
                                            </select>
                                            {errors.category_id && <div className="text-xs text-rose-500 mt-1">{errors.category_id}</div>}
                                        </div>

                                        <div>
                                            <label htmlFor="status" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                                                Status Publikasi <span className="text-rose-500">*</span>
                                            </label>
                                            <select
                                                id="status"
                                                value={data.status}
                                                onChange={(e) => setData('status', e.target.value)}
                                                className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-xs sm:text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D]"
                                                required
                                            >
                                                <option value="draft">Draft (Simpan Sementara)</option>
                                                <option value="published">Published (Publikasikan)</option>
                                                <option value="archived">Archived (Arsip)</option>
                                            </select>
                                            {errors.status && <div className="text-xs text-rose-500 mt-1">{errors.status}</div>}
                                        </div>
                                    </div>

                                    {/* Ringkasan / Excerpt */}
                                    <div>
                                        <label htmlFor="excerpt" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                                            Ringkasan Singkat (Excerpt)
                                        </label>
                                        <textarea
                                            id="excerpt"
                                            rows="2"
                                            value={data.excerpt}
                                            placeholder="Tulis ringkasan singkat artikel untuk preview..."
                                            onChange={(e) => setData('excerpt', e.target.value)}
                                            className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-xs sm:text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D] placeholder-slate-400"
                                        />
                                        {errors.excerpt && <div className="text-xs text-rose-500 mt-1">{errors.excerpt}</div>}
                                    </div>

                                    {/* Upload Thumbnail */}
                                    <div>
                                        <label htmlFor="thumbnail" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                                            Thumbnail Gambar Artikel
                                        </label>
                                        <input
                                            id="thumbnail"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleThumbnailChange}
                                            className="block w-full text-xs text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#1B544D]/10 file:text-[#1B544D] hover:file:bg-[#1B544D]/20 cursor-pointer"
                                        />
                                        {errors.thumbnail && <div className="text-xs text-rose-500 mt-1">{errors.thumbnail}</div>}
                                        {thumbnailPreview && (
                                            <div className="mt-3">
                                                <p className="text-xs text-slate-500 mb-1 font-semibold">Pratinjau Thumbnail:</p>
                                                <img
                                                    src={thumbnailPreview}
                                                    alt="Pratinjau"
                                                    className="w-48 h-32 object-cover rounded-xl border border-[#EAE6DF]"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Isi Konten Artikel */}
                                    <div>
                                        <label htmlFor="content" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                                            Isi Konten Artikel
                                        </label>
                                        <RichTextEditor
                                            value={data.content}
                                            onChange={(html) => setData('content', html)}
                                            placeholder="Tulis isi lengkap artikel di sini..."
                                            error={errors.content}
                                        />
                                        {errors.content && <div className="text-xs text-rose-500 mt-1">{errors.content}</div>}
                                    </div>

                                </div>
                            )}

                            {/* ======== TAB: SEO ======== */}
                            {activeTab === 'seo' && (
                                <SeoPanel
                                    data={{
                                        ...data,
                                        _existingThumbnail: thumbnailPreview || null,
                                    }}
                                    setData={setData}
                                    errors={errors}
                                    fieldPrefix="meta"
                                    previewPath="blog/nama-artikel"
                                />
                            )}

                            {/* Submit Buttons */}
                            <div className="flex items-center justify-end gap-3 pt-6 mt-6 border-t border-[#EAE6DF]">
                                <Link
                                    href={route('admin.articles.index')}
                                    className="px-5 py-2.5 rounded-full border border-slate-300 text-slate-600 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-colors"
                                >
                                    Batal
                                </Link>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-6 py-2.5 rounded-full bg-[#1B544D] text-white font-semibold text-xs sm:text-sm hover:bg-[#15433E] transition-all shadow-md shadow-[#1B544D]/20 disabled:opacity-50"
                                >
                                    {processing ? 'Menyimpan...' : 'Simpan Artikel'}
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
