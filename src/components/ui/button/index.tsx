import React from 'react'
import { tv } from 'tailwind-variants'
import { IButton } from './type'

const variants = {
  base: 'group px-4 py-4 border rounded-lg cursor-pointer font-medium disabled:bg-gray-200 disabled:border-gray-200 disabled:text-white disabled:cursor-not-allowed',
  variants: {
    color: {
      primary: 'bg-primary text-white font-medium',
      secondary: 'text-primary hover:bg-primary hover:text-white border-primary'
    }
  }
}

const button = tv(variants)

const loading = tv({
  base: 'absolute inset-0 flex items-center justify-center',
  variants: {
    color: {
      primary: 'border-t-transparent border-r-transparent border-b-white',
      secondary: 'border-t-transparent border-r-transparent border-b-white'
    }
  }
})

export const Button: React.FC<IButton> = ({ color = 'primary', isLoading, className, children, ...props }) => {
  return (
    <button type="button" className={button({ className, color })} {...props}>
      {children}
      {isLoading && <div className={loading({ color })} />}
    </button>
  )
}
