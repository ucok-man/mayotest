// Statistics Section Component - Matching Laravel Blade version

import type { Statistics } from "../../types/domain";
import { BadgeLabel } from "../common/BadgeLabel";

interface StatisticsSectionProps {
  stats: Statistics;
}

const ButtonGradient = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    className="block w-full text-center px-6 py-4 rounded-full text-white font-bold transition-all hover:scale-105"
    style={{
      background:
        "linear-gradient(146.14deg, #FE86A2 8.01%, #FDB1C3 56.57%, #FF9BB3 74.39%, #FF7797 100.68%)",
      fontFamily: "Cherry Bomb One, cursive",
    }}
  >
    {children}
  </a>
);

export const StatisticsSection = ({ stats }: StatisticsSectionProps) => {
  return (
    <div className="py-16" style={{ backgroundColor: "#FFE8F0" }}>
      <div className="container mx-auto px-6">
        {/* Section Header with Badge */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start mb-8">
          <div className="md:col-span-7">
            <BadgeLabel className="mb-4">TENTANG MAYOBLOX</BadgeLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-cherry-bomb-outline">
              Butuh bantuan cepat atau pertanyaan? kirimkan pesan kamu dibawah
            </h2>
          </div>
          <div className="md:col-span-1">{/* Empty space column */}</div>
          <div className="md:col-span-4">
            <p className="text-sm text-gray-600 leading-relaxed text-right font-chillax">
              Nikmati pengalaman top up yang simpel dan super cepat. Kelola
              kebutuhan Robux kamu hanya dengan beberapa klik—praktis, aman, dan
              cocok untuk gaya hidupmu yang serba ngebut.
            </p>
          </div>
        </div>

        {/* Stats Cards Layout: Row with Left Big Card and Right Column of 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Statistik Mayoblox (Big Card) */}
          <div
            className="rounded-3xl p-8 bg-cover bg-center relative overflow-hidden"
            style={{
              backgroundImage: "url('/assets/images/statistic-bg.png')",
              minHeight: "300px",
            }}
          >
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
              <h3 className="text-7xl font-bold mb-8 text-cherry-bomb-outline">
                STATISTIK MAYOBLOX
              </h3>
              <div className="w-full max-w-md px-4">
                <ButtonGradient href="/robux">
                  Top Up Robux Sekarang
                </ButtonGradient>
              </div>
            </div>
          </div>

          {/* Right: Column with 2 Cards Stacked */}
          <div className="flex flex-col gap-6">
            {/* Card 1: Robux Terjual */}
            <div
              className="rounded-3xl p-6 flex items-center justify-center gap-4 h-[180px]"
              style={{
                background:
                  "linear-gradient(146.14deg, #FE86A2 8.01%, #FDB1C3 56.57%, #FF9BB3 74.39%, #FF7797 100.68%)",
              }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background:
                    "linear-gradient(135.54deg, #FFBCD7 21.01%, #EC5A95 81.81%)",
                  border: "3px solid white",
                  padding: "12px",
                }}
              >
                <img
                  src="/assets/images/flower-badge.webp"
                  alt="Robux Icon"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/64x64/FFE1E8/FF7797?text=R$";
                  }}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: "Chillax, sans-serif" }}
                >
                  Robux Terjual di Mayoblox
                </h3>
                <p className="text-5xl font-semibold text-cherry-bomb-solid-outline">
                  {stats.totalRobuxSold.toLocaleString("id-ID")} R$
                </p>
              </div>
            </div>

            {/* Card 2: Total Order */}
            <div
              className="rounded-3xl p-6 flex flex-col justify-center h-[180px]"
              style={{ backgroundColor: "#FFF4D2" }}
            >
              <h3 className="text-6xl font-bold text-center mb-2 text-cherry-bomb-outline">
                {stats.totalRobuxOrders.toLocaleString("id-ID")}
              </h3>
              <p
                className="text-center font-bold text-2xl"
                style={{ color: "#FF7797", fontFamily: "Chillax, sans-serif" }}
              >
                Total Order SobatMayo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
