import { toastStore } from './context'
import { IToastFn, ToastProps } from './types'

export const toast: IToastFn = {
  warning: (data: ToastProps) =>
    toastStore.add({
      ...data,
      id: crypto.randomUUID(),
      variants: {}
    }),
  success: (data: ToastProps) => {
    toastStore.add({
      ...data,
      id: crypto.randomUUID(),
      variants: {
        theme: 'success'
      }
    })
  },
  destructive: (data: ToastProps) => {
    toastStore.add({
      ...data,
      id: crypto.randomUUID(),
      variants: {}
    })
  },
  remove: (toastId: string) => toastStore.remove(toastId)
}
