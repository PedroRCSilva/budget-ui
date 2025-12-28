import React from 'react'
import { IListCategoryView } from './types'
import { CardItem } from '@components/ui/card-item'

export const ListCategoryView: React.FC<IListCategoryView> = ({ categories, redirectCost, redirectEditCategory }) => {
  return (
    <div>
      <div className="mx-auto mb-4 flex w-11/12">
        <h3 className="font-medium">Gastos mensais</h3>
      </div>
      <div>
        <ul>
          {categories.length === 0 && (
            <div className="mx-auto flex h-full w-10/11 items-center justify-center py-5 text-gray-400">
              Não há categorias cadastradas
            </div>
          )}
          {categories.map(category => (
            <CardItem
              onClick={() => redirectCost(category.id)}
              key={category.id}
              onEdit={() => redirectEditCategory(category.id)}
              estimatedValue={category.estimatedCost}
              amount={category.currentCost}
              title={category.name}
              type={category.type}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
