import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <AuthenticatedLayout>
            <Head title="Profile" />

            <div className="flex max-w-7xl flex-col sm:px-6 lg:px-8">
                <div className="p-4 shadow sm:p-8">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                    />
                </div>

                <div className="p-4 shadow sm:p-8">
                    <UpdatePasswordForm />
                </div>

                <div className="p-4 shadow sm:p-8">
                    <DeleteUserForm />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
