// Testimonial Section Component - Matching Laravel Blade version

import type { Testimonial } from "../../types/domain";
import { BadgeLabel } from "../common/BadgeLabel";

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

const ButtonGradient = ({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => (
  <a
    href={href}
    className={`inline-flex items-center gap-3 px-8 py-3 rounded-full text-white font-bold transition-all hover:scale-105 ${className}`}
    style={{
      background:
        "linear-gradient(146.14deg, #FE86A2 8.01%, #FDB1C3 56.57%, #FF9BB3 74.39%, #FF7797 100.68%)",
      fontFamily: "Cherry Bomb One, cursive",
    }}
  >
    {children}
  </a>
);

export const TestimonialSection = ({
  testimonials,
}: TestimonialSectionProps) => {
  // Use first 3 testimonials
  const displayTestimonials = testimonials.slice(0, 3);

  return (
    <div
      className="pt-8 pb-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FFE8F0 0%, #FFF5F8 100%)",
      }}
    >
      {/* Decorative Images */}
      {/* Left Mayo Party - Show 3/4, hide 1/4 */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none z-0 overflow-hidden"
        style={{ left: "-96px" }}
      >
        <img
          src="/assets/images/mayo-party.png"
          alt="Mayo Party"
          className="w-full h-full object-contain"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* Right Mayo Sailor - Top position */}
      <div className="absolute right-0 top-0 w-[450px] h-[450px] pointer-events-none z-0">
        <img
          src="/assets/images/mayo-sailor.png"
          alt="Mayo Sailor"
          className="w-full h-auto object-contain"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <BadgeLabel className="mb-4">TESTIMONI SOBATMAYO</BadgeLabel>
          <h2 className="text-5xl font-bold mb-4 text-cherry-bomb leading-normal">
            Apa kata SobatMayo
          </h2>
          <p
            className="text-gray-600 mb-1"
            style={{ fontFamily: "Chillax, sans-serif" }}
          >
            Mayoblox pilihan nomor satu untuk jadi teman robloxmu!
          </p>
          <p
            className="text-gray-600"
            style={{ fontFamily: "Chillax, sans-serif" }}
          >
            Kebutuhan roblox apapun pasti ada di Mayoblox!
          </p>

          {/* Lihat Video Testimoni Button */}
          <div className="mt-6 inline-block">
            <ButtonGradient href="#video-testimoni">
              <i className="fas fa-play-circle text-xl"></i>
              Lihat Video Testimoni
            </ButtonGradient>
          </div>
        </div>

        {/* Testimonials Cards - Horizontal in ROW */}
        <div className="relative max-w-7xl mx-auto">
          <div className="flex gap-6 px-4 justify-center flex-wrap">
            {displayTestimonials.map((testimonial, index) => {
              // Determine which Mayo Testi image to use
              const mayoTestiImage =
                index === 1
                  ? "/assets/images/mayo-testi-2.png"
                  : "/assets/images/mayo-testi-1.png";
              const rotation = index === 2 ? "18deg" : "15deg";

              return (
                <div
                  key={testimonial.id}
                  className="relative flex-1 min-w-[350px] max-w-[450px]"
                >
                  {/* Avatar at top-right (stacked) - No border, just image */}
                  <div
                    className="absolute -top-4 -right-4 w-20 h-20 z-10"
                    style={{ transform: `rotate(${rotation})` }}
                  >
                    <img
                      src={mayoTestiImage}
                      alt={`Mayo Testi ${index + 1}`}
                      className="w-full h-full object-contain drop-shadow-lg"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/80x80/FFE1E8/FF7797?text=Mayo";
                      }}
                    />
                  </div>

                  <div
                    className="rounded-3xl p-6 flex items-center gap-4 h-full"
                    style={{
                      backgroundColor: "white",
                      border: "3px solid #FF7797",
                    }}
                  >
                    {/* Profile Image Circle */}
                    <div className="shrink-0">
                      <div
                        className="w-16 h-16 rounded-full overflow-hidden"
                        style={{ border: "3px solid #FF7797" }}
                      >
                        <img
                          src={testimonial.avatar}
                          alt="Profile"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = mayoTestiImage;
                          }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Header */}
                      <div className="mb-2">
                        <h3
                          className="text-lg font-bold mb-1"
                          style={{
                            color: "#FF7797",
                            fontFamily: "Cherry Bomb One, cursive",
                          }}
                        >
                          {testimonial.username}{" "}
                          <span
                            className="text-xs text-gray-600 font-normal"
                            style={{ fontFamily: "Chillax, sans-serif" }}
                          >
                            - Jakarta
                          </span>
                        </h3>
                      </div>

                      {/* Testimoni Text */}
                      <p
                        className="text-xs text-gray-700 leading-relaxed"
                        style={{ fontFamily: "Chillax, sans-serif" }}
                      >
                        {testimonial.comment}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
