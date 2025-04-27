import tw from 'twin.macro';

import AboutMe from '@/components/Cards/AboutMe';
import Experience from '@/components/Cards/Experience';
import Work from '@/components/Cards/Work';
import OpenSource from '@/components/Cards/OpenSource';
import BlogPosts from './Cards/BlogPosts';

function Card() {
    return (
        <div css={tw`w-full p-3 lg:p-0  lg:h-full lg:overflow-y-auto`}>
            <AboutMe />
            <Experience />
            <Work />
            <OpenSource />
            <BlogPosts />
        </div>
    )
}

export default Card;