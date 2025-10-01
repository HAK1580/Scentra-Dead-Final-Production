import { useState } from 'react'
import './index.css'
import React from 'react'
import HomePage from "./pages/HomePage/"
import Shopping from "./pages/ShoppingPage"
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import CheckOut from './pages/CheckoutPage'
import ProductDetailPage from './pages/ProductDetailPage'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/shopping",
      element: <Shopping />
    },
    {
      path: "/checkout",
      element: <CheckOut />
    },
    {
      path: "/product-detail/:id",
      element: <ProductDetailPage />
    },
  ])



  return (

    <>
      <RouterProvider router={router} />
      {/* <Shopping /> */}

    </>
  )

}

export default App

