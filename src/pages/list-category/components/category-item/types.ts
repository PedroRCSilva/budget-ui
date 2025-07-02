export interface ICategoryItem {
  title: string
  estimatedCost: number
  currentCost: number
  type: string
  onClick?: () => void
}
