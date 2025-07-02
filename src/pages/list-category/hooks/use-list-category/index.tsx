import { useCategory, useCost } from '@hooks'
import { ICostResponse } from '@services/cost-service/types'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { CategoryTypeEnum } from './types'

export const useListCategory = () => {
  const [searchParams] = useSearchParams()
  const { categories } = useCategory()
  const { costs } = useCost()
  const navigate = useNavigate()

  const totalCostForCategory = (costs: ICostResponse[]) => costs.reduce((acc, elem) => acc + elem.amount, 0)

  const categoryWithCost = categories.content.map(element => ({
    id: element.id,
    estimatedCost: element.estimatedCost,
    name: element.description,
    totalCost: totalCostForCategory(costs.content.filter(cost => cost.category.id === element.id)),
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
