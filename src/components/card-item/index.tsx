import React from 'react'
import { IoMdPeople } from 'react-icons/io'
import { ICardItem } from './types'
import { formatPrice } from '@utils/formatters'

export const CardItem: React.FC<ICardItem> = ({
  estimatedValue: estimatedCost,
  amount: currentCost,
  title,
  type,
  onClick
}) => {
  return (
    <li
      className="cursor-pointer border-b border-gray-100 py-3 transition duration-150 hover:bg-gray-100"
      onClick={onClick}>
      <div className="mx-auto flex w-11/12 gap-4">
        <div className="bg-primary-ghost flex h-13 w-14 items-center justify-center rounded-full">
          <IoMdPeople size={22} className="text-primary" />{' '}
        </div>
        <div className="flex flex-3 flex-col py-1 text-sm">
          <span>{title}</span>
          <p className="text-gray-500">{type}</p>
        </div>
        <div>
          {currentCost && <strong className="font-semibold">{formatPrice(currentCost)}</strong>}
          {estimatedCost && <p className="text-right text-xs">{formatPrice(estimatedCost)}</p>}
        </div>
      </div>
    </li>
  )
}
