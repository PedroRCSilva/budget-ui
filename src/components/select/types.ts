import { ForwardedRef, HTMLAttributes } from 'react'

export interface IOption {
  label: string
  value: string
}

export interface ISelectPrimary extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange' | 'defaultValue'> {
  values: IOption[]
  defaultValue?: string
  label?: string
  error: boolean
  onChange?: (value: string) => void
  onChangeValue?: (value: string) => void
  placeholder?: string
  ref?: ForwardedRef<HTMLButtonElement>
}
