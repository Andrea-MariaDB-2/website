<script context="module">
  export const prerender = true;
</script>

<script>
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Action from "$lib/components/contact/action.svelte";
  import { contactActions } from "$lib/contents/contact";
  import Header from "$lib/components/header.svelte";
</script>

<OpenGraph
  data={{
    title: "Contact",
    description: "Get in touch and let us know how we can help.",
  }}
/>

<Header
  title="How can we help you?"
  text="Get in touch and let us know how we can help."
  tight={true}
  fullWidth={true}
>
  <div slot="content" class="flex flex-wrap justify-around mt-small">
    {#each contactActions as action}
      <Action {action} width="19rem" />
    {/each}
  </div>
</Header>
