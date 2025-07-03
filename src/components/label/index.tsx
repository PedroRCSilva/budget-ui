import React from 'react'
import { ILabel } from './types'
import clsx from 'clsx'

export const Label: React.FC<ILabel> = ({ Icon, value, error, ...props }) => {
  return (
    <div className={clsx('mb-2 flex gap-x-2', error && 'text-red-500')}>
      {Icon && <Icon />}
      <label className="text-xs" {...props}>
        {value}
      </label>
    </div>
  )
}
