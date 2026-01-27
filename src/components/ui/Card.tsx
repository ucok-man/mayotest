// Card Component - Single Responsibility: Display card containers

import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card = ({ children, className = "", onClick }: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
        onClick ? "cursor-pointer hover:scale-105" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export const CardHeader = ({ children, className = "" }: CardHeaderProps) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export const CardBody = ({ children, className = "" }: CardBodyProps) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export const CardFooter = ({ children, className = "" }: CardFooterProps) => {
  return <div className={`p-6 bg-pink-50 ${className}`}>{children}</div>;
};
