export interface ICategoryWithCosts {
  id: string
  name: string
  currentCost: number
  estimatedCost: number
  type: string
}

export interface IListCategoryView {
  categories: ICategoryWithCosts[]
  redirectCost: (id: string) => void
  redirectEditCategory: (id: string) => void
}
