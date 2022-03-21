<script lang="ts">
  let className: string = "";
  export let checked: boolean = false;
  export let label: string = "";
  export let element: HTMLElement = null;
  export let hasError: boolean = false;
  export let disabled: boolean = false;
  export { className as class };
</script>

<style lang="postcss">
  .error {
    @apply text-error border-error;
  }

  label::before {
    content: "";
    flex: 0 0 24px;
    @apply text-transparent block h-6 rounded
      text-center mr-micro transition border border-solid border-divider
      leading-[1.1];
  }

  input:checked + label::before {
    background-image: url("/tick-dark.svg");
    @apply text-black border border-solid border-orange-900 bg-orange-900 bg-center;
  }

  label:hover::before,
  label:focus::before {
    @apply border-black;
  }

  .disabled {
    @apply pointer-events-none border-divider;
  }

  .error + label::before {
    @apply text-error border-error;
  }

  .disabled + label::before {
    @apply text-error border-error;
  }
</style>

<input
  class="hidden absolute box-border text-black {className}"
  class:error={hasError}
  class:disabled
  {disabled}
  id={label}
  bind:checked
  bind:this={element}
  on:change
  type="checkbox"
  {...$$restProps}
/>
{#if label}
  <label class="flex cursor-pointer text-dark-grey mt-1 mb-2" for={label}
    >{@html label}</label
  >
{/if}
