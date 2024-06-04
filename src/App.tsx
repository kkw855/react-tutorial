import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '@/pages/Home.tsx'
import Products from '@/pages/Products.tsx'
import ButtonPage from '@/pages/ButtonPage.tsx'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/products', element: <Products /> },
  { path: '/button', element: <ButtonPage /> }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
