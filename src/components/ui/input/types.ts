import { ForwardedRef, HTMLAttributes } from 'react'
import { IconType } from 'react-icons'

export interface IInputPrimary extends HTMLAttributes<HTMLInputElement> {
  label: string
  ref?: ForwardedRef<HTMLInputElement>
  maskFunction?: (value: string) => string
  error?: boolean
  type?: string
  Icon?: IconType
}
