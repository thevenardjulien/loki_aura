import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import InputError from '@/components/ui/input-error';
import { Label } from '@/components/ui/label';
import { useBrowserSessions } from '@/hooks/useBrowserSessions';
import { Session } from '@/types';
import { Monitor, Phone, Tablet } from 'lucide-react';
import { useState } from 'react';

export function OpenSessionsForm({ sessions }: { sessions: Session[] }) {
    const [open, setOpen] = useState(false);

    const { form, logoutOtherBrowserSessions, isCurrentDevice } =
        useBrowserSessions({ sessions });

    console.log('sessions: ', sessions);

    const icon = (session: Session) => {
        if (session.device_type === 'mobile') return <Phone size={20} />;
        if (session.device_type === 'tablet') return <Tablet size={20} />;
        return <Monitor size={20} />;
    };

    return (
        <>
            <section className="flex flex-col gap-6">
                <header className="flex flex-col gap-2">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Active Sessions
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Manage and log out your active sessions on other
                        browsers and devices.
                    </p>
                </header>

                {sessions?.length > 0 && (
                    <div className="flex max-w-lg flex-col gap-4">
                        {sessions.map((session, i) => (
                            <div
                                key={i}
                                className="flex justify-between rounded-lg bg-sidebar p-4"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="flex flex-col items-start gap-2">
                                            <div className="flex gap-2">
                                                <span className="flex items-center gap-2 text-sm font-medium">
                                                    <span>{icon(session)}</span>
                                                    <div className="flex gap-1">
                                                        <span>
                                                            {session.browser}
                                                        </span>
                                                        <span>
                                                            {
                                                                session.browser_version
                                                            }
                                                        </span>
                                                    </div>
                                                    {isCurrentDevice(
                                                        session,
                                                    ) && (
                                                        <Badge
                                                            variant="outline"
                                                            className="text-xs"
                                                        >
                                                            This device
                                                        </Badge>
                                                    )}
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-1 text-xs">
                                                <div className="flex gap-1">
                                                    <span>OS: </span>
                                                    <span className="text-gray-500">
                                                        {session.os}{' '}
                                                        {session.os_version.replaceAll(
                                                            '_',
                                                            '.',
                                                        )}
                                                    </span>
                                                </div>
                                                <div className="flex gap-1">
                                                    <span>IP Address: </span>
                                                    <span className="text-gray-500">
                                                        {session.ip_address}
                                                    </span>
                                                </div>
                                                <div className="flex gap-1">
                                                    <span>Location: </span>
                                                    <span className="text-gray-500">
                                                        {session.location}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-1 text-xs">
                                    <span className="text-gray-500">
                                        Last activity:
                                    </span>
                                    <span>{session.last_active_ago}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex items-center">
                    <Button onClick={() => setOpen(true)}>
                        Log out all other active sessions
                    </Button>
                </div>
            </section>

            {/* Password confirmation dialog for all sessions */}
            <Dialog open={open} onOpenChange={() => setOpen(!open)}>
                <DialogContent>
                    <DialogTitle className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Log out all other active sessions
                    </DialogTitle>
                    <DialogDescription className="text-sm text-gray-600 dark:text-gray-400">
                        Please enter your password to confirm you would like to
                        log out of your other active sessions across all of your
                        devices.
                    </DialogDescription>

                    <form onSubmit={logoutOtherBrowserSessions}>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                type="password"
                                id="password"
                                value={form.data.password}
                                onChange={(e) =>
                                    form.setData('password', e.target.value)
                                }
                                className="max-w-lg"
                            />
                            <InputError
                                message={form.errors.password}
                                className="mt-2"
                            />
                        </div>

                        <DialogFooter className="mt-6">
                            <DialogClose asChild>
                                <Button
                                    type="button"
                                    variant="outline"
                                    disabled={form.processing}
                                >
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button
                                type="submit"
                                variant="destructive"
                                disabled={form.processing}
                            >
                                Log out all other sessions
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}
