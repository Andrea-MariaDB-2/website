<script lang="ts">
  import { stringToBeautifiedFragment } from "../../utils/helper";
  import type { Screencast } from "../../types/screencasts.type";
  import Logo from "../svgs/logo.svelte";

  export let screencast: Screencast;
  export let screencastNumber: number;
  export let headlineOrder: "h3";

  $: screencastNumberPadded = `${screencastNumber}`.padStart(3, "0");
</script>

<style>
</style>

<a
  href="/screencasts/{stringToBeautifiedFragment(
    screencast.title.slice(0, -3)
  )}"
  class="cast min-w-full"
>
  <div>
    <data>Screencast {screencastNumberPadded}</data>
    {#if headlineOrder === "h3"}
      <h3 class="h2">{screencast.title}</h3>
    {:else}
      <h2>{screencast.title}</h2>
    {/if}
    <Logo />
  </div>
</a>
