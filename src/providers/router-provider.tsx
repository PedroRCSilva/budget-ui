import { createBrowserRouter, RouterProvider as Provider } from 'react-router-dom'
import { ROUTES } from '@constants/routes'
import { Home } from '@pages/home'
import { InternalError } from '@pages/internal-error'

export const RouterProvider = () => {
  const routerConfig = createBrowserRouter([
    {
      element: <Home />,
      path: ROUTES.HOME
    },
    {
      element: <InternalError />,
      path: ROUTES.INTERNAL_ERROR
    }
  ])

  return <Provider router={routerConfig} />
}
