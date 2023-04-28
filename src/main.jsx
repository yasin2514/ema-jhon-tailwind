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
import SignUp from './components/SignUp'
import AuthProviders from './providers/AuthProviders'
import PrivateRoute from './route/PrivateRoute'
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
        element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'checkOut',
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders><RouterProvider router={router}></RouterProvider></AuthProviders>
  </React.StrictMode>,
)
