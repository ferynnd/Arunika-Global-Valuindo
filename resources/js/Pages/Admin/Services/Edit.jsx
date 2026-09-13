import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import RichTextEditor from '@/Components/RichTextEditor';
import SeoPanel from '@/Components/SeoPanel';
import InfoTooltip from '@/Components/InfoTooltip';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState, useRef } from 'react';
import { showErrorAlert } from '@/libs/sweetalert';

export default function Edit({ service }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT',
        title: service.title || '',
        excerpt: service.excerpt || '',
        content: service.content || '',
        status: service.status || 'active',
        sort_order: service.sort_order ?? 0,
        thumbnail: null,
        seo_title: service.seo_title || '',
        seo_description: service.seo_description || '',
        seo_keywords: service.seo_keywords || '',
        og_image: null,
    });

    const [previewUrl, setPreviewUrl] = useState(
        service.thumbnail ? `/storage/${service.thumbnail}` : null
    );
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileProcess = (file) => {
        if (file && file.type.startsWith('image/')) {
            setData('thumbnail', file);
            setPreviewUrl(URL.createObjectURL(file));
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
        setPreviewUrl(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.services.update', service.id), {
            forceFormData: true,
                onError: (err) => {
                    console.error(err);
                    showErrorAlert(
                        'Gagal Perbarui Layanan!',
                        'Silakan periksa kembali kolom isian yang wajib diisi dan format file yang diunggah.'
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
                            Edit Layanan
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                            Perbarui informasi layanan <span className="font-semibold text-primary">#{service.id}</span>.
                        </p>
                    </div>
                    <Link
                        href={route('admin.services.index')}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors shadow-2xs w-fit"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>Kembali</span>
                    </Link>
                </div>
            }
        >
            <Head title={`Edit Layanan: ${service.title} - Admin Arunika`} />

            <div className="py-8 max-w-5xl mx-auto w-full min-h-[calc(100vh-8rem)]">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <form onSubmit={submit} className="space-y-6">

                        {/* Main Content Card */}
                        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-xs w-full">
                            <h3 className="text-base font-bold text-primary pb-3 border-b border-slate-100">
                                Informasi Utama Layanan
                            </h3>

                            {/* Nama / Judul Layanan */}
                            <div>
                                <label htmlFor="title" className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                    <span>Nama Layanan</span> <span className="text-accent ml-1">*</span>
                                    <InfoTooltip text="Nama layanan utama yang akan ditampilkan pada halaman publik situs web." />
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    placeholder="Contoh: Valuasi Aset Korporasi & Bisnis..."
                                    className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary placeholder-slate-400 px-4 py-2.5 shadow-2xs"
                                    required
                                />
                                {errors.title && <p className="text-xs text-accent mt-1">{errors.title}</p>}
                            </div>

                            {/* Grid Status & Urutan */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="status" className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                        <span>Status Layanan</span> <span className="text-accent ml-1">*</span>
                                        <InfoTooltip text="Aktif untuk menampilkan di situs web, Non-aktif untuk menyembunyikannya sementara." />
                                    </label>
                                    <select
                                        id="status"
                                        value={data.status}
                                        onChange={(e) => setData('status', e.target.value)}
                                        className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary px-4 py-2.5 shadow-2xs"
                                    >
                                        <option value="active">Aktif (Tampil)</option>
                                        <option value="inactive">Non-Aktif (Sembunyikan)</option>
                                    </select>
                                    {errors.status && <p className="text-xs text-accent mt-1">{errors.status}</p>}
                                </div>

                                <div>
                                    <label htmlFor="sort_order" className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                        <span>Urutan Tampilan</span>
                                        <InfoTooltip text="Nomor urut posisi tampilan layanan di situs web (angka terkecil tampil lebih awal)." />
                                    </label>
                                    <input
                                        id="sort_order"
                                        type="number"
                                        min="0"
                                        value={data.sort_order}
                                        onChange={(e) => setData('sort_order', parseInt(e.target.value) || 0)}
                                        className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary px-4 py-2.5 shadow-2xs"
                                    />
                                    {errors.sort_order && <p className="text-xs text-accent mt-1">{errors.sort_order}</p>}
                                </div>
                            </div>

                            {/* Ringkasan Layanan */}
                            <div>
                                <label htmlFor="excerpt" className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                    <span>Deskripsi Singkat (Ringkasan)</span>
                                    <InfoTooltip text="Tuliskan 1-2 kalimat ringkasan layanan yang ditampilkan pada kartu di halaman beranda & daftar layanan." />
                                </label>
                                <textarea
                                    id="excerpt"
                                    rows="3"
                                    value={data.excerpt}
                                    onChange={(e) => setData('excerpt', e.target.value)}
                                    placeholder="Tuliskan 1-2 kalimat ringkasan layanan..."
                                    className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary placeholder-slate-400 px-4 py-2.5 shadow-2xs"
                                />
                                {errors.excerpt && <p className="text-xs text-accent mt-1">{errors.excerpt}</p>}
                            </div>

                            {/* Modern Dropzone Thumbnail */}
                            <div>
                                <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                    <span>Gambar / Banner Layanan</span>
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
                                        type="file"
                                        accept="image/*"
                                        onChange={handleThumbnailChange}
                                        className="hidden"
                                    />

                                    {previewUrl ? (
                                        <div className="relative w-full group">
                                            <img
                                                src={previewUrl}
                                                alt="Pratinjau Layanan"
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
                                {errors.thumbnail && <p className="text-xs text-accent mt-1">{errors.thumbnail}</p>}
                            </div>

                            {/* Detail Content (RichTextEditor) */}
                            <div>
                                <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                    <span>Detail Konten & Penjelasan Lengkap Layanan</span>
                                    <InfoTooltip text="Tuliskan informasi lengkap mengenai cakupan layanan, metodologi, dan manfaat bagi klien." />
                                </label>
                                <RichTextEditor
                                    value={data.content}
                                    onChange={(html) => setData('content', html)}
                                    placeholder="Tuliskan informasi lengkap..."
                                />
                                {errors.content && <p className="text-xs text-accent mt-1">{errors.content}</p>}
                            </div>

                        </div>

                        {/* Section Card: SEO & Meta */}
                        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs w-full">
                            <SeoPanel
                                data={data}
                                setData={setData}
                                errors={errors}
                                fieldPrefix="seo"
                                previewPath={`services/${service.slug || 'nama-layanan'}`}
                                existingOgImage={service.og_image}
                            />
                        </div>

                        {/* Submit Buttons Bar */}
                        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 flex items-center justify-end gap-3 shadow-xs w-full">
                            <Link
                                href={route('admin.services.index')}
                                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-600 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-colors"
                            >
                                Batal
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="px-6 py-2.5 rounded-xl bg-primary text-white font-semibold text-xs sm:text-sm hover:bg-primary-dark transition-all disabled:opacity-50 cursor-pointer shadow-xs"
                            >
                                {processing ? 'Memperbarui...' : 'Perbarui Layanan'}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}