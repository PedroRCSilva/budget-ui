import z from 'zod'

export const schemaLogin = z.object({
  email: z
    .string({
      message: 'Informe um email'
    })
    .email({
      message: 'Informe um email válido'
    }),
  password: z
    .string({
      message: 'Informe a senha'
    })
    .min(8, 'Insira no minímo 5 caracteres')
})
