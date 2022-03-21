import type { TableData } from "$lib/types/table-data.type";
import type { Pricing } from "$lib/types/pricing.type";
import { isEurope } from "$lib/utils/helpers";
import type {
  FeatureTable,
  FeatureTableColumn,
  FeatureTableToc,
} from "../components/ui-library/feature-table/feature-table.types";
import type { FAQ } from "../types/faq.type";

export const pricingPlans: Pricing[] = [
  {
    title: "Community",
    price: `${isEurope() ? "€" : "$"}0`,
    duration: "Open Source",
    features: [
      "Unlimited users",
      "Public & private repos",
      "GitLab, GitHub and Bitbucket",
    ],
    btnText: "Install now",
    btnHref: "/docs/self-hosted/latest",
    trackingName: "community",
  },
  {
    title: "Free",
    price: `${isEurope() ? "€" : "$"}0`,
    duration: "for the first 10 users",
    features: [
      "Public & private repos",
      "GitLab, GitHub and Bitbucket",
      "Prebuilds",
      "Shared Workspaces",
      "Snapshots",
      "Admin Dashboard",
    ],
    btnText: "Install now",
    btnHref: "/docs/self-hosted/latest",
    trackingName: "free",
  },
  {
    title: "Professional",
    price: isEurope() ? "€29" : "$35",
    duration: "per user/month",
    features: [
      "Starts after the 11th user",
      "Everything from Free",
      "Standard support",
    ],
    btnText: "Register and Install now",
    btnHref: "/enterprise-license",
    spiced: true,
    trackingName: "professional",
  },
];

export const freePlanTableData: FeatureTableColumn = {
  header: {
    headline: "Free",
    subtitle: `${isEurope() ? "€" : "$"}0 per user/month`,
  },
  link: {
    label: "Install now",
    href: "/docs/self-hosted/latest",
  },
  items: [
    {
      term: "Public & Private Repos",
      availability: true,
    },
    {
      term: "Team Limit",
      text: "<span class='font-bold'>10 registered users</span>",
    },
    {
      term: "Inactivity timeout",
      text: "unlimited",
    },
    {
      term: "timeout Boost",
      text: "unlimited",
    },
    {
      term: "Parallel Workspaces",
      text: "unlimited",
    },
    {
      term: "prebuilds",
      text: "unlimited",
    },
    {
      term: "Shared workspaces",
      availability: true,
    },
    {
      term: "Snapshots",
      availability: true,
    },
    {
      term: "Admin Dashboard",
      availability: true,
    },
    {
      term: "Encrypted backups",
      availability: true,
    },
    {
      term: "multi-ide support",
      availability: true,
    },
    {
      term: "GitLab",
      availability: true,
    },
    {
      term: "GitHub",
      availability: true,
    },
    {
      term: "Bitbucket",
      availability: true,
    },
  ],
};

export const professionalPlanTableData: FeatureTableColumn = {
  isHighlighted: true,
  header: {
    headline: "Professional",
    subtitle: `${isEurope() ? "€29" : "$35"} per user/month`,
  },
  link: {
    label: "Register and Install Now",
    href: "/enterprise-license",
  },
  items: [
    {
      term: "Public & Private Repos",
      availability: true,
    },
    {
      term: "Team Limit",
      text: "<span class='font-bold'>unlimited</span>",
    },
    {
      term: "Inactivity timeout",
      text: "unlimited",
    },
    {
      term: "timeout Boost",
      text: "unlimited",
    },
    {
      term: "Parallel Workspaces",
      text: "unlimited",
    },
    {
      term: "prebuilds",
      text: "unlimited",
    },
    {
      term: "Shared workspaces",
      availability: true,
    },
    {
      term: "Snapshots",
      availability: true,
    },
    {
      term: "Admin Dashboard",
      availability: true,
    },
    {
      term: "Encrypted backups",
      availability: true,
    },
    {
      term: "multi-ide support",
      availability: true,
    },
    {
      term: "GitLab",
      availability: true,
    },
    {
      term: "GitHub",
      availability: true,
    },
    {
      term: "Bitbucket",
      availability: true,
    },
  ],
};

export const selfHostedToc: FeatureTableToc[] = [
  {
    type: "text",
    data: {
      text: "Public & Private Repos",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Team Limit",
      tooltip: "Maximum number of users in the team.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Inactivity Timeout",
      tooltip: "Time after which workspaces are automatically stopped.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "timeout Boost",
      tooltip: "Extra workspace inactivity timeout boost.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Parallel Workspaces",
      tooltip: "Run multiple workspaces at the same time.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "prebuilds",
      tooltip:
        "Enable prebuilds to continuously build your Git branches, so you and your team can always start coding right away.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Shared workspaces",
      tooltip: "Pair program with your team by sharing running workspaces.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Snapshots",
      tooltip:
        "Create a copy of your workspace by sharing a snapshot with your team.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Admin Dashboard",
      tooltip: "Access to exclusive stats of your team.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Encrypted backups",
      tooltip:
        "Keeps your data safe. More on <a href='/security'>security</a>.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "multi-ide support",
      tooltip:
        "Connect Gitpod with your favourite IDE. View <a href='/docs/ides-and-editors'>docs/IDE</a> to see all suported IDE’s.",
    },
  },
  {
    type: "image",
    data: {
      text: "GitHub",
      image: {
        path: "/svg/github.svg",
        alt: "GitHub",
      },
    },
  },
  {
    type: "image",
    data: {
      text: "GitLab",
      image: {
        path: "/svg/gitlab.svg",
        alt: "GitLab",
      },
    },
  },
  {
    type: "image",
    data: {
      text: "Bitbucket",
      image: {
        path: "/svg/bitbucket.svg",
        alt: "Bitbucket",
      },
    },
  },
];

export const selfHostedComparison: FeatureTable = {
  toc: selfHostedToc,
  columns: [freePlanTableData, professionalPlanTableData],
};
export const selfhostedFAQ: FAQ = {
  headline: "FAQs",
  items: [
    {
      title: "Can I create a team plan?",
      content:
        '<p> Of course! You can use Gitpod Self-Hosted Community on your own infrastructure for free for unlimited users. If you\'d like to try additional features like unlimited prebuilds, shared workspaces, snapshots and an admin dashboard, the Free tier is available without a license for the first 10 users. You can upgrade to to the Professional Plan at any time. Simply update your existing instance with a license key. Currently, Self-Hosted Gitpod licenses can currently only be purchased through contacting sales. Please <a href="/enterprise-license" >request a license</a > key or <a href="/contact/sales">Get in touch</a> if you have any questions. </p>',
    },
    {
      title: "Can I add more users to my plan at any time?",
      content:
        "<p> Yes, you can add as many users as you like to your plan at any time. </p>",
    },
    {
      title: "What is the difference between SaaS and Self-Hosted?",
      content:
        "<p> If you choose <strong>Gitpod SaaS</strong>, we will manage and host Gitpod in the cloud for you. This means minimal setup efforts for you and secure data storage in the cloud. Gitpod SaaS is the best solution for teams who want to get started immediately and don’t want to spend time on setup and operations. </p> <p> If you choose <strong>Gitpod Self-Hosted</strong>, you will manage and host Gitpod on your own instances. This means all data remains your infrastructure, as Gitpod can run behind corporate firewalls and on air-gapped networks. <strong>Gitpod Self-Hosted</strong> is the best solution for teams who want to keep full data control or use Gitpod in private networks. </p>",
    },
    {
      title: "How can I install Self-Hosted?",
      content:
        '<p> You can either install <strong>Gitpod Self-Hosted</strong> on Google GKE, Amazon EKS, Azure AKS, or K3s. See <a href="/docs/self-hosted/latest">Self-Hosted Docs</a> for more information. </p>',
    },
    {
      title: "How can I pay?",
      content:
        '<p> Currently, <strong>Gitpod Self-Hosted</strong> can only be purchased on request. Please <a href="/enterprise-license">request a license key</a> and we\'ll contact you. If you have any questions, please <a href="/contact/sales">Get in touch</a>. All our plans can be paid via invoice. </p>',
    },
    {
      title: "Do you offer discounts for educational institutions?",
      content:
        '<p> Yes, qualified educational institutions may receive a special discount. Please <a href="/contact/sales">Contact sales</a>. </p>',
    },
    {
      title: "Still have more questions?",
      content:
        '<p> We are happy to answer them, please <a href="/contact/support" >Get in Touch</a >. </p>',
    },
  ],
};
