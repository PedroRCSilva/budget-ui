import { useForm } from 'react-hook-form'
import { LoginView } from './view'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaLogin } from './data/schema'
import { useLogin } from '@hooks'
import z from 'zod'
import { setCookie } from '@utils/cookies'
import { toast } from '@lib/toast'

export const Login = () => {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(schemaLogin)
  })

  const { mutationAsync } = useLogin()

  const onSubmit = async (data: z.infer<typeof schemaLogin>, callbackFn?: () => void) => {
    try {
      const response = await mutationAsync({
        login: data.email,
        password: data.password
      })
      setCookie('access_token', response.data.token)
      if (callbackFn) {
        callbackFn()
      }
    } catch {
      toast.success({
        title: 'Email e/ou senha incorretos',
        durationMs: 2000
      })
    }
  }

  const handleSubmitForm = (callbackFn?: () => void) => handleSubmit(data => onSubmit(data, callbackFn))()

  return <LoginView control={control} onSubmit={handleSubmitForm} />
}
