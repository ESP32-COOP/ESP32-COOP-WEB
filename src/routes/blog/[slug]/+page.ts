import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';


export const load = (async ({params}) => {
    try {
        /* @vite-ignore */
		const post = await import(`/src/blog/${params.slug}.md`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}

}) satisfies PageLoad;