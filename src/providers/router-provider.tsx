import { createBrowserRouter, Outlet, RouterProvider as Provider, RouteObject } from 'react-router-dom'
import { ROUTES } from '@constants/routes'
import { Home } from '@pages/home'
import { InternalError } from '@pages/internal-error'
import { ListCosts } from '@pages/list-costs'
import { ListCategory } from '@pages/list-category'
import { CreateCost } from '@pages/create-cost'
import { Navbar } from '@components/navbar'
import { Login } from '@pages/login'

const HOME_ROUTER: RouteObject = {
  element: <Home />,
  children: [
    {
      index: true,
      element: <ListCategory />
    },
    {
      path: 'list-costs/:id',
      element: <ListCosts />
    }
  ]
}

const LOGIN_ROUTER: RouteObject = {
  element: <Login />,
  index: true,
  path: '/'
}

const CREATE_COST_ROUTER: RouteObject = {
  element: <CreateCost />,
  path: 'create-cost'
}

const INTERNAL_ERROR_ROUTER: RouteObject = {
  element: <InternalError />,
  path: ROUTES.INTERNAL_ERROR
}

const MANAGEMENT_ROUTER: RouteObject = {
  element: (
    <div>
      <Navbar />
      <Outlet />
    </div>
  ),
  path: 'gerenciamento',
  children: [HOME_ROUTER, CREATE_COST_ROUTER]
}

const routerConfig = createBrowserRouter([LOGIN_ROUTER, MANAGEMENT_ROUTER, INTERNAL_ERROR_ROUTER])
export const RouterProvider = () => {
  return <Provider router={routerConfig} />
}
