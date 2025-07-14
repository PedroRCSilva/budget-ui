import { CategoryTypeEnum } from '@pages/list-category/hooks/use-list-category/types'
import { sanitizePrice } from '@utils/formatters'
import z from 'zod'

export const schemaCategory = z.object({
  title: z
    .string({
      message: 'Insira no minimo 3 caracteres'
    })
    .min(3, {
      message: 'Insira no minimo 3 caracteres'
    })
    .max(60, {
      message: 'Insira no máximo 50 caracteres'
    }),
  estimatedCost: z.string().refine((value: string) => sanitizePrice(value) > 0, {
    message: 'Insira o valor maior que R$ 0,00'
  }),
  type: z.nativeEnum(CategoryTypeEnum, {
    message: 'Insira o tipo de custo'
  })
})
