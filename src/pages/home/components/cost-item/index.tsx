import React from 'react'
import { IoMdPeople } from 'react-icons/io'
import { ICostItem } from './types'
import { formatPrice } from '@utils/formatters'

export const CostItem: React.FC<ICostItem> = ({ estimatedCost, currentCost, title, type }) => {
  return (
    <li className="border-b border-gray-100 py-3">
      <div className="mx-auto flex w-11/12 gap-4">
        <div className="bg-primary-ghost flex h-13 w-14 items-center justify-center rounded-full">
          <IoMdPeople size={22} className="text-primary" />{' '}
        </div>
        <div className="flex flex-3 flex-col py-1 text-sm">
          <span>{title}</span>
          <p className="text-gray-500">{type}</p>
        </div>
        <div>
          <strong className="font-semibold">{formatPrice(estimatedCost)}</strong>
          <p className="text-right text-xs">{formatPrice(currentCost)}</p>
        </div>
      </div>
    </li>
  )
}
