<script lang="ts">
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";

  let clazz = "";
  export { clazz as class };
  export let storageKey: string;
  export let display: boolean = false;
  export let location: "top" | "bottom" = "top";

  let showBanner = false;

  const closeBanner = () => {
    showBanner = false;
    window.localStorage.setItem(storageKey, "true");
    if (clazz === "announcement-banner") {
      document.body.classList.remove("banner-is-shown");
    }
  };

  onMount(() => {
    showBanner = !window.localStorage.getItem(storageKey);
    if (clazz === "announcement-banner") {
      if (display && showBanner) {
        document.body.classList.add("banner-is-shown");
      } else if (!display || !showBanner) {
        showBanner = false;
        if (clazz === "announcement-banner") {
          document.body.classList.remove("banner-is-shown");
        }
      }
    }
  });
</script>

<style lang="postcss">
  :global(.banner-is-shown) :global(main > div:first-child) {
    @apply mt-small;
  }

  .top {
    @apply top-0;
  }

  .bottom {
    @apply bottom-0 fixed z-10;
  }
</style>

{#if showBanner}
  <div
    transition:slide
    class="{location} px-4 py-2 flex justify-between items-center w-full bg-sand-dark shadow-sm text-xs sm:text-sm md:text-base"
  >
    <slot {closeBanner} />
  </div>
{/if}
