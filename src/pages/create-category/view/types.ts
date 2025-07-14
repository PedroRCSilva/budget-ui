import { Control } from 'react-hook-form'
import z from 'zod'
import { schemaCategory } from '../data/schema'

export interface ICreateCategoryView {
  control: Control<z.infer<typeof schemaCategory>>
  handleSubmit: () => void
}
