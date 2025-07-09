import { useForm } from 'react-hook-form'
import { LoginView } from './view'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaLogin } from './data/schema'
import { useLogin } from '@hooks'
import z from 'zod'
import { setCookie } from '@utils/cookies'

export const Login = () => {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(schemaLogin)
  })

  const { mutationAsync } = useLogin()

  const onSubmit = async (data: z.infer<typeof schemaLogin>) => {
    const response = await mutationAsync({
      login: data.email,
      password: data.password
    })

    setCookie('access_token', response.data.token)
  }

  return <LoginView nome={'Login'} control={control} onSubmit={handleSubmit(onSubmit)} />
}
