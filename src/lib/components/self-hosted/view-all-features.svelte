<script>
  import { selfHostedComparison } from "$lib/contents/self-hosted";

  import SectionCommon from "../section-common.svelte";
  import FeatureTable from "../ui-library/feature-table/feature-table.svelte";
</script>

<SectionCommon
  title="View all features"
  text="Install Gitpod Self-Hosted on GKE, EKS, AKS, or K3s."
  textClassNames="mb-xx-small"
  id="features"
>
  <FeatureTable slot="content" tableData={selfHostedComparison} />
</SectionCommon>
