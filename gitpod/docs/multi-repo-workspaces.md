---
section: configure
title: Multi-repo Workspaces
---

<script context="module">
  export const prerender = true;
</script>

# Multi-repo Workspaces

> **NEW FEATURE** —
> Multi-repo workspaces are still in **Beta**. [Send feedback](https://github.com/gitpod-io/gitpod/issues/8623).

If you use multiple repositories in your software project, you may find it useful to clone and develop in a single workspace. This avoids having to run multiple workspaces, and makes it easier to configure services which need to be aware of each other.

By configuring your repositories as described below, starting a new multi-repo workspace "just works", giving you a full dev environment with all the repositories cloned, properly checked out and prebuilt.

There are two .gitpod.yml configuration keys, to support multi-repo workspaces.

1. `additionalRepositories` - Used in the main .gitpod.yml, this holds a list of repository URLs to clone into the same workspace.

2. `mainConfiguration` - Used in all the other repositories, this points to the repository with the main .gitpod.yaml. This is optional, but makes it possible to open the same workspace from any issue, branch or other context URL from any of the participating repositories.

## Example

Consider a fullstack scenerio, with a frontend and a backend repository. In this case we chose the frontend repo to store the main Gitpod workspace configuration.

The 'additionalRepositories' list contains an entry with the `url` of the backend repo, which will be cloned at the same directory level as the frontend repo. An optional `checkoutLocation` can override that path, relative to '/workspace'.

If you open a workspace on a branch, Gitpod will try to check out the same-named branch in all repositories. If such a branch doesn’t exist Gitpod checks out the default branch.

There are init and command [tasks](/docs/config-start-tasks) for **both** frontend and backend inside the main configuration. This is very similar to the configuration if frontend and backend were maintained in a [monorepo](https://github.com/jldec/fullstack).

A `workspaceLocation` points to a VS Code .code-workspace file, so that both repos are opened in the IDE.

### fullstack-frontend .gitpod.yml

```yaml
# fullstack frontend .gitpod.yml
# multi-repo
additionalRepositories:
  - url: https://github.com/jldec/fullstack-backend
    checkoutLocation: fullstack-backend

tasks:
  - name: frontend
    init: |
      npm install
      npm run build
    command: |
      # Configure the backend API
      export FULLSTACK_BACKEND=`gp url 3001`
      npm run dev

  - name: backend
    before: |
      cd ../fullstack-backend
    init: |
      npm install
    command: |
      # configure the frontend for CORS
      export FULLSTACK_FRONTEND=`gp url 3000`
      npm start

workspaceLocation: fullstack-frontend/fullstack.code-workspace
```

### fullstack-backend .gitpod.yml

The [fullstack-backend](https://github.com/jldec/fullstack-backend) repo delegates to the configuration from [fullstack-frontend](https://github.com/jldec/fullstack-frontend).

```yaml
# fullstack backend .gitpod.yml
# multi-repo
mainConfiguration: https://github.com/jldec/fullstack-frontend
```

Since the main configuration is used for prebuilds, those will show up under the main project.
