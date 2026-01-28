import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function FeatureCard({ children, className }: Props) {
  return (
    <div
      className={cn(
        "border-gradient-primary border-g-2 rounded-2xl bg-primary-20",
        className,
      )}
    >
      {children}
    </div>
  );
}
