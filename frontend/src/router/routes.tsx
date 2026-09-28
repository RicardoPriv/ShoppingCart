import { createBrowserRouter, Outlet } from "react-router-dom"
import HomePage from "../components/pages/home"
import ShopPage from "../components/pages/shop"
import Navbar from "../components/layout/navbar"

export const router = createBrowserRouter([
  {
    path: "/",
    element:
      <>
        <Navbar />
        <Outlet />
      </>,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "shop",
        element: <ShopPage />
      }
    ]
  }
])
