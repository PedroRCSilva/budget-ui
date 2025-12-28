import { createBrowserRouter, RouterProvider as Provider } from 'react-router-dom'
import { INTERNAL_ERROR_ROUTER, LOGIN_ROUTER, MANAGEMENT_ROUTER } from '@constants/routes'
import { Toaster } from '@components/ui/toaster'

const routerConfig = createBrowserRouter([LOGIN_ROUTER, MANAGEMENT_ROUTER, INTERNAL_ERROR_ROUTER])
export const RouterProvider = () => {
  return (
  <>
    <Provider router={routerConfig} />
    <Toaster />
  </>)
}
