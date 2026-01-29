import { useQuery } from "@tanstack/react-query";
import type { IFAQRepository } from "~/repositories/interfaces";
import { QueryKeys } from "~/types/query-keys.enum";

export function useGetFaqs(repo: IFAQRepository) {
  const result = useQuery({
    queryKey: [QueryKeys.FAQGetAll],
    queryFn: async () => {
      const faqs = await repo.getAll();
      return faqs;
    },
  });

  return result;
}
