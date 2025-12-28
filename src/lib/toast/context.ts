import { IToast } from "./types"

let listeners: (() => void)[] = []
let toasts: IToast[] = []
const emitChange = () => listeners.forEach(listener => listener())

export const toastStore = {
    subscribe: (listner: () => void) => {
        listeners = [...listeners, listner]
        return () => listeners = listeners.filter(l => listner != l)
    },
    getSnapshot: () => toasts,
    add: (toast: IToast) => {
        toasts = [...toasts, toast]
        emitChange()
    },
    remove: (toastId: string) => {
        toasts = toasts.filter(toast => toast.id != toastId)
        emitChange()
    }
}