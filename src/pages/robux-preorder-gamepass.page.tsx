// Robux Preorder Gamepass Page - Step 3: Buat Gamepass

import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ButtonGradient } from "../components/common/ButtonGradient";
import { StepperProgress } from "../components/robux/StepperProgress";

export default function RobuxPreorderGamepassPage() {
  const [orderData, setOrderData] = useState({
    usernameRoblox: "TestUser",
    robuxAmount: 50,
    whatsapp: "08123456789",
    email: "",
  });

  const steps = [
    "Order<br>Gamepass",
    "Detail<br>Informasi",
    "Buat<br>Gamepass",
    "Metode<br>Pembayaran",
    "Konfirmasi<br>Order",
    "Pembayaran<br>Pesanan",
  ];

  // Configuration
  const pajakRoblox = 30; // 30% tax
  const nominalRobux = orderData.robuxAmount;
  const nominalRobuxWithTax = Math.round(
    nominalRobux + nominalRobux * (pajakRoblox / 100),
  );

  // Instruction images mapping - based on database structure
  // is_range: "0" = default, "50-500" = range, "1000" = minimum 1000
  const instructionImages = [
    {
      is_range: "0",
      image: "default_instruction.gif",
    },
    {
      is_range: "50-500",
      image: "INSTRUCTION-GAMEPASS-IMAGES-0cng-20241123053915.gif",
    },
    {
      is_range: "500-1000",
      image: "INSTRUCTION-GAMEPASS-IMAGES-2TjU-20241123053915.gif",
    },
    {
      is_range: "1000-5000",
      image: "INSTRUCTION-GAMEPASS-IMAGES-L6sm-20241109143412.gif",
    },
    {
      is_range: "5000",
      image: "INSTRUCTION-GAMEPASS-IMAGES-MPeu-20241125132613.gif",
    },
  ];

  const [tutorialGif, setTutorialGif] = useState("default_instruction.gif");

  useEffect(() => {
    // Load order data from sessionStorage if available
    const savedData = sessionStorage.getItem("preorder_data");
    if (savedData) {
      setOrderData(JSON.parse(savedData));
    }

    // Determine which GIF to show based on nominal
    let selectedGif = "default_instruction.gif";

    instructionImages.forEach((item) => {
      if (item.is_range === "0") {
        selectedGif = item.image;
      } else {
        if (item.is_range.includes("-")) {
          const [min, max] = item.is_range.split("-").map(Number);
          if (nominalRobux >= min && nominalRobux <= max) {
            selectedGif = item.image;
          }
        } else {
          if (nominalRobux >= parseInt(item.is_range)) {
            selectedGif = item.image;
          }
        }
      }
    });

    setTutorialGif(selectedGif);
  }, [nominalRobux]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save order data and navigate to payment
    const completeOrderData = {
      ...orderData,
      nominal_with_tax: nominalRobuxWithTax,
      instruction_gif: tutorialGif,
    };
    sessionStorage.setItem("order_data", JSON.stringify(completeOrderData));
    // TODO: Navigate to payment page
    alert("Navigating to payment page...");
  };

  return (
    <div className="min-h-screen pt-24" style={{ backgroundColor: "#FFE5EE" }}>
      {/* Stepper Section */}
      <div className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
            <Link to="/robux/preorder/form" className="shrink-0">
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
            <StepperProgress
              currentStep={3}
              steps={steps}
              completedSteps={[1, 2]}
            />
            <div className="shrink-0 w-25 md:w-35"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden px-6 py-8 md:px-10 md:py-10">
            {/* Title */}
            <h1
              className="text-3xl md:text-4xl font-bold text-center mb-6 text-cherry-bomb"
              style={{ color: "#FFA8C5" }}
            >
              Buat Gamepass Senilai{" "}
              <span id="display_robux_title">{nominalRobuxWithTax}</span> R$
            </h1>

            {/* Tutorial GIF */}
            <div className="mb-6 flex justify-center">
              <img
                src={`/assets/gif/${tutorialGif}`}
                alt="Tutorial Gamepass"
                className="w-full max-w-2xl rounded-3xl shadow-sm border border-gray-100"
                onError={(e) => {
                  e.currentTarget.src = "/assets/images/mayo-confused.png";
                }}
              />
            </div>

            {/* Create Gamepass Button (Link) */}
            <div className="flex justify-center mb-6">
              <a
                href="https://www.roblox.com/develop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-2xl text-center py-4 rounded-xl border-2 border-pink-200 bg-pink-50 text-pink-500 font-semibold text-sm hover:bg-pink-100 transition-colors font-chillax"
              >
                + Buat Gamepass Sekarang
              </a>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 max-w-2xl mx-auto"
            >
              {/* Submit Button */}
              <div className="flex justify-center pt-2">
                <ButtonGradient type="submit" className="w-full">
                  Lanjutkan Pembayaran
                </ButtonGradient>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
