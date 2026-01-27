// InfoCard Component - Card dengan icon dan konten

import React from "react";

interface InfoCardProps {
  icon: string;
  iconAlt?: string;
  children: React.ReactNode;
  className?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  iconAlt = "Icon",
  children,
  className = "",
}) => {
  return (
    <div
      className={`bg-white p-3 pr-6 flex items-center gap-3 transition-shadow ${className}`}
      style={{
        position: "relative",
        borderRadius: "24px",
        border: "2px solid transparent",
        background:
          "linear-gradient(white, white) padding-box, linear-gradient(141.23deg, #FFE1E8 -1.96%, #FF7797 95.64%) border-box",
      }}
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
        style={{
          background:
            "linear-gradient(135.54deg, #FFBCD7 21.01%, #EC5A95 81.81%)",
          border: "3px solid white",
          padding: "6px",
        }}
      >
        <img
          src={icon}
          alt={iconAlt}
          className="w-full h-full object-contain"
          onError={(e) => {
            e.currentTarget.src = `https://via.placeholder.com/56x56/FFE1E8/FF7797?text=Icon`;
          }}
        />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};
