import { IoIosWarning } from 'react-icons/io'
import { toastStore } from './context'
import { IToastFn, ToastProps } from './types'
import { IoCheckmarkSharp } from 'react-icons/io5'
import { MdError } from 'react-icons/md'

const generateId = () => crypto.randomUUID()

export const toast: IToastFn = {
  warning: (data: ToastProps) => {
    const id = generateId()
    toastStore.add({
      ...data,
      id,
      icon: IoIosWarning,
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
      icon: IoCheckmarkSharp,
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
      icon: MdError,
      variants: {
        theme: 'destructive'
      }
    })
  },
  remove: (toastId: string) => toastStore.remove(toastId)
}
