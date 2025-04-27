import { getBlogPages, getPage } from '@/helpers/getBlog';
import { BlogCategory, BlogGrid, BlogRow } from '@/helpers/StyledComponents';
import { Link, router } from '@inertiajs/react';
import tw from 'twin.macro';

function Blog() {
    const pages = getBlogPages();
    const gotoPage = (slug: string) => router.visit(`/blog/${slug}`);
    
    return (
        <BlogGrid>
            {[...pages].reverse().map((page) => (
                <BlogRow key={page.slug} onClick={() => gotoPage(page.slug)}>
                    <div css={tw`font-semibold text-2xl text-center w-full`}>{page.title}</div>
                    <div css={tw`text-sm`}>
                        {page.description.length > 140 ? page.description.split('').splice(0, 140).join('')+'...' : page.description}
                    </div>
                    <div 
                        css={[
                            tw`grid gap-2`,
                            page.categories.length >= 3 ? tw`grid-cols-3` : 
                            page.categories.length === 2 ? tw`grid-cols-2` : 
                            page.categories.length === 1 && tw`grid-cols-1` 
                        ]}
                    >
                        {page.categories.map((category) => (
                            <BlogCategory className='blogCategory'>
                                <div>{category}</div>
                            </BlogCategory>
                        ))}
                    </div>
                </BlogRow>
            ))}
        </BlogGrid>
    );
}

export default Blog;