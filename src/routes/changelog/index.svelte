<script lang="ts" context="module">
  export const prerender = true;
  export async function load({ session }) {
    const changelogEntries = session.changelogEntries;
    return { props: { changelogEntries } };
  }
</script>

<script lang="ts">
  import type { ChangelogEntry as ChangelogEntryType } from "$lib/types/changelog-entry.type";

  import { onMount } from "svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import "$lib/assets/markdown-commons.scss";
  import TwitterFollowButton from "$lib/components/t-button.svelte";
  import { formatDate, stringToBeautifiedFragment } from "$lib/utils/helpers";
  import ChangelogDate from "$lib/components/changelog/changelog-date.svelte";
  import ChangelogLink from "$lib/components/changelog/changelog-link.svelte";
  import Wrapper from "$lib/components/changelog/wrapper.svelte";
  import Header from "$lib/components/header.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";

  export let changelogEntries: ChangelogEntryType[];

  onMount(() => {
    Array.from(document.getElementsByClassName("toc")).forEach((toc) =>
      toc.remove()
    );
  });
</script>

<style lang="postcss">
  .changelog-entry {
    @apply flex flex-col md:flex-row last:pb-x-large md:last:pb-xx-large;

    & + .changelog-entry {
      @apply pt-x-large md:pt-xx-large;
    }
  }
</style>

<OpenGraph
  data={{
    description:
      "A sum-up of Gitpod’s latest product improvements, feature releases and community contributions.",
    title: "Gitpod Changelog - Latest releases and product updates",
    type: "website",
    keywords:
      "updates, product, changes, features, releases, bugs, fixes, version, updates, improvements",
  }}
/>

<div class="flex">
  <div class="hidden w-4/12 flex-shrink-0 md:block" />
  <Header
    centered={false}
    title="Changelog"
    text="A sum-up of Gitpod’s latest product improvements, feature releases<br class='hidden xl:block'> and community contributions."
    class="w-full"
    textAlign="left"
  >
    <div
      slot="content"
      class="flex justify-start items-center flex-wrap gap-4  pt-x-small"
    >
      <TwitterFollowButton variant="primary" />
      <LinkButton
        target="_blank"
        data-analytics={`{"context":"dashboard"}`}
        href="https://gitpod.io/notifications"
        variant="secondary"
        size="medium">Signup for the Newsletter</LinkButton
      >
    </div>
  </Header>
</div>

<div
  class="flex flex-col space-y-x-large md:space-y-xx-large divide-y divide-gray-300"
>
  {#each changelogEntries as { date, title, content, image, alt }}
    <div class="changelog-entry">
      <ChangelogDate
        date={formatDate(date)}
        href={`/changelog/${stringToBeautifiedFragment(title)}`}
      />
      <Wrapper class="content-changelog w-full md:w-8/12">
        <img src="/images/changelog/{image}" class="rounded-3xl" {alt} />
        <h2>
          <ChangelogLink
            href={`/changelog/${stringToBeautifiedFragment(title)}`}
          >
            {title}
          </ChangelogLink>
        </h2>
        {@html content}
      </Wrapper>
    </div>
  {/each}
</div>
