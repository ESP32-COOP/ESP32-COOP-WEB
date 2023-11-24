import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Blog } from '$lib/types';

async function getBlogs() {
    let blogs: Blog[] = []

    const paths = import.meta.glob('/src/blog/*.md', {
        eager:true
    })

    for (const path in paths){
        const file = paths[path];

        const slug = path.split('/').at(-1)?.replace('.md','')

        if (file && typeof file === 'object' && 'metadata' in file && slug){
            const metadata = file.metadata as Omit<Blog, 'slug'>;

            const blog = {...metadata, slug} satisfies Blog;

            blog.published && blogs.push(blog as Blog) 

        }

               
    }

    blogs.sort((first, second) => 
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return blogs;
    
}

export const GET: RequestHandler = async () => {
    const blogs = await getBlogs();
    return json(blogs);
};