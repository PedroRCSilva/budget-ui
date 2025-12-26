import { HTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

export const toastVariants = tv({
  slots: {
    container: 'flex fixed gap-2 w-sm p-3 rounded-lg',
    title: 'font-medium',
    description: 'text-sm text-white font-light'
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
        title: 'text-white',
        description: 'text-white'
      }
    },
    positionX: {
      left: {
        container: 'left-2'
      },
      right: {
        container: 'right-2'
      }
    },
    positionY: {
      top: {
        container: 'top-2'
      },
      bottom: {
        container: 'bottom-2'
      }
    }
  }
})

export const Toast: React.FC<{
  variants?: VariantProps<typeof toastVariants>
  Icon?: React.FC<HTMLAttributes<HTMLElement>>
}> = ({ variants, Icon }) => {
  const { container, title, description } = toastVariants(variants)

  return (
    <div className={container()}>
      <div className="flex items-center">{Icon && <Icon className="text-white" />}</div>
      <div className="flex flex-col">
        <span className={title()}>Login realizado com sucesso!</span>
        <span className={description()}>Acesse seu site</span>
      </div>
    </div>
  )
}
