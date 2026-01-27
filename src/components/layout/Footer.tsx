// Footer Component - Matching Laravel Blade version (components/footer.blade.php)

import { Link } from "react-router-dom";

export const Footer = () => {
  const socialMediaLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/mayoblox",
      icon: "fab fa-instagram",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/mayoblox",
      icon: "fab fa-facebook-f",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/mayoblox",
      icon: "fab fa-linkedin-in",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@mayoblox",
      icon: "fab fa-youtube",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/mayoblox",
      icon: "fab fa-twitter",
    },
  ];

  return (
    <footer className="pt-24 pb-12" style={{ backgroundColor: "#FF7797" }}>
      <div className="container mx-auto px-6">
        {/* Footer Content Grid - 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Column 1: Logo and Description */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img
                src="/assets/images/logo.png"
                alt="Mayoblox"
                className="h-12 mb-4"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/120x48/FFE1E8/FF7797?text=Mayoblox";
                }}
              />
            </div>
            <p className="text-white text-sm leading-relaxed mb-6 font-chillax">
              Mayoblox pilihan nomor satu untuk jadi teman robloxmu! Kebutuhan
              roblox apapun pasti ada di Mayoblox!
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              {socialMediaLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label={social.name}
                >
                  <i
                    className={`${social.icon} text-xl`}
                    style={{ color: "#F187AB" }}
                  ></i>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Produk */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-chillax">
              Produk
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/robux"
                  className="text-white text-sm hover:underline font-chillax"
                >
                  Robux
                </Link>
              </li>
              <li>
                <Link
                  to="/gamepass"
                  className="text-white text-sm hover:underline font-chillax"
                >
                  Gamepass PO
                </Link>
              </li>
              <li>
                <Link
                  to="/items"
                  className="text-white text-sm hover:underline font-chillax"
                >
                  Item Roblox
                </Link>
              </li>
              <li>
                <Link
                  to="/games"
                  className="text-white text-sm hover:underline font-chillax"
                >
                  Game Lainnya
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Item Roblox */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-chillax">
              Item Roblox
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/items/bloxfruits-gamepass"
                  className="text-white text-sm hover:underline font-chillax"
                >
                  Bloxfruits Gamepass
                </Link>
              </li>
              <li>
                <Link
                  to="/items/bloxfruits-fruits"
                  className="text-white text-sm hover:underline font-chillax"
                >
                  Bloxfruits Fruits (Permanen)
                </Link>
              </li>
              <li>
                <Link
                  to="/items/expedition-antartica"
                  className="text-white text-sm hover:underline font-chillax"
                >
                  Expedition Antartica
                </Link>
              </li>
              <li>
                <Link
                  to="/items"
                  className="text-white text-sm hover:underline font-chillax"
                >
                  Lainnya
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Informasi */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-chillax">
              Informasi
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/invoice"
                  className="text-white text-sm hover:underline font-chillax"
                >
                  Cek Pesanan Kamu
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-white text-sm hover:underline font-chillax"
                >
                  FAQ (Pertanyaan Umum)
                </Link>
              </li>
              <li>
                <Link
                  to="/syarat-ketentuan"
                  className="text-white text-sm hover:underline font-chillax"
                >
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link
                  to="/kebijakan-privasi"
                  className="text-white text-sm hover:underline font-chillax"
                >
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Kontak Kami */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-chillax">
              Kontak Kami
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://t.me/mayoblox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm hover:underline font-chillax"
                >
                  Telegram (@Mayoblox)
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/mayoblox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm hover:underline font-chillax"
                >
                  Instagram (@Mayoblox)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/30 pt-6">
          <div className="text-center">
            <h3 className="text-white text-lg font-bold mb-2 font-chillax">
              Hak Cipta © {new Date().getFullYear()} Mayoblox.
            </h3>
            <p className="text-white text-sm leading-relaxed font-chillax">
              Mayoblox.com merupakan platform independent yang ditujukan bagi
              komunitas pemain Roblox yang ingin melakukan jual beli item dengan
              cara yang aman, praktis, dan nyaman. Kami tidak memiliki afiliasi
              atau hubungan resmi dengan Roblox Corporation. Seluruh merek
              dagang dan hak cipta tetap menjadi milik masing-masing pemiliknya.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
