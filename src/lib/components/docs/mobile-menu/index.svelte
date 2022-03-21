<script>
  // Components
  import MobileMenuTopics from "./topics.svelte";
  import MobileMenuSubMenu from "./sub-menu.svelte";

  // States
  import topicsState from "../states/topics-state";

  import docsCurrentSectionStore from "$lib/stores/docs-current-section";
  export let MENU;

  $: currentSection = MENU.find(({ path }) =>
    $docsCurrentSectionStore
      ? path.indexOf(
          /self-hosted\/\d\.\d\.\d/.test($docsCurrentSectionStore)
            ? $docsCurrentSectionStore.replace(/\d\.\d\.\d/, "latest")
            : $docsCurrentSectionStore
        ) >= 0
      : /\/docs$/.test(path)
  );
</script>

<div class="mobile-menu mb-10 md:hidden">
  {#if $topicsState}
    <MobileMenuTopics {MENU} />
  {:else}
    <MobileMenuSubMenu {currentSection} />
  {/if}
</div>
