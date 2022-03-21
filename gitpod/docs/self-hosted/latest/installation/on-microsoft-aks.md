---
section: self-hosted/latest
title: Install Gitpod Self-Hosted on Microsoft Azure Kubernetes Service (AKS)
---

<script context="module">
  export const prerender = true;
</script>

# Install Gitpod Self-Hosted on Microsoft Azure Kubernetes Service (AKS)

Installation instructions for Gitpod Self-Hosted on Microsoft AKS are currently located in the [gitpod-io/gitpod-microsoft-aks-guide](https://github.com/gitpod-io/gitpod-microsoft-aks-guide) repository on GitHub. The installation process takes around forty minutes. In the end, the following resources are created:

- An Microsoft AKS cluster running Kubernetes v1.21.
- An Microsoft Azure load balancer.
- An Microsoft Azure DNS zone.
- An Microsoft Azure container registry.
- MySQL will be provided by Helm under [#5508](https://github.com/gitpod-io/gitpod/issues/5508) solved.
- Minio will be used until Microsoft [Azure storage gateway](https://github.com/gitpod-io/gitpod-azure-aks-guide/issues/1) is configured.
- Installation of [calico](https://docs.projectcalico.org) as CNI and NetworkPolicy implementation
- Installation of [cert-manager](https://cert-manager.io/) for self-signed SSL certificates
- A [gitpod.io](https://github.com/gitpod-io/gitpod) deployment
