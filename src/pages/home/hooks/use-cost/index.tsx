import { costClient } from '@services/index'

import { useFetch } from '@hooks/use-fetch'
import { paginationEmpty } from '@models/pagination'
import { useSearchParams } from 'react-router-dom'

export const useCost = () => {
  const [searchParams] = useSearchParams()

  const params = {
    startDate: searchParams.get('startDate'),
    endDate: searchParams.get('endDate'),
    page: searchParams.get('page'),
    size: searchParams.get('startDate')
  }

  const { data } = useFetch(() => costClient.getCost(params))

  const costs = data?.data || paginationEmpty
  return { costs }
}
