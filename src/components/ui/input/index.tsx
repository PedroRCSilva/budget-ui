import React from 'react'
import { Input } from '@components/shadcn/input'
import { Label } from '@components/ui/label'
import { IInputPrimary } from './types'
import { cn } from '@utils/cn'

export const InputPrimary: React.FC<IInputPrimary> = ({
  label,
  error,
  type = 'text',
  Icon,
  onChange,
  maskFunction,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maskFunction) e.target.value = maskFunction(e.target.value)

    if (onChange) onChange(e)
  }

  return (
    <div>
      {label && <Label value={label} error={error} Icon={Icon} />}
      <Input
        type={type}
        {...props}
        className={cn(error && 'border-red-500 focus-visible:ring-red-500')}
        onChange={handleChange}
      />
    </div>
  )
}
