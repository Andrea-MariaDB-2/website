<script lang="ts">
  import type { BlogPost } from "$lib/types/blog-post.type";

  import MoreArticles from "../more-articles.svelte";
  import { session } from "$app/stores";

  const popularPostsSlugs = [
    "i-said-goodbye-to-local-development-and-so-can-you",
    "local-app",
    "continuous-dev-environment-in-devops",
  ];

  const popularPosts = $session.posts.filter((p: BlogPost) =>
    popularPostsSlugs.some((slug) => p.slug === slug)
  );
</script>

<MoreArticles title="Popular articles" posts={popularPosts} />
