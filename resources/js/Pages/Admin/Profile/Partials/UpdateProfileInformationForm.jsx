import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { showSuccessAlert, showErrorAlert } from '@/libs/sweetalert';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'), {
            onSuccess: () => {
                showSuccessAlert('Berhasil!', 'Informasi profil akun berhasil diperbarui.');
            },
            onError: () => {
                showErrorAlert('Gagal Perbarui Profil!', 'Silakan periksa kembali kelengkapan data profil.');
            },
        });
    };

    return (
        <section className={className}>
            <header className="pb-3 border-b border-slate-100">
                <h2 className="text-base font-bold text-primary">
                    Informasi Profil Pengguna
                </h2>
                <p className="mt-0.5 text-xs sm:text-sm text-slate-500">
                    Perbarui nama akun dan alamat email terdaftar Anda.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-5">
                <div>
                    <InputLabel 
                        htmlFor="name" 
                        value="Nama Lengkap" 
                        className="text-slate-700 font-semibold text-sm mb-1.5"
                    />

                    <TextInput
                        id="name"
                        className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary px-4 py-2.5 shadow-2xs"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-1 text-xs text-accent" message={errors.name} />
                </div>

                <div>
                    <InputLabel 
                        htmlFor="email" 
                        value="Alamat Email" 
                        className="text-slate-700 font-semibold text-sm mb-1.5"
                    />

                    <TextInput
                        id="email"
                        type="email"
                        className="w-full rounded-xl border-slate-200 bg-background text-sm text-text focus:border-primary focus:ring-primary px-4 py-2.5 shadow-2xs"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-1 text-xs text-accent" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-xs text-slate-600">
                            Alamat email Anda belum diverifikasi.{' '}
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="font-semibold text-primary underline hover:text-primary-dark focus:outline-none"
                            >
                                Klik di sini untuk mengirim ulang email verifikasi.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-xs font-semibold text-emerald-600">
                                Tautan verifikasi baru telah dikirim ke alamat email Anda.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4 pt-2">
                    <PrimaryButton 
                        disabled={processing}
                        className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-primary-dark transition-all shadow-2xs"
                    >
                        Simpan Perubahan
                    </PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-xs font-semibold text-emerald-600">
                            Berhasil Disimpan.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}