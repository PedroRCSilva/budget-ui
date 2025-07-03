import { ForwardedRef } from 'react'
import { IconType } from 'react-icons'

export interface IInputPrimary {
  label: string
  ref?: ForwardedRef<HTMLInputElement>
  error?: boolean
  Icon?: IconType
}
