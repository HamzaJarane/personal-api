import { getProfileData } from '@/helpers/getProfileData';
import { Field, FullName, ProfileImage } from '@/helpers/StyledComponents';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';

function FooterProfileCard() {
    const data = getProfileData();
    const { t } = useTranslation();
    const profilePicture = `https://avatars.githubusercontent.com/u/${data.github.id}?v=${data.github.fetchedTime}`;

    return (
        <div
            css={tw`flex gap-4`}
        >
            <ProfileImage
                css={tw`rounded-full w-[110px]`}
                src={profilePicture}
                alt={"profilePicture"}
                srcSet={profilePicture}
            />

            <div css={tw`flex flex-col justify-center`}>
                <div>{t('blog.author')}</div>
                <FullName>
                    Hamza Jarane
                </FullName>
                <div>Software developer, DevOps</div>
                <div css={tw`flex gap-2`}>
                    <Field
                        href={data.github.html_url}
                        target={'_blank'}
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </Field>
                    {data.general.map((social) => (
                        <Field
                            key={social.name}
                            href={social.link}
                            target={'_blank'}
                        >
                            <FontAwesomeIcon icon={social.icon} />
                        </Field>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FooterProfileCard;