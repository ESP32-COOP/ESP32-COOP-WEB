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
		class="flex flex-col w-[80%] gap-5 h-fit items-center justify-start bg-slate-200 shadow-md rounded-lg p-2"
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
					@apply  mx-auto my-8 p-4  rounded-md ;
				}
		
				section h1 {
					@apply text-[2rem] pb-[.8rem] border-b-[1px] border-slate-500 mb-4 mt-6 font-semibold leading-5;
				}

				section h1 a {
					@apply no-underline
				}
		
				section h2 {
					@apply pb-[.8rem] mt-6 mb-4 box-border leading-5 text-2xl font-semibold border-b-[1px] border-slate-500;
				}
		
				section h3 {
					@apply text-xl mt-6 mb-4 font-semibold leading-5;
				}
		
				section a {
					@apply text-blue-500 underline;
				}
		
				section p {
					@apply text-base leading-6 my-4 text-[16px] mb-4 break-words;
				}
		
				section pre {
					@apply bg-gray-100 p-4 rounded-md;
				}
		
				section code {
					@apply text-sm;
				}

				section ul {
					@apply pl-8 mb-4 list-disc;
				}

				section ol {
					@apply pl-8 mb-4 list-decimal;
				}

				section li {
					@apply text-base leading-6 box-border ;
				}

				section img {
					@apply  rounded-md px-5;
				}
			</style>
		</section>
	</article>
</div>
