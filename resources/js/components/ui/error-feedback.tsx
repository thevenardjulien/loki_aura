import { HTMLAttributes } from 'react';

export default function ErrorFeedback({
    message,
    className = '',
    ...props
}: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
    return message ? (
        <p
            {...props}
            className={
                'text-balance text-sm text-red-600 dark:text-red-400 ' +
                className
            }
        >
            {message}
        </p>
    ) : null;
}
