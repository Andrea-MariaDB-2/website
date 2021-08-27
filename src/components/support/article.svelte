<script lang="ts">
  import type { Article } from "../../types/article.type";
  export let article: Article;
  const { title, text, slug } = article
</script>

<div class="max-w-xl py-medium px-micro sm:p-large">
	<h3>{title}</h3>
	<p class="py-x-small text-p-large">{text}</p>
	<a href="/blog/{slug}" class="btn-secondary">Read blog post</a>
</div>