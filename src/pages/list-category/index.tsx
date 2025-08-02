import { useListCategory } from './hooks/use-list-category'
import { ListCategoryView } from './view'

export const ListCategory = () => {
  const { categoryWithCost, redirectCost, redirectEditCategory } = useListCategory()

  return (
    <ListCategoryView
      categories={categoryWithCost}
      redirectCost={redirectCost}
      redirectEditCategory={redirectEditCategory}
    />
  )
}
