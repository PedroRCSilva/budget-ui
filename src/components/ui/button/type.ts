import { ReactNode } from 'react'

export interface IButton
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isLoading?: boolean
  children?: ReactNode
}
