<script lang="ts">
  import type { Resource } from "../../types/resource.type";
  export let resource: Resource;
  const { title, text, href } = resource;
  const target = href.startsWith("http") ? "_blank" : undefined;
</script>

<a
  {href}
  {target}
  class="flex flex-col justify-center max-w-xs lg:max-w-sm mb-small bg-white p-small rounded-4xl shadow-normal hover:bg-orange-700"
>
  <h3 class="mb-micro">{title}</h3>
  <p>{text}</p>
</a>
