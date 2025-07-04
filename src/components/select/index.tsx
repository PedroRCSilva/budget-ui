import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@components/shadcn/select'
import { ISelectPrimary } from './types'
import { cn } from '@utils/cn'
import { Label } from '@components/label'

export const SelectPrimary = ({
  values,
  onChange,
  onChangeValue,
  defaultValue,
  className,
  label,
  error,
  placeholder,

  ...props
}: ISelectPrimary) => {
  return (
    <div>
      {label && <Label value={label} error={error} />}
      <Select
        onValueChange={value => {
          if (onChange) onChange(value)
          if (onChangeValue) onChangeValue(value)
        }}>
        <SelectTrigger
          className={cn(error && 'text-red-500', 'w-full border-gray-200 bg-gray-100 px-2 py-6', className)}
          {...props}>
          <SelectValue placeholder={placeholder} defaultValue={defaultValue} />
        </SelectTrigger>
        <SelectContent className="">
          <SelectGroup className="">
            {values.map(option => (
              <SelectItem value={option.value}>{option.label}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
