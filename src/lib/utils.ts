import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Create a custom twMerge instance with all custom utility classes
const twMerge = extendTailwindMerge<"border-width">({
  extend: {
    classGroups: {
      // Cherry Bomb headings - desktop
      "font-family": [
        "font-cherry-h1-dekstop",
        "font-cherry-h2-desktop",
        "font-cherry-h3-desktop",
        "font-cherry-h1-mobile",
        "font-cherry-h2-mobile",
        "font-cherry-h3-mobile",
        // Chillax headings - desktop
        "font-chillax-h4-desktop",
        "font-chillax-h5-desktop",
        "font-chillax-h6-desktop",
        "font-chillax-title-desktop",
        "font-chillax-label-desktop",
        // Chillax headings - mobile
        "font-chillax-h4-mobile",
        "font-chillax-h5-mobile",
        "font-chillax-h6-mobile",
        "font-chillax-title-mobile",
        "font-chillax-label-mobile",
        // Chillax links - desktop
        "font-chillax-link-xlarge-dekstop",
        "font-chillax-link-large-dekstop",
        "font-chillax-link-normal-dekstop",
        "font-chillax-link-small-dekstop",
        // Chillax links - mobile
        "font-chillax-link-large-mobile",
        "font-chillax-link-normal-mobile",
        "font-chillax-link-small-mobile",
      ],
      // Border gradient utilities
      "border-style": ["border-gradient-primary"],
      "border-width": [
        "border-g-1",
        "border-g-2",
        "border-g-3",
        "border-g-4",
        "border-g-5",
      ],
      // Shadow utilities
      shadow: ["shadow-primary-hover", "shadow-secondary-hover"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(num: number): string {
  return num.toLocaleString("id-ID");
}
