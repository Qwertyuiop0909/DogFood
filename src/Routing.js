import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { UserList } from './components/UserList/UserList'
import { UserEdit } from './components/UserEdit/UserEdit'
import { Index } from './components/Index/Index'
import { Goods } from './components/Goods/Goods'
import { ModalLogIn } from './components/ModalLogIn/ModalLogIn'
import { Basket } from './components/Basket/Basket'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'users/init',
        element: <ModalLogIn />,
      },
      {
        path: 'users/:userid/',
        element: <UserList />,
      },
      {
        path: 'users/:userid/edit/',
        element: <UserEdit />,
      },
      {
        path: 'goods/',
        element: <Goods />,
      },
      {
        path: 'goods/basket',
        element: <Basket />,
      },
    ],
  },
])
