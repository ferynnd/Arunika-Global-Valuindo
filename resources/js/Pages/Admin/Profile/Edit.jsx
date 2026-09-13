import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-primary-dark">
                            Pengaturan Profil Akun
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                            Kelola informasi identitas, alamat email, dan keamanan kata sandi akun Anda.
                        </p>
                    </div>
                </div>
            }
        >
            <Head title="Pengaturan Profil - Admin Arunika" />

            <div className="py-8 w-full min-h-[calc(100vh-8rem)]">
                <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                    
                    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs w-full">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs w-full">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    {/* Hapus komentar atau aktifkan jika diperlukan form hapus akun */}
                    {/* <div className="bg-white p-6 sm:p-8 rounded-2xl border border-rose-200/80 shadow-xs w-full">
                        <DeleteUserForm className="max-w-xl" />
                    </div> */}

                </div>
            </div>
        </AuthenticatedLayout>
    );
}