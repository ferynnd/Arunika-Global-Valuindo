import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import RichTextEditor from '@/Components/RichTextEditor';
import SeoPanel from '@/Components/SeoPanel';
import InfoTooltip from '@/Components/InfoTooltip';
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
        seo_title: service.seo_title || '',
        seo_description: service.seo_description || '',
        seo_keywords: service.seo_keywords || '',
        og_image: null,
    });

    const [previewUrl, setPreviewUrl] = useState(
        service.thumbnail ? `/storage/${service.thumbnail}` : null
    );

    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('thumbnail', file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const submit = (e) => {
        e.preventDefault();

        // Standard Laravel Inertia multipart PUT workaround via POST + _method
        const formData = new FormData();
        formData.append('_method', 'PUT');
        formData.append('title', data.title);
        formData.append('excerpt', data.excerpt || '');
        formData.append('content', data.content || '');
        formData.append('icon', data.icon || '');
        formData.append('status', data.status);
        formData.append('sort_order', data.sort_order);
        formData.append('seo_title', data.seo_title || '');
        formData.append('seo_description', data.seo_description || '');
        formData.append('seo_keywords', data.seo_keywords || '');

        if (data.thumbnail) {
            formData.append('thumbnail', data.thumbnail);
        }
        if (data.og_image) {
            formData.append('og_image', data.og_image);
        }

        router.post(route('admin.services.update', service.id), formData);
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1B544D]">
                            Edit Layanan
                        </h2>
                        <p className="text-xs sm:text-sm text-[#52605E] mt-0.5">
                            Perbarui informasi layanan <span className="font-semibold text-[#1B544D]">#{service.id}</span>.
                        </p>
                    </div>
                    <Link
                        href={route('admin.services.index')}
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
            <Head title={`Edit Layanan: ${service.title} - Admin Arunika`} />

            <div className="py-8 bg-[#FAF8F5]/60 min-h-[calc(100vh-8rem)]">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <form onSubmit={submit} className="space-y-6">

                        {/* Main Content Card */}
                        <div className="bg-white rounded-2xl border border-[#EAE6DF] p-6 sm:p-8 space-y-6">
                            <h3 className="text-base font-bold text-[#1B544D] pb-3 border-b border-[#EAE6DF]">
                                Informasi Utama Layanan
                            </h3>

                            {/* Nama / Judul Layanan */}
                            <div>
                                <label htmlFor="title" className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                    <span>Nama Layanan</span> <span className="text-rose-500 ml-1">*</span>
                                    <InfoTooltip text="Nama layanan utama yang akan ditampilkan pada halaman publik situs web." />
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    placeholder="Contoh: Valuasi Aset Korporasi & Bisnis..."
                                    className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D] placeholder-slate-400 px-4 py-2.5"
                                    required
                                />
                                {errors.title && <p className="text-xs text-rose-500 mt-1">{errors.title}</p>}
                            </div>

                            {/* Grid Status & Urutan */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="status" className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                        <span>Status Layanan</span> <span className="text-rose-500 ml-1">*</span>
                                        <InfoTooltip text="Aktif untuk menampilkan di situs web, Non-aktif untuk menyembunyikannya sementara." />
                                    </label>
                                    <select
                                        id="status"
                                        value={data.status}
                                        onChange={(e) => setData('status', e.target.value)}
                                        className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D] px-4 py-2.5"
                                    >
                                        <option value="active">Aktif (Tampil)</option>
                                        <option value="inactive">Non-Aktif (Sembunyikan)</option>
                                    </select>
                                    {errors.status && <p className="text-xs text-rose-500 mt-1">{errors.status}</p>}
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
                                        className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D] px-4 py-2.5"
                                    />
                                    {errors.sort_order && <p className="text-xs text-rose-500 mt-1">{errors.sort_order}</p>}
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
                                    className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D] placeholder-slate-400 px-4 py-2.5"
                                />
                                {errors.excerpt && <p className="text-xs text-rose-500 mt-1">{errors.excerpt}</p>}
                            </div>

                            {/* Upload Gambar / Banner Layanan */}
                            <div>
                                <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                    <span>Gambar / Banner Layanan</span>
                                    <InfoTooltip text="Ukuran ideal: 1200×630 px (rasio 16:9). Format JPG/PNG, maksimal 2 MB." />
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleThumbnailChange}
                                    className="w-full text-xs sm:text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#1B544D]/10 file:text-[#1B544D] hover:file:bg-[#1B544D]/20 cursor-pointer"
                                />
                                {errors.thumbnail && <p className="text-xs text-rose-500 mt-1">{errors.thumbnail}</p>}

                                {previewUrl && (
                                    <div className="mt-3 space-y-1.5">
                                        <p className="text-xs text-slate-500 font-semibold">Gambar Saat Ini / Pratinjau:</p>
                                        <div className="w-full overflow-hidden rounded-2xl border border-[#EAE6DF]">
                                            <img
                                                src={previewUrl}
                                                alt="Pratinjau Layanan"
                                                className="w-full h-52 sm:h-64 object-cover"
                                            />
                                        </div>
                                    </div>
                                )}
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
                                {errors.content && <p className="text-xs text-rose-500 mt-1">{errors.content}</p>}
                            </div>

                        </div>

                        {/* Section Card: SEO & Meta */}
                        <div className="bg-white rounded-2xl border border-[#EAE6DF] p-6 sm:p-8">
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
                        <div className="bg-white rounded-2xl border border-[#EAE6DF] p-4 flex items-center justify-end gap-3">
                            <Link
                                href={route('admin.services.index')}
                                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-600 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-colors"
                            >
                                Batal
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="px-6 py-2.5 rounded-xl bg-[#1B544D] text-white font-semibold text-xs sm:text-sm hover:bg-[#15433E] transition-all disabled:opacity-50"
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
