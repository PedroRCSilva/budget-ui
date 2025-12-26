import { Control } from 'react-hook-form'
import z from 'zod'
import { schemaCost } from '../data/schema'
import { IOption } from '@components/ui/select/types'

export interface ICreateCostView {
  control: Control<z.infer<typeof schemaCost>>
  onSubmit: () => Promise<void>
  options: IOption[]
  isLoading: boolean
  title: string
  onRemove?: () => void
}
