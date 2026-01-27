// Best Seller Section Component - Matching Laravel Blade version

import { useState, useRef, useEffect } from "react";
import type { Product } from "../../types/domain";
import { BadgeLabel } from "../common/BadgeLabel";

interface BestSellerSectionProps {
  products: Product[];
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

export const BestSellerSection = ({ products }: BestSellerSectionProps) => {
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
  }, [products]);

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
          {/* Mayo Money Image */}
          <div className="shrink-0">
            <img
              src="/assets/images/mayo-money.png"
              alt="Mayo Money"
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
              <BadgeLabel className="mb-3">
                PALING BANYAK DIBELI SOBATMAYO
              </BadgeLabel>
              <h2 className="text-4xl font-bold mb-2 text-cherry-bomb leading-normal">
                Produk Item Best Seller
              </h2>
              <p
                className="text-gray-600"
                style={{ fontFamily: "Chillax, sans-serif" }}
              >
                Produk favorit Sobat Mayo
              </p>
            </div>
            <ButtonGradient href="/items" className="w-auto">
              Selengkapnya
            </ButtonGradient>
          </div>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg z-10 transition-all ${
              canScrollLeft
                ? "opacity-100 cursor-pointer"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            <i
              className="fas fa-chevron-left text-2xl"
              style={{ color: "#FF7797" }}
            ></i>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg z-10 transition-all ${
              canScrollRight
                ? "opacity-100 cursor-pointer"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            <i
              className="fas fa-chevron-right text-2xl"
              style={{ color: "#FF7797" }}
            ></i>
          </button>

          {/* Products Grid/Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto pb-4 scroll-smooth px-12 justify-center"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {products.map((product) => (
              <a
                key={product.id}
                href={`/items/${product.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="shrink-0"
              >
                <div
                  className="rounded-3xl p-3 hover:opacity-80 transition-opacity"
                  style={{
                    backgroundColor: "#FFE1E8",
                    minWidth: "200px",
                    maxWidth: "200px",
                    border: "3px solid #FF7797",
                  }}
                >
                  {/* Product Image */}
                  <div
                    className="w-full aspect-square rounded-2xl mb-3 overflow-hidden"
                    style={{ backgroundColor: "white" }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/200x200/FFE1E8/FF7797?text=Item";
                      }}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="space-y-2">
                    <h3
                      className="text-sm font-bold line-clamp-2 min-h-10"
                      style={{
                        color: "#FF7797",
                        fontFamily: "Cherry Bomb One, cursive",
                      }}
                    >
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-center gap-1 flex-wrap">
                      <span
                        className="text-base font-bold"
                        style={{
                          color: "#FF7797",
                          fontFamily: "Chillax, sans-serif",
                        }}
                      >
                        {formatPrice(product.price)}
                      </span>
                    </div>

                    {/* Stats */}
                    <div
                      className="flex items-center justify-between pt-2 border-t"
                      style={{ borderColor: "#FF7797" }}
                    >
                      <span
                        className="text-xs text-gray-600"
                        style={{ fontFamily: "Chillax, sans-serif" }}
                      >
                        <i
                          className="fas fa-star"
                          style={{ color: "#FFD700" }}
                        ></i>{" "}
                        5.0
                      </span>
                      <span
                        className="text-xs font-semibold"
                        style={{
                          color: "#FF7797",
                          fontFamily: "Chillax, sans-serif",
                        }}
                      >
                        999x
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <div className="flex-1">
                        <button
                          className="w-full py-2 px-2 text-xs font-bold rounded-full text-white transition-all hover:scale-105"
                          style={{
                            background:
                              "linear-gradient(146.14deg, #FE86A2 8.01%, #FDB1C3 56.57%, #FF9BB3 74.39%, #FF7797 100.68%)",
                            fontFamily: "Cherry Bomb One, cursive",
                          }}
                        >
                          Beli
                        </button>
                      </div>
                      <button
                        className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                        style={{ backgroundColor: "white" }}
                      >
                        <i
                          className="fas fa-cart-plus text-sm"
                          style={{ color: "#FF7797" }}
                        ></i>
                      </button>
                    </div>
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
