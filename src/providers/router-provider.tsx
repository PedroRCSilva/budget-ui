import { createBrowserRouter, RouterProvider as Provider } from 'react-router-dom'
import { ROUTES } from '@constants/routes'
import { Home } from '@pages/home'

export const RouterProvider = () => {
  const routerConfig = createBrowserRouter([
    {
      element: <Home />,
      path: ROUTES.HOME
    }
  ])

  return <Provider router={routerConfig} />
}
