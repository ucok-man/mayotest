// // Repository Interfaces - Following SOLID: Interface Segregation Principle
// // Clients should not be forced to depend on interfaces they don't use

import type {
  Faq,
  OrderStatistic,
  Product,
  RecentlySold,
  Testimoni,
} from "~/types/domain.new";

// import type {
//     Product,
//     RobuxProduct,
//     RecentlySoldItem,
//     Testimonial,
//     FAQ,
//     Statistics,
//     RobuxStock,
// } from '../types/domain';

// export interface IProductRepository {
//     getAll(): Promise<Product[]>;
//     getById(id: string): Promise<Product | null>;
//     getBestSellers(): Promise<Product[]>;
// }

// export interface IRobuxRepository {
//     getAllTypes(): Promise<RobuxProduct[]>;
//     getById(id: string): Promise<RobuxProduct | null>;
//     getStock(): Promise<RobuxStock>;
// }

// export interface IOrderRepository {
//     getRecentlySold(limit: number): Promise<RecentlySoldItem[]>;
//     getStatistics(): Promise<Statistics>;
// }

// export interface ITestimonialRepository {
//     getAll(): Promise<Testimonial[]>;
//     getLatest(limit: number): Promise<Testimonial[]>;
// }

// export interface IFAQRepository {
//     getAll(): Promise<FAQ[]>;
// }

export interface IProductRepository {
  getRecommendation(): Promise<Product[]>;
  getBestSeller(): Promise<Product[]>;
}

export interface IOrderRepository {
  getStatistics(): Promise<OrderStatistic>;
  getNewestSold(): Promise<RecentlySold[]>;
}

export interface ITestimoniRepository {
  getAll(): Promise<Testimoni[]>;
}

export interface IFAQRepository {
  getAll(): Promise<Faq[]>;
}
