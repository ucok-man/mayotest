import * as React from "react";
import { cn } from "~/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        // Base (matches Input & Select)
        "w-full min-h-24",
        "rounded-3xl",
        "border border-[var(--color-primary)]",
        "bg-[var(--color-white)]",

        // Typography
        "font-jakarta font-normal text-[16px] leading-[24px] tracking-[0.01em] text-[var(--color-text)]",

        // Placeholder
        "placeholder:font-jakarta placeholder:font-normal placeholder:text-[14px] md:placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-[0.01em] placeholder:text-[var(--color-placeholder)]",

        // Spacing
        "px-6 py-4",

        // Interaction
        "shadow-sm outline-none",
        "transition-[color,box-shadow,border-color]",
        "selection:bg-[var(--color-primary)] selection:text-[var(--color-white)]",

        // Focus state
        "focus:border-[var(--color-primary)] focus:shadow-md",

        // Invalid state
        "aria-[invalid=true]:border-[var(--color-badge-red)] aria-[invalid=true]:focus:border-[var(--color-badge-red)]",

        // Resize control
        "resize-none",

        // Disabled
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",

        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
