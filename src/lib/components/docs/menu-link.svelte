<script lang="ts">
  import { page } from "$app/stores";

  export let href: string;

  $: normalizedPath = /self-hosted\/\d\.\d\.\d/.test($page.url.pathname)
    ? $page.url.pathname.replace(/\d\.\d\.\d/, "latest")
    : $page.url.pathname;
  $: active = href === normalizedPath || href === `${normalizedPath}/`;
</script>

<style lang="postcss">
  .active {
    @apply text-black;
  }
</style>

<a class:active {href} sveltekit:prefetch {...$$props}><slot /></a>
