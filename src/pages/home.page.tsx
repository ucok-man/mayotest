// Home Page - Following SOLID principles
// Single Responsibility: Orchestrates home page sections

import AboutSection from "~/components/modules/home/about-section";
import HeroSection from "~/components/modules/home/hero-section";
import ProductRecommendationSection from "~/components/modules/home/product-recommendation-section";

// // Dependency Injection - repositories are created once
// const productRepository = new ProductRepository();
// const orderRepository = new OrderRepository();
// const testimonialRepository = new TestimonialRepository();
// const faqRepository = new FAQRepository();

// // Dummy data for fallback
// const dummyStats = {
//   totalRobuxSold: 15750000,
//   totalRobuxOrders: 8520,
//   totalOrders: 12340,
// };

// const dummyFAQs = [
//   {
//     id: "1",
//     question: "Bagaimana cara top up Robux di Mayoblox?",
//     answer:
//       "Kamu bisa top up Robux dengan mudah! Pilih nominal Robux yang kamu inginkan, masukkan username Roblox kamu, pilih metode pembayaran, dan selesaikan pembayaran. Robux akan langsung masuk ke akun kamu!",
//   },
//   {
//     id: "2",
//     question: "Apakah Mayoblox aman dan terpercaya?",
//     answer:
//       "Tentu saja! Mayoblox sudah dipercaya oleh ribuan SobatMayo. Kami menggunakan sistem keamanan terbaik dan semua transaksi dijamin aman. Buktinya, kami sudah melayani lebih dari 12.000+ transaksi!",
//   },
//   {
//     id: "3",
//     question: "Berapa lama proses pengiriman Robux?",
//     answer:
//       "Proses pengiriman Robux sangat cepat! Biasanya Robux akan masuk ke akun kamu dalam waktu 5-15 menit setelah pembayaran dikonfirmasi. Untuk metode tertentu, bisa lebih cepat lagi!",
//   },
//   {
//     id: "4",
//     question: "Metode pembayaran apa saja yang tersedia?",
//     answer:
//       "Kami menyediakan berbagai metode pembayaran untuk kemudahan kamu: QRIS, Transfer Bank (BCA, Mandiri, BRI, BNI), E-Wallet (GoPay, OVO, DANA, ShopeePay), dan Minimarket (Indomaret, Alfamart).",
//   },
//   {
//     id: "5",
//     question: "Bagaimana jika Robux tidak masuk setelah pembayaran?",
//     answer:
//       "Jangan khawatir! Jika Robux belum masuk setelah 1 jam, kamu bisa langsung hubungi Customer Service kami melalui WhatsApp atau Instagram. Tim kami siap membantu kamu 24/7!",
//   },
// ];

// const dummyTestimonials = [
//   {
//     id: "1",
//     username: "Rizky Gaming",
//     avatar: "https://i.pravatar.cc/150?img=12",
//     rating: 5,
//     comment:
//       "Top up di Mayoblox super cepet! Baru bayar langsung masuk Robuxnya. Harga juga paling murah dibanding tempat lain. Recommended banget deh!",
//     date: new Date("2025-12-20"),
//   },
//   {
//     id: "2",
//     username: "Sarah Cantik",
//     avatar: "https://i.pravatar.cc/150?img=23",
//     rating: 5,
//     comment:
//       "Pelayanan CS nya ramah banget, fast respon pula. Bayar lewat QRIS gampang banget, ga ribet. Pokoknya Mayoblox the best deh!",
//     date: new Date("2025-12-25"),
//   },
//   {
//     id: "3",
//     username: "Andi Pro Player",
//     avatar: "https://i.pravatar.cc/150?img=33",
//     rating: 5,
//     comment:
//       "Udah langganan top up disini, ga pernah ngecewain! Aman, cepet, harga bersahabat. Buat kalian yang mau top up Robux, kesini aja!",
//     date: new Date("2026-01-02"),
//   },
// ];

// const dummyRecentlySoldItems = [
//   {
//     id: "1",
//     username: "ProGamer123",
//     avatar: "https://i.pravatar.cc/150?img=11",
//     productName: "800 Robux",
//     quantity: 800,
//     timestamp: new Date(),
//     type: "robux" as const,
//     price: 12000,
//   },
//   {
//     id: "2",
//     username: "MayoFans",
//     avatar: "https://i.pravatar.cc/150?img=25",
//     productName: "Korblox Deathspeaker",
//     quantity: 1,
//     timestamp: new Date(),
//     type: "item" as const,
//     price: 150000,
//   },
//   {
//     id: "3",
//     username: "RobloxKing",
//     avatar: "https://i.pravatar.cc/150?img=33",
//     productName: "1600 Robux",
//     quantity: 1600,
//     timestamp: new Date(),
//     type: "robux" as const,
//     price: 22000,
//   },
//   {
//     id: "4",
//     username: "SarahGamer",
//     avatar: "https://i.pravatar.cc/150?img=27",
//     productName: "Headless Horseman",
//     quantity: 1,
//     timestamp: new Date(),
//     type: "item" as const,
//     price: 200000,
//   },
//   {
//     id: "5",
//     username: "AndiPro",
//     avatar: "https://i.pravatar.cc/150?img=14",
//     productName: "4000 Robux",
//     quantity: 4000,
//     timestamp: new Date(),
//     type: "robux" as const,
//     price: 50000,
//   },
//   {
//     id: "6",
//     username: "MayoLover",
//     avatar: "https://i.pravatar.cc/150?img=19",
//     productName: "Valkyrie Helm",
//     quantity: 1,
//     timestamp: new Date(),
//     type: "item" as const,
//     price: 180000,
//   },
// ];

// const dummyProducts = [
//   {
//     id: "1",
//     name: "Korblox Deathspeaker",
//     description: "Limited item terbaik yang bikin karakter kamu makin keren!",
//     price: 150000,
//     image: "https://via.placeholder.com/200x200/FFE1E8/FF7797?text=Korblox",
//     category: "limited",
//     stock: 10,
//     rating: 5.0,
//     salesCount: 999,
//   },
//   {
//     id: "2",
//     name: "Headless Horseman",
//     description: "Item legendaris yang paling dicari SobatMayo!",
//     price: 200000,
//     image: "https://via.placeholder.com/200x200/FFE1E8/FF7797?text=Headless",
//     category: "limited",
//     stock: 5,
//     rating: 5.0,
//     salesCount: 999,
//   },
//   {
//     id: "3",
//     name: "Valkyrie Helm",
//     description: "Helm epic yang bikin kamu jadi sultan!",
//     price: 180000,
//     image: "https://via.placeholder.com/200x200/FFE1E8/FF7797?text=Valkyrie",
//     category: "limited",
//     stock: 8,
//     rating: 5.0,
//     salesCount: 999,
//   },
//   {
//     id: "4",
//     name: "Rainbow Wings",
//     description: "Sayap warna-warni yang super aesthetic!",
//     price: 120000,
//     image: "https://via.placeholder.com/200x200/FFE1E8/FF7797?text=Rainbow",
//     category: "accessory",
//     stock: 15,
//     rating: 5.0,
//     salesCount: 999,
//   },
//   {
//     id: "5",
//     name: "Sparkle Time Fedora",
//     description: "Topi keren yang bikin gaya kamu makin on point!",
//     price: 165000,
//     image: "https://via.placeholder.com/200x200/FFE1E8/FF7797?text=Fedora",
//     category: "hat",
//     stock: 7,
//     rating: 5.0,
//     salesCount: 999,
//   },
//   {
//     id: "6",
//     name: "Dominus Empyreus",
//     description: "Dominus item paling langka dan mahal!",
//     price: 250000,
//     image: "https://via.placeholder.com/200x200/FFE1E8/FF7797?text=Dominus",
//     category: "limited",
//     stock: 3,
//     rating: 5.0,
//     salesCount: 999,
//   },
// ];

export default function HomePage() {
  // const { products, loading: productsLoading } = useProducts(productRepository);
  // const { stats } = useStatistics(orderRepository);
  // const { items } = useRecentlySold(orderRepository, 4);
  // const { testimonials } = useTestimonials(testimonialRepository);
  // const { faqs } = useFAQs(faqRepository);

  // // Use dummy data if real data is not available
  // const displayStats = stats || dummyStats;
  // const displayFAQs = faqs.length > 0 ? faqs : dummyFAQs;
  // const displayTestimonials =
  //   testimonials.length > 0 ? testimonials : dummyTestimonials;
  // const displayRecentlySold = items.length > 0 ? items : dummyRecentlySoldItems;
  // const displayProducts = products.length > 0 ? products : dummyProducts;

  return (
    <div className="min-h-screen space-y-26">
      <HeroSection />
      <ProductRecommendationSection />
      <AboutSection />
      {/* <HeroSection />

      <ProductOfTheDaySection />

      <StatisticsSection stats={displayStats} />

      <RecentlySoldSection items={displayRecentlySold} />

      {!productsLoading && <BestSellerSection products={displayProducts} />}

      <TestimonialSection testimonials={displayTestimonials} />

      <FAQSection faqs={displayFAQs} />

      <ContactUsSection />

      <MayoCastleSection /> */}
    </div>
  );
}
