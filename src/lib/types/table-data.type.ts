import type { Details } from "./details.type";
import type { Image } from "./image.type";

export type TableData = {
  title: string;
  subtitle?: string;
  image?: Image;
  details: Details;
  link?: {
    href: string;
    text: string;
  };
};
