// import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import SideBar from '@/components/SideBar';

export default function Layout({ children, spaceTop = false, ignoreBlock = false }: { children?: React.ReactNode, spaceTop?: boolean, ignoreBlock?: boolean }) {
    return (
        <>

        
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