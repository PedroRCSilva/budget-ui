import { categoryClient } from '@services'
import { paginationEmpty } from '@models/pagination'
import { useFetch } from '../use-fetch'

export const useCategory = (params?: { searchParams?: URLSearchParams }) => {
  const { data } = useFetch({
    queryFn: () => categoryClient.getCategory(params?.searchParams),
    queryKey: `category${params?.searchParams?.toString()}`
  })
  const categories = data?.data ? data?.data : paginationEmpty

  return { categories }
}
