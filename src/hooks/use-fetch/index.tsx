import { useEffect, useState, useSyncExternalStore } from 'react'
import { QueryClient } from './query-client'

export interface IUseFetch<T> {
  queryFn: () => Promise<T>
  queryKey: string
}

export const useFetch = <T,>({ queryFn, queryKey }: IUseFetch<T>) => {
  const [prevQueryKey, setPrevQueryKey] = useState<string>(queryKey)

  const [query, setQuery] = useState(() => QueryClient(queryFn))

  const data = useSyncExternalStore(query.subcribe, query.getState)

  useEffect(() => {
    if (queryKey !== prevQueryKey) {
      setQuery(() => QueryClient(queryFn))
      setPrevQueryKey(queryKey)
    }
  }, [prevQueryKey, queryFn, query, queryKey])

  return {
    ...data,
    refetch: query.refetch
  }
}
