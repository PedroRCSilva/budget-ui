import { toast } from '@lib/toast'
import { X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Button } from '../button'
import { IconType } from 'react-icons'

export const toastVariants = tv({
  slots: {
    container: 'flex flex-col gap-2 w-sm p-3 rounded-lg',
    titleText: 'font-medium',
    descriptionText: 'text-sm text-white font-light'
  },
  defaultVariants: {
    positionX: 'right',
    positionY: 'top',
    theme: 'success'
  },
  variants: {
    theme: {
      success: {
        container: 'bg-green-900',
        titleText: 'text-white',
        descriptionText: 'text-white'
      },
      warning: {
        container: 'bg-yellow-800',
        titleText: 'text-white',
        descriptionText: 'text-white'
      },
      destructive: {
        container: 'bg-red-900',
        titleText: 'text-white',
        descriptionText: 'text-white'
      }
    }
  }
})

export const Toast: React.FC<{
  id: string
  variants?: VariantProps<typeof toastVariants>
  durationMs?: number
  hasLoading?: boolean
  title?: string
  description?: string
  Icon?: IconType
}> = ({ variants, Icon, id, durationMs = 2000, hasLoading, title, description }) => {
  const { container, titleText, descriptionText } = toastVariants(variants)
  const [state, setState] = useState<'open' | 'closed'>('open')

  const handleClose = useCallback(() => {
    setTimeout(() => toast.remove(id), 500)
    setState('closed')
  }, [id])

  useEffect(() => {
    const idTimeout = setTimeout(handleClose, durationMs)
    return () => clearTimeout(idTimeout)
  }, [durationMs, handleClose])

  return (
    <div
      className={container({
        className: 'data-[state=open]:animate-toast-in data-[state=closed]:animate-toast-out animation-duration-[500ms]'
      })}
      data-state={state}>
      <div className="flex gap-2">
        <div className="flex items-center">{Icon && <Icon className="text-white" />}</div>
        <div className="flex flex-1 flex-col">
          <span className={titleText()}>{title}</span>
          <span className={descriptionText()}>{description}</span>
        </div>
        <Button color="ghost" className="p-0" onClick={handleClose}>
          <X size={20} className="cursor-pointer text-white" />
        </Button>
      </div>
      {hasLoading && (
        <div
          className={'animate-loading-toast h-1 w-full rounded-full bg-white'}
          style={{
            animationDuration: `${durationMs}ms`
          }}></div>
      )}
    </div>
  )
}
