import { HomeView } from './view'
import { useFilterCategory } from './hooks/use-filter-category'
import { useCostCalculated } from './hooks/useCostCalculated'

export const Home = () => {
  const { filterCategory, monthCurrent } = useFilterCategory()

  const { totalPlanned, totalActual, totalDifference } = useCostCalculated()

  return (
    <HomeView
      filterCategory={filterCategory}
      defaultMonth={monthCurrent}
      totalPlanned={totalPlanned}
      totalActual={totalActual}
      totalDifference={totalDifference}
    />
  )
}
