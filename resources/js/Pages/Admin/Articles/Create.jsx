import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import RichTextEditor from '@/Components/RichTextEditor';
import SeoPanel from '@/Components/SeoPanel';
import InfoTooltip from '@/Components/InfoTooltip';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';
import { showErrorAlert } from '@/libs/sweetalert';

export default function Create({ categories }) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        category_id: '',
        new_category: '', // Field untuk kategori baru
        excerpt: '',
        content: '',
        status: 'draft',
        thumbnail: null,
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
    });

    const [thumbnailPreview, setThumbnailPreview] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    // --- STATE UNTUK CUSTOM SELECT2 KATEGORI ---
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Klik di luar dropdown untuk menutupnya
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Filter kategori berdasarkan ketikan
    const filteredCategories = categories.filter(c => 
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Cek apakah ketikan persis sama dengan kategori yang sudah ada
    const exactMatch = categories.find(c => 
        c.name.toLowerCase() === searchTerm.trim().toLowerCase()
    );
    // Tampilkan opsi "Buat Kategori" jika belum ada yang cocok persis
    const showCreateOption = searchTerm.trim().length > 0 && !exactMatch;

    const handleSelectCategory = (cat) => {
        setData(prev => ({ ...prev, category_id: cat.id, new_category: '' }));
        setSearchTerm(cat.name);
        setIsDropdownOpen(false);
    };

    const handleCreateCategory = () => {
        const newCatName = searchTerm.trim();
        setData(prev => ({ ...prev, category_id: '', new_category: newCatName }));
        setIsDropdownOpen(false);
    };

    // Handler jika menekan Enter saat mengetik di input kategori
    const handleCategoryKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Mencegah form tersubmit langsung
            if (isDropdownOpen) {
                if (showCreateOption) {
                    handleCreateCategory();
                } else if (filteredCategories.length > 0) {
                    handleSelectCategory(filteredCategories[0]);
                }
            } else {
                setIsDropdownOpen(true);
            }
        }
    };
    // ------------------------------------------

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
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-primary-dark">
                            Tambah Artikel Baru
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                            Buat dan publikasikan artikel blog baru ke sistem.
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
            <Head title="Tambah Artikel Baru - Admin" />

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
                                
                                {/* CUSTOM SELECT2 KATEGORI */}
                                <div>
                                    <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                        <span>Kategori Artikel</span>
                                        <InfoTooltip text="Pilih dari yang ada atau ketik lalu tekan Enter untuk membuat baru." />
                                    </label>
                                    
                                    <div className="relative" ref={dropdownRef}>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="Cari atau ketik baru..."
                                                value={searchTerm}
                                                onChange={(e) => {
                                                    setSearchTerm(e.target.value);
                                                    setIsDropdownOpen(true);
                                                    setData(prev => ({ ...prev, category_id: '', new_category: '' }));
                                                }}
                                                onFocus={() => setIsDropdownOpen(true)}
                                                onKeyDown={handleCategoryKeyDown}
                                                className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary px-4 py-2.5 shadow-2xs pr-10"
                                            />
                                            {/* Caret Icon */}
                                            <div 
                                                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            >
                                                <svg className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </div>
                                        </div>

                                        {isDropdownOpen && (
                                            <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                                                {filteredCategories.length > 0 && (
                                                    <div className="p-1.5">
                                                        {filteredCategories.map(cat => (
                                                            <div
                                                                key={cat.id}
                                                                onClick={() => handleSelectCategory(cat)}
                                                                className={`px-3 py-2 text-sm rounded-lg cursor-pointer transition-colors ${
                                                                    data.category_id === cat.id 
                                                                        ? 'bg-primary/10 text-primary font-semibold' 
                                                                        : 'text-slate-700 hover:bg-slate-100'
                                                                }`}
                                                            >
                                                                {cat.name}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {showCreateOption && (
                                                    <div className="p-1.5 border-t border-slate-100">
                                                        <div
                                                            onClick={handleCreateCategory}
                                                            className="px-3 py-2 text-sm rounded-lg cursor-pointer text-primary bg-primary/5 hover:bg-primary/15 transition-colors flex items-center gap-2"
                                                        >
                                                            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                                            </svg>
                                                            <span>Buat kategori: <strong className="font-bold">"{searchTerm.trim()}"</strong></span>
                                                        </div>
                                                    </div>
                                                )}

                                                {filteredCategories.length === 0 && !showCreateOption && (
                                                    <div className="p-3 text-sm text-slate-500 text-center">
                                                        Ketik untuk mencari atau menambahkan...
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* Indikator visual jika mode tambah kategori baru aktif */}
                                    {data.new_category && (
                                        <p className="text-[11px] text-primary mt-1.5 font-medium flex items-center gap-1">
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                                            Kategori baru siap disimpan.
                                        </p>
                                    )}

                                    {errors.category_id && <div className="text-xs text-accent mt-1">{errors.category_id}</div>}
                                    {errors.new_category && <div className="text-xs text-accent mt-1">{errors.new_category}</div>}
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
                                    className={`relative border-2 border-dashed rounded-2xl p-6 transition-all text-center cursor-pointer flex flex-col items-center justify-center min-h-[200px] ${
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
                                    <InfoTooltip text="Gunakan editor teks untuk menyusun isi artikel." />
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
                                    _existingThumbnail: thumbnailPreview || null,
                                }}
                                setData={setData}
                                errors={errors}
                                fieldPrefix="meta"
                                previewPath="blog/nama-artikel"
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
                                {processing ? 'Menyimpan...' : 'Simpan Artikel'}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}