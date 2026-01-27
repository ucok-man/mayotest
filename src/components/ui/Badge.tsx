// Badge Component - Single Responsibility: Display badge labels

import { type ReactNode } from "react";

interface BadgeLabelProps {
  children: ReactNode;
  variant?: "primary" | "success" | "warning" | "info";
}

export const BadgeLabel = ({
  children,
  variant = "primary",
}: BadgeLabelProps) => {
  const variantClasses = {
    primary: "bg-gradient-to-r from-pink-400 to-pink-600",
    success: "bg-gradient-to-r from-green-400 to-green-600",
    warning: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    info: "bg-gradient-to-r from-blue-400 to-blue-600",
  };

  return (
    <span
      className={`inline-block px-4 py-1 rounded-full text-white text-sm font-semibold ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
};
