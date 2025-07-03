import { createBrowserRouter, Outlet, RouterProvider as Provider } from 'react-router-dom'
import { ROUTES } from '@constants/routes'
import { Home } from '@pages/home'
import { InternalError } from '@pages/internal-error'
import { ListCosts } from '@pages/list-costs'
import { ListCategory } from '@pages/list-category'
import { CreateCost } from '@pages/create-cost'
import { Navbar } from '@components/navbar'

export const RouterProvider = () => {
  const routerConfig = createBrowserRouter([
    {
      element: (
        <div>
          <Navbar />
          <Outlet />
        </div>
      ),
      path: '/',
      children: [
        {
          element: <Home />,
          path: ROUTES.HOME,
          children: [
            {
              path: '/',
              element: <ListCategory />
            },
            {
              path: '/list-costs/:id',
              element: <ListCosts />
            }
          ]
        },
        {
          element: <CreateCost />,
          path: '/create-cost'
        },
        {
          element: <InternalError />,
          path: ROUTES.INTERNAL_ERROR
        }
      ]
    }
  ])

  return <Provider router={routerConfig} />
}
