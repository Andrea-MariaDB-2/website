<script lang="ts">
  import TwitterFollowButton from "../t-button.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
</script>

<style lang="postcss">
  h2 {
    @apply mt-0;
  }
</style>

<section
  class="text-center shadow-normal rounded-2xl p-9 mt-x-large mb-huge bg-off-white"
>
  <h2>More about DevX Digest</h2>
  <p class="text-medium mb-x-small">
    Sign up for our newsletter or follow <a
      href="https://twitter.com/@devxconf"
      target="_blank">@devxconf</a
    > on Twitter to stay updated.
  </p>
  <div class="flex justify-center items-center flex-wrap gap-4 mt-x-small">
    <LinkButton
      variant="primary"
      size="medium"
      href="https://gitpod.io/notifications"
      target="_blank"
      data-analytics={`{"context":"dashboard"}`}
      >Signup for the Newsletter</LinkButton
    >
    <TwitterFollowButton variant="secondary" />
  </div>
</section>
