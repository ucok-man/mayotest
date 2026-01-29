"use client";
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = (props: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-4 text-[var(--color-badge-green)]" />
        ),
        info: <InfoIcon className="size-4 text-[var(--color-secondary)]" />,
        warning: (
          <TriangleAlertIcon className="size-4 text-[var(--color-badge-orange)]" />
        ),
        error: (
          <OctagonXIcon className="size-4 text-[var(--color-badge-red)]" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin text-[var(--color-primary)]" />
        ),
      }}
      toastOptions={{
        classNames: {
          toast:
            "border-2 border-[var(--color-border)] bg-[var(--color-white)] text-[var(--color-text)] shadow-lg rounded-3xl font-jakarta",
          title:
            "font-chillax font-semibold text-[16px] leading-[24px] tracking-[0.01em]",
          description:
            "font-jakarta text-[14px] leading-[20px] tracking-[0.01em] text-[var(--color-text-10)]",
          actionButton:
            "bg-[var(--color-primary)] text-[var(--color-white)] rounded-full px-4 py-2 font-chillax font-semibold text-[14px] hover:shadow-primary-hover transition-shadow",
          cancelButton:
            "bg-[var(--color-border)] text-[var(--color-text)] rounded-full px-4 py-2 font-chillax font-semibold text-[14px]",
        },
      }}
      style={
        {
          /* Base */
          "--normal-bg": "var(--color-white)",
          "--normal-text": "var(--color-text)",
          "--normal-border": "var(--color-border)",
          "--border-radius": "24px",
          /* Success */
          "--success-bg": "var(--color-badge-green-background)",
          "--success-text": "var(--color-text)",
          "--success-border": "var(--color-badge-green)",
          /* Error */
          "--error-bg": "var(--color-badge-red-background)",
          "--error-text": "var(--color-text)",
          "--error-border": "var(--color-badge-red)",
          /* Info */
          "--info-bg": "var(--color-primary-20)",
          "--info-text": "var(--color-text)",
          "--info-border": "var(--color-secondary)",
          /* Warning */
          "--warning-bg": "var(--color-badge-orange-background)",
          "--warning-text": "var(--color-text)",
          "--warning-border": "var(--color-badge-orange)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
