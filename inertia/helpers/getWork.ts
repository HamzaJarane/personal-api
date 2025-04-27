import rancyImage from '@/assets/images/works/rancy.png';
import hamzaOSImage from '@/assets/images/works/hamzaOS.png';
import walkincity from '@/assets/images/works/walkincity.png';
import paulromhosting from '@/assets/images/works/paulromhosting.png';
import linksevent from '@/assets/images/works/linksevent.png';
import i18n from '@/i18n';

interface IWork {
    name: string;
    link: string;
    image: string;
    description: string;
    languages: string[];
};

export const works: IWork[] = [
    {
        name: 'Rancy Hotels (Closed source)',
        link: '#',
        image: rancyImage,
        description: i18n.t('work.rancy'),
        languages: ['WordPress', 'Laravel', 'Filament', 'Livewire', 'OOP', 'Tailwind CSS', 'CMI'],
    },
    {
        name: 'Paulrom Hosting (Closed source)',
        link: '#',
        image: paulromhosting,
        description: i18n.t('work.paulromhosting'),
        languages: ['React.JS', 'Tailwind CSS', 'Laravel', 'PayPal', 'Stripe', 'Docker'],
    },
    {
        name: 'Links Event (Closed source)',
        link: '#',
        image: linksevent,
        description: i18n.t('work.linksevent'),
        languages: ['React.JS', 'Tailwind CSS', 'Laravel', 'Next.JS'],
    },
    {
        name: 'Walkin.City',
        link: 'https://walkincity.hamza.im',
        image: walkincity,
        description: i18n.t('work.walkincity'),
        languages: ['Next.JS', 'Tailwind CSS', 'Socket.io', 'MySQL', 'Zustand', 'NextAuth', 'Three.JS'],
    },
    {
        name: 'hamzaOS',
        link: 'https://os.hamza.im',
        image: hamzaOSImage,
        description: i18n.t('work.hamzaOS'),
        languages: ['React.JS', 'Tailwind CSS', 'Styled-Components', 'Twin.Macro', 'Zustand'],
    },
];