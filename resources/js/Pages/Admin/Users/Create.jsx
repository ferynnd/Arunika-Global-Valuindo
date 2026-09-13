import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InfoTooltip from '@/Components/InfoTooltip';
import { Head, Link, useForm } from '@inertiajs/react';
import { showErrorAlert } from '@/libs/sweetalert';

export default function Create({ roles }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: roles[0]?.name || 'admin',
        is_active: true,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.users.store'), {
            onError: () => {
                showErrorAlert(
                    'Gagal Menyimpan Pengguna!',
                    'Silakan periksa kembali kolom isian yang wajib diisi dan format email/password.'
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
                            Tambah Pengguna Baru
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                            Daftarkan akun pengguna atau administrator baru ke dalam sistem Arunika.
                        </p>
                    </div>
                    <Link
                        href={route('admin.users.index')}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors shadow-2xs w-fit"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>Kembali ke Daftar</span>
                    </Link>
                </div>
            }
        >
            <Head title="Tambah Pengguna Baru - Admin Arunika" />

            <div className="py-8 w-full min-h-[calc(100vh-8rem)]">
                <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <form onSubmit={submit} className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-xs w-full">
                        
                        <h3 className="text-base font-bold text-primary pb-3 border-b border-slate-100">
                            Informasi Akun & Kredensial
                        </h3>

                        {/* Nama */}
                        <div>
                            <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                <span>Nama Lengkap</span> <span className="text-accent ml-1">*</span>
                            </label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder="Contoh: Rian Utama"
                                className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary px-4 py-2.5 shadow-2xs"
                                required
                            />
                            {errors.name && <p className="text-xs text-accent mt-1">{errors.name}</p>}
                        </div>

                        {/* Username & Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                    <span>Username</span> <span className="text-accent ml-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={data.username}
                                    onChange={(e) => setData('username', e.target.value)}
                                    placeholder="Contoh: rianutama"
                                    className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary px-4 py-2.5 shadow-2xs"
                                    required
                                />
                                {errors.username && <p className="text-xs text-accent mt-1">{errors.username}</p>}
                            </div>

                            <div>
                                <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                    <span>Alamat Email</span> <span className="text-accent ml-1">*</span>
                                </label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="Contoh: admin@arunika.co.id"
                                    className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary px-4 py-2.5 shadow-2xs"
                                    required
                                />
                                {errors.email && <p className="text-xs text-accent mt-1">{errors.email}</p>}
                            </div>
                        </div>

                        {/* Role & Status */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                    <span>Hak Akses (Role)</span> <span className="text-accent ml-1">*</span>
                                    <InfoTooltip text="Menentukan tingkat akses menu dan fitur apa saja yang diizinkan untuk pengguna ini." />
                                </label>
                                <select
                                    value={data.role}
                                    onChange={(e) => setData('role', e.target.value)}
                                    className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary px-4 py-2.5 shadow-2xs"
                                >
                                    {roles.map((role) => (
                                        <option key={role.name} value={role.name}>
                                            {role.label}
                                        </option>
                                    ))}
                                </select>
                                {errors.role && <p className="text-xs text-accent mt-1">{errors.role}</p>}
                            </div>

                            <div>
                                <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                    <span>Status Akun</span> <span className="text-accent ml-1">*</span>
                                </label>
                                <select
                                    value={data.is_active ? '1' : '0'}
                                    onChange={(e) => setData('is_active', e.target.value === '1')}
                                    className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary px-4 py-2.5 shadow-2xs"
                                >
                                    <option value="1">Aktif (Dapat Login)</option>
                                    <option value="0">Non-Aktif (Blokir Sementara)</option>
                                </select>
                                {errors.is_active && <p className="text-xs text-accent mt-1">{errors.is_active}</p>}
                            </div>
                        </div>

                        {/* Password & Confirmation */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                    <span>Kata Sandi</span> <span className="text-accent ml-1">*</span>
                                </label>
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Minimal 8 karakter"
                                    className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary px-4 py-2.5 shadow-2xs"
                                    required
                                />
                                {errors.password && <p className="text-xs text-accent mt-1">{errors.password}</p>}
                            </div>

                            <div>
                                <label className="inline-flex items-center text-sm font-semibold text-slate-700 mb-1.5">
                                    <span>Konfirmasi Kata Sandi</span> <span className="text-accent ml-1">*</span>
                                </label>
                                <input
                                    type="password"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    placeholder="Ulangi kata sandi"
                                    className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary px-4 py-2.5 shadow-2xs"
                                    required
                                />
                                {errors.password_confirmation && <p className="text-xs text-accent mt-1">{errors.password_confirmation}</p>}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6 flex items-center justify-end gap-3 border-t border-slate-100">
                            <Link
                                href={route('admin.users.index')}
                                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-600 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-colors"
                            >
                                Batal
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-primary-dark transition-all disabled:opacity-50 cursor-pointer shadow-xs"
                            >
                                {processing ? 'Menyimpan...' : 'Simpan Pengguna'}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}