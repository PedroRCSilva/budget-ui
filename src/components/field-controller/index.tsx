import React from 'react'
import { Controller, FieldValues, Path } from 'react-hook-form'
import { FieldControllerProps } from './types'
import { FieldError } from '@components/field-error'

export const FieldController = <T extends FieldValues, N extends Path<T>, P>({
  name,
  control,
  Component,
  ...rest
}: FieldControllerProps<T, N, P>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const props = {
          ...rest,
          error: fieldState.error
        }

        return (
          <FieldError error={fieldState?.error}>
            <Component {...field} {...(props as P)} />
          </FieldError>
        )
      }}
    />
  )
}
