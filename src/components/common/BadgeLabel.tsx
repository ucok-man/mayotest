// Badge Label Component - Matching Laravel Blade version

interface BadgeLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const BadgeLabel = ({ children, className = "" }: BadgeLabelProps) => (
  <span
    className={`inline-block text-xs font-semibold px-4 py-2 rounded-full uppercase ${className}`}
    style={{
      background: "rgba(245, 155, 183, 0.1)",
      border: "1px solid #FF7797",
      color: "#FF7797",
      fontFamily: "Chillax, sans-serif",
    }}
  >
    {children}
  </span>
);
