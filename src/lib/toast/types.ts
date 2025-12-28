import { toastVariants } from "@components/ui/toast"
import { VariantProps } from "tailwind-variants"

export type ToastProps = Pick<IToast,'description' | 'title'>

export interface IToastFn{
    warning: (data:ToastProps)=>void,
    success: (data:ToastProps)=>void,
    destructive: (data:ToastProps)=> void,
    remove: (toastId:string)=> void,
    
}

export interface IToast{
    id:string,
    variants:VariantProps<typeof toastVariants>,
    title?:string,
    description?:string
    duration?:number
}
