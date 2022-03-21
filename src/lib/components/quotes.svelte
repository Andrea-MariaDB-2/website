<script lang="ts">
  import type { Quote } from "$lib/types/quote.type";
  import Card from "$lib/components/ui-library/card";
  export let quotes: Quote[];
  let selectedQuote: Quote = quotes[0];
  import LinkButton from "$lib/components/ui-library/link-button";

  let clazz = "";
  export { clazz as class };
</script>

<style lang="postcss">
  div :global(.quotes) {
    max-width: 1000px !important;
  }

  .square {
    @apply max-w-[50%] md:max-w-[65%] rounded-3xl;
  }
</style>

<div>
  <Card
    size="medium"
    class="quotes pt-micro px-0 sm:px-xx-small sm:pt-x-small sm:pb-micro lg:p-small mx-auto {clazz}"
  >
    <div class="flex justify-around flex-wrap max-w-3xl mx-auto">
      {#each quotes as quote}
        <button
          class="flex justify-center py-3 group mx-xx-small sm:mx-micro"
          on:mouseenter={() => (selectedQuote = quote)}
          on:click={() => (selectedQuote = quote)}
        >
          <img
            src={quote.companyLogo.src}
            alt={quote.companyLogo.alt}
            class="h-7 w-20 sm:h-9 sm:w-28 transition group-hover:opacity-100 group-focus:opacity-100 group-focus:filter-none group-hover:filter-none"
            class:opacity-60={selectedQuote !== quote}
            class:grayscale={selectedQuote !== quote}
          />
        </button>
      {/each}
    </div>
    <div
      class="items-center justify-center mt-xx-small text-center md:text-left flex-wrap md:flex h-auto md:h-[400px]"
    >
      <div class="w-full md:w-1/2">
        <img
          src={selectedQuote.img.src}
          alt={selectedQuote.img.alt}
          class:square={selectedQuote.img.square}
          class="w-full sm:rounded-3xl mx-auto"
        />
      </div>
      <div
        class="text flex w-full md:w-1/2 justify-center flex-col flex-1 py-xx-small px-xx-small sm:pl-x-small lg:pl-small lg:pr-0"
      >
        <p class="text-large">
          &ldquo;{selectedQuote.text}&rdquo;
        </p>

        <p class="font-bold mt-xx-small">
          {selectedQuote.author}, {selectedQuote.jobTitle}
        </p>

        {#if selectedQuote.link}
          <div class="mt-xx-small">
            <LinkButton
              href={selectedQuote.link.href}
              variant="tertiary"
              size="medium">{selectedQuote.link.text}</LinkButton
            >
          </div>
        {/if}
      </div>
    </div>
  </Card>
</div>
