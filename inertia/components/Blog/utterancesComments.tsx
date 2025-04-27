import { getBlogSettings } from '@/helpers/getBlog';
import { useEffect, useRef } from 'react';

const UtterancesComments = () => {
    const blogSettings = getBlogSettings();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        const config = {
            src: blogSettings.commentsClientJS,
            repo: blogSettings.commentsRepo,
            'issue-term': 'pathname',
            theme: 'github-dark',
            label: 'comment',
            crossOrigin: 'anonymous',
            defer: 'true',
        };

        Object.entries(config).forEach(([key, value]) => {
            script.setAttribute(key, value);
        });

        setTimeout(() => {
            ref.current?.append(script);
        }, 300);
    }, []);

    return <div ref={ref} />;
};

export default UtterancesComments;