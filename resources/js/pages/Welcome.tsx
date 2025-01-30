import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Command } from 'lucide-react';

export default function Welcome({ auth }: PageProps) {
    return (
        <>
            <Head title="Welcome" />

            <div className="flex h-svh flex-col">
                <header>
                    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 md:p-10">
                        {/* Logo */}
                        <a
                            href="#"
                            className="flex items-center gap-2 font-medium"
                        >
                            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                                <Command className="size-4" />
                            </div>
                            React Inertia
                        </a>

                        {/* Navigation Links */}
                        <nav className="flex items-center gap-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                {/* Main Content */}
                <main className="mx-auto h-full w-full max-w-7xl grow p-6">
                    <div className="flex h-full items-center justify-center rounded-lg border-2 border-dashed">
                        <p className="text-lg text-muted-foreground">
                            Your landing goes here
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}
