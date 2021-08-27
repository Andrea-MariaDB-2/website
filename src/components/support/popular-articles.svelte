<script>
  import { popularArticles } from "../../contents/support";
  import Section from "../section.svelte";
  import Article from "./article.svelte";
</script>

<Section>
  <h2 class="text-center">Popular articles</h2>
  <div class="flex flex-wrap justify-around mt-medium">
    {#each popularArticles as article}
      <Article {article} />
    {/each}
  </div>
</Section>
