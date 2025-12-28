import React from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { IButton } from './type'

const buttonVariants = tv({
  slots: {
    button:
      'group relative px-4 py-4 border rounded-lg cursor-pointer font-medium disabled:bg-gray-200 disabled:border-gray-200 disabled:text-white disabled:cursor-not-allowed',
    loading: 'absolute inset-0 flex items-center justify-center'
  },
  variants: {
    color: {
      primary: {
        button: 'bg-primary text-white font-medium',
        loading: 'border-t-transparent border-r-transparent border-b-white'
      },
      secondary: {
        button: 'text-primary hover:bg-primary hover:text-white border-primary',
        loading: 'border-t-transparent border-r-transparent border-b-white'
      },
      ghost: {
        button: 'border-0',
        loading: 'border-t-transparent border-r-transparent border-b-white'
      }
    }
  },
  defaultVariants: {
    color: 'primary'
  }
})

export const Button: React.FC<IButton & VariantProps<typeof buttonVariants>> = ({
  color,
  isLoading,
  className,
  children,
  ...props
}) => {
  const { button, loading } = buttonVariants({ color })
  return (
    <button type="button" {...props} className={button({ className })}>
      {children}
      {isLoading && <div className={loading()} />}
    </button>
  )
}
