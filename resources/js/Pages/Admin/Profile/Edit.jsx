import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                        Pengaturan Profil
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                        Kelola informasi akun, kata sandi, dan keamanan profil Anda.
                    </p>
                </div>
            }
        >
            <Head title="Pengaturan Profil - Admin" />

            <div className="py-8 bg-[#FAF8F5]/60 min-h-[calc(100vh-8rem)]">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
                    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-rose-100">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

