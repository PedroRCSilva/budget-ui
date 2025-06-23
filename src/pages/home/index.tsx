import { HomeView } from './view'
import { useCategory as useCategories } from './hooks/use-category'
import { useCost } from './hooks'
import { useCategoryCosts } from './hooks/use-category-costs'
import { useFilterCategory } from './hooks/use-filter-category'

export const Home = () => {
  const { categories } = useCategories()
  const { costs } = useCost()
  const { categoryWithCost } = useCategoryCosts({ categories, costs })

  const { filterCategory } = useFilterCategory()

  if (!categories) return
  return <HomeView categories={categoryWithCost} filterCategory={filterCategory} />
}
