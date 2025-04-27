import React from 'react'
import tw from 'twin.macro';
import { CardTitle, WorkRow, WorkContainer } from '@/helpers/StyledComponents';
import { getOpenSource } from '@/helpers/getOpenSource';
import { useTranslation } from 'react-i18next';


function OpenSource() {
    const data = getOpenSource();
    const { t } = useTranslation();
    return (
        <div css={tw``}>
            <CardTitle text={t('opensource.title')} />
            <div
                css={tw`flex flex-col gap-2 items-center mb-3`}
            >
                {data.map(repo => (
                    !repo.fork && repo.language && repo.description &&
                    <WorkRow
                        key={repo.name}
                        onClick={() => window.open(repo.html_url, '_blank')}
                        css={tw`w-full border border-white cursor-pointer`}
                    >
                        <div>
                            <div
                                className={'wName'}
                                css={tw`font-bold flex space-x-2`}
                            >
                                <div
                                    css={tw`capitalize`}
                                >
                                    {/* @ts-ignore */}
                                    {repo.name.replaceAll('-', ' ')}
                                </div>

                                <div
                                    css={tw`bg-white rounded-2xl text-sm text-black border border-black`}
                                >
                                    <div
                                        css={tw`py-1 px-2`}
                                    >
                                        {repo.language}
                                    </div>
                                </div>
                            </div>
                            
                            <div
                                className={'wDescription'}
                                css={tw`font-light`}
                                dangerouslySetInnerHTML={{ __html: repo.description ?? '<div></div>' }}
                            />
                        </div>
                    </WorkRow>
                ))}
            </div>
        </div>
    )
}

export default OpenSource;