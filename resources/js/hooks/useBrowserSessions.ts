import { Session } from '@/types';
import { useForm } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';
import { toast } from 'sonner';

interface UseBrowserSessionsProps {
  sessions: Session[];
}

export function useBrowserSessions({ sessions }: UseBrowserSessionsProps) {
  // State
  const [confirmingLogout, setConfirmingLogout] = useState(false);
  const [sessionToDelete, setSessionToDelete] = useState<Session | null>(null);

  // Refs
  const passwordInput = useRef<HTMLInputElement>(null);

  // Form
  const form = useForm({
    password: '',
  });

  useEffect(() => {
    if (sessionToDelete) {
      passwordInput.current?.focus();
    }
  }, [sessionToDelete]);

  const isCurrentDevice = (session: Session): boolean => {
    if (session.is_current_device) {
      return true;
    }

    const userAgent = navigator.userAgent;
    const languages = navigator.languages || [navigator.language];

    const browserMatch = userAgent
      .toLowerCase()
      .includes(session.browser.toLowerCase());

    const osMatch = userAgent
      .toLowerCase()
      .includes(session.os.toLowerCase());

    const languageMatch = session.device_details?.languages?.some((lang) =>
      languages.some((currentLang) =>
        currentLang.toLowerCase().includes(lang.toLowerCase()),
      ),
    );

    const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
    const isTablet = /iPad|Android(?!.*Mobile)/i.test(userAgent);
    const deviceTypeMatch =
      (session.device_type === 'mobile' && isMobile && !isTablet) ||
      (session.device_type === 'tablet' && isTablet) ||
      (session.device_type === 'desktop' && !isMobile && !isTablet);

    const matchScore = [
      browserMatch,
      osMatch,
      languageMatch,
      deviceTypeMatch,
    ].filter(Boolean).length;

    return matchScore >= 3;
  };

  const closeSession = (session: Session) => {
    if (isCurrentDevice(session)) {
      toast.error(
        'Cannot terminate current session. Please use the logout button instead.',
      );
      return;
    }

    setSessionToDelete(session);
    form.reset();
    form.clearErrors();
  };

  const confirmSessionDeletion = (e: React.FormEvent) => {
    e.preventDefault();

    form.delete(
      route('browser-sessions.destroy', { id: sessionToDelete?.id }),
      {
        preserveScroll: true,
        onSuccess: () => {
          setSessionToDelete(null);
          toast.success('Browser session has been terminated.');
        },
        onError: () => {
          passwordInput.current?.focus();
        },
        onFinish: () => form.reset(),
      },
    );
  };

  const closeModal = () => {
    setSessionToDelete(null);
    form.reset();
    form.clearErrors();
  };

  const confirmLogout = () => {
    setConfirmingLogout(true);
  };

  const logoutOtherBrowserSessions = (e: React.FormEvent) => {
    e.preventDefault();

    form.delete(route('other-browser-sessions.destroy'), {
      preserveScroll: true,
      onSuccess: () => {
        closeModal();
        toast.success('Other browser sessions have been logged out.');
      },
      onError: () => {
        form.reset();
      },
    });
  };

  return {
    confirmingLogout,
    sessionToDelete,
    passwordInput,
    form,
    closeSession,
    confirmSessionDeletion,
    closeModal,
    confirmLogout,
    logoutOtherBrowserSessions,
    isCurrentDevice,
  };
}
