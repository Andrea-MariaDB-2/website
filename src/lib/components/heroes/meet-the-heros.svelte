<script>
  import Section from "../section.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
</script>

<Section class="text-center">
  <h2 class="h2">Meet the Heroes</h2>
  <p class="text-large mb-x-small">
    Would you like to connect with the Community Heroes? Have a chat on Discord.
  </p>
  <LinkButton
    variant="cta"
    size="large"
    href="https://www.gitpod.io/chat"
    target="_blank">Connect on Discord</LinkButton
  >
</Section>
