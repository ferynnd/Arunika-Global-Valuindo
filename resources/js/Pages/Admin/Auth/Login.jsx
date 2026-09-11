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
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <Head title="Arunika - Admin Login">
                <link rel="icon" type="image/png" href="/images/favicon.ico" />
            </Head>

            <div className="w-full max-w-sm">
                {/* Logo */}
                <div className="flex flex-col items-center mb-8">
                    <img src="/images/logo.png" alt="Arunika" className="h-20 w-auto mb-1" />
                </div>

                {/* Login Card */}
                <div className="bg-background rounded-2xl border border-primary/10 p-8 shadow-sm">
                    <h2 className="text-lg font-body text-primary mb-1">
                        Masuk ke Akun
                    </h2>
                    <p className="text-sm text-primary-dark/50 mb-6">
                        Masukkan email dan kata sandi Anda
                    </p>

                    {errors.email && (
                        <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-medium">
                            {errors.email}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-xs font-semibold text-primary-dark mb-1.5">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="admin@domain.com"
                                className="w-full rounded-xl py-2.5 px-4 border border-primary/15 bg-white text-sm text-primary-dark placeholder-primary-dartext-primary-dark/30 focus:border-secondary focus:ring-secondary"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-xs font-semibold text-primary-dark mb-1.5">
                                Kata Sandi
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={data.password}
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full rounded-xl py-2.5 px-4 border border-primary/15 bg-white text-sm text-primary-dark placeholder-primary-dartext-primary-dark/30 focus:border-secondary focus:ring-secondary pr-14"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-dark/40 hover:text-primary-dark text-xs font-semibold"
                                >
                                    {showPassword ? 'Sembunyi' : 'Lihat'}
                                </button>
                            </div>
                        </div>

                        <label className="flex items-center gap-2 cursor-pointer pt-1">
                            <input
                                type="checkbox"
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                                className="rounded border-primary/20 text-secondary focus:ring-secondary"
                            />
                            <span className="text-xs text-primary-dark/60 font-medium">
                                Ingat saya
                            </span>
                        </label>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full py-3 rounded-xl bg-primary text-white font-bold text-sm hover:brightness-105 transition-all disabled:opacity-50"
                        >
                            {processing ? 'Memverifikasi...' : 'Masuk'}
                        </button>
                    </form>
                </div>

                <p className="text-center text-[11px] text-primary-dark/40 font-medium mt-6">
                    © {new Date().getFullYear()} Arunika Global Valuindo
                </p>
            </div>
        </div>
    );
}