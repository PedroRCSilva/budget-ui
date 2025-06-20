import React from 'react'
import { IHomeView } from './types'
import { Button } from '@components/button'
import { IoMdAdd } from 'react-icons/io'
import { SegmentedControl } from '../components/segmented-control'
import { CostItem } from '../components/cost-item'

export const HomeView: React.FC<IHomeView> = ({ categories }) => {
  return (
    <div className="flex flex-col gap-5">
      <header className="mx-auto w-11/12">
        <SegmentedControl.Container defaultValue="Junho">
          <SegmentedControl.Item value="Junho">Junho</SegmentedControl.Item>
          <SegmentedControl.Item value="Julho">Julho</SegmentedControl.Item>
          <SegmentedControl.Item value="Agosto">Agosto</SegmentedControl.Item>
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

        <Button>
          Cadastrar compromisso <IoMdAdd className="inline align-middle" size={25} />
        </Button>
      </header>
      <hr className="text-gray-100" />
      <main>
        <div className="mx-auto mb-4 flex w-11/12">
          <h3 className="font-medium">Gastos mensais</h3>
        </div>
        <div>
          <ul>
            {categories.map(category => (
              <CostItem
                amountMax={category.estimatedCost}
                title={category.description}
                createdAt={category.createdAt}
                type={category.type}
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}
