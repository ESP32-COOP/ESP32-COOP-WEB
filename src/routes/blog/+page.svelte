<script lang="ts">
  import type { PageData } from "./$types";
  import { formatDate } from "$lib/utils";
  import * as config from "$lib/config";
  import { backUrl } from "../../stores/backUrl";

  $backUrl = "/";

  export let data: PageData;
</script>

<svelte:head>
  <title>
    {config.title}
  </title>
</svelte:head>

<section class="flex flex-col w-full h-full">
  <div class="flex h-fit w-fit">
    <h1 class="text-[2rem] pl-10 font-bold">Blog list:</h1>
  </div>
  <div class="flex justify-center w-full h-full">
    <ul class="flex h-full w-fit">
      {#each data.blogs as blog}
        <a
          href="/blog/{blog.slug}"
          class="flex min-w-[20rem] flex-col gap-2 justify-start p-5 w-full h-40 bg-gradient-to-r rounded-2xl user-drag-none from-slate-700 to-slate-900"
        >
          <p class="text-[1.5rem] lg:text-[1.9rem] font-bold text-white">
            {blog.title}
          </p>

          <p class="text-[1rem] lg:text-[1.2rem] text-white">
            {blog.title}
          </p>

          <div class="flex gap-5 items-center mt-auto">
            <p class="text-sm text-white">
              {formatDate(blog.date)}
            </p>
            <div class="flex overflow-x-auto gap-2 ml-auto">
              {#each blog.categories as categorie}
                <p class="p-1 py-0 text-sm text-black rounded-lg bg-slate-400">
                  {categorie}
                </p>
              {/each}
            </div>
          </div>
        </a>
      {/each}
    </ul>
  </div>
</section>
