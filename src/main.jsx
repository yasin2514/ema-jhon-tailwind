import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Shop from './components/Shop'
import Order from './components/Order'
import Inventory from './components/Inventory'
import Login from './components/Login'
import cartProductsLoader from './loders/cartProductLoader'
import CheckOut from './components/CheckOut'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>,
        loader: () => fetch('products.json')
      },
      {
        path: 'order',
        element: <Order></Order>,
        loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'checkOut',
        element: <CheckOut></CheckOut>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
