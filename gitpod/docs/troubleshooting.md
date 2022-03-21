---
section: troubleshooting
title: Troubleshooting
---

<script context="module">
  export const prerender = true;
</script>

# Troubleshooting

If you cannot find your issue here or in the documentation, please contact Gitpod via our [Support page](/support).

### Why doesn't the "ClearURLs" browser extension work with Gitpod?

The ClearURLs browser extension for [Google Chrome](https://chrome.google.com/webstore/detail/clearurls/lckanjgmijmafbedllaakclkaicjfmnk?hl=en) and [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/clearurls/) inhibits Gitpod workspaces from initialising and the problem manifests with the following symptoms:

- dark theme does not load
- the bottom left gitpod button is missing
- the vscode market place does not load
- settings sync does not work

This issue can be resolved by disabling "ETag filtering" in ClearURLs’ settings. A [issue has been created](https://gitlab.com/KevinRoebert/ClearUrls/-/issues/977) that requests to whitelist Gitpod by default and we would apprciate your upvotes on the issue.

### What version of VS Code is running in Gitpod (in the browser)?

Gitpod uses a fork of [VS Code](https://github.com/microsoft/vscode) called [openvscode-server](https://github.com/gitpod-io/openvscode-server). Gitpod release the latest version of VS Code very soon after the upstream repository is updated.

### Can I use both a desktop and a browser editor/IDE?

You can. The browser editor loads inside your workspace, and has full access to your files and directories. When you connect via Desktop you can also access your workspace via your browser. The browser can be used either as a fall back, alterantive, or as a way to make quicker edits instead of opening your code on desktop.

### What is the preferred IDE/editor for Gitpod?

There is no preferred IDE/editor to use with Gitpod, use whatever you are comfortable with, or switch it up. Do note, however that JetBrains recommend [JetBrains Gateway](ides-and-editors/jetbrains-gateway) as an approach to opening JetBrains IDE's, instead of [JetBrains Projector](https://lp.jetbrains.com/projector/).

### Can I use JetBrains Projector with Gitpod?

As Gitpod has support for [JetBrains Gateway](ides-and-editors/jetbrains-gateway), which is considered the primary tool for remote development when using JetBrains IDE's, Gitpod does not officially support [JetBrains Projector](https://lp.jetbrains.com/projector/). However, you can still run Projector IDE's using Gitpod by leveraging [Docker](/docs/config-docker).
