import { IPagination } from "@/types/common.interface";
import { InfiniteData } from "@tanstack/react-query";

// -------------------[ Get next page utility utility function ]-------------------

type GetNextPageParamArgs = {
  pagination: IPagination;
};

export function getNextPageParam(lastPage: GetNextPageParamArgs) {
  if (lastPage.pagination?.nextPage) {
    return lastPage.pagination?.nextPage;
  }
  return undefined;
}

// -------------------[ Transform infinite data utility function ]-------------------

type TransformInfiniteDataArgs<T, TKey extends string> = {
  pagination: IPagination;
} & {
  [K in TKey]: T[];
};

export function transformInfiniteData<TData, TKey extends string>(
  data: InfiniteData<TransformInfiniteDataArgs<TData, TKey>> | undefined,
  //   data: { pages: TransformInfiniteDataArgs<TData, TKey>[] },
  key: TKey
) {
  return data?.pages.flatMap((each) => each[key]) ?? [];
}
