<script lang="ts">
  import type { ContactCard } from "$lib/types/contact-card.type";
  import Card from "$lib/components/ui-library/card";
  import LinkButton from "$lib/components/ui-library/link-button";

  export let contactCard: ContactCard;
</script>

<style lang="postcss">
  p {
    color: var(--dark-grey);
  }
</style>

<Card
  size="small"
  class="p-xx-small sm:py-small sm:px-x-small md:p-medium text-center"
>
  <!-- svelte-ignore a11y-missing-attribute -->
  <img
    src="/images/contact/{contactCard.image}"
    height={contactCard.imgHeight}
    width={contactCard.imgWidth}
    role="presentation"
  />
  <h2 class="h3">{contactCard.title}</h2>
  <p>{contactCard.description}</p>
  <LinkButton
    variant="primary"
    class="m-8"
    on:click={() => {
      if (contactCard.tracking) contactCard.tracking();
    }}
    size="large"
    href={contactCard.btnHref}>{contactCard.btnText}</LinkButton
  >
</Card>
