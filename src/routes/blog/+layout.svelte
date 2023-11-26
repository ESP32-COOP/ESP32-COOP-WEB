<script>
    import { backUrl } from '../../stores/backUrl';

</script>


<div
  class="flex relative flex-col items-end p-5 w-screen h-screen bg-coop-blue-50 bg-tempalte"
>
  <div class="flex gap-2 items-center pb-3 w-full h-12">
    <img
      class="w-auto h-full user-drag-none"
      src="/logo.svg"
      alt="coop door esp32 logo"
    />
    <h1 class="sm:text-[1rem] md:text-[1.5rem] uppercase">esp32 coop door</h1>
    <a
      href="{$backUrl}"
      class="px-5 py-1 ml-auto text-sm text-white whitespace-nowrap bg-gradient-to-r rounded-full user-drag-none md:text-xl md:px-12 md:py-1 from-slate-700 to-slate-900"
      >Back</a
    >
  </div>
  <div class="flex overflow-hidden flex-col-reverse w-full h-full lg:flex-row">
    <slot />
  </div>
</div>
