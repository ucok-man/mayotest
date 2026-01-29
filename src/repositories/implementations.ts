// // Dummy Data Repository Implementation
// // Following SOLID: Dependency Inversion Principle - Depend on abstractions

// import type {
//     Product,
//     RobuxProduct,
//     RecentlySoldItem,
//     Testimonial,
//     FAQ,
//     Statistics,
//     RobuxStock,
// } from '../types/domain';
// import type {
//     IProductRepository,
//     IRobuxRepository,
//     IOrderRepository,
//     ITestimonialRepository,
//     IFAQRepository,
// } from './interfaces';

// // Dummy Product Data
// const dummyProducts: Product[] = [
//     {
//         id: '1',
//         name: 'Bloxburg Money 100K',
//         image: '/assets/images/bloxburg.png',
//         price: 50000,
//         category: 'Game Items',
//         description: 'Welcome to Bloxburg money',
//     },
//     {
//         id: '2',
//         name: 'Adopt Me Pets',
//         image: '/assets/images/adoptme.png',
//         price: 75000,
//         category: 'Game Items',
//         description: 'Rare pets collection',
//     },
//     {
//         id: '3',
//         name: 'MM2 Weapons',
//         image: '/assets/images/mm2.png',
//         price: 100000,
//         category: 'Game Items',
//         description: 'Legendary weapons',
//     },
// ];

// // Dummy Robux Products
// const dummyRobuxProducts: RobuxProduct[] = [
//     {
//         id: 'robux-gamepass-po',
//         type: 'gamepass-po',
//         name: 'Robux Gamepass PO',
//         description: 'Harga termurah dengan metode Pre-Order',
//         price: 13000,
//         pricePerRobux: 130,
//         minOrder: 100,
//         features: [
//             'Harga Robux super murah, paling hemat!',
//             'Pengiriman PO sekitar 8-10 hari ya~',
//             'Pas buat kamu yang santai & nggak buru-buru.',
//             'Stok selalu ada, bisa beli kapan aja!',
//             'Bisa lupa pakai kode promo biar makin irit!',
//         ],
//         image: '/assets/images/mayo-okay.png',
//         badge: 'Rekomendasi Termurah',
//         estimatedDelivery: '8-10 hari',
//         isAvailable: true,
//     },
//     {
//         id: 'robux-instant',
//         type: 'instant',
//         name: 'Robux Instant',
//         description: 'Pengiriman super cepat dalam hitungan menit',
//         price: 18000,
//         pricePerRobux: 180,
//         minOrder: 100,
//         features: [
//             'Pengiriman instan dalam 5-30 menit!',
//             'Cocok buat yang butuh cepat',
//             'Langsung masuk ke akun kamu',
//             'Proses otomatis 24/7',
//         ],
//         image: '/assets/images/mayo-fast.png',
//         badge: 'Tercepat',
//         estimatedDelivery: '5-30 menit',
//         isAvailable: false,
//     },
// ];

// // Dummy Recently Sold Items
// const dummyRecentlySold: RecentlySoldItem[] = [
//     {
//         id: '1',
//         username: 'player123',
//         avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-1234567890-150x150-Png-noFilter.png',
//         productName: '1000 Robux',
//         quantity: 1000,
//         timestamp: new Date(Date.now() - 1000 * 60 * 5),
//         type: 'robux',
//     },
//     {
//         id: '2',
//         username: 'gamer456',
//         productName: 'Bloxburg Money 100K',
//         quantity: 1,
//         timestamp: new Date(Date.now() - 1000 * 60 * 15),
//         type: 'item',
//     },
//     {
//         id: '3',
//         username: 'robuxlover',
//         avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-9876543210-150x150-Png-noFilter.png',
//         productName: '5000 Robux',
//         quantity: 5000,
//         timestamp: new Date(Date.now() - 1000 * 60 * 30),
//         type: 'robux',
//     },
//     {
//         id: '4',
//         username: 'noobmaster',
//         productName: 'MM2 Weapons',
//         quantity: 1,
//         timestamp: new Date(Date.now() - 1000 * 60 * 45),
//         type: 'item',
//     },
// ];

// // Dummy Testimonials
// const dummyTestimonials: Testimonial[] = [
//     {
//         id: '1',
//         username: 'SobatMayo123',
//         avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-1111111111-150x150-Png-noFilter.png',
//         rating: 5,
//         comment: 'Pelayanannya cepat banget! Robux langsung masuk dalam beberapa hari. Recommended!',
//         date: new Date('2026-01-05'),
//     },
//     {
//         id: '2',
//         username: 'RobloxKing',
//         avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-2222222222-150x150-Png-noFilter.png',
//         rating: 5,
//         comment: 'Harganya paling murah di antara yang lain. CS-nya juga ramah dan responsif!',
//         date: new Date('2026-01-04'),
//     },
//     {
//         id: '3',
//         username: 'MayoFans',
//         avatar: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-3333333333-150x150-Png-noFilter.png',
//         rating: 5,
//         comment: 'Sudah order berkali-kali, selalu aman dan terpercaya. Thank you Mayoblox!',
//         date: new Date('2026-01-03'),
//     },
// ];

// // Dummy FAQ Data
// const dummyFAQ: FAQ[] = [
//     {
//         id: '1',
//         question: 'Berapa lama proses pengiriman Robux Gamepass PO?',
//         answer:
//             'Robux Gamepass PO membutuhkan waktu sekitar 8-10 hari kerja untuk pengiriman. Ini adalah metode termurah yang kami tawarkan.',
//     },
//     {
//         id: '2',
//         question: 'Apakah aman membeli Robux di Mayoblox?',
//         answer:
//             'Sangat aman! Kami sudah melayani ribuan transaksi dan memiliki banyak testimoni positif. Semua proses dilakukan dengan aman dan terpercaya.',
//     },
//     {
//         id: '3',
//         question: 'Berapa minimal pembelian Robux?',
//         answer: 'Minimal pembelian Robux Gamepass PO adalah 100 Robux. Kamu bisa membeli dalam kelipatan 100.',
//     },
//     {
//         id: '4',
//         question: 'Apakah bisa refund jika ada masalah?',
//         answer:
//             'Kami menjamin 100% keamanan transaksi. Jika terjadi masalah, silakan hubungi CS kami dan akan kami bantu secepatnya.',
//     },
//     {
//         id: '5',
//         question: 'Bagaimana cara order Robux?',
//         answer:
//             'Pilih jenis Robux yang kamu inginkan, masukkan jumlah, isi data gamepass dan informasi akun, lalu lakukan pembayaran. Mudah!',
//     },
// ];

// // Repository Implementations

// export class ProductRepository implements IProductRepository {
//     async getAll(): Promise<Product[]> {
//         return Promise.resolve(dummyProducts);
//     }

//     async getById(id: string): Promise<Product | null> {
//         const product = dummyProducts.find((p) => p.id === id);
//         return Promise.resolve(product || null);
//     }

//     async getBestSellers(): Promise<Product[]> {
//         return Promise.resolve(dummyProducts.slice(0, 6));
//     }
// }

// export class RobuxRepository implements IRobuxRepository {
//     async getAllTypes(): Promise<RobuxProduct[]> {
//         return Promise.resolve(dummyRobuxProducts);
//     }

//     async getById(id: string): Promise<RobuxProduct | null> {
//         const product = dummyRobuxProducts.find((p) => p.id === id);
//         return Promise.resolve(product || null);
//     }

//     async getStock(): Promise<RobuxStock> {
//         return Promise.resolve({
//             available: 50000,
//             maxAvailable: 100000,
//         });
//     }
// }

// export class OrderRepository implements IOrderRepository {
//     async getRecentlySold(limit: number): Promise<RecentlySoldItem[]> {
//         return Promise.resolve(dummyRecentlySold.slice(0, limit));
//     }

//     async getStatistics(): Promise<Statistics> {
//         return Promise.resolve({
//             totalRobuxSold: 1234567,
//             totalRobuxOrders: 5678,
//             totalOrders: 12345,
//         });
//     }
// }

// export class TestimonialRepository implements ITestimonialRepository {
//     async getAll(): Promise<Testimonial[]> {
//         return Promise.resolve(dummyTestimonials);
//     }

//     async getLatest(limit: number): Promise<Testimonial[]> {
//         return Promise.resolve(dummyTestimonials.slice(0, limit));
//     }
// }

// export class FAQRepository implements IFAQRepository {
//     async getAll(): Promise<FAQ[]> {
//         return Promise.resolve(dummyFAQ);
//     }
// }
