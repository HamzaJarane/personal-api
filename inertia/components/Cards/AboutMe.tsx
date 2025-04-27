import React from 'react'
import { CardTitle, CardDescription, CardDescriptionHighLight } from '@/helpers/StyledComponents';
import tw from 'twin.macro';
import { Trans, useTranslation } from 'react-i18next';

function AboutMe() {
    const { t } = useTranslation();
    function getAge(birthDate: string) {
        const today = new Date();
        const birth = new Date(birthDate);
        const monthDiff = today.getMonth() - birth.getMonth();
        
        let age = today.getFullYear() - birth.getFullYear();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    }

    return (
        <div id={"about-me"}>
            <CardTitle text={t('aboutme.title')} />
            <CardDescription>
                <Trans
                    i18nKey="aboutme.0"
                    values={{ name: 'Hamza', age: getAge('2003-10-26'), country: t('country') }}
                    components={[<CardDescriptionHighLight />, <CardDescriptionHighLight />, <CardDescriptionHighLight />]}
                />
            </CardDescription>

            <CardDescription>
                <Trans
                    i18nKey="aboutme.1"
                    components={[<CardDescriptionHighLight />, <CardDescriptionHighLight />, <CardDescriptionHighLight />, <CardDescriptionHighLight />]}
                />
            </CardDescription>

            <CardDescription>
                <CardDescriptionHighLight css={tw`text-xl underline`}>{t('aboutme.2')}</CardDescriptionHighLight>
            </CardDescription>

            <CardDescription>
                TypeScript, JavaScript, Kotlin, PHP.
            </CardDescription>

            <CardDescription>
                <CardDescriptionHighLight css={tw`text-xl underline`}>{t('aboutme.3')}</CardDescriptionHighLight>
            </CardDescription>

            <CardDescription>
                WordPress, Laravel, NextJS, ReactJS, VueJS, NestJS, Tailwind CSS.
            </CardDescription>
        </div>
    )
}

export default AboutMe;