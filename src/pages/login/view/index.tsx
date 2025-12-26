import React from 'react'
import { ILoginView } from './types'
import { InputPrimary } from '@components/ui/input'
import { Button } from '@components/ui/button'
import { IoIosWallet, IoLogoGoogle } from 'react-icons/io'
import { FieldController } from '@components/ui/field-controller'
import { useNavigate } from 'react-router-dom'

export const LoginView: React.FC<ILoginView> = ({ control, onSubmit }) => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/gerenciamento')
  }

  return (
    <div className="mx-auto flex w-10/12 max-w-[500px] flex-col gap-y-10 py-10">
      <header>
        <div className="flex flex-col items-center gap-y-2">
          <div className="bg-primary flex h-16 w-16 items-center justify-center rounded-full border">
            <IoIosWallet className="text-white" size={20} />
          </div>
          <h3 className="text-lg font-medium">FinanceApp</h3>
        </div>
      </header>
      <main className="flex flex-col gap-4">
        <div className="flex flex-col gap-y-1">
          <h3 className="text-2xl font-semibold">Bem-vindo de volta</h3>
          <p className="text-gray-700">
            Entre na sua conta para gerenciar suas finanças de forma simples e inteligente.
          </p>
        </div>
        <form
          className="mt-3 flex flex-col gap-7"
          onSubmit={e => {
            e.preventDefault()
            onSubmit(handleLogin)
          }}>
          <FieldController control={control} Component={InputPrimary} label="Email" name="email" />
          <FieldController control={control} Component={InputPrimary} label="Senha" type="password" name="password" />
          <Button color="primary" type="submit">
            Entrar
          </Button>
        </form>
      </main>
      <div className="flex items-center gap-x-4">
        <hr className="h-[2px] flex-1 bg-gray-400" />
        <span className="text-xs">ou</span>
        <hr className="h-[2px] flex-1 bg-gray-400" />
      </div>
      <footer>
        <Button color="secondary" className="w-full">
          <IoLogoGoogle className="inline-block align-middle" /> Continuar com o Google
        </Button>

        <Button className="mt-4 w-full">Criar nova conta</Button>
      </footer>
    </div>
  )
}
