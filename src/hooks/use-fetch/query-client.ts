import { QueryState } from './types'

export function QueryClient<T>(promiseFn: () => Promise<T>) {
  let state: QueryState<T> = {
    data: undefined,
    error: null,
    isLoading: false
  }

  const listerners = new Set<() => void>()

  async function refetch() {
    setState({ isLoading: true, error: null })
    try {
      const data = await promiseFn()
      setState({ data, isLoading: false })
    } catch (error) {
      setState({ error, isLoading: false })
    }
  }

  const subcribe = (listener: () => void) => {
    listerners.add(listener)
    return () => listerners.delete(listener)
  }

  function setState(newState: Partial<QueryState<T>>) {
    state = { ...state, ...newState }
    listerners.forEach(callbackFn => callbackFn())
  }

  function getState() {
    return state
  }

  refetch()

  return {
    getState,
    refetch,
    subcribe
  }
}
