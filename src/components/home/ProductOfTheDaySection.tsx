// Product of the Day Section Component
import { useState, useRef, useEffect } from "react";
import { BadgeLabel } from "../common/BadgeLabel";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
}

// Dummy data
const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Korblox Deathspeaker",
    price: 150000,
    image: "/assets/images/products/product1.png",
    slug: "korblox-deathspeaker",
  },
  {
    id: 2,
    name: "Headless Horseman",
    price: 200000,
    image: "/assets/images/products/product2.png",
    slug: "headless-horseman",
  },
  {
    id: 3,
    name: "Valkyrie Helm",
    price: 180000,
    image: "/assets/images/products/product3.png",
    slug: "valkyrie-helm",
  },
  {
    id: 4,
    name: "Dominus Empyreus",
    price: 250000,
    image: "/assets/images/products/product4.png",
    slug: "dominus-empyreus",
  },
  {
    id: 5,
    name: "Sparkle Time Fedora",
    price: 120000,
    image: "/assets/images/products/product5.png",
    slug: "sparkle-time-fedora",
  },
  {
    id: 6,
    name: "Clockwork Headphones",
    price: 95000,
    image: "/assets/images/products/product6.png",
    slug: "clockwork-headphones",
  },
];

export const ProductOfTheDaySection = () => {
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
  }, []);

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
        <div className="text-center mb-4">
          <BadgeLabel className="mb-4">REKOMENDASI PRODUK</BadgeLabel>
          <h2 className="text-5xl font-bold mb-12 leading-normal text-cherry-bomb">
            Product of the Day
          </h2>
        </div>

        {/* Product Cards Carousel */}
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
            className="flex gap-3 overflow-x-auto pb-4 scroll-smooth px-12"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {dummyProducts.map((product) => (
              <a
                key={product.id}
                href={`/items/${product.slug}`}
                className="shrink-0"
              >
                <div
                  className="rounded-full hover:opacity-80 transition-opacity flex items-center gap-3 pr-6 py-2 pl-2"
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #E5E7EB",
                    minWidth: "260px",
                  }}
                >
                  {/* Product Image Circle with Pink Border */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 overflow-hidden"
                    style={{ border: "2px solid #FF7797" }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/64x64/FFE1E8/FF7797?text=Item";
                      }}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 text-left">
                    <h3
                      className="text-sm font-bold text-gray-600 mb-1 line-clamp-1"
                      style={{
                        fontFamily: "Chillax, sans-serif",
                        color: "#6B7280",
                      }}
                    >
                      {product.name}
                    </h3>
                    <p
                      className="text-lg font-bold"
                      style={{
                        color: "#FF7797",
                        fontFamily: "Chillax, sans-serif",
                      }}
                    >
                      {formatPrice(product.price)}
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
