<script lang="ts">
  import Section from "./section.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";

  type Link = {
    text: string;
    href: string;
    onClickHandler?: () => void;
  };

  export let title: string;
  export let text: string;
  export let image: { src: string; alt: string };
  export let btnPrimary: Link;
  export let btnSecondary: Link = null;
  const { src, alt } = image;
</script>

<style lang="postcss">
  :global(section.hero) {
    @apply lg:mb-52 !important;
  }

  .h1 {
    @apply mb-micro md:mb-xx-small;
  }

  .text-box {
    max-width: 645px;
  }

  img {
    transform: translateY(-40%);
    width: 35vw;
  }
</style>

<Section class="hero relative text-center lg:text-left pb-x-large lg:pb-0">
  <div class="text-box lg:pt-x-large mx-auto lg:mx-0">
    <h1 class="h1">{title}</h1>
    <p class="mx-auto lg:mx-0 max-w-lg lgx:max-w-none text-large mb-x-small">
      {text}
    </p>
    <div class="flex gap-4 justify-center lg:justify-start">
      {#if btnPrimary}
        <LinkButton
          size="large"
          variant="primary"
          href={btnPrimary.href}
          on:click={btnPrimary.onClickHandler}
        >
          {btnPrimary.text}
        </LinkButton>
      {/if}
      {#if btnSecondary}
        <LinkButton
          variant="cta"
          size="large"
          href={btnSecondary.href}
          on:click={btnPrimary.onClickHandler}
        >
          {btnSecondary.text}
        </LinkButton>
      {/if}
    </div>
  </div>
  <img
    class="absolute max-w-2xl right-0 top-1/2 -z-10 hidden lg:block"
    {src}
    {alt}
  />
</Section>
