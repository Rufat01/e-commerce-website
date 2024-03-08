import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./pages/AppLayout"
import Shoes from "./pages/Shoes"
import Cart from "./pages/Cart"
import Favorite from "./pages/Favorite"
import Payment from "./pages/Payment"
import Home from "./pages/Home"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/shop',
        element: <Shoes />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/favorites',
        element: <Favorite />
      },
      {
        path: '/payment',
        element: <Payment />
      }
    ]
  }
])

const App = () => {
  return (
     <RouterProvider router={router} />
  )
}


export default App
