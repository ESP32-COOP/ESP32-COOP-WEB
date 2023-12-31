import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import {mdsvex} from 'mdsvex';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug'

/** @type {import('mdsvex').MdsvexCompileOptions} */
const mdsvexOptions = {
	extensions: [
		'.md'
	],
	remarkPlugins: [ remarkGfm, remarkGemoji,  ],
	rehypePlugins : [rehypeSlug, rehypeAutolinkHeadings ]

}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex(mdsvexOptions),
	],

	extensions: [
		'.svelte',
		'.md'
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
