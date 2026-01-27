// RobuxTypeCard Component - Card untuk setiap tipe Robux

import { Link } from "react-router";
import { BadgeLabel } from "../common/BadgeLabel";
import { ButtonGradient } from "../common/ButtonGradient";

interface RobuxTypeCardProps {
  badge?: string;
  title: string;
  image: string;
  imageAlt: string;
  price: string;
  priceNote?: string;
  benefits: string[];
  buttonText: string;
  buttonLink: string;
  isComingSoon?: boolean;
}

export const RobuxTypeCard: React.FC<RobuxTypeCardProps> = ({
  badge,
  title,
  image,
  imageAlt,
  price,
  priceNote,
  benefits,
  buttonText,
  buttonLink,
  isComingSoon = false,
}) => {
  const cardContent = (
    <div
      className={`bg-white rounded-3xl shadow-xl overflow-hidden flex-1`}
      style={{ opacity: isComingSoon ? 0.6 : 1 }}
    >
      <div className="p-6">
        {badge && (
          <div className="mb-4">
            <BadgeLabel>{badge}</BadgeLabel>
          </div>
        )}
        <h2
          className="text-2xl font-bold font-chillax"
          style={{ color: "#FF7797" }}
        >
          {title}
        </h2>
      </div>

      {/* Anime Character Image */}
      <div
        className="relative h-40 flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #fecdd3 0%, #fbcfe8 100%)",
        }}
      >
        <img
          src={image}
          alt={imageAlt}
          className={`w-full h-full object-cover ${
            isComingSoon ? "opacity-75" : ""
          }`}
          onError={(e) => {
            e.currentTarget.src = `https://via.placeholder.com/400x160/FFE1E8/FF7797?text=${encodeURIComponent(
              imageAlt,
            )}`;
          }}
        />
      </div>

      <div className="p-6 bg-pink-50">
        {isComingSoon ? (
          <div className="mb-4 text-center py-8">
            <p
              className="text-4xl font-bold text-cherry-bomb-outline"
              style={{ color: "#FF7797" }}
            >
              Coming Soon!
            </p>
          </div>
        ) : (
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-1 font-chillax">
              Mulai dari harga
            </p>
            <p
              className="text-3xl font-bold font-chillax"
              style={{ color: "#FF7797" }}
            >
              {price}{" "}
              {priceNote && (
                <span className="text-base text-gray-500">{priceNote}</span>
              )}
            </p>
          </div>
        )}

        <div className="mb-6">
          <p className="font-semibold text-gray-800 mb-3 font-chillax">
            Yang didapatkan:
          </p>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start text-sm text-gray-700"
              >
                <svg
                  className="w-5 h-5 mr-2 shrink-0 mt-0.5"
                  style={{ color: "#FF7797" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="font-chillax">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <ButtonGradient disabled={isComingSoon}>{buttonText}</ButtonGradient>
      </div>
    </div>
  );

  if (isComingSoon) {
    return cardContent;
  }

  return <Link to={buttonLink}>{cardContent}</Link>;
};
