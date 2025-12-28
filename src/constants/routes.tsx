import { Navbar } from '@components/ui/navbar'
import { CreateCategory } from '@pages/create-category'
import { CreateCost } from '@pages/create-cost'
import { Home } from '@pages/home'
import { InternalError } from '@pages/internal-error'
import { ListCategory } from '@pages/list-category'
import { ListCosts } from '@pages/list-costs'
import { Login } from '@pages/login'
import { UpdateCategory } from '@pages/update-category'
import { UpdateCost } from '@pages/update-cost'
import { Outlet, RouteObject } from 'react-router-dom'

export const HOME_ROUTER: RouteObject = {
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

export const LOGIN_ROUTER: RouteObject = {
  element: <Login />,
  index: true,
  path: '/'
}

export const CREATE_COST_ROUTER: RouteObject = {
  element: <CreateCost />,
  path: 'create-cost'
}

export const CREATE_CATEGORY_ROUTER: RouteObject = {
  element: <CreateCategory />,
  path: 'create-category'
}

export const UPDATE_CATEGORY_ROUTER: RouteObject = {
  element: <UpdateCategory />,
  path: 'update-category/:id'
}

export const UPDATE_COST_ROUTER: RouteObject = {
  element: <UpdateCost />,
  path: 'update-cost/:id'
}

export const INTERNAL_ERROR_ROUTER: RouteObject = {
  element: <InternalError />,
  path: '/internal-error'
}

export const MANAGEMENT_ROUTER: RouteObject = {
  element: (
    <div>
      <Navbar />
      <Outlet />
    </div>
  ),
  path: 'gerenciamento',
  children: [HOME_ROUTER, CREATE_COST_ROUTER, CREATE_CATEGORY_ROUTER, UPDATE_CATEGORY_ROUTER, UPDATE_COST_ROUTER]
}
