<script lang="ts">
  import Section from "./section.svelte";
  export let title: string;
  export let text: string = "";
  export let textClassNames: string = "";
</script>

<Section {...$$restProps}>
  <div class="text-center">
    <h2>{title}</h2>
    {#if text}
      <p class="text-large {textClassNames}">
        {@html text}
      </p>
    {/if}
  </div>
  <slot name="content" />
</Section>
