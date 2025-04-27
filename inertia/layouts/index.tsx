// import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import SideBar from '@/components/SideBar';
import { useTranslation } from 'react-i18next';
import { Link, router } from '@inertiajs/react';

export default function Layout({ children, spaceTop = false, ignoreBlock = false }: { children?: React.ReactNode, spaceTop?: boolean, ignoreBlock?: boolean }) {
    const [isInIframe, setIsInIframe] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        setIsInIframe(window.self !== window.top);
    }, []);

    return (
        <>
            {spaceTop && (
                <div css={tw`lg:hidden h-2`} />
            )}
            {isInIframe && (
                <div css={tw`text-white flex justify-center items-center p-3`}>
                    <Link css={tw`text-xl font-semibold border rounded-full px-3 py-1 hover:bg-white hover:text-black`} href={'/blog'}>
                        {t('nav.home')}
                    </Link>
                </div>
            )}
            <div css={[
                tw`lg:flex grid text-white bg-black`,
                !ignoreBlock && tw`h-screen w-screen`,
            ]}>
                {!isInIframe && (
                    <>
                        <div css={tw`lg:w-[58px]`} />
                        <SideBar />
                    </>
                )}
                {children}
            </div>
        </>
    );
};