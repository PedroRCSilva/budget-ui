import { ReactNode } from 'react'

export interface IButton
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  color?: 'primary' | 'secondary'
  isLoading?: boolean
  children?: ReactNode
}
