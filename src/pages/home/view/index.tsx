import React from 'react'
import { IHomeView, MonthEnum } from './types'
import { Button } from '@components/button'
import { IoMdAdd } from 'react-icons/io'
import { SegmentedControl } from '../components/segmented-control'
import { Outlet, useNavigate } from 'react-router-dom'

export const HomeView: React.FC<IHomeView> = ({ filterCategory, defaultMonth }) => {
  const navigate = useNavigate()

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
          <SegmentedControl.Item value={MonthEnum.JUNE.NAME}>Junho</SegmentedControl.Item>
          <SegmentedControl.Item value={MonthEnum.JULY.NAME}>Julho</SegmentedControl.Item>
          <SegmentedControl.Item value={MonthEnum.AUGUST.NAME}>Agosto</SegmentedControl.Item>
        </SegmentedControl.Container>

        <div className="mb-6 flex flex-col gap-2">
          <p className="text-sm font-light text-gray-500">Saldo disponível: R$ 12.876,67</p>
          <p className="text-xl font-medium">
            Ainda faltam <span className="text-primary">R$ 5.000,00</span> do total previsto deste mês
          </p>
          <p className="text text-sm font-light text-gray-500">
            Você já pagou <b> R$ 2.876,67</b> de <b>R$ 7.876,67</b>
          </p>
        </div>

        <div className="flex max-w-[400px] flex-col gap-y-5">
          <Button onClick={() => navigate('/create-cost')}>
            Cadastrar saida
            <IoMdAdd className="inline align-middle" size={25} />
          </Button>
          <Button color="secondary" onClick={() => navigate('/create-cost')}>
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
