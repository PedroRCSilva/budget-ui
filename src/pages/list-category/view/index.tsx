import React from 'react'
import { IListCategoryView } from './types'
import { CategoryItem } from '../components'

export const ListCategoryView: React.FC<IListCategoryView> = ({ categories, redirectCost }) => {
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
            <CategoryItem
              onClick={() => redirectCost(category.id)}
              key={category.id}
              estimatedCost={category.estimatedCost}
              currentCost={category.currentCost}
              title={category.name}
              type={category.type}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
