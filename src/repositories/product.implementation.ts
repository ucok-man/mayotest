import type { Product } from "~/types/domain";
import type { IProductRepository } from "./interfaces";

export class ProductRepository implements IProductRepository {
  async getRecommendation(): Promise<Product[]> {
    const items: Product[] = Array.from({ length: 10 }, (_, i) => ({
      id: `${i + 1}`,
      image: "/assets/placeholder/search-and-rescue.png",
      name: "Search & Rescue",
      price: 850,
      category: "",
      description: "",
    }));

    return Promise.resolve(items);
  }

  //   async getAll(): Promise<Product[]> {
  //     return Promise.resolve(dummyProducts);
  //   }

  //   async getById(id: string): Promise<Product | null> {
  //     const product = dummyProducts.find((p) => p.id === id);
  //     return Promise.resolve(product || null);
  //   }

  //   async getBestSellers(): Promise<Product[]> {
  //     return Promise.resolve(dummyProducts.slice(0, 6));
  //   }
}
