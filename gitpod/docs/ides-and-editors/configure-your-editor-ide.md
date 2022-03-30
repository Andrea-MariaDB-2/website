---
section: ides-and-editors
title: Configure your IDE/editor
---

<script context="module">
  export const prerender = true;
</script>

# {title}

There are many ways to refine your IDE/editor experience in Gitpod.

## Configuring an IDE preference

### Per Project

There are multiple ways to configure an IDE/editor per [project](/docs/teams-and-projects). Via the [.gitpod.yml](/docs/config-gitpod-file) file, e.g. by [installing default VS Code extensions](/docs/ides-and-editors/vscode-extensions), or by adding custom scripts. You can also use [Docker](/docs/config-docker) as part of your per-project IDE/editor configuration.

### Per User

To configure an IDE/editor as a default user preference for all new workspaces, you will need to update your [user preferences](https://gitpod.io/preferences). **Please note: ** If you've already started a workspace already with a preference for a given editor/IDE, you'll need to restart your workspace for the changes to take effect. If you want, you can also configure your own personal [dotfiles](/docs/config-dotfiles) repository.

### Per Team

There are currently no ways to configure IDE/editor's on a per-team basis.
