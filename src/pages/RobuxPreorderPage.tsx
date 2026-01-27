// Robux Preorder Page
import { Link, useNavigate } from "react-router-dom";
import { StepperProgress } from "../components/robux/StepperProgress";
import { ButtonGradient } from "../components/common/ButtonGradient";
import { BadgeLabel } from "../components/common/BadgeLabel";
import { InfoCard } from "../components/common/InfoCard";

export const RobuxPreorderPage = () => {
  const navigate = useNavigate();

  const steps = [
    "Order<br>Gamepass",
    "Detail<br>Informasi",
    "Buat<br>Gamepass",
    "Metode<br>Pembayaran",
    "Konfirmasi<br>Order",
    "Pembayaran<br>Pesanan",
  ];

  const handleContinue = () => {
    navigate("/robux/preorder/form");
  };

  return (
    <div className="min-h-screen pt-24" style={{ backgroundColor: "#FFE5EE" }}>
      <div className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
            <Link to="/robux" className="shrink-0">
              <ButtonGradient
                variant="blue"
                className="w-auto! px-6 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="hidden md:inline">Kembali</span>
              </ButtonGradient>
            </Link>
            <StepperProgress currentStep={1} steps={steps} />
            <div className="shrink-0 w-25 md:w-35"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden px-4 py-6 md:px-6 md:py-8">
            <div className="text-center mb-6">
              <BadgeLabel>GAMEPASS PRE-ORDER</BadgeLabel>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-cherry-bomb">
              Beli Robux Gamepass PO
            </h1>
            <p className="text-center text-gray-600 text-base md:text-lg mb-8 leading-relaxed px-4 font-chillax">
              Lagi cari Robux murah? Pre-Order via Gamepass solusinya! Memang
              perlu sedikit sabar, tapi harganya ramah di kantong. Hemat, aman,
              puas!
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <div className="shrink-0">
                <img
                  src="/assets/images/mayo-okay.png"
                  alt="Mayo Character"
                  className="w-40 md:w-48 h-auto"
                />
              </div>
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <InfoCard
                  icon="/assets/images/flower-badge.webp"
                  iconAlt="Flower Badge"
                  className="pr-12"
                >
                  <h2 className="text-lg font-bold text-black font-chillax">
                    Rp. 13.000 / 100R$
                  </h2>
                  <p className="text-base text-gray-600 font-chillax">
                    Robux Price
                  </p>
                </InfoCard>
                <InfoCard
                  icon="/assets/images/unlimited-badge.png"
                  iconAlt="Unlimited Badge"
                  className="pr-12"
                >
                  <h2 className="text-lg font-bold text-black mb-1 font-chillax">
                    Stok Tersedia
                  </h2>
                  <p className="text-base text-gray-600 font-chillax">
                    Unlimited Stok
                  </p>
                </InfoCard>
              </div>
            </div>
            <div className="flex justify-center">
              <ButtonGradient onClick={handleContinue} className="w-auto! px-8">
                Lanjutkan
              </ButtonGradient>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
