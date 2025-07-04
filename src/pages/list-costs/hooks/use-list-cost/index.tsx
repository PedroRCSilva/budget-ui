import { useCostByCategory } from '@hooks'

export const useListCost = ({ id }: { id: string }) => {
  const { costs } = useCostByCategory(id)
  return { costs }
}
