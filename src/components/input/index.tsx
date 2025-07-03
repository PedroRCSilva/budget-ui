import React from 'react'
import { Input } from '@components/shadcn/input'
import { Label } from '@components/label'
import { IInputPrimary } from './types'
import clsx from 'clsx'

export const InputPrimary: React.FC<IInputPrimary> = ({ label, error, Icon, ...props }) => {
  return (
    <div>
      {label && <Label value={label} error={error} Icon={Icon} />}
      <Input {...props} className={clsx(error && 'border-red-500')} />
    </div>
  )
}
