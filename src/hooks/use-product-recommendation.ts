import { useQuery } from "@tanstack/react-query";
import type { IProductRepository } from "~/repositories/interfaces";
import { QueryKeys } from "~/types/query-keys.enum";

export function useProductRecommendation(repo: IProductRepository) {
  const result = useQuery({
    queryKey: [QueryKeys.ProductRecommendation],
    queryFn: async () => {
      const items = await repo.getRecommendation();
      return items;
    },
  });

  return result;
}
