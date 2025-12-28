import { useSyncExternalStore } from 'react'
import { Toast } from '../toast'
import { toastStore } from '@lib/toast/context'
import { tv } from 'tailwind-variants'

const LIMIT_TOASTS = 4

const toasterVariants = tv({
  base: 'fixed flex flex-col gap-4',
  variants: {
    positionX: {
      left: 'left-2',
      right: 'right-2'
    },
    positionY: {
      top: 'top-2',
      bottom: 'bottom-2'
    }
  },
  defaultVariants: {
    positionX: 'right',
    positionY: 'top'
  }
})

export const Toaster = () => {
  const toasts = useSyncExternalStore(toastStore.subscribe, toastStore.getSnapshot)

  const toastsLimited = toasts.slice(0, LIMIT_TOASTS)

  return (
    <div
      className={toasterVariants({
        positionX: 'right',
        positionY: 'top'
      })}>
      {toastsLimited.map(toast => (
        <Toast {...toast} Icon={toast.icon} key={toast.id} />
      ))}
    </div>
  )
}
