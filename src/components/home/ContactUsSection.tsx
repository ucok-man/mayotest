// Contact Us Section Component
import { useState } from "react";
import { BadgeLabel } from "../common/BadgeLabel";

const ButtonGradient = ({
  children,
  type = "button",
  className = "",
}: {
  children: React.ReactNode;
  type?: "button" | "submit";
  className?: string;
}) => (
  <button
    type={type}
    className={`w-full px-6 py-4 rounded-full text-white font-bold transition-all hover:scale-105 ${className}`}
    style={{
      background:
        "linear-gradient(146.14deg, #FE86A2 8.01%, #FDB1C3 56.57%, #FF9BB3 74.39%, #FF7797 100.68%)",
      fontFamily: "Cherry Bomb One, cursive",
    }}
  >
    {children}
  </button>
);

export const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    robloxUsername: "",
    invoiceNumber: "",
    whatsappNumber: "",
    problemType: "",
    problemDescription: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
    alert("Pesan kamu telah dikirim! Kami akan segera menghubungi kamu.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Section with Left Image and Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Mayo Contact Us Image */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <img
                src="/assets/images/mayo-contact-us.png"
                alt="Mayo Contact Us"
                className="w-full max-w-lg h-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/500x500/FFE1E8/FF7797?text=Mayo";
                }}
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            {/* Section Header */}
            <div className="mb-8">
              <BadgeLabel className="mb-4">KONTAK KAMI</BadgeLabel>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cherry-bomb">
                Butuh bantuan cepat atau pertanyaan? kirimkan pesan kamu dibawah
              </h2>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username Roblox */}
              <div>
                <input
                  type="text"
                  name="robloxUsername"
                  placeholder="Username roblox kamu"
                  value={formData.robloxUsername}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-full border-2 focus:outline-none focus:border-pink-400 transition-colors"
                  style={{
                    borderColor: "#FFB8D1",
                    fontFamily: "Chillax, sans-serif",
                  }}
                  required
                />
              </div>

              {/* Nomor Invoice */}
              <div>
                <input
                  type="text"
                  name="invoiceNumber"
                  placeholder="Nomor Invoice kamu"
                  value={formData.invoiceNumber}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-full border-2 focus:outline-none focus:border-pink-400 transition-colors"
                  style={{
                    borderColor: "#FFB8D1",
                    fontFamily: "Chillax, sans-serif",
                  }}
                  required
                />
              </div>

              {/* Nomor WhatsApp */}
              <div>
                <input
                  type="tel"
                  name="whatsappNumber"
                  placeholder="Nomor WhatsApp kamu (cth: 0812345678)"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-full border-2 focus:outline-none focus:border-pink-400 transition-colors"
                  style={{
                    borderColor: "#FFB8D1",
                    fontFamily: "Chillax, sans-serif",
                  }}
                  required
                />
              </div>

              {/* Pilih Jenis Masalah */}
              <div>
                <select
                  name="problemType"
                  value={formData.problemType}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-full border-2 focus:outline-none focus:border-pink-400 transition-colors text-gray-500"
                  style={{
                    borderColor: "#FFB8D1",
                    fontFamily: "Chillax, sans-serif",
                  }}
                  required
                >
                  <option value="">Pilih jenis masalah</option>
                  <option value="robux">Masalah Top Up Robux</option>
                  <option value="item">Masalah Pembelian Item</option>
                  <option value="gamepass">Masalah Gamepass</option>
                  <option value="payment">Masalah Pembayaran</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>

              {/* Jelaskan Masalah */}
              <div>
                <textarea
                  name="problemDescription"
                  rows={4}
                  placeholder="Jelaskan masalah kamu lebih detail"
                  value={formData.problemDescription}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-3xl border-2 focus:outline-none focus:border-pink-400 transition-colors resize-none"
                  style={{
                    borderColor: "#FFB8D1",
                    fontFamily: "Chillax, sans-serif",
                  }}
                  required
                />
              </div>

              {/* Submit Button */}
              <div>
                <ButtonGradient type="submit" className="text-lg font-bold">
                  Kirim Pesan Bantuan
                </ButtonGradient>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
