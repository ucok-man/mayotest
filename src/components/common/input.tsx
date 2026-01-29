import * as React from "react";

import { cn } from "~/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // File input styling
        "file:text-[var(--color-text)] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-chillax file:font-semibold file:text-[14px] file:leading-[20px] file:tracking-[-0.01em]",

        // Disabled state
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",

        // Base input styling
        "h-13 w-full min-w-0 rounded-full border border-[var(--color-primary)] bg-[var(--color-white)] py-1.5 px-6 shadow-sm transition-[color,box-shadow,border-color] outline-none",

        // Text styling
        "font-jakarta font-normal text-[16px] leading-[24px] tracking-[0.01em] text-[var(--color-text)]",

        // Placeholder styling
        "placeholder:font-jakarta placeholder:font-normal placeholder:text-[14px] md:placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-[0.01em] placeholder:text-[var(--color-placeholder)]",

        // Selection styling
        "selection:bg-[var(--color-primary)] selection:text-[var(--color-white)]",

        // Focus state
        "focus:border-[var(--color-primary)] focus:shadow-md",

        // Invalid state
        "aria-[invalid=true]:border-[var(--color-badge-red)] aria-[invalid=true]:focus:border-[var(--color-badge-red)]",

        className,
      )}
      {...props}
    />
  );
}

export { Input };
