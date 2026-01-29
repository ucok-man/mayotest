import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function Badge({ className, children }: Props) {
  return (
    <div
      className={cn(
        "border border-primary bg-primary-overlay/10 py-2 px-4 rounded-[36px] uppercase font-chillax-label-mobile text-center text-primary",
        className,
      )}
    >
      {children}
    </div>
  );
}
