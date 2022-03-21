<script lang="ts">
  export let title: string;
  export let path: string;
</script>

<style lang="postcss">
  /* This is needed to overwrite `a[class]` in _reset.scss */
  a {
    @apply underline;
  }
</style>

<a href={path}>{title}</a>
