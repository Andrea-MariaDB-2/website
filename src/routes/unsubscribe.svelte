<script lang="ts">
  import OpenGraph from "../components/open-graph.svelte";
  import GitpodIllustration from "../components/gitpod-illustration.svelte";
  import { onMount } from "svelte";
  
  onMount(() => {
    const footer: HTMLElement = document.querySelector('[data-id="footer"]')
    footer.style.display = 'none'
  })
</script>

<style type="text/postcss">
  section {
    @apply pb-0 mt-x-large sm:mt-large;
  }

  .h4 {
    @apply text-h4 mb-micro mt-0 !important;
  }
</style>

<OpenGraph
  data={{
    title: "Unsubscribed",
    description: "",
    norobots: true,
  }}
/>

<section class="card shadow-xl mb-medium text-center sm:mx-8">
  <h1 class="h4">Unsubscribed</h1>
  <p class="max-w-2xl text-large mx-auto">
    You have been sucessfully unsubscribed. If you would like to revert it,
    please go to <a
      href="https://gitpod.io/notifications"
      target="_blank"
      rel="nofollow">gitpod.io/notifications</a
    >.
  </p>
  <GitpodIllustration />
</section>
