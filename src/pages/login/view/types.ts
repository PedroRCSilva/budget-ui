import { Control } from 'react-hook-form'
import z from 'zod'
import { schemaLogin } from '../data/schema'

export interface ILoginView {
  nome: string
  control: Control<z.infer<typeof schemaLogin>>
  onSubmit: () => Promise<void>
}
