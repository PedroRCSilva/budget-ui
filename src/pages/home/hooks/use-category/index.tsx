import { categoryClient } from '@services/index'

import { useFetch } from '@hooks/use-fetch'
import { paginationEmpty } from '@models/pagination'

export const useCategory = () => {
  const { data } = useFetch(categoryClient.getCategory)

  const categories = data?.data ? data?.data : paginationEmpty
  return { categories }
}
