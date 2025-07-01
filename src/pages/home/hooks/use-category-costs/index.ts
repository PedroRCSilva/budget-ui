import { ICostResponse } from '@services/cost-service/types'
import { CategoryTypeEnum, ICategoryCostsInput } from './types'

export const useCategoryCosts = ({ costs, categories }: ICategoryCostsInput) => {
  const totalCostForCategory = (costs: ICostResponse[]) => costs.reduce((acc, elem) => acc + elem.amount, 0)

  const categoryWithCost = categories.content.map(element => ({
    id: element.id,
    estimatedCost: element.estimatedCost,
    name: element.description,
    totalCost: totalCostForCategory(costs.content.filter(cost => cost.category.id === element.id)),
    type: element.type === 'FIXED' ? CategoryTypeEnum.FIXED : CategoryTypeEnum.VARIABLE
  }))

  return {
    categoryWithCost
  }
}
