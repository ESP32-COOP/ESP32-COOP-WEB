<script lang="ts">
	import { formatDate } from "$lib/utils";
    import { backUrl } from "../../../stores/backUrl";
	import type { PageData } from "./$types";

	$backUrl = "/blog";	

	export let data: PageData;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta name="description" content={data.meta.description} />
</svelte:head>
<div class="flex flex-col items-center w-full h-full">
	<article
		class="flex flex-col w-[80%] gap-5 h-fit items-center justify-start bg-slate-300 rounded-lg p-2"
	>
		<!-- Title -->
		<hgroup class="w-full flex flex-col">
			<h1 class="text-[3rem] font-bold mr-auto">{data.meta.title}</h1>
			<div class="flex">
				<div class="flex gap-2 overflow-x-auto">
					{#each data.meta.categories as category}
						<span
							class="text-sm text-white hover:cursor-pointer hover:bg-slate-700 bg-slate-500 px-2 rounded-lg"
							>{category}</span
						>
					{/each}
				</div>

				<p class="ml-auto text-sm">
					Published at {formatDate(data.meta.date)}
				</p>
			</div>
		</hgroup>

		<div class="h-1 bg-slate-400 w-[80%] rounded-lg"></div>

		<!-- Post -->
		<section class="w-full">
			<article class="w-full p-2">
				<svelte:component this={data.content} />
			</article>

			<style lang="postcss">
				section {
					@apply  mx-auto my-8 p-4  rounded-md shadow-md;
				}
		
				section h1 {
					@apply text-4xl font-bold mb-4;
				}
		
				section h2 {
					@apply text-2xl font-bold my-3;
				}
		
				section h3 {
					@apply text-xl font-bold my-2;
				}
		
				section a {
					@apply text-blue-500 hover:underline;
				}
		
				section p {
					@apply text-base leading-6 my-4;
				}
		
				section pre {
					@apply bg-gray-100 p-4 rounded-md;
				}
		
				section code {
					@apply text-sm;
				}

				section ul {
					@apply list-disc pl-5 my-4;
				}

				section li {
					@apply text-base leading-6;
				}
				section img {
					@apply  px-2 rounded-md;
				}
			</style>
		</section>
	</article>
</div>
