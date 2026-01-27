// HelpSection Component - Help section with Mayo character

import { BadgeLabel } from "../common/BadgeLabel";
import { ButtonGradient } from "../common/ButtonGradient";

export const HelpSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/3">
            <div
              className="rounded-3xl p-8"
              style={{
                background:
                  "linear-gradient(146.14deg, #FE86A2 8.01%, #FDB1C3 56.57%, #FF9BB3 74.39%, #FF7797 100.68%)",
                boxShadow:
                  "12px 12px 24px 0px rgba(255, 255, 255, 0.44) inset, -12px -12px 24px 0px rgba(255, 119, 151, 0.22) inset, 12px 12px 24px 0px rgba(255, 119, 151, 0.22), -12px -12px 24px 0px rgba(255, 255, 255, 0.22)",
              }}
            >
              <img
                src="/assets/images/mayo-white-dress.png"
                alt="Mayo White Dress"
                className="w-full h-auto"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/400x400/FFE1E8/FF7797?text=Mayo";
                }}
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-2/3">
            <div className="mb-4">
              <BadgeLabel>DAPATKAN BANTUAN KAMI</BadgeLabel>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-cherry-bomb-outline">
              Mengalami kesulitan saat
              <br />
              membeli Robux?
            </h2>
            <p className="text-gray-700 text-base lg:text-lg mb-8 leading-relaxed font-chillax">
              Bergabunglah dengan komunitas kami di Discord atau kirim pesan
              langsung di Telegram untuk bantuan. Temukan Panduan Lainnya
              Melalui Tombol ini.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
              {/* Discord */}
              <a
                href="https://discord.gg/mayoblox"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform border-2 border-pink-200"
              >
                <svg
                  className="w-7 h-7"
                  style={{ color: "#FF7797" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/mayoblox"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform border-2 border-pink-200"
              >
                <svg
                  className="w-7 h-7"
                  style={{ color: "#FF7797" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21l-1.446 1.394c-.14.18-.357.223-.548.223c-.302 0-.486-.126-.486-.486l.002-.048l.972-5.832l7.73-4.646c.314-.192.23-.296-.115-.158l-9.514 5.988l-3.103-.972c-.67-.207-.683-.67.14-.994l12.134-4.678c.56-.204 1.05.132.868 1.13z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/mayoblox"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform border-2 border-pink-200"
              >
                <svg
                  className="w-7 h-7"
                  style={{ color: "#FF7797" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07c3.252.148 4.771 1.691 4.919 4.919c.058 1.265.069 1.645.069 4.849c0 3.205-.012 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919c-1.266.058-1.644.07-4.85.07c-3.204 0-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92c-.058-1.265-.07-1.644-.07-4.849c0-3.204.013-3.583.07-4.849c.149-3.227 1.664-4.771 4.919-4.919c1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072C2.695.272.273 2.69.073 7.052C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98c.059-1.28.073-1.689.073-4.948c0-3.259-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324a6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881a1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>

            {/* CTA Button */}
            <ButtonGradient variant="blue" className="w-auto! px-8">
              Lihat Panduan
            </ButtonGradient>
          </div>
        </div>
      </div>
    </div>
  );
};
