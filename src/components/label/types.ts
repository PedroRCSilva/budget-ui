import { HTMLAttributes } from 'react'
import { IconType } from 'react-icons'

export interface ILabel extends HTMLAttributes<HTMLLabelElement> {
  value: string
  error?: boolean
  Icon?: IconType
}
