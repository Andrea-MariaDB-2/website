import type { Screencast } from "../types/screencasts.type";

let id = 1;
const screencasts: Screencast[] = [
  {
    nextScreencast: id++,
    title: "Always Ready-To-Code",
    description:
      "How to get a full dev environment in your browser with the click of a button and be immediately ready-to-code.",
    duration: 120,
    tile: "screencast-1.jpg",
    youtubeId: "w65POyu3ZUQ",
    relatedDocs: [
      { path: "", title: "Introduction to Gitpod" },
      { path: "/getting-started", title: "Getting Started" },
      { path: "/context-urls", title: "Context URLs" },
    ],
  },
  {
    nextScreencast: id++,
    title: "Navigating Your Workspace",
    description: "Your workspace is running, now what?",
    duration: 201,
    tile: "screencast-2.jpg",
    youtubeId: "4495YOMhhgo",
    relatedDocs: [{ path: "/life-of-workspace", title: "Life of a Workspace" }],
  },
  {
    nextScreencast: id++,
    title: "Fully Automate Your Dev Setup",
    description:
      "Understanding the automation benefits that arise from the concept of dev-environment-as-code.",
    duration: 264,
    tile: "screencast-3.jpg",
    youtubeId: "fA2fpqP1xaM",
    relatedDocs: [
      { path: "/configuration", title: "Configure Your Project" },
      { path: "/config-gitpod-file", title: ".gitpod.yml" },
      { path: "/config-docker", title: "Docker Configuration" },
      { path: "/config-start-tasks", title: "Start Tasks" },
    ],
  },
  {
    nextScreencast: id++,
    title: "Personalize Your Workspace",
    description:
      "How to customize and configure Gitpod for your personal needs and those of your team.",
    duration: 123,
    tile: "screencast-4.jpg",
    youtubeId: "VYHsd1zI_tE",
    relatedDocs: [
      { path: "/vscode-extensions", title: "VS Code Extensions" },
      { path: "/environment-variables", title: "Environment Variables" },
    ],
  },
  {
    nextScreencast: id++,
    title: "Continuously Prebuild Your Project",
    description:
      "How to make Gitpod load in a blink by prebuilding your project ahead-of-time, continuously.",
    duration: 128,
    tile: "screencast-5.jpg",
    youtubeId: "ZtlJ0PakUHQ",
    relatedDocs: [{ path: "/prebuilds", title: "Prebuilt Workspaces" }],
  },
  {
    nextScreencast: id++,
    title: "Fresh Dev Environments For Each New Task",
    description:
      "Discover ephemeral/disposable workspaces and start fresh for each new task with just a single click. Pure magic!",
    duration: 195,
    tile: "screencast-6.jpg",
    youtubeId: "n7Ca3jHFtZg",
    relatedDocs: [{ path: "", title: "Introduction to Gitpod" }],
  },
  {
    nextScreencast: id++,
    title: "Collaborating With Your Team",
    description:
      "How to collaborate effectively with Gitpod's Shared Workspaces and Snapshots.",
    duration: 189,
    tile: "screencast-7.jpg",
    youtubeId: "TrY15zN98p8",
    relatedDocs: [
      { path: "/sharing-and-collaboration", title: "Collaboration & Sharing" },
    ],
  },
];

export default screencasts;
