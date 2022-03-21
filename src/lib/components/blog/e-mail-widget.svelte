<script lang="ts">
  import { trackEvent, trackIdentity } from "../segment.svelte";
  import Input from "$lib/components/ui-library/input";
  import Button from "$lib/components/ui-library/button";
  import Card from "$lib/components/ui-library/card";

  let email = "";
  let resultMessage: string;
  let isSubmittedOnce = false;
  let clazz = "";
  let hasError: boolean = false;
  export { clazz as class };
  const type = "blog-email";

  const submitFeedback = async () => {
    if (email.length == 0) {
      hasError = true;
      return;
    }
    isSubmittedOnce = true;

    trackIdentity({
      email_untrusted: email,
    });

    trackEvent("email_submitted", {});

    const response = await fetch("/.netlify/functions/signup", {
      method: "post",
      body: JSON.stringify({
        type,
        email,
      }),
    });

    if (response.status === 201) {
      resultMessage = "Thanks for signing up, we'll reach out to you";
    } else if (response.status === 409) {
      resultMessage =
        "Thanks for signing up, it seems like you already signed up";
    } else {
      resultMessage = "Oh no, something went wrong :(.";
    }
    setTimeout(() => {
      hasError = false;
      email = "";
      resultMessage = "";
    }, 5000);
  };
</script>

<div class={clazz}>
  <Card
    size="small"
    class="max-w-md p-x-small m-auto"
    data-analytics={`{"dnt":true}`}
  >
    {#if resultMessage}
      <p class="text-center">{resultMessage}</p>
    {:else}
      <form on:submit|preventDefault={submitFeedback}>
        <div class="flex justify-center space-x-6" />
        <Input
          {hasError}
          label="Receive the next company building blog post via email"
          bind:value={email}
          name="Email"
          type="email"
          id="email"
        />
        <div>
          <span>
            <Button
              variant="primary"
              size="medium"
              disabled={isSubmittedOnce}
              class="mt-micro"
              type="submit"><span>Send</span></Button
            >
          </span>
        </div>
      </form>
    {/if}
  </Card>
</div>
