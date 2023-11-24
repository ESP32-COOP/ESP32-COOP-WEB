<script lang="ts">
    import type { PageData } from './$types';
    import { formatDate } from '$lib/utils'

    import * as config from '$lib/config';
    
    export let data: PageData;
</script>


<svelte:head>
    <title>
        {config.title}
    </title>
</svelte:head>

<section>
	<ul class="posts">
		{#each data.blogs as blog}
			<li class="post">
				<a href={blog.slug} class="title">{blog.title}</a>
				<p class="date">{formatDate(blog.date)}</p>
				<p class="description">{blog.description}</p>
			</li>
		{/each}
	</ul>
</section>
