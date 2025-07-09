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

export const Button: React.FC<IButton> = ({ color = 'primary', isLoading, className, children, ...props }) => {
  return (
    <button type="button" className={button({ className, color })} {...props}>
      {children}
      {isLoading && (
        <div className="border-b-primary border-r-primary border-t-primary ml-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-transparent align-middle group-hover:border-t-white group-hover:border-r-white group-hover:border-b-white" />
      )}
    </button>
  )
}
