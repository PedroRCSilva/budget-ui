import { HTMLAttributes, ReactNode } from 'react'

export interface IButton extends HTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary'
  isLoading?: boolean
  children?: ReactNode
}
