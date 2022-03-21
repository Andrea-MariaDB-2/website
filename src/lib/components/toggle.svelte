<script lang="ts">
  let clazz = "";
  export { clazz as class };

  export let labelLeft: string;
  export let labelRight: string;
  export let isInversed: boolean = false;
  export let checked: boolean;
  export let id: string;
</script>

<style lang="postcss">
  label {
    @apply mb-0 cursor-pointer text-h6 font-bold py-macro px-xx-small rounded-5xl transition-all duration-300 hover:text-gray-900;
  }

  .switch-container {
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.1));
  }

  label:first-of-type {
    @apply bg-orange-700;
  }

  .checked label {
    &:first-of-type {
      @apply bg-white;
    }

    &:last-of-type {
      @apply bg-orange-700 text-gray-900;
    }
  }

  .inversed label {
    &:first-of-type {
      @apply bg-white;
    }

    &:last-of-type {
      @apply bg-orange-700 text-gray-900;
    }
  }

  .inversed.checked label {
    &:first-of-type {
      @apply bg-orange-700 text-gray-900;
    }

    &:last-of-type {
      @apply bg-white;
    }
  }
</style>

<div class="text-center">
  <div
    class="switch-container inline-flex justify-center items-center space-x-0.5 {clazz} h-14 mx-auto bg-white p-1.5 rounded-5xl transition-all duration-200"
    class:checked
    class:inversed={isInversed}
  >
    <label for={id} class:text-gray-900={!checked && !isInversed}>
      {labelLeft}
    </label>
    <div class="relative flex items-center cursor-pointer">
      <input
        {id}
        type="checkbox"
        on:change
        class="h-full w-full toggle"
        data-analytics={`{"label":"` +
          labelLeft +
          ` <> ` +
          labelRight +
          ` Toggle"}`}
      />
    </div>
    <label for={id}>
      {labelRight}
    </label>
  </div>
</div>
