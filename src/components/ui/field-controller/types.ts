import { Control, ControllerRenderProps, FieldValues, Path } from 'react-hook-form'

export type ComponentProps<T extends FieldValues, N extends Path<T>, P> = ControllerRenderProps<T, N> & P

export type FieldControllerProps<T extends FieldValues, N extends Path<T>, P> = {
  name: N
  control: Control<T>
  Component: React.ComponentType<ComponentProps<T, N, P>>
} & Omit<P, 'error' | 'ref'>
