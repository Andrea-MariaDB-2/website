<script lang="ts">
  import Avatars from "../avatars.svelte";

  /**
   * One or more comma-separated GitHub username.
   */
  export let usernames: string;

  const displayNames = usernames
    .split(",")
    .map((username) => username.trim())
    .reduce(
      (result, username, i, usernames) =>
        Object.assign(
          {},
          {
            ...result,
            [username]: `@${username}${i < usernames.length - 1 ? "," : ""}`,
          }
        ),
      {}
    );
</script>

<style>
  span :global(a) {
    @apply font-normal;
  }
</style>

<span>
  <span class="flex-shrink-0">
    <Avatars {usernames} socialMediaLinkClasses="filter hover:drop-shadow" />
  </span>
  <!-- <span class="hidden md:inline">
    <span>Thanks </span><Avatars
      {usernames}
      {displayNames}
      showAvatar={false}
    />
  </span> -->
</span>
