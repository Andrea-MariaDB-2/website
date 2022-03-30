<script lang="ts">
  import { onMount } from "svelte";

  let clazz = "";
  export { clazz as class };

  let show = false;
  const renderPageToc = (node: HTMLElement) => {
    if (document.getElementsByClassName("toc").length > 0) {
      node.appendChild(document.getElementsByClassName("toc")[0]);
      show = true;
    } else {
    }
  };

  let visibleSectionIds = [];
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              entry.target.getBoundingClientRect().y >
              document
                .querySelector(`#${visibleSectionIds[0]}`)
                ?.getBoundingClientRect().y
            ) {
              // Scrolling down
              visibleSectionIds = [...visibleSectionIds, entry.target.id];
            } else {
              // Scrolling up
              visibleSectionIds = [entry.target.id, ...visibleSectionIds];
            }
            visibleSectionIds.forEach((id) => {
              document
                .querySelector(`#toc-wrapper a[href="#${id}"`)
                ?.classList.remove("text-black");
            });
            document
              .querySelector(`#toc-wrapper a[href="#${visibleSectionIds[0]}"`)
              ?.classList.add("text-black");
          } else {
            if (visibleSectionIds.includes(entry.target.id)) {
              visibleSectionIds = visibleSectionIds.filter(
                (id) => id !== entry.target.id
              );
              document
                .querySelector(`#toc-wrapper a[href="#${entry.target.id}"`)
                ?.classList.remove("text-black");
              document
                .querySelector(`#toc-wrapper a[href="#${visibleSectionIds[0]}"`)
                ?.classList.add("text-black");
            }
          }
        });
      },
      { threshold: 1 }
    );

    const contentHeadings = Array.from(
      document.querySelectorAll("h2, h3, h4, h5, h6")
    );

    contentHeadings.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      observer.disconnect();
    };
  });
</script>

<div
  class:xl:block={show}
  use:renderPageToc
  id="toc-wrapper"
  class="hidden self-start flex-none w-1/4 pl-8 sticky top-24 max-h-[calc(100vh-6rem)] text-base pb-10 overflow-x-hidden overflow-y-auto {clazz}"
  data-analytics={`{"position":"main","context":"on_this_page"}`}
>
  <p><strong class="text-black">On this page</strong></p>
</div>
