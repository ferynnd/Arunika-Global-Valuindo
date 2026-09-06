import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="min-h-screen bg-[#FAF8F5] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans selection:bg-[#ECAE36] selection:text-[#1B544D]">
            <Head title="Masuk ke Sistem - Arunika Global Valuindo" />

            {/* Back to Home Link */}
            <div className="sm:mx-auto sm:w-full sm:max-w-md px-4 mb-4">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#1B544D] hover:text-[#ECAE36] transition-colors"
                >
                    <span>←</span>
                    <span>Kembali ke Beranda</span>
                </Link>
            </div>

            {/* Brand Header */}
            <div className="sm:mx-auto sm:w-full sm:max-w-md px-4 text-center">
                <Link href="/" className="inline-flex flex-col items-center group">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ECAE36] to-[#D99B26] flex items-center justify-center shadow-lg shadow-[#ECAE36]/30 text-white font-black mb-3 group-hover:scale-105 transition-transform">
                        <svg className="w-7 h-7 text-[#1B544D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    <span className="font-extrabold text-lg tracking-wider text-[#1B544D] block uppercase leading-tight">
                        ARUNIKA
                    </span>
                    <span className="text-[10px] font-semibold tracking-widest text-[#718783] block uppercase">
                        GLOBAL VALUINDO
                    </span>
                </Link>
                <h2 className="mt-4 text-xl font-bold tracking-tight text-[#1B544D]">
                    Masuk ke Portal Admin
                </h2>
                <p className="mt-1 text-xs text-[#52605E]">
                    Silakan masukkan email dan kata sandi Anda untuk melanjutkan
                </p>
            </div>

            {/* Login Card */}
            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md px-4">
                <div className="bg-white py-8 px-6 sm:px-10 rounded-3xl border border-[#EAE6DF] shadow-xl shadow-slate-200/50">
                    
                    {status && (
                        <div className="mb-6 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-xs font-medium text-emerald-800">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-5">
                        <div>
                            <InputLabel htmlFor="email" value="Alamat Email" className="text-xs font-semibold text-[#1B544D] mb-1.5" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                placeholder="nama@perusahaan.com"
                                className="block w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-slate-800 placeholder-slate-400 focus:border-[#1B544D] focus:ring-[#1B544D] text-sm"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-1 text-xs" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Kata Sandi" className="text-xs font-semibold text-[#1B544D] mb-1.5" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                placeholder="••••••••"
                                className="block w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-slate-800 placeholder-slate-400 focus:border-[#1B544D] focus:ring-[#1B544D] text-sm"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-1 text-xs" />
                        </div>

                        <div className="flex items-center justify-between pt-1">
                            <label className="flex items-center cursor-pointer">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    className="rounded border-[#D5D0C7] text-[#1B544D] focus:ring-[#1B544D]"
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ms-2 text-xs text-[#52605E]">
                                    Ingat saya
                                </span>
                            </label>
                        </div>

                        <div>
                            <PrimaryButton 
                                className="w-full justify-center rounded-xl bg-[#1B544D] py-3 text-sm font-semibold text-white shadow-md shadow-[#1B544D]/20 hover:bg-[#15433E] focus:outline-none focus:ring-2 focus:ring-[#1B544D] focus:ring-offset-2 transition-all duration-200" 
                                disabled={processing}
                            >
                                {processing ? 'Memproses...' : 'Masuk Sekarang →'}
                            </PrimaryButton>
                        </div>
                    </form>

                    <div className="mt-6 text-center text-xs text-[#52605E]">
                        Belum memiliki akun?{' '}
                        <Link
                            href={route('register')}
                            className="font-semibold text-[#ECAE36] hover:text-[#D99B26] transition-colors underline underline-offset-4"
                        >
                            Daftar di sini
                        </Link>
                    </div>

                </div>

                <div className="mt-8 text-center text-[11px] text-[#718783]">
                    &copy; {new Date().getFullYear()} PT Arunika Global Valuindo. All rights reserved.
                </div>
            </div>
        </div>
    );
}
