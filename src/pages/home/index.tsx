import { HomeView } from './view'
import { useCategory as useCategories } from './hooks/use-category'

export const Home = () => {
  const { categories } = useCategories()

  if (!categories) return
  return <HomeView categories={categories} />
}
