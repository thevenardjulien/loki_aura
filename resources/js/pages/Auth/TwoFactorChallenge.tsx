import InputError from '@/components/ui/input-error';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp';
import AuthenticationLayout from '@/layouts/AuthenticationLayout';
import { Head, useForm } from '@inertiajs/react';
import { ShieldCheck } from 'lucide-react';

export default function TwoFactorChallenge() {
    const { data, setData, post, errors } = useForm({
        code: '',
    });

    const handleSubmit = async () => {
        if (data.code.length !== 6) return;

        post(route('two-factor.login.store'));
    };

    return (
        <AuthenticationLayout>
            <Head title="Login" />
            <div className="flex flex-col items-center gap-4 text-center">
                <ShieldCheck className="size-10" />
                <h1 className="text-lg font-bold">OTP Code</h1>
                <p className="text-balance text-sm text-muted-foreground">
                    Please enter the one-time password sent to your
                    Authenticator app.
                </p>
                <InputOTP
                    value={data.code}
                    maxLength={6}
                    onChange={(value) => setData('code', value)}
                    onComplete={handleSubmit}
                    autoFocus
                >
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>

                {errors && <InputError message={errors.code} />}
            </div>
        </AuthenticationLayout>
    );
}
