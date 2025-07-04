import React from 'react'
import { IListCostsView } from './types'
import { CardItem } from '@components/card-item'

export const ListCostsView: React.FC<IListCostsView> = ({ costs }) => {
  return (
    <>
      <div>
        <div className="mx-auto mb-4 flex w-11/12">
          <h3 className="font-medium">Saidas</h3>
        </div>
        <div>
          <ul>
            {costs.length === 0 && (
              <div className="mx-auto flex h-full w-10/11 items-center justify-center py-5 text-gray-400">
                Não há saidas registradas
              </div>
            )}
            {costs.map(cost => (
              <CardItem amount={cost.amount} type={cost.category.description} title={cost.description} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
