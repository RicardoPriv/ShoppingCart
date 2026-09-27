import { createBrowserRouter, Outlet } from "react-router-dom"
import HomePage from "../components/pages/home"
import ShopPage from "../components/pages/shop"
import Navbar from "../components/layout/navbar"

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
