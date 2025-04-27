import React, { useMemo, useState } from 'react'
import tw, { styled, css } from 'twin.macro';
import Menu from './Icons/Menu';
import { useTranslation } from 'react-i18next';
// import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, router } from '@inertiajs/react';

const Nav = styled.button<{ active?: boolean }>`
    ${tw`bg-white text-black border-2 border-black flex justify-center items-center rounded-2xl p-2`}
    ${(({ active }) => active && css`
        ${tw`bg-black text-white transition-all ease-in-out duration-300`}
        
        &:hover {
            ${tw`scale-105`}
        }
    `)}
    &:hover {
        ${tw`bg-black text-white scale-105 transition-all ease-in-out duration-300`}
    }
`;

// const SideBarSection = styled.div`
//     ${tw`w-[65px] relative z-20 hidden bg-white lg:flex flex-col gap-4 p-3 transition-all ease-in-out duration-300`}

//     &:hover {
//         ${tw`w-[300px]`}
   
//         > :nth-child(2) {
//             ${tw`!flex`}
//         }
//     }
// `;

// const SideBarSectionPhone = styled.div<{ menuOpen: boolean }>`
//     ${tw`h-0 fixed z-20 lg:hidden bg-transparent flex flex-col gap-4 p-3`}
//     width: 100%;
//     transition: height 0.3s ease-in-out, background-color 0.3s ease-in-out;
  
//     ${({ menuOpen }) => menuOpen && css`
//         ${tw`bg-white`}

//         height: 350px;
        
//         & > :nth-child(2) {
//             ${tw`flex`}
//         }
//     `}
// `;

const SideBarSection = styled.div<{ menuOpen?: boolean, isBlogPage?: boolean }>`
  ${tw`fixed z-20 flex flex-col gap-4 p-3 overflow-hidden`}
  transition: height 0.3s ease-in-out, width 0.3s ease-in-out, background-color 0.3s ease-in-out;

  /* Desktop styles */
  ${tw`top-0 lg:fixed lg:h-screen lg:bg-white lg:w-[58px]`}

  /* Mobile styles */
  ${tw`h-[40px] bg-transparent`}
  width: 100%;

  /* Desktop hover state */
  @media (min-width: 1024px) {
    &:hover {
      ${tw`w-[300px] bg-white`}
      > :nth-child(2) {
        ${tw`opacity-100`}
      }

      ~ .home {
        ${tw`scale-90 border-2 border-white rounded-xl`}
      }
    }
  }

  /* Mobile open state */
  ${({ menuOpen }) => menuOpen && css`
    ${tw`bg-white`}
    height: 450px;

    & > :nth-child(1) {
      ${tw`!text-black`}
    }
    
    & > :nth-child(2) {
      ${tw`opacity-100`}
    }
  `}
`;

function SideBar() {
    const { t } = useTranslation();
    const { currentLanguage, changeLanguage } = useLanguage();
    // const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    
    const Buttons = useMemo(() => [
        {
            name: t('nav.about-me'),
            id: 'about-me',
            link: '/',
            disabled: location.pathname.includes('blog'),
        },
        {
            name: t('nav.experience'),
            id: 'experience',
            link: '/',
            disabled: location.pathname.includes('blog'),
        },
        {
            name: t('nav.work'),
            id: 'work',
            link: '/',
            disabled: location.pathname.includes('blog'),
        },
        {
            name: t('nav.open-source'),
            id: 'open-source',
            link: '/',
            disabled: location.pathname.includes('blog'),
        },
        {
            name: t('nav.home'),
            link: '/',
            disabled: location.pathname === '/',
        },
        {
            name: t('nav.blog'),
            link: '/blog',
            disabled: location.pathname === '/blog',
        },
    ], [location.pathname]);

    const onClick = (nav: (typeof Buttons)[number]) => {
        if(!nav?.id) {
            router.visit(nav.link);
        } else {
            if(location.pathname !== nav.link) {
                router.visit(nav.link);
            }

            const element = document.getElementById(nav.id);
            if(element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }

        setMenuOpen(false);
    }

    return (
        <SideBarSection
            css={tw``}
            menuOpen={menuOpen}
        >
            <div css={tw`flex justify-end lg:text-black text-white`}>
                <Menu
                    onClick={() => setMenuOpen(e => !e)}
                    color={'currentColor'}
                />
            </div>

            <div 
                css={tw`flex flex-col gap-4 opacity-0 transition-all ease-in-out duration-300 h-full`}
            >
                {Buttons.filter((btn) => !btn.disabled).map((nav) => (
                    <Nav
                        onClick={() => onClick(nav)}
                    >
                        {nav.name} 
                    </Nav>
                ))}

                <div
                    css={tw`mt-auto flex gap-2`}
                >
                    <Nav
                        css={tw`w-full`}
                        active={currentLanguage === 'en'}
                        onClick={() => changeLanguage('en')}
                    >
                        English 
                    </Nav>
                    <Nav
                        css={tw`w-full`}
                        active={currentLanguage === 'fr'}
                        onClick={() => changeLanguage('fr')}
                    >
                        Francais
                    </Nav>
                </div>
            </div>


        </SideBarSection>
    )
}

export default SideBar;