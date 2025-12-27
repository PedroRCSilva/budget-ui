import { toastStore } from './context'
import { IToastFn, ToastProps } from './types'
import { IoIosCheckmarkCircle, IoMdWarning } from 'react-icons/io'

const generateId = () => crypto.randomUUID()

export const toast: IToastFn = {
  warning: (data: ToastProps) => {
    const id = generateId()
    toastStore.add({
      ...data,
      id,
      icon: IoIosCheckmarkCircle,
      variants: {
        theme: 'warning'
      }
    })
  },
  success: (data: ToastProps) => {
    const id = generateId()
    toastStore.add({
      ...data,
      id,
      icon: IoMdWarning,
      variants: {
        theme: 'success'
      }
    })
  },
  destructive: (data: ToastProps) => {
    const id = generateId()
    toastStore.add({
      ...data,
      id,

      variants: {
        theme: 'destructive'
      }
    })
  },
  remove: (toastId: string) => toastStore.remove(toastId)
}
