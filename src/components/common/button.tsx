import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold font-chillax transition-all duration-300 size-full disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none text-white",
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
      },
      size: {
        "desktop-large":
          "font-chillax-h6-desktop max-w-[402px] max-h-[84px] py-[30px] px-[32px]",
        "desktop-normal":
          "font-chillax-title-desktop max-[312px] max-h-[72px] py-[24px] px-[32px]",
        "desktop-small":
          "font-chillax-link-normal-desktop max-w-[191px] max-h-[52px] py-[14px] px-[32px]",
        "desktop-icon": "w-[52px] h-[52px] p-[12px]",
        "mobile-large":
          "font-chillax-h6-mobile max-w-[402px] max-h-[64px] py-[30px] px-[32px]",
        "mobile-normal":
          "font-chillax-title-mobile max-w-[271px] max-h-[52px] py-[24px] px-[32px]",
        "mobile-small":
          "font-chillax-link-normal-mobile max-w-[191px] max-h-[44px] py-[14px] px-[32px]",
        "mobile-icon": "w-[44px] h-[44px] p-[12px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "desktop-normal",
    },
  },
);

// Create separate CVA for overlay styles
const bgBaseVariants = cva(
  "absolute inset-0 rounded-full transition-opacity duration-300 opacity-100 hover:opacity-0",
  {
    variants: {
      variant: {
        primary: "bg-gradient-primary hover:opacity-0 opacity-100",
        secondary: "bg-gradient-secondary hover:opacity-0 opacity-100",
      },
    },
  },
);

const bgHoverVariants = cva(
  "absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300",
  {
    variants: {
      variant: {
        primary: "bg-primary shadow-primary-hover hover:opacity-100 opacity-0",
        secondary:
          "bg-secondary shadow-secondary-hover hover:opacity-100 opacity-0",
      },
    },
  },
);

function Button({
  className,
  variant = "primary",
  size = "desktop-normal",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {/* Base overlay */}
      <div className={bgBaseVariants({ variant })} />

      {/* Hover overlay */}
      <div className={bgHoverVariants({ variant })} />

      {/* Content needs to be above overlays */}
      <span className="relative z-10">{props.children}</span>
    </Comp>
  );
}

export { Button, buttonVariants };
