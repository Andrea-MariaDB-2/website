<script lang="ts">
  import { showHideOverflowY } from "$lib/utils/helpers";

  import menuState from "./state";

  const handleToggle = () => {
    $menuState = !$menuState;
    if ($menuState) {
      showHideOverflowY(true);
    } else {
      showHideOverflowY(false);
    }
  };
</script>

<style lang="postcss">
  button {
    &::before,
    &::after {
      content: "";
      @apply h-0.5 w-4 rounded-[2px] bg-[#f4f2f1] origin-center transition-all duration-200 ease-out;
    }

    &::before {
      @apply mb-1;
    }

    &.open {
      &::before,
      &::after {
        @apply bg-[#565252];
      }

      &:before {
        transform: rotate(-135deg);
        @apply -mb-0.5;
      }

      &::after {
        transform: rotate(135deg);
      }
    }

    @media (min-width: 1090px) {
      @apply hidden;
    }
  }
</style>

<button
  on:click={handleToggle}
  aria-label="Show / hide nav items"
  class="flex flex-col items-center justify-center h-6 w-12 rounded-xl transition-all duration-200 {$menuState
    ? 'bg-sand-dark'
    : 'bg-black'}"
  class:open={$menuState}
/>
