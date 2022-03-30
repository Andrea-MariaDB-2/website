<script lang="ts" context="module">
  declare global {
    type docsearchParamType = {
      apiKey: string;
      indexName: string;
      inputSelector: string;
      debug: boolean;
    };
    interface Window {
      docsearch: (param: docsearchParamType) => void;
    }
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import topicsState from "./states/topics-state";
  import EditInGitpod from "./edit-in-gitpod.svelte";
  import { page } from "$app/stores";
  let clazz = "";
  export { clazz as class };
  export let containerClasses = "";
  export let iconClasses = "";
  export let placeholder = "Quick search";
  export let showEditInGitpod: boolean = false;

  const docSearchJSVersion = "2.6.3";
  const docSearchInputSelector = "search-doc-input";

  let docSearchInput: HTMLInputElement;
  let docSearchScript: HTMLScriptElement;
  let docSearchScriptLoaded = false;
  let isSupportPage = $page.url.pathname.includes("support");

  $: if (docSearchInput && (docSearchScript || docSearchScriptLoaded)) {
    window.docsearch &&
      window.docsearch({
        apiKey: "1a880f3060e9ff81ff84087fc90878fc",
        indexName: "gitpod",
        inputSelector: `#${docSearchInputSelector}`,
        // Set debug to true to inspect the dropdown
        debug: false,
      });
  }

  const processDocSearchScriptLoadEvent = () => {
    docSearchScriptLoaded = true;
  };

  const handleBodyKeyDown = (event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "k") {
      docSearchInput.focus();
    }
  };

  onMount(() => {
    if (!navigator.userAgent.toLowerCase().match(/mobile/i)) {
      const platformKey = /(Mac)/i.test(navigator.userAgent) ? "⌘" : "Ctrl";
      placeholder += ` ${platformKey}+K`;
    }
  });
</script>

<style lang="postcss">
  .narrow-search {
    @apply lg:w-3/4;
  }

  .input-container:not(.topics-active) {
    @apply hidden lg:block;
  }

  :global(.algolia-autocomplete) {
    display: block !important; /* DocSearch adds inline styles, !important helps us take control */
  }

  :global(div
      .algolia-autocomplete.algolia-autocomplete-left
      .ds-dropdown-menu),
  :global(div
      .algolia-autocomplete.algolia-autocomplete-right
      .ds-dropdown-menu) {
    left: 0 !important; /* DocSearch adds inline styles, !important helps us take control */
    min-width: unset;
    max-width: unset;
  }
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/docsearch.js@{docSearchJSVersion}/dist/cdn/docsearch.min.css"
  />
  <script
    on:load={processDocSearchScriptLoadEvent}
    bind:this={docSearchScript}
    src="https://cdn.jsdelivr.net/npm/docsearch.js@{docSearchJSVersion}/dist/cdn/docsearch.min.js"></script>
</svelte:head>

<svelte:body on:keydown={handleBodyKeyDown} />

<div class="items-center flex my-4 lg:my-0  lg:mb-12">
  <div class:narrow-search={showEditInGitpod} class="w-full sm:px-4">
    <div
      class={`w-full input-container relative ${
        $topicsState || isSupportPage ? "topics-active" : ""
      } ${containerClasses}`}
    >
      <label for={docSearchInputSelector} class="sr-only">Search</label>
      <img
        class="absolute top-1/2 z-10 left-3 -translate-y-1/2 pointer-events-none h-xx-small w-xx-small lef {iconClasses}"
        src="/svg/mag-glass.svg"
        alt="Search"
        aria-hidden="true"
      />
      <input
        bind:this={docSearchInput}
        type="search"
        {placeholder}
        id={docSearchInputSelector}
        class="box-border rounded-2xl bg-off-white shadow-normal block w-full text-p-medium h-small pl-11 pr-3 py-2 border border-transparent leading-5 text-gray-600 placeholder:text-gray-500 focus:outline-none focus:bg-none focus:border-white focus:ring-white focus:text-gray-900 {clazz}"
      />
    </div>
  </div>
  {#if showEditInGitpod}
    <div
      class="w-1/4 lg:flex hidden justify-start sm:pl-4 lg:pl-8  {$topicsState ||
      isSupportPage
        ? 'topics-active'
        : ''}"
    >
      <EditInGitpod />
    </div>
  {/if}
</div>
