import i18n from '@/i18n';

interface IExperience {
    role: string;
    company: {
        name: string,
        link?: string,
    };
    place: string;
    type: string;
    from: string;
    to: string;
    descriptions: string[];
    skills: string[];
}

export const experiences: IExperience[] = [
    {
        role: 'Full Stack Developer',
        company: {
            name: 'DigitalDaba',
            link: 'https://digitaldaba.com',
        },
        place: 'Agadir, Morocco',
        type: 'Remote',

        from: '2024 / October',
        to: 'Present',

        descriptions: [
            i18n.t("experience.digitalbaba.descriptions.1"),
            i18n.t("experience.digitalbaba.descriptions.2")
        ],
        skills: ['NestJS', 'Vue.JS', 'Figma', 'Laravel', 'Filament', 'React', 'NextJS', 'Docker', "Agile"]
    },
    {
        role: 'Full Stack Developer',
        company: {
            name: 'GreyWeb',
            link: 'https://greyweb.cloud',
        },
        place: 'Russia, Moscow',
        type: 'Remote / Freelance',

        from: '2024 / April',
        to: '2024 / October',

        descriptions: [
            i18n.t("experience.greyweb.descriptions.1"),
            i18n.t("experience.greyweb.descriptions.2"),
            i18n.t("experience.greyweb.descriptions.3"),
        ],
        skills: ['Figma', 'Laravel', 'Filament', 'Vue.JS', 'Gitlab', 'Docker']
    },
    {
        role: 'Full Stack Developer',
        company: {
            name: 'Ajicod',
            link: 'https://ajicod.com',
        },
        place: 'Agadir, Morocco',
        type: 'Internship',

        from: '2024 / January',
        to: '2024 / April',

        descriptions: [
            i18n.t("experience.ajicod.descriptions.1"),
            i18n.t("experience.ajicod.descriptions.2"),
        ],
        skills: ['Figma', 'CI/CD', 'Mailu', 'Laravel', 'Filament', 'Next.JS', 'Express.JS']
    },
];