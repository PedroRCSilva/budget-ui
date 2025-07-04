import { sanitizePrice } from '@utils/formatters'
import z from 'zod'

export const schemaCost = z.object({
  name: z.string().refine(value => value.length >= 5, 'A descrição deve conter mais de 5 caracteres'),
  amount: z.string().refine(value => sanitizePrice(value) > 0),
  categoryId: z.string().refine(value => !!value, 'Informe a categoria')
})
