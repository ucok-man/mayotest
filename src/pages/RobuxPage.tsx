// Robux Page - Displays available Robux types

import { RobuxTypeCard } from "../components/robux/RobuxTypeCard";
import { HelpSection } from "../components/robux/HelpSection";
import { FAQSection } from "../components/home/FAQSection";
import { HeaderTitle } from "../components/common/HeaderTitle";

// Dummy data for FAQ
const dummyFAQs = [
  {
    id: "1",
    question: "Berapa lama proses pengiriman Robux Gamepass PO?",
    answer:
      "Proses pengiriman Robux Gamepass PO biasanya memakan waktu 8-10 hari kerja. Kami akan mengirimkan notifikasi ke email kamu ketika Robux sudah siap untuk dikirim.",
  },
  {
    id: "2",
    question: "Apakah aman membeli Robux via Login?",
    answer:
      "Ya, sangat aman! Kami menggunakan sistem keamanan tingkat tinggi dan tidak menyimpan data login kamu. Semua transaksi dilakukan dengan protokol keamanan yang ketat.",
  },
  {
    id: "3",
    question: "Metode pembayaran apa saja yang tersedia?",
    answer:
      "Kami menyediakan berbagai metode pembayaran seperti Transfer Bank, E-Wallet (OVO, GoPay, Dana, ShopeePay), QRIS, dan Indomaret/Alfamart.",
  },
  {
    id: "4",
    question: "Apakah bisa refund jika sudah membeli?",
    answer:
      "Refund hanya dapat dilakukan jika terjadi kesalahan dari pihak kami dalam proses pengiriman. Untuk detail lebih lanjut, silakan hubungi customer service kami.",
  },
  {
    id: "5",
    question: "Apakah ada minimum pembelian?",
    answer:
      "Minimum pembelian Robux Gamepass PO adalah 100 Robux (Rp. 13.000), sedangkan untuk Robux Via Login minimum pembelian adalah Rp. 6.500.",
  },
];

export const RobuxPage = () => {
  const robuxTypes = [
    {
      badge: "Rekomendasi Termurah",
      title: "Robux Gamepass PO",
      image: "/assets/images/mayo-okay.png",
      imageAlt: "Mayo Okay",
      price: "Rp. 13.000",
      priceNote: "/ 100R$",
      benefits: [
        "Harga Robux super murah, paling hemat!",
        "Pengiriman PO sekitar 8-10 hari ya~",
        "Pas buat kamu yang santai & nggak buru-buru.",
        "Stok selalu ada, bisa beli kapan aja!",
        "Bisa lupa pakai kode promo biar makin irit!",
      ],
      buttonText: "Beli Sekarang",
      buttonLink: "/robux/preorder",
      isComingSoon: false,
    },
    {
      title: "Robux Via Login",
      image: "/assets/images/mayo-confused.png",
      imageAlt: "Mayo Confused",
      price: "Rp. 6.500",
      benefits: [
        "Top-up Robux jadi super cepat & gampang!",
        "Cukup pakai username + password aja~",
        "Nggak perlu ribet bikin Gamepass.",
        "Aman dipakei & bisa beli banyak!",
        "Robux dikirim cepat, maksimal 24 jam tanpa pending.",
      ],
      buttonText: "Beli Sekarang",
      buttonLink: "/robux-login",
      isComingSoon: false,
    },
    {
      title: "Robux Gift Gamecard",
      image: "/assets/images/mayo-tired.png",
      imageAlt: "Mayo Tired",
      price: "",
      benefits: [
        "Kode Robux Gift Gamecard yang bisa Anda redeem sendiri",
        "Fleksibel untuk digunakan kapan saja atau diberikan sebagai hadiah",
      ],
      buttonText: "Coming Soon",
      buttonLink: "/robux/giftcard",
      isComingSoon: true,
    },
  ];

  return (
    <>
      <div
        className="min-h-screen pt-24"
        style={{
          background: "linear-gradient(180deg, #FFB6C1 0%, #FFC0CB 100%)",
        }}
      >
        <div className="container mx-auto px-6 py-12">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <div className="mb-6 lg:mb-0">
              <div className="mb-4">
                <HeaderTitle>BELI ROBUX</HeaderTitle>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2 text-cherry-bomb-outline">
                Pilih Tipe Robux yang
                <br />
                Ingin Kamu Beli
              </h1>
            </div>
            <div className="text-white text-right max-w-md">
              <p className="text-sm lg:text-base leading-relaxed font-chillax">
                Sesuaikan dengan isi dompetmu, stak sebarmu, atau sekadar ikut
                hari-batas. Kamu pilih sendiri!
              </p>
            </div>
          </div>

          {/* Cards Section - Horizontal Layout for Desktop */}
          <div className="flex flex-col lg:flex-row gap-6 items-end">
            {robuxTypes.map((robuxType, index) => (
              <RobuxTypeCard key={index} {...robuxType} />
            ))}
          </div>
        </div>
      </div>

      {/* Help Section */}
      <HelpSection />

      {/* FAQ Section */}
      <FAQSection faqs={dummyFAQs} />
    </>
  );
};
