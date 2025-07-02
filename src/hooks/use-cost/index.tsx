import { costClient } from '@services/index'

import { useFetch } from '@hooks'
import { paginationEmpty } from '@models/pagination'
import { useSearchParams } from 'react-router-dom'

export const useCost = () => {
  const [searchParams] = useSearchParams()

  const params = {
    startDate: searchParams.get('startDate'),
    endDate: searchParams.get('endDate')
  }

  const { data } = useFetch({
    queryFn: () => costClient.getCost(params),
    queryKey: JSON.stringify(params)
  })

  const costs = data?.data || paginationEmpty

  return { costs }
}
