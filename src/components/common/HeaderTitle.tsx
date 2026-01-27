// HeaderTitle Component - Badge dengan border putih untuk header

import React from "react";

interface HeaderTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`inline-block rounded-full px-6 py-2 border border-white ${className}`}
      style={{
        background:
          "linear-gradient(146.14deg, #FE86A2 8.01%, #FDB1C3 56.57%, #FF9BB3 74.39%, #FF7797 100.68%)",
      }}
    >
      <span className="text-white font-semibold text-sm font-chillax">
        {children}
      </span>
    </div>
  );
};
