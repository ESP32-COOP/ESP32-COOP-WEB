import type { PageLoad } from './$types';

export const load = (async ({fetch}) => {
    const reponse = await fetch('/api/blog')
    const blogs = await reponse.json();
    return {blogs};
}) satisfies PageLoad;