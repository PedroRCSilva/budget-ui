import { IPagination } from 'src/models/types'
import { IHttpInstance } from '../types'
import { ICategoryRequest, ICategoryResponse } from './types'

export const CategoryService = (instance: IHttpInstance) => {
  const getCategory = async (searchParams?: URLSearchParams) =>
    instance.get<IPagination<ICategoryResponse>>(`/categories?${searchParams?.toString()}`)
  const getCategoryById = async (id: string) => instance.get<ICategoryResponse>(`/categories/${id}`)
  const getCostsByCategory = async (id: string) =>
    instance.get<IPagination<ICategoryResponse>>(`/categories/${id}/costs`)
  const createCategory = async (data: ICategoryRequest) =>
    instance.post<ICategoryRequest, ICategoryResponse>('/category', data)
  const updateCategory = async (id: string, data: ICategoryRequest) =>
    instance.put<ICategoryRequest, ICategoryResponse>(`/category/${id}`, data)
  const deleteCategory = async (id: string) => instance.delete<void>(`/category/${id}`)

  return {
    getCategory,
    getCategoryById,
    getCostsByCategory,
    createCategory,
    updateCategory,
    deleteCategory
  }
}
