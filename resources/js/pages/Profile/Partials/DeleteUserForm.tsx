import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from '@inertiajs/react';
import { Loader2 } from 'lucide-react';
import { FormEventHandler, useEffect, useRef, useState } from 'react';

export default function DeleteUserForm({
    className = '',
}: {
    className?: string;
}) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    useEffect(() => {
        if (confirmingUserDeletion) {
            passwordInput.current?.focus();
        }
    }, [confirmingUserDeletion]);

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        clearErrors();
        reset();
    };

    return (
        <section className={`flex flex-col gap-6 ${className}`}>
            <header className="flex flex-col gap-2">
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Delete Account
                </h2>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </p>
            </header>

            <Button
                variant="destructive"
                className="w-fit"
                onClick={confirmUserDeletion}
            >
                Delete Account
            </Button>

            <AlertDialog
                open={confirmingUserDeletion}
                onOpenChange={(open) => {
                    if (!open) closeModal();
                }}
            >
                <AlertDialogContent>
                    <AlertDialogTitle className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Are you sure you want to delete your account?
                    </AlertDialogTitle>

                    <AlertDialogDescription className="text-sm text-gray-600 dark:text-gray-400">
                        Once your account is deleted, all of its resources and
                        data will be permanently deleted. Please enter your
                        password to confirm you would like to permanently delete
                        your account.
                    </AlertDialogDescription>

                    <form
                        onSubmit={deleteUser}
                        className="flex flex-col gap-4 p-2"
                    >
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="password">Password</Label>

                            <Input
                                id="password"
                                type="password"
                                name="password"
                                className="max-w-lg"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) =>
                                    setData('password', e.target.value)
                                }
                                aria-describedby={
                                    errors.password
                                        ? 'password-error'
                                        : undefined
                                }
                                disabled={processing}
                            />

                            {errors.password && (
                                <div className="mt-1 text-sm text-red-600 dark:text-red-400">
                                    {errors.password}
                                </div>
                            )}
                        </div>

                        <div className="flex justify-end gap-2">
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={closeModal}
                                disabled={processing}
                            >
                                Cancel
                            </Button>

                            <Button
                                type="submit"
                                variant="destructive"
                                disabled={processing}
                                aria-label="Confirm account deletion"
                            >
                                {processing && (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Delete Account
                            </Button>
                        </div>
                    </form>
                </AlertDialogContent>
            </AlertDialog>
        </section>
    );
}
