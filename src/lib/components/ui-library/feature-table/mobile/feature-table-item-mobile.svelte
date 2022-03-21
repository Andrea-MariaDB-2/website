<script lang="ts">
  import type { FeatureItemDetail } from "../feature-table.types";
  export let definition: FeatureItemDetail;
</script>

{#if definition.list}
  <div class="flex flex-col justify-center px-8">
    <div class="font-bold uppercase mb-macro">{definition.term}</div>
    <ul class="list-disc list-outside text-left">
      {#each definition.list as item}
        <li>
          {@html item}
        </li>
      {/each}
    </ul>
  </div>
{:else}
  <div class="flex items-center flex-col justify-center">
    <div class="font-bold uppercase mb-macro">{definition.term}</div>
    {#if definition.text}
      {@html definition.text}
    {/if}
    {#if definition.availability}
      <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
    {/if}

    {#if definition.availability === false}
      <img alt="No" class="mx-auto" height="24" width="24" src="/cross.svg" />
    {/if}
  </div>
{/if}
