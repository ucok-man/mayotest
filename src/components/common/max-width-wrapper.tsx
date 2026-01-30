import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function MaxWidthWrapper({ className, children }: Props) {
  return (
    <div className={cn("mx-auto w-full max-w-[1372px] px-4", className)}>
      {children}
    </div>
  );
}
