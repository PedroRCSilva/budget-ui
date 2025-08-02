import React from 'react'
import { IHomeView, MonthEnum } from './types'
import { Button } from '@components/button'
import { IoMdAdd } from 'react-icons/io'
import { SegmentedControl } from '../components/segmented-control'
import { Outlet, useNavigate } from 'react-router-dom'

export const HomeView: React.FC<IHomeView> = ({
  filterCategory,
  defaultMonth,
  totalActual,
  totalDifference,
  totalPlanned
}) => {
  const navigate = useNavigate()

  const months = Object.values(MonthEnum)
  const currentMonthIndex = months.findIndex(month => month.NAME === defaultMonth.NAME)
  const getMonth = (index: number) => months[index % 12]

  return (
    <div className="flex flex-col gap-5">
      <header className="mx-auto w-11/12">
        <SegmentedControl.Container
          defaultValue={defaultMonth.NAME}
          onChangeValue={name => {
            filterCategory({
              month: MonthEnum[name as keyof typeof MonthEnum]
            })
          }}>
          <SegmentedControl.Item value={getMonth(currentMonthIndex).NAME}>
            {getMonth(currentMonthIndex).LABEL}
          </SegmentedControl.Item>
          <SegmentedControl.Item value={getMonth(currentMonthIndex + 1).NAME}>
            {getMonth(currentMonthIndex + 1).LABEL}
          </SegmentedControl.Item>
          <SegmentedControl.Item value={getMonth(currentMonthIndex + 2).NAME}>
            {getMonth(currentMonthIndex + 2).LABEL}
          </SegmentedControl.Item>
        </SegmentedControl.Container>

        <div className="mb-6 flex flex-col gap-2">
          <p className="text-xl font-medium">
            Ainda faltam <span className="text-primary">R$ {totalDifference.toFixed(2)}</span> do total previsto deste
            mês
          </p>
          <p className="text text-sm font-light text-gray-500">
            Você já pagou <b> R$ {totalActual.toFixed(2)}</b> de <b>R$ {totalPlanned.toFixed(2)}</b>
          </p>
        </div>

        <div className="flex max-w-[400px] flex-col gap-y-5">
          <Button onClick={() => navigate('/gerenciamento/create-cost')}>
            Cadastrar saida
            <IoMdAdd className="inline align-middle" size={25} />
          </Button>
          <Button color="secondary" onClick={() => navigate('/gerenciamento/create-category')}>
            Cadastrar categoria
            <IoMdAdd className="inline align-middle" size={25} />
          </Button>
        </div>
      </header>
      <hr className="text-gray-100" />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
