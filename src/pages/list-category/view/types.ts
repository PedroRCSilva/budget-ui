export interface ICategoryWithCosts {
  id: string
  name: string
  totalCost: number
  estimatedCost: number
  type: string
}

export interface IListCategoryView {
  categories: ICategoryWithCosts[]
  redirectCost: (id: string) => void
}
