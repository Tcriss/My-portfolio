import type { ImageMetadata } from "astro";

export interface Experience {
  companyLogoUrl: ImageMetadata;
  title: string;
  company: string;
  description: string;
  link?: string;
  date: string;
  skills: string[];
}
