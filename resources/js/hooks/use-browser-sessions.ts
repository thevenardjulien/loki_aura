import { Session } from '@/types';

export function useBrowserSessions() {
    const isCurrentDevice = (session: Session): boolean => {
        if (session.is_current_device) {
            return true;
        }

        const userAgent = navigator.userAgent;
        const languages = navigator.languages || [navigator.language];

        const browserMatch = userAgent
            ?.toLowerCase()
            .includes(session.browser?.toLowerCase());

        const osMatch = userAgent
            ?.toLowerCase()
            .includes(session.os?.toLowerCase());

        const languageMatch = session.device_details?.languages?.some((lang) =>
            languages.some((currentLang) =>
                currentLang?.toLowerCase().includes(lang?.toLowerCase()),
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

    return {
        isCurrentDevice,
    };
}
