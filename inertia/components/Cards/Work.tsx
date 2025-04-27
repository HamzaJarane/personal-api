import { CardTitle, WorkRow, WorkContainer } from '@/helpers/StyledComponents';
import tw from 'twin.macro';
import { works } from '@/helpers/getWork';
// import { ScrollTrigger as ScrollTriggerContainer } from 'react-gsap';
import { useTranslation } from 'react-i18next';

function Work() {
    const { t } = useTranslation();
    return (
        <div css={tw`pt-[100px] lg:pt-[60px]`} id={"work"}>
            <CardTitle text={t('work.title')} />
            <WorkContainer className={'workBox'} css={tw`overflow-hidden`}>
                {works.map(work => (
                    // <ScrollTriggerContainer
                    //     key={work.name}
                    //     start={'100px center'}
                    //     end={'0px center'}
                    //     scrub
                    // >
                            <WorkRow
                                onClick={() => window.open(work.link, work.link !== '#' ? '_blank' : '_self')}
                                css={tw`w-full`}
                            >
                                <div>
                                    <img
                                        css={tw`lg:min-w-[240px] lg:max-w-[240px] rounded border border-white`}
                                        src={work.image}
                                        alt={work.name}
                                        srcSet={work.image}
                                    />
                                </div>

                                <div>
                                    <div
                                        className={'wName'}
                                        css={tw`font-bold`}
                                    >
                                        {work.name}
                                    </div>
                                    <div
                                        className={'wDescription'}
                                        css={tw`font-light`}
                                        dangerouslySetInnerHTML={{ __html: work.description }}
                                    />
                                    <ul
                                        css={tw`mt-2 grid grid-cols-2 gap-1 space-y-1 lg:space-y-0 lg:flex items-center`}
                                    >
                                        {work.languages.map(lang => (
                                            <li
                                                key={lang}
                                                className={'wLang'}
                                                css={tw`bg-white rounded-2xl text-sm text-black`}
                                            >
                                                <div
                                                    css={tw`py-1 px-2`}
                                                >
                                                    {lang}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </WorkRow>
                        
                    // </ScrollTriggerContainer>
                ))}
            </WorkContainer>
        </div >
    )
}

export default Work;