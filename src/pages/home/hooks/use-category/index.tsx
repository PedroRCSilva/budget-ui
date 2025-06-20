import { categoryClient } from '@services/index'

import { useFetch } from '@hooks/use-fetch'

export const useCategory = () => {
  const { data } = useFetch(categoryClient.getCategory)

  const categories = data?.data
    ? data.data.map(element => ({
        ...element,
        type: element.type ? 'Gasto Fixo' : 'Gasto variável'
      }))
    : []
  return { categories }
}
