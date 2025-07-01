import { ReactNode } from 'react'

export interface SegmentedControlContextType {
  value: string
  onChangeValue: (value: string) => void
  name: string
}

export interface ContainerProps {
  children: ReactNode
  value?: string
  defaultValue?: string
  onChangeValue?: (value: string) => void
  name?: string
}

export interface ItemProps {
  children: ReactNode
  value: string
}
