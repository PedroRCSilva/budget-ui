import { useSyncExternalStore } from "react"
import { Toast } from "../toast"
import { toastStore } from "@lib/toast/context"

export const Toaster = () => {

    const toasts = useSyncExternalStore(toastStore.subscribe, toastStore.getSnapshot)

    return (
        <div>
            {toasts.map(toast => <Toast variants={toast.variants} />)}
        </div>
    )
} 
