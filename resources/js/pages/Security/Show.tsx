import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import { OpenSessionsForm } from './Partials/OpenSessionsForm';
import { TwoFactorAuthenticationForm } from './Partials/TwoFactorAuthenticationForm';

export default function Show({
    mustVerifyEmail,
    sessions,
}: PageProps<{ mustVerifyEmail: boolean; sessions: any }>) {
    console.log(sessions);
    return (
        <AuthenticatedLayout>
            <Head title="Profile" />

            <div className="flex max-w-7xl flex-col sm:px-6 lg:px-8">
                <div className="p-4 sm:p-8">
                    <TwoFactorAuthenticationForm
                        requiresConfirmation={mustVerifyEmail}
                    />
                </div>

                <div className="p-4 sm:p-8">
                    <OpenSessionsForm sessions={sessions} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
