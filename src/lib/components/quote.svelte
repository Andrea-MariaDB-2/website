<script lang="ts">
  let clazz = "";
  export { clazz as class };
  export let quote: string;
  export let author: { name: string; jobTitle: string };
  import Card from "$lib/components/ui-library/card";

  const { name, jobTitle } = author;
</script>

<style lang="postcss">
  [class|="kumquat"] {
    @apply absolute;
  }

  .kumquat-left {
    @apply h-16 lgx:h-32 lgx:w-36 top-24 -left-12 lgx:-left-24 -z-10;

    @media (max-width: 800px) {
      @apply hidden;
    }
  }

  .kumquat-right {
    @apply h-20 lgx:h-36 lgx:w-44 -right-16 lgx:-right-32 -z-10 bottom-0 lgx:-bottom-10;

    @media (max-width: 800px) {
      @apply hidden;
    }
  }
</style>

<div>
  <Card
    size="medium"
    class="flex items-start relative text-left md:mx-auto py-x-small px-micro sm:p-small max-w-4xl {clazz}"
  >
    <img
      src="/images/startups/kumquat-left.png"
      alt="Gitpod Kumquat"
      class="kumquat-left"
    />
    <img src="/svg/quotation-mark.svg" alt="Left Quotation Mark" />
    <div class="mt-x-small">
      <p class="h3 text-black font-bold">
        {@html quote}”
      </p>
      <p class="mt-x-small">
        <span class="font-semibold text-black">{name},</span>
        {jobTitle}
      </p>
    </div>

    <img
      src="/images/startups/kumquat-right.png"
      alt="Gitpod Kumquat"
      class="kumquat-right"
    />
  </Card>
</div>
