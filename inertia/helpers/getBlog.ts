import blogPages from '@/assets/json/blog.json'

export function getBlogPages(): typeof blogPages {
    const data = blogPages;
    return data;
}

export function getPageMetaBySlug(slug: string) {
    const pages = getBlogPages();
    return pages.find((page) => page.slug.trim().toLowerCase() === slug.trim().toLowerCase());
}

export async function getPage(slug: string): Promise<string | null> {
    try {
        if (!slug) {
            throw new Error('Slug parameter is required');
        }

        const normalizedSlug = slug.trim().toLowerCase();
        const blogPage = blogPages.find((blog) => blog.slug.trim().toLowerCase() === normalizedSlug);

        if (!blogPage) {
            return null;
        }

        const response = await fetch(`/blog/${blogPage.file}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch blog content: ${response.statusText}`);
        }

        return await response.text();
    } catch (error) {
        console.error('Error fetching blog page:', error);
        throw error;
    }
}

export function getBlogSettings () {
    return {
        commentsRepo: 'HamzaJarane/blog-comments',
        commentsClientJS: 'https://utteranc.es/client.js',
    };
};