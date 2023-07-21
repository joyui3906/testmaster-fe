declare interface ApiErrorResponse {
  message: string;
  field?: string;
  type?: ApiErrorType;
}

declare interface SimpleBooleanResponse {
  result: boolean;
}

declare interface SimpleApiResponse<T> {
  content: T[];
}

declare interface BaseQueryOptions {
  refetchOnWindowFocus?: boolean;
  refetchOnMount?: boolean;
  refetchOnReconnect?: boolean;
  retry?: number;
  keepPreviousData?: boolean;
  enabled?: boolean;
}

declare interface QueryOptions<T = any, E = any> extends BaseQueryOptions {
  onSuccess?: (data: T) => void;
  onError?: (err: E) => void;
}

declare interface InfiniteQueryOptions<T = any, E = any> extends BaseQueryOptions {
  onSuccess?: (data: InfiniteData<T>) => void;
  onError?: (err: E) => void;
  getNextPageParam?: (lastPage: T, pages: T[]) => void;
}

declare interface PageParam {
  page: number;
  size: number;
}

declare interface Pageable {
  page: number;
  size: number;
  total: number;
  totalPages: number;
  last: boolean;
}

declare interface PageableContent<T> extends SimpleApiResponse<T> {
  pageable: Pageable;
}

declare const ApiErrors = {
  auth: 'AUTH',
  notFound: 'NOT_FOUND',
  illegalArgument: 'ILLEGAL_ARGUMENT',
  illegalState: 'ILLEGAL_STATE',
  validation: 'VALIDATION',
  invalid_state: 'INVALID_STATE',
  duplicated: 'DUPLICATED',
} as const;

declare type ApiErrorType = typeof ApiErrors[keyof typeof ApiErrors];
