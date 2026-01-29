import { useQuery } from "@tanstack/react-query";
import type { IProductRepository } from "~/repositories/interfaces";
import type { ProductTypeItem } from "~/types/domain.new";
import { QueryKeys } from "~/types/query-keys.enum";

export function useProductBestSeller(repo: IProductRepository) {
  const result = useQuery({
    queryKey: [QueryKeys.ProductBestSeller],
    queryFn: async () => {
      const items = await repo.getBestSeller();
      return items as unknown as ProductTypeItem[]; // TODO: handle if product type not item
    },
  });

  return result;
}
