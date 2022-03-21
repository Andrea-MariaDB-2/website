<script context="module">
  export const prerender = true;
</script>

<script>
  import Founders from "$lib/components/media-kit/founders.svelte";
  import AdditionalImages from "$lib/components/media-kit/additional-images.svelte";
  import ColorsSection from "$lib/components/media-kit/colors-section.svelte";
  import LogoSection from "$lib/components/media-kit/logo-section.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Header from "$lib/components/header.svelte";
</script>

<OpenGraph
  data={{
    description: "We’ve put together some assets to help you use our brand.",
    title: "Media kit",
  }}
/>

<Header
  title="Media kit"
  text="We’ve put together some assets to help you use our brand."
>
  <img
    slot="content"
    src="/images/media-kit/media-kit.png"
    alt="Gitpod Illustration"
    class="mt-small rounded-4xl w-full"
  />
</Header>

<LogoSection />
<ColorsSection />
<AdditionalImages />
<Founders />
