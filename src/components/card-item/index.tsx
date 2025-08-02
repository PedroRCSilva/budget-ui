import React from 'react'
import { IoMdPeople } from 'react-icons/io'
import { ICardItem } from './types'
import { formatPrice } from '@utils/formatters'
import { LucidePencil } from 'lucide-react'
import { cn } from '@utils/cn'

export const CardItem: React.FC<ICardItem> = ({
  estimatedValue: estimatedCost,
  amount: currentCost,
  title,
  type,
  onClick,
  onEdit
}) => {
  return (
    <li className="border-b border-gray-100 py-3 transition duration-150 hover:bg-gray-100">
      <div className="mx-auto flex w-11/12 gap-4">
        <div
          className={cn(
            'bg-primary-ghost group relative flex h-13 w-14 items-center justify-center rounded-full',
            onEdit && 'cursor-pointer'
          )}
          onClick={onEdit}>
          {onEdit && (
            <div className="absolute flex h-full w-full items-center justify-center rounded-full bg-black opacity-0 transition-opacity group-hover:opacity-70">
              <LucidePencil color="white" />
            </div>
          )}
          <IoMdPeople size={22} className="text-primary" />{' '}
        </div>
        <div className="flex flex-3 cursor-pointer flex-col py-1 text-sm" onClick={onClick}>
          <span>{title}</span>
          <p className="text-gray-500">{type}</p>
        </div>
        <div>
          {currentCost !== undefined && (
            <strong
              className={cn(
                'font-semibold',
                estimatedCost && currentCost <= estimatedCost ? 'text-green-700' : 'text-red-700'
              )}>
              {formatPrice(currentCost)}
            </strong>
          )}
          {estimatedCost && <p className="text-right text-xs">{formatPrice(estimatedCost)}</p>}
        </div>
      </div>
    </li>
  )
}
