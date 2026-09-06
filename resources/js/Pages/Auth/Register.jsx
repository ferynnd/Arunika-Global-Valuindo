import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="min-h-screen bg-[#FAF8F5] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans selection:bg-[#ECAE36] selection:text-[#1B544D]">
            <Head title="Pendaftaran Akun Baru - Arunika Global Valuindo" />

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
                    <span className="font-extrabold text-base tracking-wider text-[#1B544D] block uppercase leading-tight">
                        ARUNIKA
                    </span>
                    <span className="text-[10px] font-semibold tracking-widest text-[#718783] block uppercase">
                        GLOBAL VALUINDO
                    </span>
                </Link>
                <h2 className="mt-4 text-xl font-bold tracking-tight text-[#1B544D]">
                    Buat Akun Baru
                </h2>
                <p className="mt-1 text-xs text-[#52605E]">
                    Isi formulir berikut untuk mendaftar ke sistem
                </p>
            </div>

            {/* Register Card */}
            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md px-4">
                <div className="bg-white py-8 px-6 sm:px-10 rounded-3xl border border-[#EAE6DF] shadow-xl shadow-slate-200/50">
                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <InputLabel htmlFor="name" value="Nama Lengkap" className="text-xs font-semibold text-[#1B544D] mb-1.5" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                placeholder="Nama lengkap Anda"
                                className="block w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-slate-800 placeholder-slate-400 focus:border-[#1B544D] focus:ring-[#1B544D] text-sm"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                            <InputError message={errors.name} className="mt-1 text-xs" />
                        </div>

                        <div>
                            <InputLabel htmlFor="username" value="Username" className="text-xs font-semibold text-[#1B544D] mb-1.5" />
                            <TextInput
                                id="username"
                                name="username"
                                value={data.username}
                                placeholder="username_anda"
                                className="block w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-slate-800 placeholder-slate-400 focus:border-[#1B544D] focus:ring-[#1B544D] text-sm"
                                autoComplete="username"
                                onChange={(e) => setData('username', e.target.value)}
                                required
                            />
                            <InputError message={errors.username} className="mt-1 text-xs" />
                        </div>

                        <div>
                            <InputLabel htmlFor="email" value="Alamat Email" className="text-xs font-semibold text-[#1B544D] mb-1.5" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                placeholder="nama@perusahaan.com"
                                className="block w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-slate-800 placeholder-slate-400 focus:border-[#1B544D] focus:ring-[#1B544D] text-sm"
                                autoComplete="email"
                                onChange={(e) => setData('email', e.target.value)}
                                required
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
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            <InputError message={errors.password} className="mt-1 text-xs" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password_confirmation" value="Konfirmasi Kata Sandi" className="text-xs font-semibold text-[#1B544D] mb-1.5" />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                placeholder="••••••••"
                                className="block w-full rounded-xl border-[#E3DFD7] bg-[#FBF9F6] text-slate-800 placeholder-slate-400 focus:border-[#1B544D] focus:ring-[#1B544D] text-sm"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />
                            <InputError message={errors.password_confirmation} className="mt-1 text-xs" />
                        </div>

                        <div className="pt-2">
                            <PrimaryButton
                                className="w-full justify-center rounded-xl bg-[#1B544D] py-3 text-sm font-semibold text-white shadow-md shadow-[#1B544D]/20 hover:bg-[#15433E] focus:outline-none focus:ring-2 focus:ring-[#1B544D] focus:ring-offset-2 transition-all duration-200"
                                disabled={processing}
                            >
                                {processing ? 'Mendaftarkan...' : 'Daftar Sekarang →'}
                            </PrimaryButton>
                        </div>
                    </form>

                    <div className="mt-6 text-center text-xs text-[#52605E]">
                        Sudah memiliki akun?{' '}
                        <Link
                            href={route('login')}
                            className="font-semibold text-[#ECAE36] hover:text-[#D99B26] transition-colors underline underline-offset-4"
                        >
                            Masuk di sini
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
