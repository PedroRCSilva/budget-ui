import { categoryClient } from '@services'
import { useFetch } from '@hooks'
import { paginationEmpty } from '@models/pagination'

export const useCategory = () => {
  const { data } = useFetch({ queryFn: categoryClient.getCategory, queryKey: 'category' })
  const categories = data?.data ? data?.data : paginationEmpty
  return { categories }
}
