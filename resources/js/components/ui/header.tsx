import { User } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Button } from './button';

export default function Header({ auth, user }: { auth: any, user: User }) {
    return (
        <header className='pt-4 z-10'>
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <a
                    href="#"
                    className="flex items-center gap-2 font-medium"
                >
                    <img src="/logo.webp" alt="AURA" className="h-20" />
                </a>

                <nav className="flex items-center gap-4">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="rounded-md text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            <Button>Espace Membre</Button>
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="rounded-md text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                <Button>Connexion</Button>
                            </Link>
                            <Link
                                href={route('register')}
                                className="rounded-md text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                <Button>Inscription</Button>
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    )
}