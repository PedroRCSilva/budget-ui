import { useForm } from 'react-hook-form'
import { CreateCategoryView } from './view'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaCategory } from './data/schema'
import { CategoryTypeEnum } from '@pages/list-category/hooks/use-list-category/types'

export const CreateCategory = () => {
  const { control, handleSubmit } = useForm<z.infer<typeof schemaCategory>>({
    resolver: zodResolver(schemaCategory),
    defaultValues: {
      estimatedCost: 'R$ 0,00',
      title: '',
      type: CategoryTypeEnum.FIXED
    }
  })

  return <CreateCategoryView control={control} handleSubmit={handleSubmit(data => console.log(data))} />
}
