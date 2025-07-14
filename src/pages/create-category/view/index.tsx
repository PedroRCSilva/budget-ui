import React from 'react'
import { ICreateCategoryView } from './types'
import { FieldController } from '@components/field-controller'
import { SelectPrimary } from '@components/select'
import { InputPrimary } from '@components/input'
import { formatPrice, sanitizePrice } from '@utils/formatters'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Button } from '@components/button'
import { useNavigate } from 'react-router-dom'
import { CategoryTypeEnum } from '@pages/list-category/hooks/use-list-category/types'

export const CreateCategoryView: React.FC<ICreateCategoryView> = ({ control, handleSubmit }) => {
  const navigate = useNavigate()

  return (
    <>
      <header className="flex items-center gap-2 px-8 py-6">
        <Button
          className="flex h-5 w-5 items-center justify-center rounded-full border-none bg-transparent p-0"
          onClick={() => navigate(-1)}>
          <IoMdArrowRoundBack size={20} className="w-10 text-black" />
        </Button>
        <h2 className="text-lg font-medium">Cadastrar categoria</h2>
      </header>
      <main className="mx-auto my-auto flex min-h-[88vh] w-10/12 gap-5 py-5">
        <form className="flex flex-1 flex-col justify-between" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-between gap-y-4">
            <FieldController name="title" control={control} Component={InputPrimary} label="Titulo" />
            <FieldController
              name="estimatedCost"
              control={control}
              Component={InputPrimary}
              label="Custo estimado"
              type="string"
              maskFunction={(value: string) => formatPrice(sanitizePrice(value))}
            />
            <FieldController
              label="Tipo de custo"
              name="type"
              control={control}
              Component={SelectPrimary}
              values={[
                {
                  label: 'Fixo',
                  value: CategoryTypeEnum.FIXED
                },
                {
                  label: 'Variável',
                  value: CategoryTypeEnum.VARIABLE
                }
              ]}
            />
          </div>
          <Button color="primary" className="mx-auto mt-5 w-full py-3" isLoading={false} type="submit">
            Adicionar
          </Button>
        </form>
      </main>
    </>
  )
}
