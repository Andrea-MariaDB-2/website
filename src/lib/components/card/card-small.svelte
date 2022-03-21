<script lang="ts">
  import Card from "$lib/components/ui-library/card";
  import Base from "./base.svelte";
  let className: string = "";
  export { className as class };
  import type { Card as CardType } from "$lib/types/card.type";
  export let card: CardType;
</script>

<Card size="small" styles="max-width: 315px" class="p-x-small {className}">
  <Base {card} {...$$restProps} titleClassNames="h5" />
</Card>
