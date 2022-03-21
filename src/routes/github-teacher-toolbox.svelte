<script context="module">
  export const prerender = true;
</script>

<script>
  import Header from "$lib/components/github-page/header.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import PricingOffers from "$lib/components/github-page/pricing-offers.svelte";
  import Explore from "$lib/components/explore.svelte";
  import Headline from "$lib/components/github-page/headline.svelte";
  import { ghTeacherPricingPlans as pricingPlans } from "$lib/contents/github-page";
</script>

<OpenGraph
  data={{
    title: "GitHub Teacher Toolbox",
    description:
      "With Gitpod you can create coding exams and exercises easily, help out your students via live tutoring, and benefit from a simple onboarding with any device.",
  }}
/>

<Header title="GitHub Teacher Toolbox">
  <svelte:fragment slot="description">
    Let’s Focus on Teaching Code, not Tedious Setups! With Gitpod you can create
    coding exams and exercises easily, help out your students via live tutoring,
    and benefit from a simple onboarding with any device.
  </svelte:fragment>
</Header>
<PricingOffers title="GitHub Teacher Offer" {pricingPlans}>
  <svelte:fragment slot="description">
    <p class="mb-4">
      With the <a
        href="https://education.github.com/toolbox/?utm_source=github+gitpod"
        target="_blank">GitHub Teacher Toolbox</a
      >, you get the same free plan as your students with the
      <a
        href="https://education.github.com/pack/?utm_source=github+gitpod"
        target="blank">GitHub Student Developer Pack</a
      >.
    </p>
    <p>We’re happy to support educators teaching frictionless coding.</p>
  </svelte:fragment>
</PricingOffers>
<Headline
  text=" Stop wasting time with tedious setups, teach amazing programming skills instead!"
/>
<Explore />
