// ButtonGradient Component - Reusable gradient button

import React from "react";

interface ButtonGradientProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: "pink" | "blue";
  type?: "button" | "submit" | "reset";
}

export const ButtonGradient: React.FC<ButtonGradientProps> = ({
  children,
  onClick,
  disabled = false,
  className = "",
  variant = "pink",
  type = "button",
}) => {
  const gradientStyles =
    variant === "pink"
      ? "linear-gradient(146.14deg, #FE86A2 8.01%, #FDB1C3 56.57%, #FF9BB3 74.39%, #FF7797 100.68%)"
      : "linear-gradient(146.14deg, #97BDF5 8.01%, #B9D5FF 56.57%, #B9D5FF 74.39%, #97BDF5 100.68%)";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-4 px-6 text-white font-semibold rounded-full transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 font-chillax ${className}`}
      style={{
        background: gradientStyles,
      }}
    >
      {children}
    </button>
  );
};
