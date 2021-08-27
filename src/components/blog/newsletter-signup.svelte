<script lang="ts">
  let clazz = "";
  export { clazz as class };
  let email;
  let resultMessage = "";
  let isSubmittedOnce = false;
  let titleText = "Stay updated";

  const submitEmail = async () => {
    isSubmittedOnce = true;
    try {
      const response = await fetch("/.netlify/functions/newsletter", {
        method: "post",
        body: email,
      });
      if (response.ok) {
        resultMessage = "Thanks you are now signed up for our newsletter.";
      } else if (response.status === 409) {
        resultMessage = "Lean back and relax. The next newsletter will be sent right to your inbox.";
        titleText = "You are already signed up"
      } else {
        resultMessage = "Oh no, something went wrong :(.";
      }
    } catch (error) {
      console.error(error);
    }
  };
</script>

<style type="text/postcss">
  form {
    @media(min-width: 450px) {
      width: 440px;
    }
  }
  input {
    @apply mb-0;
  }
  button {
    @apply mr-0 w-32;
  }
</style>

<form
  class="bg-white shadow-normal rounded-2xl max-w-lg py-small px-xx-small sm:px-small {clazz} relative h-48 md:h-54 lgx:h-60"
  on:submit|preventDefault={submitEmail}
  id="newsletter"
  on:click|stopPropagation
>
  <h2 class="h4">{titleText}</h2>
  {#if resultMessage}
    <p class="">{resultMessage}</p>
  {:else}
    <p class="text-medium">Sign up now for our newsletter.</p>
    <div class="flex mt-micro lgx:mt-x-small">
      <input
        type="email"
        bind:value={email}
        required
        autocomplete="email"
        placeholder="Enter your email"
        class="mr-macro sm:mr-xx-small"
      />
      <button class="btn-primary" type="submit" disabled={isSubmittedOnce}
        >Sign up</button
      >
    </div>
  {/if}
</form>
