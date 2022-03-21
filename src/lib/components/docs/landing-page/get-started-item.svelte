<script lang="ts">
  import type { GetStartedItem } from "$lib/types/get-started.type";
  import LinkButton from "$lib/components/ui-library/link-button";
  export let getStartedItem: GetStartedItem;
</script>

<style lang="postcss">
  p {
    @apply mt-0;
  }
</style>

<div
  class="text-center bg-off-white rounded-4xl shadow-normal py-x-small px-micro flex flex-col"
>
  <div class="flex justify-center">
    <img
      src={getStartedItem.icon.path}
      style={`transform: ${getStartedItem.icon.transform}`}
      alt={getStartedItem.title}
    />
  </div>
  <div class="flex flex-col">
    <h4 class="mt-2 mb-macro">{getStartedItem.title}</h4>
    <p>{getStartedItem.description}</p>
  </div>
  <div class="mt-auto">
    <LinkButton
      variant="cta"
      size="medium"
      class="mb-2"
      href={getStartedItem.path}>{getStartedItem.buttonLabel}</LinkButton
    >
  </div>
</div>
