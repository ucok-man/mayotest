import { useQuery } from "@tanstack/react-query";
import type { ITestimoniRepository } from "~/repositories/interfaces";
import { QueryKeys } from "~/types/query-keys.enum";

export function useGetTestimonials(repo: ITestimoniRepository) {
  const result = useQuery({
    queryKey: [QueryKeys.TestimoniGetAll],
    queryFn: async () => {
      const testimonies = await repo.getAll();
      return testimonies;
    },
  });

  return result;
}
