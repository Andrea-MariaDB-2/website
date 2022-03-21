<script lang="ts">
  let clazz = "";
  export { clazz as class };
  export let text: string;
  export let variant: "pink" | "orange" = "orange";
  const capitalised = text.charAt(0).toUpperCase() + text.slice(1);
</script>

<style lang="postcss">
  .pink {
    @apply bg-pink-900;
  }

  .orange {
    @apply bg-orange-700;
  }
</style>

<div
  class="inline-block px-3 py-0.5 text-xs font-semibold text-black rounded-lg shadow-light {clazz} {variant}"
>
  {capitalised}
</div>
