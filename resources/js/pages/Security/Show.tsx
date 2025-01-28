import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { PageProps, Session } from '@/types';
import { Head } from '@inertiajs/react';
import { OpenSessionsForm } from './Partials/OpenSessionsForm';
import { TwoFactorAuthenticationForm } from './Partials/TwoFactorAuthenticationForm';

export default function Show({
    status,
    sessions,
}: PageProps<{ status: string; sessions: Session[] }>) {
    console.log('status: ', status);
    return (
        <AuthenticatedLayout>
            <Head title="Profile" />

            <div className="flex max-w-7xl flex-col sm:px-6 lg:px-8">
                <div className="p-4 sm:p-8">
                    <TwoFactorAuthenticationForm status={status} />
                </div>

                <div className="p-4 sm:p-8">
                    <OpenSessionsForm sessions={sessions} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
