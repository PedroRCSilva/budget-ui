import { ForwardedRef, HTMLAttributes } from 'react'

export interface IOption {
  label: string
  value: string
}

export interface ISelectPrimary extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange' | 'defaultValue' | 'value'> {
  values: IOption[]
  defaultValue?: string
  label?: string
  value?: string
  error: boolean
  onChange?: (value: string) => void
  onChangeValue?: (value: string) => void
  placeholder?: string
  ref?: ForwardedRef<HTMLButtonElement>
}
