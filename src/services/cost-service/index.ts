import { IPagination } from 'src/models/types'
import { IHttpInstance } from '../types'
import { ICostRequest, ICostResponse, ICostSearchParams } from './types'

export const CostService = (instance: IHttpInstance) => {
  const getCost = async (params: ICostSearchParams) =>
    instance.get<IPagination<ICostResponse>>('/costs', {
      params
    })

  const getCostByCategory = async (categoryId: string, params: ICostSearchParams) =>
    instance.get<IPagination<ICostResponse>>(`/categories/${categoryId}/costs`, {
      params
    })

  const getCostById = async (id: string) => instance.get<ICostResponse>(`/costs/${id}`)
  const createCost = async (data: ICostRequest) => instance.post<ICostRequest, ICostResponse>('/costs', data)
  const updateCost = async (data: ICostRequest) => instance.patch<ICostRequest, ICostResponse>(`/costs`, data)
  const deleteCost = async (id: string) => instance.delete<void>(`/costs/${id}`)

  return {
    getCost,
    getCostById,
    getCostByCategory,
    createCost,
    updateCost,
    deleteCost
  }
}
