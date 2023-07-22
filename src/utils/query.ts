import { QueryClient } from '@tanstack/react-query';

// React Query Client 설정
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false, // 무분별한 fetch 방지용
    },
    mutations: {
      retry: 0,
    },
  },
});

export function invalidateQueries(key: any) {
  queryClient.invalidateQueries(key);
}
