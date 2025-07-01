export interface QueryState<T, E = unknown> {
  data: T | undefined
  error: E | null
  isLoading: boolean
}
export interface IUseFetch<T> {
  queryFn: () => Promise<T>
  queryKey: string
}
