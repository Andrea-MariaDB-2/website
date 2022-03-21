<script>
  /**
   * Typescript is not supported in mdsvex layout files.
   * @see https://github.com/pngwn/MDsveX/issues/116
   */
  import OpenGraph from "../open-graph.svelte";

  import Share from "../share.svelte";
  import MoreCustomersStories from "./more-customers-stories.svelte";

  const baseUrl = "https://www.gitpod.io/customers/";
  export let slug;
  export let title;
  export let pageTitle;
  export let pageDescription;
  export let keywords;
  export let image;
  export let norobots = false;

  const shareLinks = [
    {
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `${title} ${baseUrl}${slug}`
      )}`,
      alt: "Twitter",
      icon: "/svg/brands/twitter.svg",
      trackingName: "twitter",
    },
    {
      href: `http://www.reddit.com/submit?url=${encodeURIComponent(
        `${baseUrl}${slug}&title=${title}`
      )}`,
      alt: "Reddit",
      icon: "/svg/brands/reddit.svg",
      trackingName: "reddit",
    },
    {
      href: `http://news.ycombinator.com/submitlink?u=${encodeURIComponent(
        `${baseUrl}${slug}`
      )}&t=${encodeURIComponent(title)}`,
      alt: "HackerNews",
      icon: "/svg/brands/hackernews.svg",
      trackingName: "hackernews",
    },
  ];
</script>

<OpenGraph
  data={{
    title: pageTitle,
    keywords,
    description: pageDescription,
    type: "article",
    image: `images/customers/${slug}/${image}`,
    imageTwitter: `images/customers/${slug}/${image}`,
    norobots,
  }}
/>

<slot />

<div class="max-w-3xl mx-auto">
  <Share
    text="Share this story"
    {shareLinks}
    class="border-t border-solid border-divider pt-xx-small md:pt-micro mt-small"
  />
</div>

<MoreCustomersStories />
