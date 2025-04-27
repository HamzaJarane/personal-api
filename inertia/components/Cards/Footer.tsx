import React from 'react'
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();
    return (
        <div css={tw`my-3`}>
            {t('footer.made_with')} <FontAwesomeIcon css={tw`text-yellow-800`} icon={faCoffee} />
        </div>
    )
}

export default Footer;