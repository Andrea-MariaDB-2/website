<script lang="ts">
  export let href: string;
  export let icon: string;
</script>

<style lang="postcss">
  a,
  span {
    /* Move to markup once src/lib/assets/markdown-commons.scss is gone */
    @apply leading-4;
  }
</style>

<a
  class="inline-flex text-center py-2 px-4 text-btn-small leading-4 rounded-xl shadow-light font-semibold bg-off-white text-black hover:bg-white focus:bg-white"
  {href}
  target="_blank"
  rel="noopener"
  ><span class="">{icon}</span>
  <img
    class="inline-block my-0 mx-2 h-3 w-3"
    src="/svg/external.svg"
    alt="External"
  /><slot /></a
>
