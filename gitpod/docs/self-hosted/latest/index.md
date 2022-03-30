---
section: self-hosted/latest
title: Gitpod Self-Hosted
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
      "Install and run Gitpod with full control on public cloud providers or self-managed Kubernetes clusters. Enterprise-grade security within corporate firewalls and air-gapped networks. Requirements. Installation. Configuration. GKE. EKS. AKS. Open-source.",
    title: "Gitpod Self-Hosted installation guide",
    keywords: "installation",
  }}
/>

# Gitpod Self-Hosted

Gitpod can be deployed and operated on your own infrastructure. It supports different cloud providers, self-managed Kubernetes clusters, corporate firewalls, and even off-grid / air-gapped networks.

## Getting Started

1. [Requirements](./latest/requirements)
2. [Installation](./latest/installation)

## Deprecated Helm Documentation

[v0.10.0 Helm](./helm-deprecated)

## Reference

- [Releases](./latest/releases)
