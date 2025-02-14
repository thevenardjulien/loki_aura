import { Button } from '@/components/ui/button';
import ErrorFeedback from '@/components/ui/error-feedback';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import AuthenticationLayout from '@/layouts/AuthenticationLayout';
import { cn } from '@/lib/utils';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler, useEffect } from 'react';

export default function Register({
    isRegisterEnabled,
}: {
    isRegisterEnabled: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        password_confirmation: '',
        firstname: '',
        lastname: '',
        title: '',
        phone: '',
        phone_pro: '',
        position: '',
        company: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        console.log(data);

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    useEffect(() => {
        if (!isRegisterEnabled) {
            // redirect to login page
            window.location.href = route('login');
        }
    }, [isRegisterEnabled]);

    return (
        isRegisterEnabled && (
            <AuthenticationLayout>
                <Head title="Register" />

                <form className={cn('flex flex-col gap-6')} onSubmit={submit}>
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1 className="text-2xl font-bold">
                            Register your account
                        </h1>
                        <p className="text-balance text-sm text-muted-foreground">
                            Enter your email below to register to your account
                        </p>
                    </div>
                    {errors.email && (
                        <div className="text-center text-sm text-red-600">
                            {errors.email}
                        </div>
                    )}
                    <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Select onValueChange={(value) => setData('title', value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Choose a title" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="M">M</SelectItem>
                                <SelectItem value="Mme">Mme</SelectItem>
                            </SelectContent>
                        </Select>

                        <ErrorFeedback message={errors.title} />
                    </div>
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="firstname">Firstname</Label>
                            <Input
                                id="firstname"
                                type="text"
                                name="firstname"
                                value={data.firstname}
                                placeholder="Enter your firstname"
                                required
                                onChange={(e) =>
                                    setData('firstname', e.target.value)
                                }
                            />
                            <ErrorFeedback message={errors.firstname} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="lastname">Lastname</Label>
                            <Input
                                id="lastname"
                                type="text"
                                name="lastname"
                                value={data.lastname}
                                placeholder="Enter your lastname"
                                required
                                onChange={(e) =>
                                    setData('lastname', e.target.value)
                                }
                            />
                            <ErrorFeedback message={errors.lastname} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                autoComplete="username"
                                placeholder="you@example.com"
                                required
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                            />
                            <ErrorFeedback message={errors.email} />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                autoComplete="current-password"
                                placeholder="••••••••"
                                required
                                onChange={(e) =>
                                    setData('password', e.target.value)
                                }
                            />
                            <ErrorFeedback message={errors.password} />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password_confirmation">
                                    Confirm Password
                                </Label>
                            </div>
                            <Input
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                autoComplete="current-password"
                                placeholder="••••••••"
                                required
                                onChange={(e) =>
                                    setData(
                                        'password_confirmation',
                                        e.target.value,
                                    )
                                }
                            />
                            <ErrorFeedback
                                message={errors.password_confirmation}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                                id="phone"
                                type="text"
                                name="phone"
                                value={data.phone}
                                placeholder="Enter your phone number"
                                onChange={(e) =>
                                    setData('phone', e.target.value)
                                }
                            />
                            <ErrorFeedback message={errors.phone} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="phone_pro">Professional Phone</Label>
                            <Input
                                id="phone_pro"
                                type="text"
                                name="phone_pro"
                                value={data.phone_pro}
                                placeholder="Enter your professional phone number"
                                onChange={(e) =>
                                    setData('phone_pro', e.target.value)
                                }
                            />
                            <ErrorFeedback message={errors.phone_pro} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="position">Position</Label>
                            <Input
                                id="position"
                                type="text"
                                name="position"
                                value={data.position}
                                placeholder="Enter your position"
                                required
                                onChange={(e) =>
                                    setData('position', e.target.value)
                                }
                            />
                            <ErrorFeedback message={errors.position} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="company">Company ID</Label>
                            <Input
                                id="company"
                                type="text"
                                name="company"
                                value={data.company}
                                placeholder="Enter your company ID"
                                required
                                onChange={(e) =>
                                    setData('company', e.target.value)
                                }
                            />
                            <ErrorFeedback message={errors.company} />
                        </div>
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={processing}
                        >
                            Register
                        </Button>
                    </div>
                    <div className="flex justify-center gap-1 text-sm">
                        Already have an account?
                        <Link
                            href={route('login')}
                            className="underline underline-offset-4"
                        >
                            Log in
                        </Link>
                    </div>
                </form>
            </AuthenticationLayout>
        )
    );
}
