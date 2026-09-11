import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import RichTextEditor from '@/Components/RichTextEditor';
import SeoPanel from '@/Components/SeoPanel';
import InfoTooltip from '@/Components/InfoTooltip';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';
import { showErrorAlert } from '@/libs/sweetalert';

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
        post(route('admin.articles.store'), {
            onError: () => {
                showErrorAlert(
                    'Gagal Menyimpan Artikel!',
                    'Silakan periksa kembali kolom isian yang wajib diisi dan format file yang diunggah.'
                );
            },
        });
    };

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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>Kembali ke Daftar</span>
                    </Link>
                </div>
            }
        >
            <Head title="Tambah Artikel Baru - Admin" />

            <div className="py-8 bg-[#FAF8F5]/60 min-h-[calc(100vh-8rem)]">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <form onSubmit={submit} className="space-y-6">

                        {/* Main Content Card */}
                        <div className="bg-white rounded-2xl border border-[#EAE6DF] p-6 sm:p-8 space-y-6">
                            <h3 className="text-base font-bold text-[#1B544D] pb-3 border-b border-[#EAE6DF]">
                                Informasi Utama Artikel
                            </h3>

                            {/* Judul Artikel */}
                            <div>
                                <label htmlFor="title" className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                    <span>Judul Artikel</span> <span className="text-rose-500 ml-1">*</span>
                                    <InfoTooltip text="Masukkan judul artikel yang jelas, menarik, dan informatif untuk pembaca." />
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    value={data.title}
                                    placeholder="Masukkan judul artikel yang menarik..."
                                    onChange={(e) => setData('title', e.target.value)}
                                    className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D] placeholder-slate-400 px-4 py-2.5"
                                    required
                                />
                                {errors.title && <div className="text-xs text-rose-500 mt-1">{errors.title}</div>}
                            </div>

                            {/* Kategori & Status */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="category_id" className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                        <span>Kategori Artikel</span>
                                        <InfoTooltip text="Pilih kategori artikel untuk mempermudah pembaca menemukan topik yang relevan." />
                                    </label>
                                    <select
                                        id="category_id"
                                        value={data.category_id}
                                        onChange={(e) => setData('category_id', e.target.value)}
                                        className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D] px-4 py-2.5"
                                    >
                                        <option value="">Pilih Kategori (Opsional)</option>
                                        {categories.map((cat) => (
                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                        ))}
                                    </select>
                                    {errors.category_id && <div className="text-xs text-rose-500 mt-1">{errors.category_id}</div>}
                                </div>

                                <div>
                                    <label htmlFor="status" className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                        <span>Status Publikasi</span> <span className="text-rose-500 ml-1">*</span>
                                        <InfoTooltip text="Draft: simpan sementara. Published: publikasikan langsung ke situs web." />
                                    </label>
                                    <select
                                        id="status"
                                        value={data.status}
                                        onChange={(e) => setData('status', e.target.value)}
                                        className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D] px-4 py-2.5"
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
                                <label htmlFor="excerpt" className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                    <span>Ringkasan Singkat (Excerpt)</span>
                                    <InfoTooltip text="Tulis ringkasan 1-2 kalimat untuk dipratinjau pada halaman daftar artikel blog." />
                                </label>
                                <textarea
                                    id="excerpt"
                                    rows="3"
                                    value={data.excerpt}
                                    placeholder="Tulis ringkasan singkat artikel untuk preview..."
                                    onChange={(e) => setData('excerpt', e.target.value)}
                                    className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D] placeholder-slate-400 px-4 py-2.5"
                                />
                                {errors.excerpt && <div className="text-xs text-rose-500 mt-1">{errors.excerpt}</div>}
                            </div>

                            {/* Upload Thumbnail */}
                            <div>
                                <label htmlFor="thumbnail" className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                    <span>Thumbnail Gambar Artikel</span>
                                    <InfoTooltip text="Ukuran ideal: 1200×630 px (rasio 16:9). Format JPG/PNG, maksimal 2 MB." />
                                </label>
                                <input
                                    id="thumbnail"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleThumbnailChange}
                                    className="block w-full text-xs sm:text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#1B544D]/10 file:text-[#1B544D] hover:file:bg-[#1B544D]/20 cursor-pointer"
                                />
                                {errors.thumbnail && <div className="text-xs text-rose-500 mt-1">{errors.thumbnail}</div>}
                                {thumbnailPreview && (
                                    <div className="mt-3 space-y-1.5">
                                        <p className="text-xs text-slate-500 font-semibold">Pratinjau Thumbnail:</p>
                                        <div className="w-full overflow-hidden rounded-2xl border border-[#EAE6DF]">
                                            <img
                                                src={thumbnailPreview}
                                                alt="Pratinjau Thumbnail"
                                                className="w-full h-52 sm:h-64 object-cover"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Isi Konten Artikel */}
                            <div>
                                <label htmlFor="content" className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                    <span>Isi Konten Artikel</span>
                                    <InfoTooltip text="Gunakan editor teks untuk menyusun isi artikel lengkap beserta penataan format dan gambar." />
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

                        {/* Section Card: SEO & Meta */}
                        <div className="bg-white rounded-2xl border border-[#EAE6DF] p-6 sm:p-8">
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
                        </div>

                        {/* Submit Buttons Bar */}
                        <div className="bg-white rounded-2xl border border-[#EAE6DF] p-4 flex items-center justify-end gap-3">
                            <Link
                                href={route('admin.articles.index')}
                                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-600 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-colors"
                            >
                                Batal
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="px-6 py-2.5 rounded-xl bg-[#1B544D] text-white font-semibold text-xs sm:text-sm hover:bg-[#15433E] transition-all disabled:opacity-50"
                            >
                                {processing ? 'Menyimpan...' : 'Simpan Artikel'}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
