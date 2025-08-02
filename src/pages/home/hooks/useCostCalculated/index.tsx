import { useListCategory } from '@pages/list-category/hooks/use-list-category'
import { CategoryTypeEnum } from '@pages/list-category/hooks/use-list-category/types'

export const useCostCalculated = () => {
  const { categoryWithCost } = useListCategory()

  const totalPlanned = categoryWithCost.reduce((acc, category) => {
    if (category.type === CategoryTypeEnum.FIXED) {
      return acc + category.estimatedCost
    }
    return acc
  }, 0)
  const totalActual = categoryWithCost.reduce((acc, category) => {
    if (category.type !== CategoryTypeEnum.FIXED) return acc
    return acc + Math.min(category.currentCost, category.estimatedCost)
  }, 0)

  const totalDifference = totalPlanned - totalActual

  return {
    totalPlanned,
    totalActual,
    totalDifference
  }
}
