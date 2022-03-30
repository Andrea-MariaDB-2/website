<script lang="ts">
  import { page } from "$app/stores";
  import LogoTextless from "../svgs/logo-textless.svelte";

  const BASE_PATH =
    "https://gitpod.io#https://github.com/gitpod-io/website/tree/main/src/routes";
  const currentPage =
    $page.url.pathname === "/docs"
      ? `${$page.url.pathname}/index`
      : $page.url.pathname;
  const href = `${BASE_PATH}${currentPage}.md`;
</script>

<div class="flex justify-end flex-shrink-0">
  <a
    {href}
    target="_blank"
    class="inline-flex py-macro px-4 items-center  justify-center bg-off-white rounded-2xl text-btn-small text-black shadow-light font-semibold hover:bg-white focus:bg-white"
    rel="noopener"
    data-analytics={`{"variant":"open_in_gitpod"}`}
  >
    <span>
      <LogoTextless />
    </span> <span class="ml-macro">Edit in Gitpod</span>
  </a>
</div>
