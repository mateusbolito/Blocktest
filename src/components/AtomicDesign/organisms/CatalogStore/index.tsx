import { Box, Typography } from "@mui/material";
import * as S from './styles';
import CardProduct from "../../atoms/CardProduct";
import { useInfiniteQuery } from 'react-query';
import React from "react";
import { apiFamilies } from "../../../../services/api";

export default function CatalogStore() {
  const fetchFamilies = async ({ pageParam = 0 }) => {
    const take = 10;
    const skip = pageParam * take;
    const response = await apiFamilies.get(`families?skip=${skip}&take=${take}`);
    return response.data;
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery('families', fetchFamilies, {
    getNextPageParam: (lastPage, pages) => {
      const currentPage = pages.length - 1;
      return lastPage.length === 10 ? currentPage + 1 : undefined;
    },
  });

  const families = data?.pages.flatMap((page) => page) || [];

  const loadMoreRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <Box>
      <S.ContainerCatalog>
        <S.CatalogTitle>
          <Typography className="titleCatalog">Catálogo</Typography>
          <Box />
        </S.CatalogTitle> 
        <S.CatalogList>
          <Typography className="titleList">Resultados</Typography>
          <S.ContainerProducts>
            {families.map((item: any, index: number) => (
              <CardProduct key={index} item={item} />
            ))}
            <div ref={loadMoreRef} />
          </S.ContainerProducts>
          {isFetchingNextPage && <p>Loading more...</p>}
        </S.CatalogList>
      </S.ContainerCatalog>
    </Box>
  );
}
