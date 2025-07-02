import { categoryClient } from '@services'
import { useFetch } from '@hooks'
import { paginationEmpty } from '@models/pagination'

export const useCategory = () => {
  const { data } = useFetch({ queryFn: categoryClient.getCategory, queryKey: 'category' })
  const categories = data?.data ? data?.data : paginationEmpty
  return { categories }
}

export const useCategoryById = (id: string) => {
  const { data } = useFetch({ queryFn: () => categoryClient.getCategoryById(id), queryKey: `category${id}` })
  const category = data?.data
  return { category }
}
