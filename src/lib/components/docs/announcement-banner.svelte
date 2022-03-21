<script>
  import { page } from "$app/stores";

  const configurations = [
    {
      urlPattern: "/docs/languages/",
      title: "Documentation moved",
      message:
        "We introduced Quickstarts as a new place for examples of how to use your favourite language and framework on Gitpod. Remember though, even if you can't find your use case as a quickstart, Gitpod very likely still supports your programming language as it's simply a Ubuntu-based operating system in the cloud.",
      link: "/docs/quickstart",
      linkText: "Visit the quickstarts",
    },
  ];

  $: obsoleteConfig = configurations.find((config) =>
    $page.url.pathname.includes(config.urlPattern)
  );
</script>

{#if obsoleteConfig}
  <div>
    <blockquote>
      <p><strong>{obsoleteConfig.title}</strong></p>
      {obsoleteConfig.message}
      {#if obsoleteConfig.link}
        <a href={obsoleteConfig.link}>{obsoleteConfig.linkText}</a>
      {/if}
    </blockquote>
  </div>
{/if}
