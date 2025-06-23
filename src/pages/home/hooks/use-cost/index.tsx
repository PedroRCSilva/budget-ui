import { costClient } from '@services/index'

import { useFetch } from '@hooks/use-fetch'
import { paginationEmpty } from '@models/pagination'

export const useCost = () => {
  const { data } = useFetch(costClient.getCost)

  const costs = data?.data || paginationEmpty
  return { costs }
}
