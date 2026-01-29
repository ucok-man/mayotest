import { useQuery } from "@tanstack/react-query";
import type { IOrderRepository } from "~/repositories/interfaces";
import { QueryKeys } from "~/types/query-keys.enum";

export function useOrderStats(repo: IOrderRepository) {
  const result = useQuery({
    queryKey: [QueryKeys.OrderStats],
    queryFn: async () => {
      const stats = await repo.getStatistics();
      return stats;
    },
  });

  return result;
}
