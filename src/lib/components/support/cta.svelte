<script>
  import Section from "../section.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
</script>

<Section
  class="mb-medium flex flex-col sm:flex-row items-center max-w-xs sm:max-w-2xl mx-auto"
>
  <img src="/images/support/monitor.png" alt="Monitor" class="w-36" />
  <div class="mt-medium sm:ml-large sm:mt-0">
    <h2 class="h4">Did you face a bug or do you have a support request?</h2>
    <p class="mb-x-small">
      Please get in contact and we’ll get onto it right away.
    </p>
    <div class="flex justify-center items-center flex-wrap space-x-4">
      <LinkButton
        target="_blank"
        variant="primary"
        size="medium"
        href="https://www.gitpodstatus.com/">View status page</LinkButton
      >
      <LinkButton variant="secondary" size="medium" href="/contact/support"
        >Contact support</LinkButton
      >
    </div>
  </div>
</Section>
