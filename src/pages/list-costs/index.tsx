import { ListCostsView } from './view'
import { useParams } from 'react-router-dom'
import { useListCost } from './hooks/use-list-cost'
export const ListCosts = () => {
  const { id } = useParams<{
    id: string
  }>()
  const { costs } = useListCost({ id: id || '' })
  return <ListCostsView costs={costs.content} />
}
