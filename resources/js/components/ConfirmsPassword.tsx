import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import InputError from '@/components/ui/input-error';
import axios from 'axios';
import { useRef, useState } from 'react';

interface ConfirmsPasswordProps {
    title?: string;
    content?: string;
    button?: string;
    children: React.ReactNode;
    onConfirmed: () => void;
}

export default function ConfirmsPassword({
    title = 'Confirm Password',
    content = 'For your security, please confirm your password to continue.',
    button = 'Confirm',
    children,
    onConfirmed,
}: ConfirmsPasswordProps) {
    const [confirmingPassword, setConfirmingPassword] = useState(false);
    const [form, setForm] = useState({
        password: '',
        error: '',
        processing: false,
    });

    const passwordInput = useRef<HTMLInputElement>(null);

    const startConfirmingPassword = () => {
        axios.get(route('password.confirmation')).then((response) => {
            if (response.data.confirmed) {
                onConfirmed();
            } else {
                setConfirmingPassword(true);
                setTimeout(() => passwordInput.current?.focus(), 250);
            }
        });
    };

    const confirmPassword = () => {
        setForm((prev) => ({ ...prev, processing: true }));

        axios
            .post(route('password.confirm'), {
                password: form.password,
            })
            .then(() => {
                closeModal();
                onConfirmed();
            })
            .catch((error) => {
                setForm((prev) => ({
                    ...prev,
                    processing: false,
                    error: error.response.data.errors.password[0],
                }));
                passwordInput.current?.focus();
            });
    };

    const closeModal = () => {
        setConfirmingPassword(false);
        setForm({
            password: '',
            error: '',
            processing: false,
        });
    };

    return (
        <>
            <span onClick={startConfirmingPassword}>{children}</span>

            <Dialog open={confirmingPassword} onOpenChange={closeModal}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                    </DialogHeader>

                    <div className="mt-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {content}
                        </p>

                        <div className="mt-4">
                            <Input
                                ref={passwordInput}
                                type="password"
                                value={form.password}
                                onChange={(e) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        password: e.target.value,
                                    }))
                                }
                                className="mt-1 block w-3/4"
                                placeholder="Password"
                                autoComplete="current-password"
                                onKeyUp={(e) => {
                                    if (e.key === 'Enter') {
                                        confirmPassword();
                                    }
                                }}
                            />

                            <InputError message={form.error} className="mt-2" />
                        </div>
                    </div>

                    <DialogFooter>
                        <Button variant="outline" onClick={closeModal}>
                            Cancel
                        </Button>

                        <Button
                            onClick={confirmPassword}
                            disabled={form.processing}
                            className={form.processing ? 'opacity-25' : ''}
                        >
                            {button}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
