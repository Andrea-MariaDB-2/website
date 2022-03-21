export type Pricing = {
  title: string;
  price: string;
  duration?: string;
  features?: (string | { text: string; tooltip: string })[];
  btnText?: string;
  btnHref?: string;
  spiced?: boolean;
  learnMoreHref?: string;
  footnote?: string;
  trackingName?: string;
};
