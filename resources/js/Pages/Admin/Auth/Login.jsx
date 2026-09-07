import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.login.store'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="min-h-screen bg-[#0E2C27] text-slate-100 font-sans flex flex-col justify-center items-center p-4 selection:bg-[#ECAE36] selection:text-[#1B544D]">
            <Head title="Portal Portal Keamanan - Admin Login" />

            <div className="w-full max-w-md space-y-8">
                {/* Brand Logo & Header */}
                <div className="text-center space-y-3">
                    <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ECAE36] to-[#D99B26] flex items-center justify-center shadow-lg shadow-[#ECAE36]/20 text-[#1B544D] font-black border border-[#ECAE36]/40">
                        <svg className="w-8 h-8 text-[#1B544D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-2xl font-extrabold tracking-wider uppercase text-white">
                            ARUNIKA
                        </h1>
                        <p className="text-[#ECAE36] text-xs font-semibold uppercase tracking-widest mt-0.5">
                            INTERNAL MANAGEMENT PORTAL
                        </p>
                    </div>
                </div>

                {/* Login Form Card */}
                <div className="bg-[#143F39] rounded-3xl border border-[#2C6B62] p-8 shadow-2xl space-y-6">
                    <div className="border-b border-[#2C6B62] pb-4">
                        <h2 className="text-base font-bold text-white">
                            Autentikasi Administrator
                        </h2>
                        <p className="text-xs text-slate-300 mt-1">
                            Masukkan kredensial terverifikasi untuk mengakses konsol kontrol admin.
                        </p>
                    </div>

                    {/* Generic / Validation Error Display */}
                    {errors.email && (
                        <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold leading-relaxed">
                            ⚠️ {errors.email}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-5">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-xs font-semibold text-slate-200 mb-1.5">
                                Alamat Email Pengguna
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="admin@domain.com"
                                className="w-full rounded-xl border-[#2C6B62] bg-[#0A221E] text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#ECAE36] focus:ring-[#ECAE36]"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-xs font-semibold text-slate-200 mb-1.5">
                                Kata Sandi Akses
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={data.password}
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="••••••••••••"
                                    className="w-full rounded-xl border-[#2C6B62] bg-[#0A221E] text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#ECAE36] focus:ring-[#ECAE36] pr-10"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-semibold"
                                >
                                    {showPassword ? 'Sembunyi' : 'Lihat'}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me Checkbox */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="rounded border-[#2C6B62] bg-[#0A221E] text-[#ECAE36] focus:ring-[#ECAE36]"
                                />
                                <span className="text-xs text-slate-300 font-medium">
                                    Ingat Sesi Perangkat Ini
                                </span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ECAE36] to-[#D99B26] text-[#1B544D] font-extrabold text-xs sm:text-sm hover:brightness-110 transition-all shadow-md shadow-[#ECAE36]/20 disabled:opacity-50"
                        >
                            {processing ? 'Memverifikasi...' : 'Masuk Portal Administrator'}
                        </button>
                    </form>
                </div>

                {/* Footer Security Notice */}
                <div className="text-center text-[11px] text-slate-400 font-medium">
                    Sistem Terenkripsi & Diproteksi Server-Side Rate Limiter.<br />
                    Akses Tanpa Wewenang Dilarang.
                </div>
            </div>
        </div>
    );
}
