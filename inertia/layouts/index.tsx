import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import SideBar from '@/components/SideBar';
import { Head, Link } from '@inertiajs/react';

export default function Layout({ children, title, spaceTop = false, ignoreBlock = false }: { children?: React.ReactNode, title: string, spaceTop?: boolean, ignoreBlock?: boolean }) {
    return (
        <>
            <Head title={title ?? 'Hamza'} />
            {spaceTop && (
                <div css={tw`lg:hidden h-2`} />
            )}
            <div css={[
                tw`lg:flex grid text-white bg-black`,
                !ignoreBlock && tw`h-screen w-screen`,
            ]}>
                <div css={tw`lg:w-[58px]`} />
                <SideBar />
                {children}
            </div>
        </>
    );
};