import { useCallback, useState, useSyncExternalStore } from 'react'
import { QueryClient } from './query-client'

export const useFetch = <T,>(promisseFn: () => Promise<T>) => {
  const queryFn = useCallback(() => QueryClient(promisseFn), [promisseFn])
  const [query] = useState(queryFn)

  const data = useSyncExternalStore(query.subcribe, query.getState)
  return {
    ...data,
    refetch: query.refetch
  }
}
