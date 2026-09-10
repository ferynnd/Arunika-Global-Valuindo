import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InfoTooltip from '@/Components/InfoTooltip';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Edit({ testimonial }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'put',
        author: testimonial.author || '',
        role: testimonial.role || '',
        quote: testimonial.quote || '',
        status: testimonial.status || 'active',
        sort_order: testimonial.sort_order ?? 0,
        avatar: null,
    });

    const [previewAvatar, setPreviewAvatar] = useState(
        testimonial.avatar ? `/storage/${testimonial.avatar}` : null
    );

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('avatar', file);
            setPreviewAvatar(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.testimonials.update', testimonial.id));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1B544D]">
                            Edit Testimoni Klien
                        </h2>
                        <p className="text-xs sm:text-sm text-[#52605E] mt-0.5">
                            Perbarui informasi ulasan dari <span className="font-semibold text-[#1B544D]">{testimonial.author}</span>.
                        </p>
                    </div>
                    <Link
                        href={route('admin.testimonials.index')}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#E3DFD7] bg-white text-xs sm:text-sm font-semibold text-[#1B544D] hover:bg-[#FAF8F5] transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>Kembali</span>
                    </Link>
                </div>
            }
        >
            <Head title={`Edit Testimoni - ${testimonial.author}`} />

            <div className="py-8">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#EAE6DF] p-6 sm:p-8 space-y-6">

                        {/* Author Field */}
                        <div>
                            <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                <span>Nama Klien / Pemberi Testimoni</span> <span className="text-rose-500 ml-1">*</span>
                                <InfoTooltip text="Nama lengkap klien atau perwakilan instansi yang memberikan testimoni." />
                            </label>
                            <input
                                type="text"
                                value={data.author}
                                onChange={(e) => setData('author', e.target.value)}
                                placeholder="Contoh: Ahmad Fauzi"
                                className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D] px-4 py-2.5"
                                required
                            />
                            {errors.author && <p className="text-rose-500 text-xs mt-1">{errors.author}</p>}
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
                                className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D] px-4 py-2.5"
                            />
                            {errors.role && <p className="text-rose-500 text-xs mt-1">{errors.role}</p>}
                        </div>

                        {/* Quote Field */}
                        <div>
                            <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                <span>Isi Kutipan Testimoni</span> <span className="text-rose-500 ml-1">*</span>
                                <InfoTooltip text="Tuliskan pengalaman, kesan, atau ulasan positif klien mengenai layanan perusahaan." />
                            </label>
                            <textarea
                                rows="4"
                                value={data.quote}
                                onChange={(e) => setData('quote', e.target.value)}
                                placeholder="Tuliskan apresiasi atau ulasan klien..."
                                className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D] px-4 py-2.5"
                                required
                            ></textarea>
                            {errors.quote && <p className="text-rose-500 text-xs mt-1">{errors.quote}</p>}
                        </div>

                        {/* Avatar File Field */}
                        <div>
                            <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                <span>Foto Profil / Avatar Klien</span>
                                <InfoTooltip text="Foto profil atau logo perusahaan klien (rasio 1:1, persegi ideal)." />
                            </label>
                            <div className="flex items-center gap-4">
                                {previewAvatar ? (
                                    <img
                                        src={previewAvatar}
                                        alt="Preview"
                                        className="w-14 h-14 rounded-full object-cover border-2 border-[#1B544D]"
                                    />
                                ) : (
                                    <div className="w-14 h-14 rounded-full bg-[#1B544D]/10 text-[#1B544D] font-bold flex items-center justify-center border border-[#1B544D]/20 text-sm">
                                        {data.author ? data.author[0].toUpperCase() : 'U'}
                                    </div>
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleAvatarChange}
                                    className="block w-full text-xs text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#1B544D]/10 file:text-[#1B544D] hover:file:bg-[#1B544D]/20 cursor-pointer"
                                />
                            </div>
                            {errors.avatar && <p className="text-rose-500 text-xs mt-1">{errors.avatar}</p>}
                        </div>

                        {/* Options: Status & Sort Order */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#EAE6DF]">
                            <div>
                                <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                    <span>Status Publikasi</span> <span className="text-rose-500 ml-1">*</span>
                                    <InfoTooltip text="Aktif untuk menampilkan di landing page, Non-aktif untuk menyembunyikan." />
                                </label>
                                <select
                                    value={data.status}
                                    onChange={(e) => setData('status', e.target.value)}
                                    className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D] px-4 py-2.5"
                                >
                                    <option value="active">Aktif (Tampil di Landing Page)</option>
                                    <option value="inactive">Non-Aktif (Sembunyikan)</option>
                                </select>
                                {errors.status && <p className="text-rose-500 text-xs mt-1">{errors.status}</p>}
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
                                    className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D] px-4 py-2.5"
                                />
                                {errors.sort_order && <p className="text-rose-500 text-xs mt-1">{errors.sort_order}</p>}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6 flex justify-end gap-3 border-t border-[#EAE6DF]">
                            <Link
                                href={route('admin.testimonials.index')}
                                className="px-5 py-2.5 rounded-xl border border-[#E3DFD7] bg-white text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                            >
                                Batal
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="px-6 py-2.5 rounded-xl bg-[#1B544D] text-white text-xs sm:text-sm font-semibold hover:bg-[#15433E] transition-colors disabled:opacity-50"
                            >
                                {processing ? 'Menyimpan...' : 'Perbarui Testimoni'}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
