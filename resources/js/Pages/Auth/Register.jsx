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
        <div className="flex min-h-screen items-center justify-center bg-slate-900 px-4 py-12">
            <Head title="Pendaftaran Akun Baru" />

            <div className="w-full max-w-md">
                {/* Brand / Title Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 mb-4 font-bold text-2xl">
                        A
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        Buat Akun Baru
                    </h1>
                    <p className="mt-2 text-sm text-slate-400">
                        Isi formulir berikut untuk mendaftar ke sistem
                    </p>
                </div>

                {/* Form Card */}
                <div className="rounded-2xl bg-slate-800/80 backdrop-blur-xl p-8 shadow-2xl border border-slate-700/50">
                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <InputLabel htmlFor="name" value="Nama Lengkap" className="text-slate-300 font-medium mb-1.5" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                placeholder="Nama lengkap Anda"
                                className="block w-full rounded-xl border-slate-700 bg-slate-900/60 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                            <InputError message={errors.name} className="mt-1" />
                        </div>

                        <div>
                            <InputLabel htmlFor="username" value="Username" className="text-slate-300 font-medium mb-1.5" />
                            <TextInput
                                id="username"
                                name="username"
                                value={data.username}
                                placeholder="username_anda"
                                className="block w-full rounded-xl border-slate-700 bg-slate-900/60 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                                autoComplete="username"
                                onChange={(e) => setData('username', e.target.value)}
                                required
                            />
                            <InputError message={errors.username} className="mt-1" />
                        </div>

                        <div>
                            <InputLabel htmlFor="email" value="Alamat Email" className="text-slate-300 font-medium mb-1.5" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                placeholder="nama@perusahaan.com"
                                className="block w-full rounded-xl border-slate-700 bg-slate-900/60 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                                autoComplete="email"
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                            <InputError message={errors.email} className="mt-1" />
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
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            <InputError message={errors.password} className="mt-1" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password_confirmation" value="Konfirmasi Kata Sandi" className="text-slate-300 font-medium mb-1.5" />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                placeholder="••••••••"
                                className="block w-full rounded-xl border-slate-700 bg-slate-900/60 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-indigo-500"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />
                            <InputError message={errors.password_confirmation} className="mt-1" />
                        </div>

                        <div className="pt-2">
                            <PrimaryButton
                                className="w-full justify-center rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200"
                                disabled={processing}
                            >
                                {processing ? 'Mendaftarkan...' : 'Daftar Sekarang'}
                            </PrimaryButton>
                        </div>
                    </form>

                    <div className="mt-6 text-center text-sm text-slate-400">
                        Sudah punya akun?{' '}
                        <Link
                            href={route('login')}
                            className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-4"
                        >
                            Masuk di sini
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
