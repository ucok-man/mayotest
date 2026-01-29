import type {
  IProductRepository,
  ProductRecommendationItem,
} from "./interfaces";

export class ProductRepository implements IProductRepository {
  async getRecommendation(): Promise<ProductRecommendationItem[]> {
    const items = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      imgSrc: "/assets/placeholder/search-and-rescue.png",
      imgAlt: "Search And Rescue",
      label: "Search & Rescue",
      robux: "R$ 850",
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
