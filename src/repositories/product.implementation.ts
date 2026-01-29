import type { Product } from "~/types/domain.new";
import type { IProductRepository } from "./interfaces";

export class ProductRepository implements IProductRepository {
  // NOTE: that for now product fetched must be type of item.
  async getRecommendation(): Promise<Product[]> {
    const items: Product[] = Array.from({ length: 10 }, (_, i) => ({
      id: `${i + 1}`,
      image: "/assets/placeholder/search-and-rescue.png",
      name: "Search & Rescue",
      robuxAmount: 850,
      priceIdr: 0,
      type: "item",
    }));

    return Promise.resolve(items);
  }
}
