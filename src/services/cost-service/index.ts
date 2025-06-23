import { IPagination } from 'src/models/types'
import { IHttpInstance } from '../types'
import { ICostRequest, ICostResponse } from './types'

export const costService = (instance: IHttpInstance) => {
  const getCost = async () => instance.get<IPagination<ICostResponse>>('/costs')
  const getCostById = async (id: string) => instance.get<ICostResponse>(`/costs/${id}`)
  const createCost = async (data: ICostRequest) => instance.post<ICostRequest, ICostResponse>('/costs', data)
  const updateCost = async (id: string, data: ICostRequest) => instance.put<ICostRequest, ICostResponse>(`/costs`, data)
  const deleteCost = async (id: string) => instance.delete<void>(`/costs/${id}`)

  return {
    getCost,
    getCostById,
    createCost,
    updateCost,
    deleteCost
  }
}
