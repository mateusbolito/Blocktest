import { UseInfiniteQueryResult, useInfiniteQuery } from "react-query";
import { apiFamilies } from "../../api";

export function useQueryGetFamilies(take: number): UseInfiniteQueryResult<{ data: any[] }> {
  return useInfiniteQuery<{ data: any[] }>(
    'families',
    async ({ pageParam = 0 }) => {
      const skip = pageParam * take;
      const response = await apiFamilies.get(`families?skip=${skip}&take=${take}`);
      return response.data;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const currentPage = allPages.length;
        //@ts-ignore
        const hasMoreData = lastPage.length >= take;
        return hasMoreData ? currentPage : undefined;
      },
    }
  );
}