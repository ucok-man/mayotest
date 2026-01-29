import { useQuery } from "@tanstack/react-query";
import type { IOrderRepository } from "~/repositories/interfaces";
import { QueryKeys } from "~/types/query-keys.enum";

export function useProductNewestSold(repo: IOrderRepository) {
  const result = useQuery({
    queryKey: [QueryKeys.ProductNewestSold],
    queryFn: async () => {
      const items = await repo.getNewestSold();
      return items.map((item) => ({
        id: item.order.id,
        imgSrc: item.order.robuxAccount.avatar,
        imgAlt: item.order.robuxAccount.username,
        robuxAmount: item.item.product.robuxAmount * item.item.quantity,
        priceIdr: item.order.totalPrice,
      }));
    },
  });

  return result;
}
