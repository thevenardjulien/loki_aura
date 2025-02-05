import ConfirmWithPassword from '@/components/confirm-with-password';
import { Button } from '@/components/ui/button';
import ErrorFeedback from '@/components/ui/error-feedback';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { router, useForm, usePage } from '@inertiajs/react';
import axios from 'axios';
import { CheckCircle, Siren } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function TwoFactorAuthenticationForm() {
    // State
    const [enabling, setEnabling] = useState(false);
    const [disabling, setDisabling] = useState(false);
    const [qrCode, setQrCode] = useState<string | null>(null);
    const [recoveryCodes, setRecoveryCodes] = useState<string[]>([]);

    // Hooks
    const form = useForm({
        code: '',
    });

    const user = usePage().props.auth.user;
    const twoFactorEnabled = user.two_factor_confirmed_at !== null;

    // Functions
    const enableTwoFactorAuthentication = () => {
        setEnabling(true);

        router.post(
            route('two-factor.enable'),
            {},
            {
                onSuccess: (all) => {
                    setEnabling(false);
                    showQrCode();
                },
            },
        );
    };

    const showQrCode = () => {
        axios
            .get(route('two-factor.qr-code'))
            .then((response) => {
                setQrCode(response.data.svg);
            })
            .then(() => {
                toast.success('2FA QR Code generated');
            });
    };

    const confirmTwoFactorAuthentication = () => {
        form.post(route('two-factor.confirm'), {
            errorBag: 'confirmTwoFactorAuthentication',
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setQrCode(null);
                showRecoveryCodes();
                toast.success('2FA successfully enabled');
            },
            onError: () => {
                toast.error('There was an error enabling 2FA');
            },
        });
    };

    const showRecoveryCodes = () => {
        axios.get(route('two-factor.recovery-codes')).then((response) => {
            setRecoveryCodes(response.data);
        });
    };

    const disableTwoFactorAuthentication = () => {
        setDisabling(true);

        form.delete(route('two-factor.disable'), {
            preserveScroll: true,
            preserveState: true,
            onBefore: () => {
                setDisabling(true);
            },
            onSuccess: () => {
                setDisabling(false);
            },
            onError: () => {
                setDisabling(false);
            },
            onFinish: () => {
                setDisabling(false);
            },
        });
    };

    // Effects

    return (
        <section className={'flex max-w-xl flex-col gap-6'}>
            <header className="flex flex-col gap-2">
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    2FA
                </h2>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Add additional security to your account using two factor
                    authentication.
                </p>
            </header>

            {qrCode && (
                <>
                    <div className="flex flex-col gap-5">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            To finish enabling two factor authentication, scan
                            the following QR code using your phone's
                            authenticator application or enter the setup key and
                            provide the generated OTP code.
                        </p>

                        <div
                            className="contrast-200"
                            dangerouslySetInnerHTML={{ __html: qrCode }}
                        ></div>
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="code">Code</Label>

                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                <Input
                                    id="code"
                                    type="text"
                                    name="code"
                                    className="block"
                                    value={form.data.code}
                                    onChange={(e) =>
                                        form.setData(
                                            'code',
                                            e.currentTarget.value,
                                        )
                                    }
                                />

                                <Button
                                    type="button"
                                    onClick={confirmTwoFactorAuthentication}
                                    disabled={form.processing}
                                >
                                    {form.processing
                                        ? 'Confirming...'
                                        : 'Confirm'}
                                </Button>
                            </div>

                            <ErrorFeedback message={form.errors.code} />
                        </div>
                    </div>
                </>
            )}

            {!twoFactorEnabled && !qrCode && (
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4 text-sm">
                        <Siren className="text-red-500" />
                        <h3>
                            Two-factor authentication is not enabled. We
                            recommend enabling it.
                        </h3>
                    </div>
                    <ConfirmWithPassword
                        title="Enable 2FA"
                        content="To start enabling two-factor authentication, you must confirm your password."
                        onConfirmed={enableTwoFactorAuthentication}
                    >
                        <Button type="button" disabled={enabling}>
                            {enabling ? 'Enabling...' : 'Enable'}
                        </Button>
                    </ConfirmWithPassword>
                </div>
            )}

            {twoFactorEnabled && !qrCode && (
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4 text-sm">
                        <CheckCircle className="text-green-500" />
                        <h3>You've already enabled 2FA.</h3>
                    </div>
                    {recoveryCodes.length > 0 && (
                        <div className="flex max-w-xl flex-col gap-4">
                            <div className="text-sm">
                                <span className="font-semibold text-red-600 dark:text-red-400">
                                    Important:
                                </span>{' '}
                                These recovery codes will only be shown once.
                                Store them in a secure password manager
                                immediately. They can be used to recover access
                                to your account if your two factor
                                authentication device is lost.
                            </div>

                            <div className="grid gap-1 rounded-lg bg-sidebar p-4 font-mono text-xs">
                                {recoveryCodes.map((code) => (
                                    <div key={code}>{code}</div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="flex gap-4">
                        <ConfirmWithPassword
                            title="Disable 2FA"
                            content="To disable two-factor authentication, you must confirm your password."
                            onConfirmed={disableTwoFactorAuthentication}
                        >
                            <Button type="button" disabled={disabling}>
                                {disabling ? 'Disabling...' : 'Disable'}
                            </Button>
                        </ConfirmWithPassword>
                    </div>
                </div>
            )}
        </section>
    );
}
