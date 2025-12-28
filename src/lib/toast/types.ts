import { toastVariants } from '@components/ui/toast'
import { IconType } from 'react-icons'
import { VariantProps } from 'tailwind-variants'

export type ToastProps = Pick<IToast, 'description' | 'title' | 'durationMs' | 'hasLoading'>

export interface IToastFn {
  warning: (data: ToastProps) => void
  success: (data: ToastProps) => void
  destructive: (data: ToastProps) => void
  remove: (toastId: string) => void
}

export interface IToast {
  id: string
  variants: VariantProps<typeof toastVariants>
  title?: string
  icon?: IconType
  description?: string
  durationMs?: number
  hasLoading?: boolean
}
