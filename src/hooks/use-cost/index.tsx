import { costClient } from '@services/index'

import { useFetch } from '@hooks'
import { paginationEmpty } from '@models/pagination'
import { useSearchParams } from 'react-router-dom'
import { ICostRequest } from '@services/cost-service/types'
import { useState } from 'react'

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

export const useCostByCategory = (id: string) => {
  const [searchParams] = useSearchParams()

  const params = {
    startDate: searchParams.get('startDate'),
    endDate: searchParams.get('endDate')
  }

  const { data } = useFetch({
    queryFn: () => costClient.getCostByCategory(id, params),
    queryKey: `costs-category-${id}-${JSON.stringify(params)}`
  })

  const costs = data?.data || paginationEmpty

  return { costs }
}

export const useCreateCost = () => {
  const [isLoading, setIsLoading] = useState(false)

  const mutationAsync = async (data: ICostRequest) => costClient.createCost(data)

  const mutation = (data: ICostRequest) => {
    setIsLoading(true)
    costClient.createCost(data).finally(() => setIsLoading(false))
  }

  return {
    mutationAsync,
    mutation,
    isLoading
  }
}
