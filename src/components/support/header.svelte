<script>
  import Search from "../docs/search.svelte";
</script>

<style type="text/postcss">
  header {
    @apply px-0 !important;
  }
</style>

<header>
  <h1>Need help?</h1>
  <Search
    placeholder="Search"
    class="text-left text-xl py-xx-small sm:text-2xl sm:pl-x-large h-16 sm:h-20"
    containerClasses="rounded-3xl max-w-3xl mx-auto shadow-large"
    iconClasses="h-8 w-8 sm:h-10 sm:w-10 left-4 sm:left-5"
  />
</header>
