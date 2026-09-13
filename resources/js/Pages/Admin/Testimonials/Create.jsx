import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InfoTooltip from '@/Components/InfoTooltip';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState, useRef } from 'react';
import { showErrorAlert } from '@/libs/sweetalert';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        author: '',
        role: '',
        quote: '',
        status: 'active',
        sort_order: 0,
        avatar: null,
    });

    const [previewAvatar, setPreviewAvatar] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileProcess = (file) => {
        if (file && file.type.startsWith('image/')) {
            setData('avatar', file);
            setPreviewAvatar(URL.createObjectURL(file));
        } else {
            showErrorAlert('Format Salah', 'Harap unggah file gambar avatar yang valid (JPG/PNG).');
        }
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        handleFileProcess(file);
    };

    const removeAvatar = (e) => {
        e.stopPropagation();
        setData('avatar', null);
        setPreviewAvatar(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.testimonials.store'), {
            forceFormData: true,
            onError: () => {
                showErrorAlert(
                    'Gagal Menyimpan Testimoni!',
                    'Silakan periksa kembali kolom isian yang wajib diisi dan format file avatar.'
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
                            Tambah Testimoni Baru
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                            Isi formulir berikut untuk menambahkan ulasan testimoni baru dari klien.
                        </p>
                    </div>
                    <Link
                        href={route('admin.testimonials.index')}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs w-fit"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>Kembali</span>
                    </Link>
                </div>
            }
        >
            <Head title="Tambah Testimoni - Admin Arunika" />

            <div className="py-8 w-full min-h-[calc(100vh-8rem)]">
                <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-xs w-full">

                        <h3 className="text-base font-bold text-primary pb-3 border-b border-slate-100">
                            Informasi Testimoni Klien
                        </h3>

                        {/* Author Field */}
                        <div>
                            <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                <span>Nama Klien / Pemberi Testimoni</span> <span className="text-accent ml-1">*</span>
                                <InfoTooltip text="Nama lengkap klien atau perwakilan instansi yang memberikan testimoni." />
                            </label>
                            <input
                                type="text"
                                value={data.author}
                                onChange={(e) => setData('author', e.target.value)}
                                placeholder="Contoh: Ahmad Fauzi"
                                className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary placeholder-slate-400 px-4 py-2.5 shadow-2xs"
                                required
                            />
                            {errors.author && <p className="text-accent text-xs mt-1">{errors.author}</p>}
                        </div>

                        {/* Role Field */}
                        <div>
                            <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                <span>Jabatan & Perusahaan</span>
                                <InfoTooltip text="Jabatan dan/atau nama perusahaan tempat klien bekerja." />
                            </label>
                            <input
                                type="text"
                                value={data.role}
                                onChange={(e) => setData('role', e.target.value)}
                                placeholder="Contoh: Chief Financial Officer, PT Indo Energi Lestari"
                                className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary placeholder-slate-400 px-4 py-2.5 shadow-2xs"
                            />
                            {errors.role && <p className="text-accent text-xs mt-1">{errors.role}</p>}
                        </div>

                        {/* Quote Field */}
                        <div>
                            <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                <span>Isi Kutipan Testimoni</span> <span className="text-accent ml-1">*</span>
                                <InfoTooltip text="Tuliskan pengalaman, kesan, atau ulasan positif klien mengenai layanan perusahaan." />
                            </label>
                            <textarea
                                rows="4"
                                value={data.quote}
                                onChange={(e) => setData('quote', e.target.value)}
                                placeholder="Tuliskan apresiasi atau ulasan klien..."
                                className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary placeholder-slate-400 px-4 py-2.5 shadow-2xs"
                                required
                            ></textarea>
                            {errors.quote && <p className="text-accent text-xs mt-1">{errors.quote}</p>}
                        </div>

                        {/* Avatar File Field */}
                        <div>
                            <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                <span>Foto Profil / Avatar Klien</span>
                                <InfoTooltip text="Foto profil atau logo perusahaan klien (rasio 1:1, persegi ideal, maks 2MB)." />
                            </label>
                            
                            <div className="flex items-center gap-4 p-4 border border-slate-200 rounded-2xl bg-background">
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleAvatarChange}
                                    className="hidden"
                                />

                                {previewAvatar ? (
                                    <div className="relative group shrink-0">
                                        <img
                                            src={previewAvatar}
                                            alt="Preview Avatar"
                                            className="w-16 h-16 rounded-full object-cover border-2 border-primary shadow-2xs"
                                        />
                                        <button
                                            type="button"
                                            onClick={removeAvatar}
                                            className="absolute -top-1 -right-1 bg-rose-600 text-white p-1 rounded-full hover:bg-rose-700 transition-colors shadow-xs"
                                            title="Hapus Avatar"
                                        >
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                ) : (
                                    <div className="w-16 h-16 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center border border-primary/20 text-base shrink-0 shadow-2xs">
                                        {data.author ? data.author[0].toUpperCase() : 'U'}
                                    </div>
                                )}

                                <div className="flex-1">
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        className="px-4 py-2 rounded-xl bg-primary/10 text-primary font-semibold text-xs hover:bg-primary/20 transition-colors cursor-pointer"
                                    >
                                        Pilih Foto Avatar
                                    </button>
                                    <p className="text-xs text-slate-400 mt-1">PNG, JPG, atau WEBP maksimal 2MB.</p>
                                </div>
                            </div>
                            {errors.avatar && <p className="text-accent text-xs mt-1">{errors.avatar}</p>}
                        </div>

                        {/* Options: Status & Sort Order */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                            <div>
                                <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                    <span>Status Publikasi</span> <span className="text-accent ml-1">*</span>
                                    <InfoTooltip text="Aktif untuk menampilkan di landing page, Non-aktif untuk menyembunyikan." />
                                </label>
                                <select
                                    value={data.status}
                                    onChange={(e) => setData('status', e.target.value)}
                                    className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary px-4 py-2.5 shadow-2xs"
                                >
                                    <option value="active">Aktif (Tampil di Landing Page)</option>
                                    <option value="inactive">Non-Aktif (Sembunyikan)</option>
                                </select>
                                {errors.status && <p className="text-accent text-xs mt-1">{errors.status}</p>}
                            </div>

                            <div>
                                <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                    <span>Urutan Tampil (Sort Order)</span>
                                    <InfoTooltip text="Nomor urut posisi tampilan testimoni di situs web (angka terkecil tampil lebih awal)." />
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    value={data.sort_order}
                                    onChange={(e) => setData('sort_order', parseInt(e.target.value) || 0)}
                                    className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary px-4 py-2.5 shadow-2xs"
                                />
                                {errors.sort_order && <p className="text-accent text-xs mt-1">{errors.sort_order}</p>}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6 flex items-center justify-end gap-3 border-t border-slate-100">
                            <Link
                                href={route('admin.testimonials.index')}
                                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-600 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-colors"
                            >
                                Batal
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-primary-dark transition-all disabled:opacity-50 cursor-pointer shadow-xs"
                            >
                                {processing ? 'Menyimpan...' : 'Simpan Testimoni'}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}