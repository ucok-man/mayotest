// Hero Section Component - Exactly matching Laravel Blade version

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
    className={`block w-full text-center px-6 py-5 rounded-full text-white font-bold transition-all hover:scale-105 ${className}`}
    style={{
      background:
        "linear-gradient(146.14deg, #FE86A2 8.01%, #FDB1C3 56.57%, #FF9BB3 74.39%, #FF7797 100.68%)",
      fontFamily: "Cherry Bomb One, cursive",
    }}
  >
    {children}
  </a>
);

const ButtonGradientBlue = ({
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
    className={`block w-full text-center px-6 py-5 rounded-full text-white font-bold transition-all hover:scale-105 ${className}`}
    style={{
      background:
        "linear-gradient(146.14deg, #86A2FE 8.01%, #B1C3FD 56.57%, #9BB3FF 74.39%, #7797FF 100.68%)",
      fontFamily: "Cherry Bomb One, cursive",
    }}
  >
    {children}
  </a>
);

export const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/assets/images/background.png')",
        backgroundSize: "cover",
        height: "100vh",
        minHeight: "100vh",
      }}
    >
      <div className="container mx-auto px-6 h-full flex flex-col justify-end pb-8">
        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-end justify-between">
          {/* Left Side: Title + 3 Cards */}
          <div className="flex flex-col gap-6">
            {/* Hero Title - Di atas 3 kotak */}
            <div className="text-left">
              <h1 className="text-6xl md:text-7xl font-bold text-cherry-bomb-outline">
                Mayoblox
                <br />
                Sahabat Robloxmu
              </h1>
            </div>

            {/* 3 Cards in a Row */}
            <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-start">
              {/* Card 1: Instagram Links (Horizontal) */}
              <div
                className="rounded-3xl shadow-2xl flex flex-col justify-center gap-3 shrink-0 w-[160px] h-[180px] p-3"
                style={{
                  backgroundColor: "#FFE1E8",
                  border: "2px solid #FF7797",
                }}
              >
                {/* Instagram Link 1 */}
                <a
                  href="https://instagram.com/mayo.akun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: "#F187AB",
                      border: "2px solid #ffffff",
                    }}
                  >
                    <i className="fab fa-instagram text-xl text-white"></i>
                  </div>
                  <img
                    src="/assets/images/mayo-akun.png"
                    alt="Mayo Akun"
                    className="max-w-[80px] max-h-[80px] object-contain"
                  />
                </a>

                {/* Instagram Link 2 */}
                <a
                  href="https://instagram.com/bocil.mayo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: "#F187AB",
                      border: "2px solid #ffffff",
                    }}
                  >
                    <i className="fab fa-instagram text-xl text-white"></i>
                  </div>
                  <img
                    src="/assets/images/bocil-mayo.png"
                    alt="Bocil Mayo"
                    className="max-w-[80px] max-h-[80px] object-contain"
                  />
                </a>
              </div>

              {/* Card 2: Top Up Game Lainnya */}
              <a
                href="/games"
                className="rounded-3xl shadow-2xl flex flex-col items-center justify-center hover:shadow-3xl hover:scale-105 transition-all shrink-0 w-[160px] h-[180px]"
                style={{
                  backgroundColor: "#FFE1E8",
                  border: "2px solid #FF7797",
                }}
              >
                <div className="relative flex items-center justify-center mb-2">
                  <img
                    src="/assets/images/bocil-mayo-gray.png"
                    alt="Background"
                    className="absolute top-3 max-w-[110px] max-h-[110px] object-contain opacity-40"
                  />
                  <img
                    src="/assets/images/mayo-1-gray.png"
                    alt="Top Up Game Lainnya"
                    className="relative max-w-[110px] max-h-[110px] object-contain"
                  />
                </div>
                <p
                  className="text-base font-bold text-center leading-tight"
                  style={{
                    color: "#F187AB",
                    fontFamily: "Chillax, sans-serif",
                  }}
                >
                  Top Up Game
                  <br />
                  Lainnya
                </p>
              </a>

              {/* Card 3: Beli Item Gamepass */}
              <a
                href="/items"
                className="rounded-3xl shadow-2xl flex flex-col items-center justify-center hover:shadow-3xl hover:scale-105 transition-all shrink-0 w-[160px] h-[180px]"
                style={{
                  backgroundColor: "#FFE1E8",
                  border: "2px solid #FF7797",
                }}
              >
                <div className="relative flex items-center justify-center mb-2">
                  <img
                    src="/assets/images/bocil-mayo-gray.png"
                    alt="Background"
                    className="absolute top-3 max-w-[110px] max-h-[110px] object-contain opacity-40"
                  />
                  <img
                    src="/assets/images/mayo-1-gray.png"
                    alt="Beli Item Gamepass"
                    className="relative max-w-[110px] max-h-[110px] object-contain"
                  />
                </div>
                <p
                  className="text-base font-bold text-center leading-tight"
                  style={{
                    color: "#F187AB",
                    fontFamily: "Chillax, sans-serif",
                  }}
                >
                  Beli Item
                  <br />
                  Gamepass
                </p>
              </a>
            </div>
          </div>

          {/* Right Side Bottom: 2 Buttons (Small, positioned at bottom right) */}
          <div className="flex flex-col gap-4 mb-0">
            {/* Top Up Robux Button */}
            <ButtonGradient
              href="/robux"
              className="text-xl font-bold py-5 px-18"
            >
              Top Up Robux Sekarang
            </ButtonGradient>

            {/* Cek Pesanan Button */}
            <ButtonGradientBlue
              href="/invoice"
              className="text-xl font-bold py-5 px-18"
            >
              Cek Pesanan Di Sini
            </ButtonGradientBlue>
          </div>
        </div>

        {/* Bottom Text Section - Tepat di bawah konten utama */}
        <div className="text-left mt-8">
          <h2 className="text-4xl font-bold mb-2 text-cherry-bomb-solid">
            Pilih layanan yang kamu butuhkan
          </h2>
          <p
            className="text-xl text-gray-700"
            style={{ fontFamily: "Chillax, sans-serif" }}
          >
            Berbagai layanan terbaik untuk kebutuhan Robloxmu
          </p>
        </div>
      </div>
    </div>
  );
};
