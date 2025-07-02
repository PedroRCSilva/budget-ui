import { useCategoryById } from '@hooks'

export const useListCost = ({ id }: { id: string }) => {
  const { category } = useCategoryById(id)
  return { category }
}
