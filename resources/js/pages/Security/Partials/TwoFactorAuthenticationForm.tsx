import ConfirmsPassword from '@/components/ConfirmsPassword';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { router, useForm, usePage } from '@inertiajs/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Props {
    requiresConfirmation: boolean;
    className?: string;
}

export function TwoFactorAuthenticationForm({
    requiresConfirmation,
    className = '',
}: Props) {
    const [enabling, setEnabling] = useState(false);
    const [confirming, setConfirming] = useState(false);
    const [disabling, setDisabling] = useState(false);
    const [qrCode, setQrCode] = useState<string | null>(null);
    const [setupKey, setSetupKey] = useState<string | null>(null);
    const [recoveryCodes, setRecoveryCodes] = useState<string[]>([]);

    const page = usePage();
    const user = page.props.auth.user;

    const form = useForm({
        code: '',
    });

    const twoFactorEnabled = !enabling && user?.two_factor_enabled;

    useEffect(() => {
        console.log('QR Code state changed:', qrCode);
        if (qrCode) {
            console.log('confirming:', confirming);
            console.log('twoFactorEnabled:', twoFactorEnabled);
            console.log('QR Code is now available');
        }
    }, [qrCode]);

    useEffect(() => {
        if (!twoFactorEnabled) {
            form.reset();
            form.clearErrors();
        }
    }, [twoFactorEnabled]);

    const showQrCode = () => {
        console.log('Fetching QR code...');
        return axios
            .get(route('two-factor.qr-code'))
            .then((response) => {
                console.log('QR code response:', response.data);
                setQrCode(response.data.svg);
            })
            .catch((error) => {
                console.error('Error fetching QR code:', error);
            });
    };

    const showSetupKey = () => {
        return axios.get(route('two-factor.secret-key')).then((response) => {
            setSetupKey(response.data.secretKey);
        });
    };

    const showRecoveryCodes = () => {
        return axios
            .get(route('two-factor.recovery-codes'))
            .then((response) => {
                setRecoveryCodes(response.data);
            });
    };

    const enableTwoFactorAuthentication = () => {
        console.log('Enabling 2FA...');
        setEnabling(true);
        setConfirming(true);

        router.post(
            route('two-factor.enable'),
            {},
            {
                preserveScroll: true,
                onSuccess: async () => {
                    console.log(
                        '2FA enabled successfully, fetching additional data...',
                    );
                    try {
                        await Promise.all([
                            showQrCode(),
                            showSetupKey(),
                            showRecoveryCodes(),
                        ]);
                    } catch (error) {
                        console.error('Error setting up 2FA:', error);
                    }
                    setEnabling(false);
                },
            },
        );
    };

    const confirmTwoFactorAuthentication = () => {
        form.post(route('two-factor.confirm'), {
            errorBag: 'confirmTwoFactorAuthentication',
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setConfirming(false);
                setQrCode(null);
                setSetupKey(null);
            },
        });
    };

    const regenerateRecoveryCodes = async () => {
        await axios.post(route('two-factor.recovery-codes'));
        showRecoveryCodes();
    };

    const disableTwoFactorAuthentication = () => {
        setDisabling(true);

        router.delete(route('two-factor.disable'), {
            preserveScroll: true,
            onSuccess: () => {
                setDisabling(false);
                setConfirming(false);
            },
        });
    };

    return (
        <section className={cn('flex flex-col gap-6', className)}>
            <header className="flex flex-col gap-2">
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Two Factor Authentication
                </h2>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Add additional security to your account using two factor
                    authentication.
                </p>
            </header>

            <div className="flex flex-col gap-4">
                {twoFactorEnabled && !confirming ? (
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                            You have enabled two factor authentication.
                        </h3>

                        {recoveryCodes.length > 0 && (
                            <div className="mt-4 max-w-xl">
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Store these recovery codes in a secure
                                    password manager. They can be used to
                                    recover access to your account if your two
                                    factor authentication device is lost.
                                </div>

                                <div className="mt-4 grid gap-1 rounded-lg bg-gray-100 p-4 font-mono text-sm dark:bg-gray-800">
                                    {recoveryCodes.map((code) => (
                                        <div key={code}>{code}</div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mt-4 flex gap-2">
                            <Button
                                type="button"
                                onClick={regenerateRecoveryCodes}
                            >
                                Regenerate Recovery Codes
                            </Button>

                            <Button
                                type="button"
                                variant="destructive"
                                onClick={disableTwoFactorAuthentication}
                                disabled={disabling}
                            >
                                {disabling ? 'Disabling...' : 'Disable'}
                            </Button>
                        </div>
                    </div>
                ) : twoFactorEnabled && confirming ? (
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                            Finish enabling two factor authentication.
                        </h3>

                        {qrCode && (
                            <div>
                                <div className="mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400">
                                    <p className="font-semibold">
                                        To finish enabling two factor
                                        authentication, scan the following QR
                                        code using your phone's authenticator
                                        application or enter the setup key.
                                    </p>
                                </div>

                                <div
                                    className="mt-4 inline-block bg-white p-2"
                                    dangerouslySetInnerHTML={{ __html: qrCode }}
                                />

                                {setupKey && (
                                    <div className="mt-4 max-w-xl text-sm">
                                        <p className="font-semibold text-gray-600 dark:text-gray-400">
                                            Setup Key:{' '}
                                            <span className="font-mono text-gray-900 dark:text-gray-100">
                                                {setupKey}
                                            </span>
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="mt-4">
                            <Label htmlFor="code">Code</Label>

                            <div className="mt-2 flex max-w-xl items-center gap-2">
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

                            {form.errors.code && (
                                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                                    {form.errors.code}
                                </p>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                            You have not enabled two factor authentication.
                        </h3>

                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            When two factor authentication is enabled, you will
                            be prompted for a secure, random token during
                            authentication. You may retrieve this token from
                            your phone's Google Authenticator application.
                        </div>

                        <ConfirmsPassword
                            onConfirmed={enableTwoFactorAuthentication}
                        >
                            <Button type="button" disabled={enabling}>
                                {enabling ? 'Enabling...' : 'Enable'}
                            </Button>
                        </ConfirmsPassword>
                    </div>
                )}
            </div>
        </section>
    );
}
