import { Link } from '@inertiajs/react';


export default function AuthenticationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-svh">
            <div className="flex gap-4 bg-background p-6 md:p-10">

                <div className="w-1/5">
                    <Link href={route('dashboard')} className="flex items-center gap-2 font-medium">
                        Accueil</Link>
                    <Link href={route('repas.index')} className="flex items-center gap-2 font-medium">
                        Repas</Link>
                </div>
                <div className="max-w-xs">{children}</div>

            </div>
        </div>
    );
}
