import { useState, useSyncExternalStore } from 'react'
import { QueryClient } from './query-client'

export const useFetch = <T,>(promisseFn: () => Promise<T>) => {
  const [query] = useState(() => QueryClient(promisseFn))
  const data = useSyncExternalStore(query.subcribe, query.getState)
  return {
    ...data,
    refetch: query.refetch
  }
}
