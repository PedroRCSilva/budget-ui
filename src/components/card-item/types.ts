export interface ICardItem {
  title: string
  estimatedValue?: number
  amount?: number
  type: string
  onClick?: () => void
}
