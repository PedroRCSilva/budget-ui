import React from 'react'
import { ICreateCostView } from './types'
import { InputPrimary } from '@components/input'
import { FieldController } from '@components/field-controller'
import { SelectPrimary } from '@components/select'
import { Button } from '@components/button'
import { formatPrice, sanitizePrice } from '@utils/formatters'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

export const CreateCostView = ({ control, onSubmit, options, isLoading, title, onRemove }: ICreateCostView) => {
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await onSubmit()
    navigate(-1)
  }

  return (
    <>
      <header className="flex items-center gap-2 px-8 py-6">
        <Button
          className="flex h-5 w-5 items-center justify-center rounded-full border-none bg-transparent p-0"
          onClick={() => navigate(-1)}>
          <IoMdArrowRoundBack size={20} className="w-10 text-black" />
        </Button>
        <h2 className="text-lg font-medium">{title}</h2>
      </header>
      <main className="mx-auto my-auto flex min-h-[88vh] w-10/12 gap-5 py-5">
        <form className="flex flex-1 flex-col justify-between" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-between gap-y-4">
            <FieldController name="name" control={control} Component={InputPrimary} label="Descricao" />
            <FieldController
              name="amount"
              control={control}
              Component={InputPrimary}
              label="Saida"
              type="string"
              maskFunction={(value: string) => formatPrice(sanitizePrice(value))}
            />
            <FieldController
              label="Categoria"
              name="categoryId"
              control={control}
              defaultValue="232"
              Component={SelectPrimary}
              values={options}
            />
          </div>
          <div>
            <Button color="primary" className="mx-auto mt-5 w-full py-3" isLoading={isLoading} type="submit">
              Salvar
            </Button>
            {onRemove && (
              <Button
                onClick={onRemove}
                color="primary"
                className="mx-auto mt-5 w-full py-3"
                isLoading={isLoading}
                type="button">
                Excluir
              </Button>
            )}
          </div>
        </form>
      </main>
    </>
  )
}
