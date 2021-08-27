import type { Article } from "../types/article.type";
import type { Resource } from "../types/resource.type";

export const resources: Resource[] = [
	{
		title: 'Getting Started',
		text: 'This page helps you understand how to provide a configuration for your project.',
		href: "/docs/getting-started"
	},
	{
		title: 'Documentation',
		text: 'Have a look at our documentation to learn how to get the most out of Gitpod',
		href: "/docs/"
	},
	{
		title: 'Gitpod Community',
		text: 'If you are looking for help with common requests, connect with our community on Discourse.',
		href: "https://community.gitpod.io/"
	},
	{
		title: 'Status',
		text: 'On the status page you get informed on all past and current incidents.',
		href: "https://www.gitpodstatus.com/"
	},
	{
		title: 'Report a bug or request a feature',
		text: 'Head over to GitHub to submit your bug report or feature request.',
		href: "https://github.com/gitpod-io/gitpod/issues/new/choose"
	},
	{
		title: 'Account Settings',
		text: 'Here you can update your account prefences like themes, email notifications, integrations, etc..',
		href: "https://gitpod.io/account"
	},
	{
		title: 'Guides',
		text: 'Discover these step-by-step guides to use Gitpod for any project.',
		href: "/guides"
	},
	{
		title: 'Changelog',
		text: 'Here you can view the latest product improvements and updates.',
		href: "/changelog"
	},
	{
		title: 'Gitpod Roadmap',
		text: 'Are you curious where Gitpod is heading to next? On the roadmap you can see our next steps.',
		href: "https://github.com/gitpod-io/roadmap/projects/1"
	},
	{
		title: 'Self-hosted',
		text: 'Would you like to host Gitpod yourself? Here you can learn all about it.',
		href: "/self-hosted"
	}
]

export const popularArticles: Article[] = [
	{
		title: 'Dev Environments as Code',
		text: 'Imagine that only a decade ago system administrators deployed, configured, and maintained software systems manually.',
		slug: 'dev-env-as-code'
	},
	{
		title: 'Gitpodify your project',
		text: 'If you follow this guide, you will end up with a button that launches pre-configured containers for your project, thus allowing everyone to check out your repository and run your code in a single click.',
		slug: 'gitpodify'
	},
	{
		title: 'I said goodbye to local development and so can you',
		text: 'Stop maintaining your local development environment. Instead, automate the setup once and use a new environment for each task you work on - available in seconds and always ready-to-code.',
		slug: 'i-said-goodbye-to-local-development-and-so-can-you'
	},
	{
		title: 'Gitpod Local Companion - localhost is going remote',
		text: 'While Gitpod can seamlessly integrate into your workflow in the vast majority of cases, there are times where you may want to access a workspace from localhost',
		slug: 'local-app'
	}
]