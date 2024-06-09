import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '@/pages/Home.tsx'
import Products from '@/pages/Products.tsx'
import ButtonPage from '@/pages/ButtonPage.tsx'
import RootLayout from '@/pages/Root.tsx'
import ErrorPage from '@/pages/Error.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/button', element: <ButtonPage /> },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
