<script lang="ts">
  export let value: string;
  let className: string = "";
  export let name: string = "";
  export let label: string = "";
  export let element: HTMLElement = null;
  export let hasError: boolean = false;
  export let id: string;
  //TODO ADD Eventforwarder
  export { className as class };
</script>

<style lang="postcss">
  .error {
    @apply text-error border-error;
  }
</style>

{#if label}
  <label
    class="text-dark-grey cursor-pointer block mb-2"
    class:error={hasError}
    for={id}>{@html label}</label
  >
{/if}
<textarea
  {id}
  on:change
  bind:value
  bind:this={element}
  class:error={hasError}
  class="whitespace-pre-wrap resize-none bg-transparent text-[#000000] box-border w-full rounded-lg py-2 px-4 border-[1px] border-divider placeholder:text-dark-grey {className}"
  {...$$restProps}
/>
{#if hasError}
  <legend class:error={hasError} class="text-xs block mt-1 mb-2"
    >Please fill out the {name ? name : ""} field</legend
  >
{/if}
