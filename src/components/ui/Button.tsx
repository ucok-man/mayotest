// Button Component - Following Single Responsibility Principle
// Only responsible for rendering a button with gradient style

import { type ReactNode } from "react";

interface ButtonGradientProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

export const ButtonGradient = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonGradientProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3 px-6 rounded-full text-white font-semibold text-lg transition-all duration-300 
        bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 
        hover:from-pink-500 hover:via-pink-600 hover:to-pink-700 
        hover:shadow-lg hover:scale-105 
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${className}`}
    >
      {children}
    </button>
  );
};

interface ButtonGradientBlueProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const ButtonGradientBlue = ({
  children,
  onClick,
  type = "button",
  className = "",
}: ButtonGradientBlueProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-6 rounded-full text-white font-semibold transition-all duration-300 
        bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 
        hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 
        hover:shadow-lg hover:scale-105
        ${className}`}
    >
      {children}
    </button>
  );
};
