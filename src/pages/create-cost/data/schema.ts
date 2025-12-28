import { sanitizePrice } from '@utils/formatters'
import z from 'zod'

export const schemaCost = z.object({
  name: z
    .string({
      message: 'Esse campo é obrigatório'
    })
    .refine(value => value.length >= 5, 'A descrição deve conter mais de 5 caracteres'),
  amount: z
    .string({
      message: 'Esse campo é obrigatório'
    })
    .refine(value => sanitizePrice(value) > 0),
  categoryId: z
    .string({
      message: 'Esse campo é obrigatório'
    })
    .refine(value => !!value, 'Informe a categoria')
})
