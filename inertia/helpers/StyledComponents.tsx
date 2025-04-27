import tw, { styled } from 'twin.macro';
import { Tween, ScrollTrigger } from 'react-gsap';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

export const CardDescription = styled.div`
    ${tw`font-light text-white mb-3 max-w-[90%]`}
`;

export const CardDescriptionHighLight = styled.span`
    ${tw`font-semibold text-white`}

    &:hover {
        ${tw`underline`}
    }
`;

export const CardTitleRow = styled.div`
    ${tw`text-[50px] text-white font-semibold my-5 underline`}

    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: #fff;
`;

export const CardTitle = ({ text }: { text: string }) => {
    return (
        <ScrollTrigger>
            <CardTitleRow>
                <Tween to={{ text }} duration={1.4} delay={0.2}>
                    {/* <span>{text.split("").reverse().map(t => ` ${t}`).join("")}</span> */}
                    <span>{text}</span>
                </Tween>
            </CardTitleRow>
        </ScrollTrigger>
    );
}

export const ProfileImage = styled.img`
    ${tw`rounded ring ring-white w-[190px]`}
`;

export const FullName = styled.div`
    ${tw`text-white font-bold text-[30px]`}

    &:hover {
        ${tw`underline`}
    }
`;

export const FieldsGroup = styled.div`
    ${tw`grid gap-y-1`}
`;

export const Field = styled.a`
    ${tw`text-white font-bold cursor-pointer text-[15px]`}

    &:hover {
        ${tw`underline text-red-700`}
    }

    & span {
        ${tw`ml-2`}
    }
`;

export const ExperienceTimeLine = styled.div`
    ${tw`relative pt-[10px] pl-[70px] py-1 space-y-2`}
    
    & .eHero-1 {
        ${tw`
            lg:flex 
            lg:flex-row 
            lg:gap-x-9
            justify-between
            items-start

            before:absolute 
            before:left-0 
            before:h-full 
            before:px-px 
            before:bg-white
            before:ml-[2.5rem] 
            before:self-start 
            before:-translate-x-1/2 
            before:translate-y-3

            after:absolute 
            after:left-0 
            after:w-4 
            after:h-4 
            after:bg-white
            after:box-content
            after:rounded-full 
            after:ml-[2.5rem] 
            after:-translate-x-1/2 
            after:translate-y-1.5
        `}

        & div:first-child {
            ${tw`text-2xl font-bold text-white`}

            & span {
                ${tw`ml-1 font-light text-[18px]`}
            }
        }
    }

    & .eHero-2 {
        ${tw`lg:flex lg:justify-between`}

        & a {
            ${tw`font-medium text-xl text-white mb-1 sm:mb-0`}
            &:hover {
                ${tw`underline`}
            }
    
            & svg {
                ${tw`ml-2 text-[15px]`}
            }
        }
    }

    & .eDescription {
        ${tw` font-light text-white`}
    }

    & .eSkills {
        ${tw`grid grid-cols-2 items-center gap-1 lg:max-w-full lg:flex`}
    }

    & .eSkill {
        ${tw`bg-white rounded-2xl text-sm text-black cursor-pointer transition-all ease-in-out duration-150`}

        & div {
            ${tw`py-1 px-2`}
        }

        &:hover {
            transform: scale(0.9);
        }
    }
`;

export const WorkContainer = styled.div`
    ${tw`flex flex-col gap-2 items-center mb-3`}
`;

export const WorkRow = styled.div`
    ${tw`p-3 rounded space-y-2 lg:flex lg:space-y-0 lg:space-x-4 lg:max-w-[90%] text-white transition-all ease-in-out duration-200`}

    &:hover {
        ${tw`bg-white cursor-pointer`}
        transform: scale(0.99);

        & img {
            ${tw`border-black`}
        }

        & .wName {
            ${tw`text-black`}
        }
    
        & .wDescription {
            ${tw`text-black`}
        }

        & .wLang {
            ${tw`bg-black text-white`}
        }
    }
`;

export const ProfileButton = styled.button`
    ${tw`bg-white text-black transition-all duration-150 ease-in-out rounded border border-transparent`}

    &:hover {
        ${tw`bg-black text-white scale-105 border-white`}
    }
`;

export const BlogGrid = styled.div<{ blog?: boolean }>(({ blog = true }) => [
    tw`p-5 h-fit gap-4 grid grid-cols-1 w-full`,
    blog ? tw`lg:grid-cols-4` : tw`lg:grid-cols-2`,
]);

export const BlogRow = styled.button`
    ${tw`p-3 w-full rounded-lg flex flex-col justify-evenly gap-2 text-white transition-all ease-in-out duration-200 border-2 border-white`}

    &:hover {
        ${tw`bg-white cursor-pointer text-black border-black scale-[0.99]`}
        .blogCategory {
            ${tw`!bg-black !text-white`}
        }
    }
`;

export const BlogCategory = styled.div`
    ${tw`bg-white rounded-2xl text-sm text-black cursor-pointer transition-all ease-in-out duration-150`}

    & div {
        ${tw`py-1 px-2`}
    }
`;