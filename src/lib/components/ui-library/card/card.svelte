<script lang="ts">
  import type { CardBackground, CardSize } from "./card";

  let className: string = "";
  export { className as class };
  export let background: CardBackground = "off-white";
  export let brandShadow: boolean = false;
  export let size: CardSize;
  export let styles: string = "";
</script>

<style lang="postcss">
  .small {
    @apply rounded-2xl;
  }
  .medium {
    @apply rounded-5xl;
  }

  .white {
    @apply bg-white;
  }

  .off-white {
    @apply bg-off-white;
  }

  .brand {
    @apply shadow-brand;
  }
</style>

<div
  class:brand={brandShadow}
  style={styles}
  class="shadow-normal {background} {size} {className}"
>
  <slot />
</div>
