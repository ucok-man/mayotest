import { useQuery } from "@tanstack/react-query";
import type { IProductRepository } from "~/repositories/interfaces";
import type { Product } from "~/types/domain.new";
import { QueryKeys } from "~/types/query-keys.enum";

export function useProductRecommendation(repo: IProductRepository) {
  const result = useQuery({
    queryKey: [QueryKeys.ProductRecommendation],
    queryFn: async () => {
      const items: Product[] = await repo.getRecommendation();
      const filtered = items.map((item) => {
        switch (item.type) {
          case "item":
            return {
              id: item.id,
              imgSrc: item.image,
              imgAlt: item.name,
              robuxAmount: item.robuxAmount,
              name: item.name,
            };

          case "robux-gamepass":
            return {
              id: item.id,
              imgSrc: "/mayoblox/flower-badge.webp",
              imgAlt: "Robux Flower",
              robuxAmount: item.robuxAmount,
              name: "Robux Gamepass",
            };

          case "robux-login":
            return {
              id: item.id,
              imgSrc: "/mayoblox/flower-badge.webp",
              imgAlt: "Robux Flower",
              robuxAmount: item.robuxAmount,
              name: "Robux Via Login",
            };

          default:
            throw new Error(
              `useProductRecommendation: Unrecognized product type`,
            );
        }
      });

      return filtered;
    },
  });

  return result;
}
