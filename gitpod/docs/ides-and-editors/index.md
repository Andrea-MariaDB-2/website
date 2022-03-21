---
section: ides-and-editors
title: IDEs & Editors
---

<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
    import OpenGraph from "$lib/components/open-graph.svelte";
</script>

<OpenGraph
data={{
    description:
      "Connect and integrate Gitpod workspaces with your favourite IDE or editor. VS Code Browser and Desktop. JetBrains. IntelliJ. GoLand. PhpStorm. PyCharm. Vim. Emacs. SSH.",
    title: "Gitpod integrates with VS Code, JetBrains and SSH.",
    keywords: "online IDEs, JetBrains, VS Code, webstorm, IntelliJ, PHPStorm, PyCharm,Rider, RubyMine, Webstorm CLion, Datagrip etc.",
  }}
/>

# {title}

In line with [our ambition to "remove all friction from the developer experience"](https://www.notion.so/gitpod/Values-Attributes-2ed4c2f93c84499b98e3b5389980992e), Gitpod currently supports many popular IDE/editors e.g. JetBrains and VS Code. You can even use the command-line directly for editors like Vim (via SSH). There are many ways to [configure your IDE/editor in Gitpod](ides-and-editors/configure-your-editor-ide) to match your preferred workflow or setup.

## Connecting an IDE/editor to Gitpod

The 4 supported ways to connect an IDE/editor to Gitpod:

1. **Browser** - For editing code in a workspace, you can open a Gitpod workspace directly in your browser. The default editor in the browser is VS Code ([configure VS Code with Gitpod](ides-and-editors/vscode-browser)).
2. **Desktop (IDE/editor)** - You can also open a Gitpod workspace on desktop, either with VS Code Desktop or a JetBrains IDE (configure your preferred Desktop IDE/editor via [preferences](https://gitpod.io/preferences))
3. **Desktop (SSH)** - Connect to a Gitpod workspace via SSH by using the [Local Companion](/docs/ides-and-editors/local-companion), read more about how to [connect to a Gitpod workspace from your command line](ides-and-editors/command-line).
4. **Browser (via Docker Image)** - As [Gitpod supports Docker](config-docker), you can install a custom IDE/editor via a Docker image, and running the IDE/editor as a web server.

### Supported IDE/editors

- [VS Code Browser](ides-and-editors/vscode-browser)
- [VS Code Desktop](ides-and-editors/vscode)
- [GoLand](ides-and-editors/goland#desktop)
- [IntelliJ](ides-and-editors/intellij#desktop)
- [PhpStorm](ides-and-editors/phpstorm#desktop)
- [PyCharm](ides-and-editors/pycharm#desktop)
