// Header Title Component - Single Responsibility: Display section headers

import { type ReactNode } from "react";

interface HeaderTitleProps {
  children: ReactNode;
  className?: string;
}

export const HeaderTitle = ({ children, className = "" }: HeaderTitleProps) => {
  return (
    <div
      className={`inline-block px-6 py-2 bg-white rounded-full shadow-md ${className}`}
    >
      <span className="text-primary font-bold text-lg">{children}</span>
    </div>
  );
};
