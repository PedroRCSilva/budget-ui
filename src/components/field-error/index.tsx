import React, { ReactNode } from 'react'

export const FieldError: React.FC<{
  children: ReactNode
  error?: {
    message?: string
  }
}> = ({ children, error }) => {
  return (
    <div>
      {children}
      {error?.message && (
        <div className="mt-1">
          <p className="px-1 text-xs text-red-500">{error.message}</p>
        </div>
      )}
    </div>
  )
}
