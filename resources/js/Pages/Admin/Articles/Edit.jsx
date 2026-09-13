import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import RichTextEditor from '@/Components/RichTextEditor';
import SeoPanel from '@/Components/SeoPanel';
import InfoTooltip from '@/Components/InfoTooltip';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState, useRef } from 'react';
import { showErrorAlert } from '@/libs/sweetalert';

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

    const [thumbnailPreview, setThumbnailPreview] = useState(
        article.thumbnail ? `/storage/${article.thumbnail}` : null
    );
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileProcess = (file) => {
        if (file && file.type.startsWith('image/')) {
            setData('thumbnail', file);
            setThumbnailPreview(URL.createObjectURL(file));
        } else {
            showErrorAlert('Format Salah', 'Harap unggah file gambar yang valid (JPG/PNG).');
        }
    };

    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        handleFileProcess(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        handleFileProcess(file);
    };

    const removeThumbnail = (e) => {
        e.stopPropagation();
        setData('thumbnail', null);
        setThumbnailPreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.articles.update', article.id), {
            onError: () => {
                showErrorAlert(
                    'Gagal Perbarui Artikel!',
                    'Silakan periksa kembali kolom isian yang wajib diisi dan format file.'
                );
            },
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-primary-dark">
                            Edit Artikel Blog
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                            Perbarui informasi dan konten artikel <span className="font-semibold text-primary">#{article.id}</span>.
                        </p>
                    </div>
                    <Link
                        href={route('admin.articles.index')}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors shadow-2xs"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>Kembali</span>
                    </Link>
                </div>
            }
        >
            <Head title={`Edit: ${article.title} - Admin`} />

            <div className="py-8 max-w-5xl mx-auto w-full min-h-[calc(100vh-8rem)]">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <form onSubmit={submit} className="space-y-6">

                        {/* Main Content Card */}
                        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-xs w-full">
                            <h3 className="text-base font-bold text-primary pb-3 border-b border-slate-100">
                                Informasi Utama Artikel
                            </h3>

                            {/* Judul Artikel */}
                            <div>
                                <label htmlFor="title" className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                    <span>Judul Artikel</span> <span className="text-accent ml-1">*</span>
                                    <InfoTooltip text="Masukkan judul artikel yang jelas, menarik, dan informatif untuk pembaca." />
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    value={data.title}
                                    placeholder="Masukkan judul artikel yang menarik..."
                                    onChange={(e) => setData('title', e.target.value)}
                                    className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary placeholder-slate-400 px-4 py-2.5 shadow-2xs"
                                    required
                                />
                                {errors.title && <div className="text-xs text-accent mt-1">{errors.title}</div>}
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
                                        className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary px-4 py-2.5 shadow-2xs"
                                    >
                                        <option value="">Pilih Kategori (Opsional)</option>
                                        {categories.map((cat) => (
                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                        ))}
                                    </select>
                                    {errors.category_id && <div className="text-xs text-accent mt-1">{errors.category_id}</div>}
                                </div>

                                <div>
                                    <label htmlFor="status" className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                        <span>Status Publikasi</span> <span className="text-accent ml-1">*</span>
                                        <InfoTooltip text="Draft: simpan sementara. Published: publikasikan langsung ke situs web." />
                                    </label>
                                    <select
                                        id="status"
                                        value={data.status}
                                        onChange={(e) => setData('status', e.target.value)}
                                        className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary px-4 py-2.5 shadow-2xs"
                                        required
                                    >
                                        <option value="draft">Draft (Simpan Sementara)</option>
                                        <option value="published">Published (Publikasikan)</option>
                                        <option value="archived">Archived (Arsip)</option>
                                    </select>
                                    {errors.status && <div className="text-xs text-accent mt-1">{errors.status}</div>}
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
                                    className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary placeholder-slate-400 px-4 py-2.5 shadow-2xs"
                                />
                                {errors.excerpt && <div className="text-xs text-accent mt-1">{errors.excerpt}</div>}
                            </div>

                            {/* Modern Dropzone Thumbnail */}
                            <div>
                                <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                    <span>Thumbnail Gambar Artikel</span>
                                    <InfoTooltip text="Ukuran ideal: 1200×630 px (rasio 16:9). Format JPG/PNG, maksimal 2 MB." />
                                </label>
                                
                                <div
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    onClick={() => fileInputRef.current?.click()}
                                    className={`relative border-2 border-dashed rounded-2xl p-6 transition-all text-center cursor-pointer flex flex-col items-center justify-center min-h-[180px] ${
                                        isDragging 
                                            ? 'border-primary bg-primary/5' 
                                            : 'border-slate-300 bg-background hover:border-primary/60'
                                    }`}
                                >
                                    <input
                                        ref={fileInputRef}
                                        id="thumbnail"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleThumbnailChange}
                                        className="hidden"
                                    />

                                    {thumbnailPreview ? (
                                        <div className="relative w-full group">
                                            <img
                                                src={thumbnailPreview}
                                                alt="Pratinjau Thumbnail"
                                                className="w-full h-72 sm:h-80 object-cover rounded-xl shadow-xs"
                                            />
                                            <div className="absolute inset-0 bg-slate-950/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                                <span className="text-white text-xs font-semibold bg-black/60 px-3 py-1.5 rounded-lg">Ganti Gambar</span>
                                                <button
                                                    type="button"
                                                    onClick={removeThumbnail}
                                                    className="bg-rose-600 text-white p-2 rounded-lg hover:bg-rose-700 transition-colors"
                                                    title="Hapus Gambar"
                                                >
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="space-y-2 pointer-events-none py-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div className="text-sm font-semibold text-slate-700">
                                                Seret & letakkan gambar di sini, atau <span className="text-primary underline">pilih file</span>
                                            </div>
                                            <p className="text-xs text-slate-400">PNG, JPG, WEBP hingga 2MB</p>
                                        </div>
                                    )}
                                </div>
                                {errors.thumbnail && <div className="text-xs text-accent mt-1">{errors.thumbnail}</div>}
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
                                {errors.content && <div className="text-xs text-accent mt-1">{errors.content}</div>}
                            </div>

                        </div>

                        {/* Section Card: SEO & Meta */}
                        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs w-full">
                            <SeoPanel
                                data={{
                                    ...data,
                                    _existingThumbnail: thumbnailPreview,
                                }}
                                setData={setData}
                                errors={errors}
                                fieldPrefix="meta"
                                previewPath={`blog/${article.slug || 'nama-artikel'}`}
                            />
                        </div>

                        {/* Submit Buttons Bar */}
                        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 flex items-center justify-end gap-3 shadow-xs w-full">
                            <Link
                                href={route('admin.articles.index')}
                                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-600 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-colors"
                            >
                                Batal
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="px-6 py-2.5 rounded-xl bg-primary text-white font-semibold text-xs sm:text-sm hover:bg-primary-dark transition-all disabled:opacity-50 cursor-pointer shadow-xs"
                            >
                                {processing ? 'Menyimpan...' : 'Perbarui Artikel'}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}