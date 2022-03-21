import type { Quote } from "$lib/types/quote.type";
import type { Brand } from "$lib/types/brand.type";

export const quotes: Quote[] = [
  {
    text: "“Gitpod’s move to open source their technology will improve the productivity of developers who run VS Code in the browser. Extension developers can further automate end-to-end tests in a DevOps platform like GitLab, improving the overall developer flow from ideation through CI/CD pipelines.”",
    author: "Sid Sijbrandij",
    jobTitle: "Co-founder and CEO at GitLab",
    companyLogo: {
      src: "/svg/blog/gitlab.svg",
      alt: "GitLab",
    },
  },
  {
    text: "“At Uber, we’ve invested in remote development solutions [..]. OpenVSCode Server will allow us to keep a current and easy-to-maintain developer experience, while providing the latest tooling to our developers. We’re thrilled to partner with Gitpod to integrate this new project.”",
    author: "Ty Smith",
    jobTitle: "Tech Lead for Uber’s Developer Platform",
    companyLogo: {
      src: "/svg/blog/uber.svg",
      alt: "Uber",
    },
  },
  {
    text: "“OpenVSCode Server's technical alignment with the core VS Code open-source project provides an ideal architecture, and we are excited to integrate it into future versions of RStudio Workbench.”",
    author: "JJ. Allaire",
    jobTitle: "Founder & CEO RStudio",
    companyLogo: {
      src: "/svg/blog/rstudio.svg",
      alt: "RStudio",
    },
  },
  {
    text: "“As usual, Gitpod is at the forefront of delivering solutions that move the entire industry forward.”",
    author: "Chris Aniszczyk",
    jobTitle: "CTO at CNCF",
    companyLogo: {
      src: "/svg/blog/cncf.svg",
      alt: "Cloud Native Computing Foundation",
    },
  },
  {
    text: "“Independently maintained projects like OpenVSCode Server play an important role as an alternative to vertically integrated dev ecosystems.”",
    author: "Beyang Liu",
    jobTitle: "Co-Founder & CTO Sourcegraph",
    companyLogo: {
      src: "/svg/blog/sourcegraph.svg",
      alt: "Sourcegraph",
    },
  },
];

export const brands: Brand[] = [
  {
    alt: "GitLab",
    logo: "svg/blog/gitlab.svg",
  },
  {
    alt: "VMware",
    logo: "svg/blog/vmware.svg",
  },
  {
    alt: "Uber",
    logo: "svg/blog/uber.svg",
  },
  {
    alt: "SAP",
    logo: "svg/blog/sap.svg",
  },
  {
    alt: "Sourcegraph",
    logo: "svg/blog/sourcegraph.svg",
  },
  {
    alt: "RStudio",
    logo: "svg/blog/rstudio.svg",
  },
  {
    alt: "openSUSE",
    logo: "svg/blog/opensuse.svg",
  },
  {
    alt: "Tabnine",
    logo: "svg/blog/tabnine.svg",
  },
  {
    alt: "Render",
    logo: "svg/blog/render.svg",
  },
  {
    alt: "TypeFox",
    logo: "svg/blog/typefox.svg",
  },
];
