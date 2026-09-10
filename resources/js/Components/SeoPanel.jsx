import { useState } from 'react';
import InfoTooltip from '@/Components/InfoTooltip';

/**
 * SeoPanel – reusable SEO input form block with live Google & OG preview.
 *
 * Props:
 *   data             – form data object
 *   setData          – Inertia useForm setData function
 *   errors           – Inertia useForm errors object
 *   siteName         – site name shown after | in Google preview title
 *   previewPath      – URL path segment, e.g. 'services/nama-layanan' or 'blog/nama-artikel'
 *   existingOgImage  – existing og_image path stored in DB (for Services)
 *   fieldPrefix      – 'seo' (Services) | 'meta' (Articles). Controls which fields are read/written.
 *                      'seo'  → data.seo_title, data.seo_description, data.seo_keywords, data.og_image
 *                      'meta' → data.meta_title, data.meta_description, data.meta_keywords (no og_image)
 */
export default function SeoPanel({
    data,
    setData,
    errors = {},
    siteName = 'Arunika Global Valuindo',
    previewPath = '',
    existingOgImage = null,
    fieldPrefix = 'seo', // 'seo' | 'meta'
}) {
    // Derive field keys from prefix
    const titleKey = `${fieldPrefix}_title`;
    const descKey  = `${fieldPrefix}_description`;
    const kwKey    = `${fieldPrefix}_keywords`;
    const hasSeoOgImage = fieldPrefix === 'seo';

    const [ogPreview, setOgPreview] = useState(
        existingOgImage ? `/storage/${existingOgImage}` : null
    );

    const handleOgImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('og_image', file);
            setOgPreview(URL.createObjectURL(file));
        }
    };

    // ---- computed preview values ----
    const rawTitle  = data[titleKey] || '';
    const rawDesc   = data[descKey]  || '';
    const rawKw     = data[kwKey]    || '';

    const previewTitle = (rawTitle || data.title || 'Judul Halaman') + ` | ${siteName}`;
    const previewDesc  = rawDesc || data.excerpt || 'Deskripsi halaman akan muncul di sini. Tulis meta description yang menarik dan informatif dalam 120–160 karakter.';
    const previewUrl   = `https://www.arunikaglobal.com/${previewPath || (fieldPrefix === 'meta' ? 'blog/nama-artikel' : 'services/nama-layanan')}`;

    const titleLen = rawTitle.length;
    const descLen  = rawDesc.length;

    const titleColor = titleLen === 0 ? 'text-slate-400' : titleLen <= 60  ? 'text-emerald-600' : 'text-rose-500';
    const descColor  = descLen  === 0 ? 'text-slate-400' : descLen  <= 160 ? 'text-emerald-600' : 'text-rose-500';

    return (
        <div className="space-y-6">

            {/* ---- SEO Section Header ---- */}
            <div className="flex items-center gap-3 pb-3 border-b border-[#EAE6DF]">
                <div className="h-9 w-9 rounded-xl bg-[#1B544D]/10 text-[#1B544D] flex items-center justify-center">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                    </svg>
                </div>
                <div>
                    <h3 className="text-sm font-bold text-[#1B544D]">Optimasi SEO</h3>
                    <p className="text-xs text-slate-500">Pengaturan untuk mesin pencari & media sosial</p>
                </div>
            </div>

            {/* ---- Google SERP Preview ---- */}
            <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Preview di Google Search
                </p>
                <div className="bg-white rounded-2xl border border-[#EAE6DF] p-5">
                    {/* Favicon + URL bar */}
                    <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-5 h-5 rounded-full bg-[#1B544D] flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-[9px] font-black">A</span>
                        </div>
                        <div className="min-w-0">
                            <p className="text-xs text-slate-700 font-medium truncate">{siteName}</p>
                            <p className="text-xs text-slate-400 truncate">{previewUrl}</p>
                        </div>
                    </div>
                    {/* Title */}
                    <p className="text-[#1a0dab] text-base font-normal leading-snug hover:underline cursor-pointer line-clamp-1">
                        {previewTitle}
                    </p>
                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1 line-clamp-2">
                        {previewDesc}
                    </p>
                </div>
            </div>

            {/* ---- Open Graph Preview (only for seo prefix / Services) ---- */}
            {hasSeoOgImage && (
                <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Preview Saat Dibagikan di Media Sosial (OG)
                    </p>
                    <div className="bg-[#f0f2f5] rounded-2xl border border-[#DDE1E7] overflow-hidden">
                        {ogPreview ? (
                            <img src={ogPreview} alt="OG Preview" className="w-full h-44 object-cover" />
                        ) : (
                            <div className="w-full h-44 bg-gradient-to-br from-[#1B544D] to-[#0E2C27] flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 mx-auto mb-2 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                        </svg>
                                    </div>
                                    <p className="text-white/40 text-xs">Belum ada OG Image</p>
                                </div>
                            </div>
                        )}
                        <div className="p-3 border-t border-[#DDE1E7] bg-white">
                            <p className="text-xs text-slate-400 uppercase tracking-wider">arunikaglobal.com</p>
                            <p className="text-sm font-semibold text-slate-800 mt-0.5 line-clamp-1">
                                {rawTitle || data.title || 'Judul Layanan'}
                            </p>
                            <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                                {rawDesc || data.excerpt || 'Deskripsi singkat akan muncul di sini.'}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* ---- Open Graph Preview (for meta prefix / Articles — uses thumbnail) ---- */}
            {!hasSeoOgImage && (
                <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Preview Saat Dibagikan di Media Sosial (OG)
                    </p>
                    <div className="bg-[#f0f2f5] rounded-2xl border border-[#DDE1E7] overflow-hidden">
                        {data._existingThumbnail ? (
                            <img src={data._existingThumbnail} alt="OG Preview" className="w-full h-44 object-cover" />
                        ) : (
                            <div className="w-full h-44 bg-gradient-to-br from-[#1B544D] to-[#0E2C27] flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 mx-auto mb-2 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                        </svg>
                                    </div>
                                    <p className="text-white/40 text-xs">OG Image = Thumbnail Artikel</p>
                                </div>
                            </div>
                        )}
                        <div className="p-3 border-t border-[#DDE1E7] bg-white">
                            <p className="text-xs text-slate-400 uppercase tracking-wider">arunikaglobal.com</p>
                            <p className="text-sm font-semibold text-slate-800 mt-0.5 line-clamp-1">
                                {rawTitle || data.title || 'Judul Artikel'}
                            </p>
                            <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                                {rawDesc || data.excerpt || 'Deskripsi singkat akan muncul di sini.'}
                            </p>
                        </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1.5">
                        Untuk artikel, gambar OG diambil dari thumbnail yang diunggah di atas.
                    </p>
                </div>
            )}

            {/* ---- SEO Title ---- */}
            <div>
                <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor={titleKey} className="inline-flex items-center text-sm font-semibold text-slate-700">
                        SEO Title (Meta Title)
                        <InfoTooltip text="Kosongkan jika ingin menggunakan judul utama secara otomatis. Ideal 50–60 karakter." />
                    </label>
                    <span className={`text-xs font-mono font-semibold ${titleColor}`}>
                        {titleLen}/60
                    </span>
                </div>
                <input
                    id={titleKey}
                    type="text"
                    value={rawTitle}
                    onChange={(e) => setData(titleKey, e.target.value)}
                    maxLength={70}
                    placeholder={`Contoh: ${data.title || 'Nama Halaman'} | ${siteName}`}
                    className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D] placeholder-slate-400 px-4 py-2.5"
                />
                {errors[titleKey] && <p className="text-xs text-rose-500 mt-1">{errors[titleKey]}</p>}
            </div>

            {/* ---- SEO Description ---- */}
            <div>
                <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor={descKey} className="inline-flex items-center text-sm font-semibold text-slate-700">
                        SEO Description (Meta Description)
                        <InfoTooltip text="Kosongkan jika ingin menggunakan ringkasan secara otomatis. Ideal 120–160 karakter untuk hasil pencarian Google." />
                    </label>
                    <span className={`text-xs font-mono font-semibold ${descColor}`}>
                        {descLen}/160
                    </span>
                </div>
                <textarea
                    id={descKey}
                    rows="3"
                    value={rawDesc}
                    onChange={(e) => setData(descKey, e.target.value)}
                    maxLength={180}
                    placeholder="Tuliskan deskripsi singkat yang menarik untuk mesin pencari. Ideal: 120–160 karakter."
                    className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D] placeholder-slate-400 px-4 py-2.5"
                />
                {errors[descKey] && <p className="text-xs text-rose-500 mt-1">{errors[descKey]}</p>}
            </div>

            {/* ---- SEO Keywords ---- */}
            <div>
                <label htmlFor={kwKey} className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                    SEO Keywords
                    <InfoTooltip text="Pisahkan tiap kata kunci dengan koma. Contoh: valuasi aset, konsultasi korporasi, studi kelayakan." />
                </label>
                <input
                    id={kwKey}
                    type="text"
                    value={rawKw}
                    onChange={(e) => setData(kwKey, e.target.value)}
                    placeholder="valuasi aset, konsultasi korporasi, feasibility study, ..."
                    className="w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-sm text-slate-800 focus:border-[#1B544D] focus:ring-[#1B544D] placeholder-slate-400 px-4 py-2.5"
                />
                {errors[kwKey] && <p className="text-xs text-rose-500 mt-1">{errors[kwKey]}</p>}
            </div>

            {/* ---- OG Image Upload (Services only) ---- */}
            {hasSeoOgImage && (
                <div>
                    <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                        Open Graph Image (Gambar Share Media Sosial)
                        <InfoTooltip text="Ukuran ideal: 1200×630 px (rasio 1.91:1). Maksimal 2 MB. Jika dikosongkan, gambar banner layanan akan digunakan." />
                    </label>
                    <div className="space-y-3">
                        {ogPreview && (
                            <div className="overflow-hidden rounded-xl border border-[#EAE6DF] max-w-md">
                                <img
                                    src={ogPreview}
                                    alt="OG Image Preview"
                                    className="w-full h-40 object-cover"
                                />
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleOgImageChange}
                            className="block w-full text-xs sm:text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#1B544D]/10 file:text-[#1B544D] hover:file:bg-[#1B544D]/20 cursor-pointer"
                        />
                    </div>
                    {errors.og_image && <p className="text-xs text-rose-500 mt-1">{errors.og_image}</p>}
                </div>
            )}

            {/* ---- Tips Box ---- */}
            <div className="rounded-2xl bg-[#1B544D]/5 border border-[#1B544D]/10 p-4">
                <p className="text-xs font-bold text-[#1B544D] mb-2 flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    Tips SEO
                </p>
                <ul className="space-y-1 text-xs text-[#1B544D]/80 list-disc list-inside">
                    <li>SEO Title ideal antara <strong>50–60 karakter</strong> agar tidak terpotong di Google.</li>
                    <li>Meta Description ideal <strong>120–160 karakter</strong> — buat kalimat yang menarik dan mengandung kata kunci utama.</li>
                    <li>Keywords tidak terlalu berpengaruh pada ranking, namun berguna untuk konteks internal.</li>
                    <li>Jika kolom dikosongkan, judul dan ringkasan akan digunakan sebagai fallback otomatis.</li>
                </ul>
            </div>

        </div>
    );
}
