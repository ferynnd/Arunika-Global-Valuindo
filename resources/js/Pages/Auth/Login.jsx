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
        <div className="flex min-h-screen items-center justify-center bg-slate-900 px-4 py-12">
            <Head title="Masuk ke Sistem" />

            <div className="w-full max-w-md">
                {/* Brand / Title Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 mb-4 font-bold text-2xl">
                        A
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        Arunika Global Valuindo
                    </h1>
                    <p className="mt-2 text-sm text-slate-400">
                        Masukkan kredensial akun Anda untuk mengakses sistem
                    </p>
                </div>

                {/* Form Card */}
                <div className="rounded-2xl bg-slate-800/80 backdrop-blur-xl p-8 shadow-2xl border border-slate-700/50">
                    {status && (
                        <div className="mb-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-4 text-sm font-medium text-emerald-400">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-5">
                        <div>
                            <InputLabel htmlFor="email" value="Alamat Email" className="text-slate-300 font-medium mb-1.5" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                placeholder="nama@perusahaan.com"
                                className="block w-full rounded-xl border-slate-700 bg-slate-900/60 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Kata Sandi" className="text-slate-300 font-medium mb-1.5" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                placeholder="••••••••"
                                className="block w-full rounded-xl border-slate-700 bg-slate-900/60 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-between pt-1">
                            <label className="flex items-center cursor-pointer">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    className="rounded border-slate-700 bg-slate-900 text-indigo-600 focus:ring-indigo-500"
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ms-2 text-sm text-slate-400">
                                    Ingat saya
                                </span>
                            </label>
                        </div>

                        <PrimaryButton 
                            className="w-full justify-center rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200" 
                            disabled={processing}
                        >
                            {processing ? 'Memproses...' : 'Masuk Sekarang'}
                        </PrimaryButton>
                    </form>

                    <div className="mt-6 text-center text-sm text-slate-400">
                        Belum memiliki akun?{' '}
                        <Link
                            href={route('register')}
                            className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-4"
                        >
                            Daftar di sini
                        </Link>
                    </div>
                </div>

                <div className="mt-8 text-center text-xs text-slate-500">
                    &copy; {new Date().getFullYear()} PT Arunika Global Valuindo. All rights reserved.
                </div>
            </div>
        </div>
    );
}
