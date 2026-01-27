// Robux Preorder Form Page - Step 2: Detail Informasi
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ButtonGradient } from "../components/common/ButtonGradient";
import { ErrorModal, Modal } from "../components/common/Modal";
import { RobuxSlider } from "../components/common/RobuxSlider";
import { StepperProgress } from "../components/robux/StepperProgress";

export default function RobuxPreorderFormPage() {
  const navigate = useNavigate();
  const [showEstimasiModal, setShowEstimasiModal] = useState(false);
  const [agreeChecked, setAgreeChecked] = useState(false);
  const [errorModal, setErrorModal] = useState({
    isOpen: false,
    title: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    usernameRoblox: "",
    robuxAmount: 50,
    whatsapp: "",
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

  const pricePerRobux = 130; // Rp per Robux
  const totalPrice = formData.robuxAmount * pricePerRobux;

  const showError = (title: string, message: string) => {
    setErrorModal({ isOpen: true, title, message });
  };

  const handleLanjutkanClick = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.usernameRoblox.trim()) {
      showError("Eh?! Kosong?!", "Kamu belum masukin username Roblox nih");
      return;
    }

    if (!formData.whatsapp.trim()) {
      showError(
        "Jangan lupa Whatsappnya!",
        "Mohon masukkan Nomor Whatsapp biar gampang dihubungi.",
      );
      return;
    }

    // Show modal estimasi
    setShowEstimasiModal(true);
  };

  const handleModalConfirm = () => {
    if (!agreeChecked) {
      setShowEstimasiModal(false);
      showError(
        "Eits, setuju dulu dong!",
        "Mohon centang persetujuan syarat dan ketentuan ya.",
      );
      return;
    }

    // Save form data to sessionStorage
    sessionStorage.setItem("preorder_data", JSON.stringify(formData));

    // Navigate to gamepass page
    navigate("/robux/preorder/gamepass");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLanjutkanClick(e);
  };

  return (
    <div className="min-h-screen pt-24" style={{ backgroundColor: "#FFE5EE" }}>
      <div className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
            <Link to="/robux/preorder" className="shrink-0">
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
              currentStep={2}
              steps={steps}
              completedSteps={[1]}
            />
            <div className="shrink-0 w-25 md:w-35"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden px-6 py-8 md:px-10 md:py-10">
            <h1
              className="text-3xl md:text-4xl font-bold text-center mb-8 text-cherry-bomb"
              style={{ color: "#FF7797" }}
            >
              Detail Informasi
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Roblox */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-chillax">
                  Username Roblox
                </label>
                <input
                  type="text"
                  required
                  value={formData.usernameRoblox}
                  onChange={(e) =>
                    setFormData({ ...formData, usernameRoblox: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-pink-400 focus:ring-0 transition-colors font-chillax"
                  placeholder="Cari Username Roblox"
                />
              </div>

              {/* Jumlah Robux */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-chillax">
                  Jumlah Robux
                </label>

                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background:
                        "linear-gradient(135.54deg, #FFBCD7 21.01%, #EC5A95 81.81%)",
                    }}
                  >
                    <img
                      src="/assets/images/flower-badge.webp"
                      alt="Robux"
                      className="w-8 h-8"
                    />
                  </div>

                  <div className="flex-1">
                    <input
                      type="number"
                      value={formData.robuxAmount}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          robuxAmount: parseInt(e.target.value) || 50,
                        })
                      }
                      min="50"
                      max="5000"
                      step="10"
                      required
                      className="text-2xl font-bold bg-transparent border-none focus:ring-0 p-0 w-full font-chillax"
                      style={{ color: "#000000" }}
                    />
                  </div>

                  <div className="text-right">
                    <p
                      className="text-lg font-bold font-chillax"
                      style={{ color: "#000000" }}
                    >
                      Rp. {totalPrice.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>

                {/* Fancy Slider */}
                <RobuxSlider
                  min={50}
                  max={5000}
                  step={10}
                  initialValue={formData.robuxAmount}
                  onChange={(value) =>
                    setFormData({ ...formData, robuxAmount: value })
                  }
                />
              </div>

              {/* Nomor Whatsapp */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-chillax">
                  Nomor Whatsapp
                </label>
                <input
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={(e) =>
                    setFormData({ ...formData, whatsapp: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-pink-400 focus:ring-0 transition-colors font-chillax"
                  placeholder="Nomor Whatsapp"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-chillax">
                  Email Untuk Notifikasi Pesanan (Opsional)
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-pink-400 focus:ring-0 transition-colors font-chillax"
                  placeholder="Email Untuk Notifikasi Pesanan (Opsional)"
                />
              </div>

              {/* Catatan Box */}
              <div
                className="rounded-3xl p-6 flex gap-4"
                style={{ backgroundColor: "#FFE5EE" }}
              >
                <div className="shrink-0">
                  <img
                    src="/assets/images/mayo-okay.png"
                    alt="Mayo Character"
                    className="w-20 h-20 md:w-24 md:h-24"
                  />
                </div>
                <div className="flex-1">
                  <h3
                    className="font-bold text-lg mb-2 font-chillax"
                    style={{ color: "#000000" }}
                  >
                    Catatan:
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2 font-chillax">
                    Produk gift gamepass hanya dapat diproses{" "}
                    <strong>jam 10 pagi sampai jam 10 malam</strong>, diluar jam
                    tersebut akan diproses pada jam operasional.
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed font-chillax">
                    Proses pengiriman memakan waktu <strong>5-12 jam</strong>.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <ButtonGradient type="submit" className="w-auto! px-12">
                  Lanjutkan
                </ButtonGradient>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Estimasi Modal */}
      <Modal
        isOpen={showEstimasiModal}
        onClose={() => {
          setShowEstimasiModal(false);
          setAgreeChecked(false);
        }}
        title="Estimasi Pengiriman Robux"
        image="/assets/images/mayo-okay.png"
        imageAlt="Mayo Character"
        showCheckbox={true}
        checkboxLabel={
          <>
            Saya setuju dengan{" "}
            <a href="#" className="underline" style={{ color: "#FF7797" }}>
              syarat dan ketentuan
            </a>
          </>
        }
        checkboxChecked={agreeChecked}
        onCheckboxChange={setAgreeChecked}
        onConfirm={handleModalConfirm}
        confirmText="Lanjutkan"
        cancelText="Kembali"
      >
        <p className="mb-3">
          Produk gift gamepass hanya dapat diproses{" "}
          <strong className="text-black">
            jam 10 pagi sampai jam 10 malam
          </strong>
          , diluar jam tersebut akan diproses pada jam operasional.
        </p>
        <p>
          Proses pengiriman memakan waktu{" "}
          <strong className="text-black">5-12 jam</strong>.
        </p>
      </Modal>

      {/* Error Modal */}
      <ErrorModal
        isOpen={errorModal.isOpen}
        onClose={() => setErrorModal({ ...errorModal, isOpen: false })}
        title={errorModal.title}
        message={errorModal.message}
      />
    </div>
  );
}
