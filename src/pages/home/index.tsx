import { HomeView } from './view'
import { useFilterCategory } from './hooks/use-filter-category'

export const Home = () => {
  const { filterCategory, monthCurrent } = useFilterCategory()

  return <HomeView filterCategory={filterCategory} defaultMonth={monthCurrent} />
}
