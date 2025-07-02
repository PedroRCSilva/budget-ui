import React, { createContext, useContext, useId, useState } from 'react'
import { ContainerProps, ItemProps, SegmentedControlContextType } from './types'

const SegmentedControlContext = createContext<SegmentedControlContextType | undefined>(undefined)

const Container: React.FC<ContainerProps> = ({
  children,
  value: controlledValue,
  defaultValue,
  onChangeValue,
  name
}) => {
  const generatedName = useId()
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? '')

  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : uncontrolledValue

  const handleChange = (val: string) => {
    if (!isControlled) setUncontrolledValue(val)
    onChangeValue?.(val)
  }

  return (
    <SegmentedControlContext.Provider value={{ value, onChangeValue: handleChange, name: name ?? generatedName }}>
      <nav className="py-8" role="radiogroup">
        <ul className="flex justify-center gap-x-6">{children}</ul>
      </nav>
    </SegmentedControlContext.Provider>
  )
}

const Item: React.FC<ItemProps> = ({ children, value }) => {
  const context = useContext(SegmentedControlContext)
  if (!context) throw new Error('SegmentedControl.Item must be used within SegmentedControl.Container')
  const { value: selectedValue, onChangeValue, name } = context
  const id = useId()

  return (
    <li>
      <div className="relative">
        <input
          type="radio"
          name={name}
          id={id}
          checked={selectedValue === value}
          onChange={() => onChangeValue(value)}
          value={value}
          className="peer absolute h-full w-full cursor-pointer opacity-0"
          aria-checked={selectedValue === value}
          tabIndex={selectedValue === value ? 0 : -1}
        />
        <label
          htmlFor={id}
          className="peer-checked:bg-primary cursor-pointer rounded-4xl px-2 py-2 transition-all duration-100 peer-checked:px-4 peer-checked:text-white">
          {children}
        </label>
      </div>
    </li>
  )
}

export const SegmentedControl = {
  Container,
  Item
}
