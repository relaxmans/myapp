/*
 * @Author       : haocanweng@chatlabs.com
 * @Date         : 2022-10-31 14:13:11
 * @LastEditors  : haocanweng@chatlabs.com
 * @LastEditTime : 2022-12-08 14:17:03
 * @FilePath     : /my-app/hooks/useProduct.ts
 */
import useSWR from "swr";

export default function useProduct({
  shouldFetch,
  id,
}: {
  shouldFetch: boolean;
  id?: Key;
}) {
  const fetcher = () => {
    return fetch(
      `https://clx-be-staging.chatlabs.net/api/product/1555055329673077762`,
      {
        method: "get",
      }
    ).then((res) => res.json());
  };
  const { data, error, mutate } = useSWR(
    () => (shouldFetch ? `/api/product` : null),
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}
