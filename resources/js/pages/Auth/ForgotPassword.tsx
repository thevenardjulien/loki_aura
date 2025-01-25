import InputError from '@/components/InputError';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AuthenticationLayout from '@/layouts/AuthenticationLayout';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <AuthenticationLayout>
            <Head title="Forgot Password" />

            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-primary">Forgot your password?</span>{' '}
                    No problem. Just let us know your email address and we will
                    email you a password reset link that will allow you to
                    choose a new one.
                </div>

                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="flex flex-col gap-2">
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="block w-full"
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} />

                    <div className="flex items-center justify-end">
                        <Button disabled={processing}>
                            Email Password Reset Link
                        </Button>
                    </div>
                </form>
            </div>
        </AuthenticationLayout>
    );
}
