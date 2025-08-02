import { categoryClient } from '@services'
import { paginationEmpty } from '@models/pagination'
import { useFetch } from '../use-fetch'
import { ICategoryRequest } from '@services/category-service/types'
import { useState } from 'react'

export const useCategory = (params?: { searchParams?: URLSearchParams }) => {
  const { data } = useFetch({
    queryFn: () => categoryClient.getCategory(params?.searchParams),
    queryKey: `category${params?.searchParams?.toString()}`
  })
  const categories = data?.data ? data?.data : paginationEmpty

  return { categories }
}

export const useCreateCategory = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const mutationAsync = async (data: ICategoryRequest) => {
    return categoryClient.createCategory(data)
  }

  const mutation = (data: ICategoryRequest) => {
    setIsLoading(true)
    categoryClient.createCategory(data).finally(() => setIsLoading(false))
  }

  return {
    mutationAsync,
    mutation,
    isLoading
  }
}

export const useUpdateCategory = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const mutationAsync = async (data: ICategoryRequest) => {
    return categoryClient.updateCategory(data)
  }

  const mutation = (data: ICategoryRequest) => {
    setIsLoading(true)
    categoryClient.updateCategory(data).finally(() => setIsLoading(false))
  }

  return {
    mutationAsync,
    mutation,
    isLoading
  }
}

export const useCategoryById = (id: string) => {
  const { data } = useFetch({
    queryFn: () => categoryClient.getCategoryById(id),
    queryKey: `category-${id}`
  })

  const category = data?.data

  return { category }
}
