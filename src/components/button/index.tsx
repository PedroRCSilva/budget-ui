import React from 'react'
import { tv } from 'tailwind-variants'
import { IButton } from './type'

const variants = {
  base: 'px-4 py-2 border rounded-3xl ',
  variants: {
    color: {
      primary: 'bg-primary text-white font-medium',
      secondary: ''
    }
  }
}

const button = tv(variants)

export const Button: React.FC<IButton> = ({ color = 'primary', className, children, ...props }) => {
  return (
    <button type="button" className={button({ className, color })} {...props}>
      {children}
    </button>
  )
}
