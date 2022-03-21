<script>
  import { programFeatures } from "$lib/contents/security";
  import Section from "../section.svelte";
  import Card from "$lib/components/card/card.svelte";
</script>

<Section>
  <h2 class="text-center mb-small">Industry leading security program</h2>
  <div
    class="flex flex-wrap justify-center mt-small mx-auto 1/2xl:justify-center gap-y-micro md:gap-y-small gap-x-[16px]"
  >
    {#each programFeatures as feature}
      <Card textAlign="left" card={feature} />
    {/each}
  </div>
</Section>
