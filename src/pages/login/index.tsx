import { useForm } from 'react-hook-form'
import { LoginView } from './view'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaLogin } from './data/schema'
import { useLogin } from '@hooks'
import z from 'zod'
import { setCookie } from '@utils/cookies'
import { toast } from '@lib/toast'
import { AxiosError } from 'axios'

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
    } catch (error: unknown) {
      if (!(error instanceof AxiosError)) return

      if (error.status == 403) {
        toast.destructive({
          title: 'Email e/ou senha incorretos',
          description: 'Certifique-se que esta colocando o email e senha cadastrado',
          durationMs: 8000
        })
        return
      }
      toast.destructive({
        title: 'Houve um erro ao realizar a requisição',
        description: 'Tente novamente mais tarde',
        durationMs: 8000
      })
    }
  }

  const handleSubmitForm = (callbackFn?: () => void) => handleSubmit(data => onSubmit(data, callbackFn))()

  return <LoginView control={control} onSubmit={handleSubmitForm} />
}
