import { useCategory } from '@hooks'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { CategoryTypeEnum } from './types'

export const useListCategory = () => {
  const [searchParams] = useSearchParams()
  const { categories } = useCategory()
  const navigate = useNavigate()

  const categoryWithCost = categories.content.map(element => ({
    id: element.id,
    estimatedCost: element.estimatedCost,
    name: element.description,
    currentCost: element.currentCost,
    type: element.type === 'FIXED' ? CategoryTypeEnum.FIXED : CategoryTypeEnum.VARIABLE
  }))

  const redirectCost = (id: string) => {
    navigate(`/list-costs/${id}?${searchParams.toString()}`)
  }

  return {
    categoryWithCost,
    redirectCost
  }
}
