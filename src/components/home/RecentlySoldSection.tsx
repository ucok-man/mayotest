// Recently Sold Section Component - Matching Laravel Blade version

import { useState, useRef, useEffect } from "react";
import type { RecentlySoldItem } from "../../types/domain";
import { BadgeLabel } from "../common/BadgeLabel";

interface RecentlySoldSectionProps {
  items: RecentlySoldItem[];
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
    className={`block w-auto text-center px-8 py-3 rounded-full text-white font-bold transition-all hover:scale-105 whitespace-nowrap ${className}`}
    style={{
      background:
        "linear-gradient(146.14deg, #FE86A2 8.01%, #FDB1C3 56.57%, #FF9BB3 74.39%, #FF7797 100.68%)",
      fontFamily: "Cherry Bomb One, cursive",
    }}
  >
    {children}
  </a>
);

export const RecentlySoldSection = ({ items }: RecentlySoldSectionProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", checkScroll);
      return () => carousel.removeEventListener("scroll", checkScroll);
    }
  }, [items]);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-start gap-6 mb-8">
          {/* Mayo Metal Image */}
          <div className="shrink-0">
            <img
              src="/assets/images/mayo-metal.png"
              alt="Mayo Metal"
              className="w-32 object-contain"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/128x128/FFE1E8/FF7797?text=Mayo";
              }}
            />
          </div>

          {/* Title and Button */}
          <div className="flex-1 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <BadgeLabel className="mb-3">ITEM TERJUAL</BadgeLabel>
              <h2 className="text-4xl font-bold mb-2 text-cherry-bomb leading-normal">
                Item baru saja terjual
              </h2>
              <p
                className="text-gray-600"
                style={{ fontFamily: "Chillax, sans-serif" }}
              >
                Produk yang baru saja terjual
              </p>
            </div>
            <ButtonGradient href="/items" className="w-auto">
              Selengkapnya
            </ButtonGradient>
          </div>
        </div>

        {/* Items Carousel */}
        <div className="relative px-2">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              canScrollLeft
                ? "opacity-100 cursor-pointer"
                : "opacity-30 cursor-not-allowed"
            }`}
            style={{ backgroundColor: "#FF7797" }}
          >
            <i className="fas fa-chevron-left text-white"></i>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              canScrollRight
                ? "opacity-100 cursor-pointer"
                : "opacity-30 cursor-not-allowed"
            }`}
            style={{ backgroundColor: "#FF7797" }}
          >
            <i className="fas fa-chevron-right text-white"></i>
          </button>

          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto pb-4 scroll-smooth px-12"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {items.map((item) => (
              <a
                key={item.id}
                href={
                  item.type === "robux"
                    ? "/robux"
                    : `/items/${item.productName}`
                }
                className="shrink-0"
              >
                <div
                  className="rounded-full hover:opacity-80 transition-opacity flex items-center gap-3 pr-8 py-2 pl-2"
                  style={{
                    backgroundColor: "#FFE1E8",
                    border: "2px solid #FF7797",
                    minWidth: "280px",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 overflow-hidden"
                    style={{ backgroundColor: "white" }}
                  >
                    <img
                      src={
                        item.avatar ||
                        "https://via.placeholder.com/64x64/FFE1E8/FF7797?text=User"
                      }
                      alt={item.username}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/64x64/FFE1E8/FF7797?text=User";
                      }}
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <h3
                      className="text-base font-bold mb-1"
                      style={{
                        color: "#FF7797",
                        fontFamily: "Cherry Bomb One, cursive",
                      }}
                    >
                      {item.type === "robux"
                        ? `${item.quantity} R$`
                        : item.productName}
                    </h3>
                    <p
                      className="text-xs text-gray-600"
                      style={{ fontFamily: "Chillax, sans-serif" }}
                    >
                      Sold for{" "}
                      <span className="font-bold" style={{ color: "#FF7797" }}>
                        {formatPrice(item.price || 0)}
                      </span>
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
