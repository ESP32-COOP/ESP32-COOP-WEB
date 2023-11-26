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
				section h1 {
					@apply text-[2rem];
				}

				section pre {
					@apply bg-white;
					@apply p-2;
					@apply rounded-md;
				}
			</style>
		</section>
	</article>
</div>
