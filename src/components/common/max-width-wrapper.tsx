import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function MaxWidthWrapper({ className, children }: Props) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1280px] px-4 xl:px-0", className)}
    >
      {children}
    </div>
  );
}
