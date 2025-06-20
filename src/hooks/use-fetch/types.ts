export interface QueryState<T, E = unknown> {
  data: T | undefined
  error: E | null
  isLoading: boolean
}
export interface IFetch<T> {
  promisseFn: () => Promise<T>
}
